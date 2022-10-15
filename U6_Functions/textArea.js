// Rectangle elements
let elRectLength = document.getElementById("rect-length")
let elRectWidth = document.getElementById("rect-width")
let elRectArea = document.getElementById("rect-area")
let btnCalcRectArea = document.getElementById("calc-rect-area")

btnCalcRectArea.onclick = function (){
    let rectLength = elRectLength.value;
    let rectWidth = elRectWidth.value;
    let rectArea = rectLength*rectWidth;
    elRectArea.value = rectArea;
}

// Circle elements
let elCircRadius = document.getElementById("circ-radius")
let elCircArea = document.getElementById("circ-area")
let btnCalcCircArea = document.getElementById("calc-circ-area")

btnCalcCircArea.onclick = function (){
    let circRadius = elCircRadius.value;
    let circArea = circRadius**2*Math.PI;
    elCircArea.value = circArea;
}

// Rectangular Prism Elements
let elPrismLength = document.getElementById("prism-length")
let elPrismWidth = document.getElementById("prism-width")
let elPrismHeight = document.getElementById("prism-height")
let elPrismVolume = document.getElementById("prism-volume")
let btnCalcPrismVolume = document.getElementById("calc-prism-volume")

btnCalcPrismVolume.onclick = function (){
    let prismLength = elPrismLength.value;
    let prismWidth = elPrismWidth.value;
    let prismHeight = elPrismHeight.value;
    let prismVolume = prismLength*prismWidth*prismHeight;
    elPrismVolume.value = prismVolume;
}

// Cone Elements
let elConeRadius = document.getElementById("cone-radius")
let elConeHeight = document.getElementById("cone-height")
let elConeVolume = document.getElementById("cone-volume")
let btnCalcConeVolume = document.getElementById("calc-cone-volume")

btnCalcConeVolume.onclick = function (){
    let coneRadius = elConeRadius.value;
    let coneHeight = elConeHeight.value;
    let coneVolume = coneRadius**2*coneHeight*Math.PI/3;
    elConeVolume.value = coneVolume;
}