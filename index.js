const i= document.getElementById("MyD");
i.onmouseover=changeco;
i.onmouseout=changecos;
function changeco(){
    i.style.backgroundColor="lightblue";
}
function changecos(){
    i.style.backgroundColor="#5abe39a5";
}

const b = document.getElementsByClassName("meh");
function oc(ii) {
    ii.target.style.color = "black";
}
function oh(ij) {
    ij.target.style.color = "purple";
}
function ho(ik) {
    ik.target.style.color = "white";
}

for (let i = 0; i < b.length; i++) {
    b[i].addEventListener("click", oc);
    b[i].addEventListener("mouseover", oh);
    b[i].addEventListener("mouseout", ho);
}
