document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = 'ans.html'
})

let serial = 0
document.getElementById('btn-triangle').addEventListener('click', function () {

    serial += 1;
    const cardTriangle = document.getElementById('triangle-card').innerText
    const cardInputBase = document.getElementById('input-base').value;
    const cardInputHeight = document.getElementById('input-height').value;


    const triangleTotalArea = parseFloat(0.5 * cardInputBase * cardInputHeight).toFixed(2)
    inputField(cardInputBase, cardInputHeight)
    displayData(cardTriangle, triangleTotalArea)
})

document.getElementById('btn-rectangle').addEventListener('click', function (e) {

    serial += 1;
    const cardRectangle = e.target.parentNode.children[0].innerText
    const cardInputWidth = e.target.parentNode.children[2].value;
    const cardInputLength = e.target.parentNode.children[3].value;

    const rectangleTotalArea = parseInt(cardInputWidth * cardInputLength)

    inputField(cardInputWidth, cardInputLength)
    displayData(cardRectangle, rectangleTotalArea)
})

document.getElementById('btn-parallel').addEventListener('click', function (e) {

    serial += 1;
    const cardParallelgram = e.target.parentNode.children[0].innerText
    const cardInputParallelBase = e.target.parentNode.children[3].value;
    const cardInputParallelHeight = e.target.parentNode.children[4].value;

    const parallelTotalArea = parseInt(cardInputParallelBase * cardInputParallelHeight)
    
    inputField(cardInputParallelBase, cardInputParallelHeight)
    displayData(cardParallelgram, parallelTotalArea)
})

document.getElementById('btn-rhombus').addEventListener('click', function (e) {
    serial += 1;

    const cardRhombus = e.target.parentNode.children[0].innerText
    const cardRhombusBase = e.target.parentNode.children[3].value;
    const cardRhombusHeight = e.target.parentNode.children[4].value;

    const rhombusTotalArea = parseFloat(0.5 * cardRhombusBase * cardRhombusHeight)

    inputField(cardRhombusBase, cardRhombusHeight)
    displayData(cardRhombus, rhombusTotalArea)
})

document.getElementById('btn-pentagon').addEventListener('click', function (e) {

    serial += 1;
    const cardPentagon = e.target.parentNode.children[0].innerText
    const cardPentagonP = e.target.parentNode.children[3].value;
    const cardPentagonH = e.target.parentNode.children[4].value;

    const pentagonTotalArea = parseFloat(0.5 * cardPentagonP * cardPentagonH)

    inputField(cardPentagonP, cardPentagonH)
    displayData(cardPentagon, pentagonTotalArea)
})
document.getElementById('btn-ellipse').addEventListener('click', function (e){

    serial += 1;
    const cardEllipse = e.target.parentNode.children[0].innerText
    const cardEllipseP = e.target.parentNode.children[3].value;
    const cardEllipseH = e.target.parentNode.children[4].value;

    const ellipseTotalArea = parseFloat(3.14 * cardEllipseP * cardEllipseH).toFixed(2)

    
    inputField(cardEllipseP,cardEllipseH)
    displayData(cardEllipse, ellipseTotalArea)

})

// common functions----
function inputField(num1, num2){

}

 function displayData(cardName, cardResult){
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
   <td>${serial}</td>
   <td>${cardName}</td>
   <td>${cardResult}</td>

`
    container.appendChild(tr) 
}