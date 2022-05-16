const img_array=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
const array_length= img_array.length
let i=0

let set = setInterval(sliderFunction,5000)
// here , sliderFunction is a user defined function
// 5000-> 5 second

function sliderFunction(){
    i++
    i=i%array_length
    // i=0%5=0
    // i=1%5=1
    // i=2%5=2
    // i=3%5=3
    // i=4%5=4
    // i=5%5=5
    
    
    document.getElementById('image').src=`images/${img_array[i]}`
}


function next(){
    i++
    i=i%array_length
    document.getElementById('image').src=`images/${img_array[i]}`
    
}
function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    
    document.getElementById('image').src=`images/${img_array[i]}`
    
}


