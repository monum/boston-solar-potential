import * as PVSavings from "vslr-savings-calculator";

/**
 * Object that tracks the calculations from NREL.
 */
export default class SolarFinancingCalculator {
  
  constructor(lat, lng) {
    this.NRELKey = "BefAcwRk9eNzI7rFxc9GdyM2nmjWzmBSZMVn7b2g";
    console.log(lng);
    console.log(lat);

    //Electricity Rates and Usage
    this.avgRetailElectricity = 0.149;
    this.netMeteringRate = 0.219;
    this.annualResRate = 6893;

    //Solar PV Production and Costs
     /**
     * For an explanation of the results the PVWatts API returns, go here:
     * https://developer.nrel.gov/docs/solar/pvwatts/v6/#output-fields
     * 
     * The default inputs are the following:
     *      PVWatts defaults
     * 
     * The returned values being used are the following:
     *      dc_annual ---- annual Generation
     *      dc_monthly ---- monthly generation
     */
    this.PVWattsResults = this.setNRELResults(lat, lng);
    this.installationSize = 5;
    this.upfrontCostperWatt = 3.15
    this.totalUpfrontCost = (1000*this.installationSize)*(this.upfrontCostperWatt)


    //Non-Solar PV Upfront Costs
    this.isReroofingNeeded = false;
    this.batteryStorageCost = 10500;
    this.isBatteryStorageNeeded = false;
    this.reroofingCost = 8300;


    this.totalCost = null;
    this.upfrontIncentives = null;
    this.ongoingIncentives = null;
    this.inflationRate = 2.1;
  }

  /**
   * The owner of renewable energy systems get a 15% coverage of the system cost
   * against his or her MA income tax with a $1000 maximum credit amount.
   * http://programs.dsireusa.org/system/program/detail/144
   * @param {*} income
   * @returns
   */
  getIncomeTaxCredit(income) {
    if (building.propertyType != "CD") {
      return;
    }

    return solarImpact.baseCost * 0.74 > 1000
      ? 1000
      : solarImpact.baseCost * 0.74;
  }

  export async setNRELResults(lat, lng, systemCapacity='5'){
    console.log(lat)
    console.log(lng)
    const res = await fetch(
      `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${this.NRELKey}&lat=${lat}&lon=${lng}&system_capacity=${systemCapacity}&azimuth=180&tilt=40&array_type=1&module_type=1&losses=14.08`
      );
      
      const data = await res.json();
      
      this.PVWattsResults = data.value;
      console.log(this.PVWattsResults.station_info.lat)
      console.log(this.PVWattsResults.station_info.lon)
  }

  /**
   * Estimates the energy production and cost of energy of
   * grid-connected photovoltaic (PV) energy systems throughout the world.
   * It allows homeowners, small building owners, installers and manufacturers to
   * easily develop estimates of the performance of potential PV installations.
   * @returns https://developer.nrel.gov/docs/solar/pvwatts/v6/#output-fields
   */
  getNRELResults() {

    return NRELoutput;
  }

  /**
   * Don’t forget about federal solar incentives! With the Investment Tax Credit (ITC),
   * you can reduce the cost of your PV solar energy system by 26 percent if you
   * buy the system without a loan.
   * @param {*} upfrontCost
   * @returns
   */
  getFederalSolarIncentive(upfrontCost) {
    return solarImpact.baseCost * 0.26;
  }
}
