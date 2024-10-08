import { requestFrame,canvasXY,beakerXY,shelfXY,weightmachineXY,gcrownXY,verticalsupportXY,horizontalrodXY,springbalanceXY,woodencubeXY,scrownXY,pointerXY,springXY,fontXY,fontXY1,bigbeakerXY,waterXY,waterXY1,waterXY2,waterXY3} from "./datafilesObjects.js";
import { gcrownMovesXY,scrownMovesXY } from "./new.js";
import { horizontalMovesY,waterRisesXY1,waterflows,waterflowsXY3,waterRisesXY,Validateform } from "./new1.js";
import {sbeakerMovesXY} from "./new2.js";

let MovesYCount=0;
let MovesXCount=0;
//let clicked = false;
requestFrame(draw);

function draw(){
    canvasXY.clearCanvas();
     beakerXY.renderBeaker();
    // fontXY1.renderfont1();
    bigbeakerXY.renderbigBeaker();
    fontXY.renderfont();
    weightmachineXY.renderweight();    
    pointerXY.renderPointer();
    horizontalrodXY.renderhorizontalrod();
    verticalsupportXY.renderverticalsupport();
    springXY.renderspring();
    springbalanceXY.renderspringbalance();
    waterXY.renderWater();
    waterXY1.renderWater1();
    scrownXY.renderscrown();
    gcrownXY.rendergcrown();
    shelfXY.rendershelf();
        //   waterXY2.renderWater2();
        //   waterXY3.renderWater3();
          woodencubeXY.rendercube();
          canvasXY.renderBg(); 
          requestFrame(draw);
}

const CopperCrown = document.getElementById("task1");
const IronCrown = document.getElementById("task2");
const StartExperiment = document.getElementById("task3a");
const ToMeasure = document.getElementById("task3b");
"changed 1 line"
const Submit = document.getElementById("task9");
const Material = document.getElementById("task10");
let instruction = document.querySelector('.btn-group-vertical');
let instructbefore = window.getComputedStyle(instruction, '::before');
let btn = [CopperCrown,IronCrown,StartExperiment,ToMeasure];
const controlAnimeBtnArray = [false, false, false, false];
const addClass = ['border-5', 'border-light'];
instruction.title='Select any one crown';

const controlAnimeBtnFunc = () => {
    for (let i = 0; i < btn.length; i++) {
      if (controlAnimeBtnArray[i] == false) {
        btn[i].disabled = true;
        for (let classes = 0; classes < addClass.length; classes++) {
          btn[i].classList.remove(addClass[classes]);
        }
      }
      else {
        for (let classes = 0; classes < addClass.length; classes++) {
          btn[i].classList.add(addClass[classes]);
          instruction.style.setProperty('--visibility','visible');
        }
        btn[i].disabled = false;
      }
    }
  }
  
  const disableBtnIndex = (index, bool) => {
    controlAnimeBtnArray[index] = bool;
  }

  
  // IronCrown.disabled=true;
  StartExperiment.disabled=true;
  ToMeasure.disabled=true;

CopperCrown.addEventListener("click", () => { //btn2 press Animation 2
 MovesXCount=0;
 MovesYCount=0;
 gcrownMovesXY();
 CopperCrown.disabled = true;
 IronCrown.disabled=true;
 instruction.style.setProperty('--visibility','hidden');
instruction.title='Click Start Experiment';

    setTimeout(() => {
      disableBtnIndex(2, true); //Enable next button with the rendering of next static animation
      controlAnimeBtnFunc(); //Activate the next button and add border
    }, 5600);

});



IronCrown.addEventListener("click", () => { //btn2 press Animation 2
    MovesXCount=0;
    MovesYCount=0;
    scrownMovesXY();
    CopperCrown.disabled = true;
    instruction.style.setProperty('--visibility','hidden');
    instruction.title='Click Start Experiment';
    setTimeout(() => {
      disableBtnIndex(2, true); //Enable next button with the rendering of next static animation
      controlAnimeBtnFunc(); //Activate the next button and add border
    }, 7600);
   });


StartExperiment.addEventListener("click", () => { //btn2 press Animation 2
 MovesXCount=0;
 MovesYCount=0;
 requestFrame(horizontalMovesY);
 StartExperiment.disabled = true;
 disableBtnIndex(2,false);
 instruction.style.setProperty('--visibility','hidden');
 instruction.title='Click Measure Readings';
 setTimeout(() => {
    disableBtnIndex(3, true); //Enable next button with the rendering of next static animation
    controlAnimeBtnFunc(); //Activate the next button and add border
  }, 9500);

});


ToMeasure.addEventListener("click", () => { //btn2 press Animation 2
 MovesXCount=0;
 MovesYCount=0;
 requestFrame(sbeakerMovesXY);
 ToMeasure.disabled = true;
 disableBtnIndex(3,false);
 instruction.style.setProperty('--visibility','hidden');
setTimeout(() =>{
  instruction.style.setProperty('--visibility','visible');
  instruction.title='Calculate and Enter Density';

},6000)
});

Submit.addEventListener("click",() => {
  Validateform();
});

// Material.addEventListener("click",() => {
//   Validatematerial();
// });