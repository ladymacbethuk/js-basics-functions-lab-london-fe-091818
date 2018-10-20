// Code your solution in this file!
//1
const Hq = 42

function distanceFromHqInBlocks(beginning) {
  if (beginning > Hq) {
    return beginning - Hq
  }
  return Hq - beginning
}


//2
function distanceFromHqInFeet(f) {
  const block = 264;
  return distanceFromHqInBlocks(f) * block
}


//3
function distanceTravelledInFeet(beginning, destination) {
  if (beginning < destination) {
    return (destination - beginning)*264
  }
  return (beginning - destination)*264
}


//4
function calculatesFarePrice (distanceTravelledInFeet) {
  if (distanceTravelledInFeet <= 400) {
    return 0;
  } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
    return (((distanceTravelledInFeet-400)*2)/100);
  } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}