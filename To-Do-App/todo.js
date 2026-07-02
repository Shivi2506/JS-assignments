let headbox = document.getElementById("head-box");
headbox.classList = "text-6xl italic bold text-white text-center bg-blue-800 m-2 p-10";
headbox.innerText = "....TO-DO-LIST....";
let inputbox = document.getElementById("input-box");
inputbox.classList = "flex flex-col m-5 border bg-blue-200 rounded-2xl p-5";
inputbox.innerHTML =`
<input type="text" class ="text-3xl m-5 border bg-white" placeholder="Enter Title" id="title-box">
<textarea placeholder="Enter Description" class="text-2xl bg-white m-5 border " id="description-box"></textarea>
<button class="border bg-blue-600 text-white text-4xl p-6 w-90 rounded-xl ml-100" onclick="addTask()">Add to List</button>
`;
let outputbox = document.getElementById("output-box");
outputbox.innerHTML = `<h1 class="italic text-2xl bg-blue-300 w-70 p-5 m-3"> Task's To-Do</h1>`;
outputbox.classList ="flex flex-col m-5 border rounded-xl p-5";

function addTask(){
    let titlebox = document.getElementById("title-box");
    let descriptionbox = document.getElementById("description-box");
    let titleboxvalue = titlebox.value;
    let descriptionboxvalue = descriptionbox.value;
    titlebox.value = "";
    descriptionbox.value = "";
    if(titleboxvalue == "" || descriptionboxvalue == ""){
        Swal.fire({
  icon: "error",
  title: "Warning",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Please Enter a Valid Tite and Description</a>"
});
return;
    }
    displaytask(titleboxvalue.trim(), descriptionboxvalue.trim());
}

function displaytask(titlevalue, descriptionvalue){
    let newtask = document.createElement("div");
    newtask.classList = "border-2 border-blue-600 p-3 bg-blue-200 rounded-sm m-3";
    let id = new Date().getTime();
    newtask.id=id;
    newtask.innerHTML =`<div class="flex">
    <div>
    <p class = "text-4xl bold border-blue-500 m-1 bg-blue-500 w-280 bold text-center text-white">${titlevalue}</p>
    <p class = "text-2xl border m-1">${descriptionvalue}</p></div>
    <div class="justify-end flex p-2">
    <button class="bg-green-500 text-white text-xl p-2 m-1 rounded" id="tick-btn" onclick="addcolorgreen()">✓<button>
    <button class="bg-red-500 text-white p-2 text-xl rounded m-1" id="cross-btn" onclick="addcolorred()">✕<button>
    </div></div>
    <button class="rounded bg-red-600 text-white text-2xl m-1 p-2" onclick="deletetask(${id})">DELETE</button>
    `;
    function addcolorred(){
    let tick = document.getElementById("cross-btn");
    tick.addEventListener("click", ()=>{
     newtask.classList.remove("bg-blue-200");
     newtask.classList.add("bg-red-200");
    });
}
function addcolorgreen(){
    let tick = document.getElementById("tick-btn");
    tick.addEventListener("click", ()=>{
     newtask.classList.remove("bg-blue-200");
     newtask.classList.add("bg-green-200");
    });
}
    outputbox.appendChild(newtask);
}

function deletetask(id){
    let task = document.getElementById(id);
    task.remove();
}
