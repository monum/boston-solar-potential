import {React, useContext, useState} from "react"
import SessionContext from "pages/sessionContext";
import LoanJS from "loanjs";

export default function SolarInputs(area){


const {geoData,
  setGeoData,
  propertyData,
  setPropertyData,
  solarSavings,
  setSolarSavings} = useContext(SessionContext);
/**
 * Calculates the total upfront cost of the system based on the pvSystemCostPerWatt
 * @param {*} roof 
 * @param {*} isBattery 
 * @returns 
 */
function calculatePVSystemCost(roof, isBattery=false) {
  return roof.systemSize * pvSystemCostPerWatt * 1000 + (isBattery ? storageCost : 0)
}

function calculateTaxDeductedSystemCost(baseCost,taxProgram = "Federal Tax Credit", income=0){
  return baseCost - calculateTaxCredit(baseCost)
}

function calculateTaxCredit(baseCost, income = 0, taxProgram="Federal Tax Credit"){

  switch(taxProgram){

    case "Federal Tax Credit":
      
    return taxReduction += baseCost*.26

    case "Residential Renewable Energy Income Tax Credit":
      
      var counter = 0;
      let incentiveAmount = income*.15;
      const distributed = []
           
           while ( counter < 3 ){
             
             if (incentiveAmount > 1000) {
               incentiveAmount-=1000;
               distributed[counter++] = 1000;
             }
     
             else if(incentiveAmount > 0){
               distributed[counter++] = incentiveAmount 
               incentiveAmount = 0;
             }
     
             else distributed[counter++] = 0;
           }
     
           return distributed
  }
}

function calculateLoan(years, downPayment, baseCost, interestRate){
  taxCredit = 3835;
  
  return LoanJS.Loan(baseCost-downPayment-taxCredit,
    years, 
    interestRate,
    false)
}


function calculateMultiYearSavings(years, roof) {
  const savings = []
  
  for(let year= 1; i < years; i++){
    if (year == 0) savings.push(0);
    else if (year == 1 ) savings.push(.978*roof.performanceMetrics.ac_annual * (propertyData.retailElectricityRate).toFixed(2) * (1+propertyData.yearlyElectricityRateIncrease));
    else{
      savings[year-1] * .995 
      * (propertyData.retailElectricityRate).toFixed(2) 
      * (1+propertyData.yearlyElectricityRateIncrease);
    }
  }

  return savings;
}

function calculateUpfrontNetCostSavings(taxDeductedCost, years, roof){
  const annualPVSavings = calculateMultiYearSavings(years, roof)
  annualPVSavings[0] = annualPVSavings[0] - taxDeductedCost;
  return annualPVSavings;
}

function calculateLoanNetCostSavings(years, roof, downPayment, baseCost, interestRate) {
  const netCostSavings = []
  
  const loan = calculateLoan(years, downPayment, baseCost, interestRate);
  const annualPVSavings = calculateMultiYearSavings(years, roof)

  for (let year = 0; year < years; year++){
    if (year == 0) netCostSavings.push(annualPVSavings[year])
    netCostSavings.push(annualPVSavings[year] - loan.installments[year-1].installment)
  }

  return netCostSavings;
}

function calculateAnnualPVProduction(roof, years){
  
  const production = []

  for (let year = 0; index < years; index++) {
    if (year == 0) production.push(0)
    else if (year ==1) production.push(roof.performanceMetrics.annual_ac*.978);
    else production.push(roof.performanceMetrics.annual_ac*.995)
  }

  return production

}

function calculatePPA(years, ppaRate, ppaEscalator, roof) {
  let production = calculateAnnualPVProduction(roof, years);
  
  ppaCosts = []

  for (let year = 0; year < years; year++) {
    if(year = 0)ppaCosts.push(0);
    else if(year = 1)ppaCosts.push(ppaRate*production[1])
    else ppaCosts.push(production[i]*Math.pow((1+ppaEscalator,year)*ppaRate))
  }

  return ppaCosts
}


function calculateNetPPASavings(years, ppaRate, ppaEscalator, roof){

  const netCostSavings = []
  const annualPVSavings = calculateMultiYearSavings(years, roof)
  const annualPPACost = calculatePPA(years, ppaRate, ppaEscalator, roof)

  for (let year = 0; year < years; year++) {
    netCostSavings.push(annualPPASavings[year] - annualPPACost[year])
  }

  return netCostSavings;
}

/**
 * Set the defaults for the property: area, system size, solar performance, 
 * @param {*} area 

 */
function initSolarSavings(area){
  console.log(geoData)
  const [lng, lat] = geoData != {} ? geoData.geometry.coordinates : [-71.0596, 42.3605];
    
    setPropertyData({
      pvSystemCostPerWatt: 2.86,
      retailElectricityRate: getUtilityRates(lng, lat),
      yearlyElectricityRateIncrease: .0352,
      area: area,
      performanceMetrics: getNRELResults(lng, lat, area),
      }
    )
}

function calculateNetSolarSavings(area){

  initSolarSavings(area);
  const roof = propertyData;

  const upfrontBase = calculatePVSystemCost(roof, true)
  const deductedBase = calculateTaxDeductedSystemCost(baseCost)

  const upfrontSavings = calculateUpfrontNetCostSavings(deductedBase, 25, roof);
  const loanSavings = calculateLoanNetCostSavings(25, roof, 0, upfrontBase, .05);
  const ppaSavings = calculateNetPPASavings(25, .20, .02, roof)

  setSolarSavings ({
    upfrontSavings : upfrontSavings,
    loanSavings: loanSavings,
    ppaSavings: ppaSavings,
  })

}

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full bg-blueGray-200">
      <div className="flex-auto p-5 lg:p-10">
        <h1 className="text-2xl font-semibold">Solar Savings</h1>
        <h2 className="text-lg font-semibold">Net 1-Year</h2>
        <p>Upfront {solarSavings.upfrontSavings[0]} | PPA: {solarSavings.ppaSavings[0]} | Loan: {solarSavings.loanSavings[0]} | </p>
        <h2 className="text-lg font-semibold">Net 25-Year</h2>
        <p>Upfront {} | PPA: {} | Loan: {} | </p>
      </div>
    </div>
  );
};


export async function getNRELResults(lng, lat, area=null) {
  const NRELKey = process.env.NREL_APIKEY;
  const systemCapacity = (area < 0 || null ) ? 4.5 : area*.15;
  
  const res = await fetch(
    `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${NRELKey}&lat=${lat}&lon=${lng}&system_capacity=${systemCapacity}&azimuth=180&tilt=40&array_type=1&module_type=1&losses=14.08`
  );

  const data = await res.json();
  console.log(data);
  return data;
}

export async function getUtilityRates(lng, lat) {
  const NRELKey = process.env.NREL_APIKEY;
  
  const res = await fetch(
    `https://developer.nrel.gov/api/utility_rates/v3.format?parameters=${NRELKey}&lat=${lat}&lon=${lng}`
  );

  const data = await res.json();
  console.log(data);
  return data;
}


