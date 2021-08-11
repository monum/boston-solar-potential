const NRELkey = "BefAcwRk9eNzI7rFxc9GdyM2nmjWzmBSZMVn7b2g";
const building = getBuilding();

const solarImpact = {
    baseCost: getNRELResults(),
    newCost: null,
}

function getIncomeTaxCredit(income){
    if (building.propertyType != 'CD'){
        return;
    }

    return solarImpact.baseCost*0.74 > 1000? 1000 : solarImpact.baseCost*0.74;


}

function getNRELResults(){
    const res = await fetch(`/api/pvwatts/v6.format
    ?lat=${building.lat}
    ?long=${building.long}
    ?system_size=${map.polygonDraw}`);

    const data = await res.json();
    const NRELoutput = data.value;

    return NRELoutput
}

function getFederalSolarIncentive(upfrontCost){
    return solarImpact.baseCost*0.74;
}


