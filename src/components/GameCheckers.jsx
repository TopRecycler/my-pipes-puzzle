import cPipe from '../pipez/cPipe.png';
import lPipe from '../pipez/lPipe.png';
import iPipe from '../pipez/iPipe.png';
import tPipe from '../pipez/3Pipe.png';
import qPipe from '../pipez/4Pipe.png';

function GameCheckers (props){
    // Check if the user won...
    return true//v3
}

// The object for the css style rule
const rotation = (pos) => {
    switch(pos) {
      case "90":
        return {transform: "rotate(90deg)"}
      case "180":
        return {transform: "rotate(180deg)"}
      case "270":
          return {transform: "rotate(270deg)"}
      default:
        return {transform: "rotate(0deg)"}
    }
  };

// The position for the state
const checkPos = (currentPos) =>{
    let nextPos = "";
    switch(currentPos) {
      case "0":
        nextPos = "90";
        break;
      case "90":
        nextPos = "180";
        break;
      case "180":
          nextPos = "270";
          break;
      case "270":
        nextPos = "0";
        break;
      default:
        nextPos = "0";
    }
    return nextPos
  }

// The css object for the images...
const checkImg = (currentImg) =>{
switch(currentImg) {
    case "c":
    return cPipe
    case "L":
    return lPipe
    case "I":
    return iPipe
    case "3":
    return tPipe
    case "4":
    return qPipe
    default:
    return "0"
}
}

  export { GameCheckers, checkImg, checkPos, rotation}  