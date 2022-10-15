var textBox = document.getElementById("bio")
textBox.addEventListener("mouseover",changecolor)
function changecolor(){
    textBox.style.color = "blue";
}
textBox.addEventListener("mouseout",changecolorback)
function changecolorback(){
    textBox.style.color = "white"
}