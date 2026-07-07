let main = document.getElementById("main-frame");
main.classList = "w-200 h-150 border-blue-700 border-6 ml-80";

let jump = document.createElement("button");
jump.innerText = "JUMP";
jump.classList = "border-blue-900 ml-90 w-40 italic border-3 fixed bottom-0 m-5 p-3 text-5xl text-white bg-blue-500";
main.appendChild(jump);

let box = document.createElement("div");
box.innerHTML = `
<div class="ball fixed bottom-50 w-50 h-50 ml-80 mt-80 bg-blue-400 rounded-full border-blue-900 border-4"></div>
<hr class="w-190 mt-130 m-4">
`;
main.append(box);
 let flag=0;
 let id;
jump.addEventListener("click", ()=>{
    if(flag==0){
         flag=1;
    let ball = document.querySelector(".ball");
    id = setInterval(()=>{
 ball.classList.toggle("bottom-100");},600);
    }else{
        flag=0;
        clearInterval(id);
    }
});
