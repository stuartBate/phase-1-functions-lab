// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(street){
    return Math.abs(hq - street);
}

function distanceFromHqInFeet(street){
    return Math.abs(hq - street) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0
    }else if (distance>= 400 && distance< 2000 ){
        return .02 * (distance - 400);
    }else if (distance >= 2000 && distance < 2500){
        return 25
    }else{
        return `cannot travel that far`;
    }
}