function PopUp(){
    alert("You Have Clicked Me !!")
}
var btn = document.getElementById("myBtn")
btn.addEventListener("click",function(){
    btn.textContent="changed"
})
var id1 =document.getElementById("id1")
function changeColor(){
    id1.style.backgroundColor="yellow"


}
function hide(){
    id1.style.backgroundColor="white"
}