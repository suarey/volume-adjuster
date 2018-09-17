// Increase slider by 1
console.log('JS LOADED')



function volumeAdjuster() {
    let input = document.getElementById('start') 
    input.addEventListener('change', function () {
        document.getElementById('volume-level').innerHTML = this.value
    })
}
volumeAdjuster();

