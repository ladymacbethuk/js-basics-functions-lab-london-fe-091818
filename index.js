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
function calculatesFarePrice (x, y) {
  let A = distanceTravelledInFeet(x, y);
  if (A <= 400) {
    return 0;
  } else if (A > 400 && A <= 2000) {
    return (((A-400)*2)/100);
  } else if (A > 2000 && A <2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}