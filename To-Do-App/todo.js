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

let icon1 = document.createElement("div");
icon1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>`;
let icon2 = document.createElement("div");
icon2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-vault-icon lucide-vault"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><path d="m7.9 7.9 2.7 2.7"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><path d="m13.4 10.6 2.7-2.7"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><path d="m7.9 16.1 2.7-2.7"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><path d="m13.4 13.4 2.7 2.7"/><circle cx="12" cy="12" r="2"/></svg>`;

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
    let date = new Date().toLocaleString();
    newtask.id=id;
    let btnid = "btn" + id;
    let btnid2 = "btn2" + id;
    newtask.innerHTML =`<div class="flex flex-col">
    <p class = "text-4xl bold border-blue-500 m-1 bg-blue-500 bold text-center text-white">${titlevalue}</p>
    <p class = "text-2xl border m-1">${descriptionvalue}</p>
    <p class = "text-xl text-gray-800 m-1 bold">${date}</p>
    <div class = "flex">
    <button id="${btnid}" class="bg-red-600 text-white border-blue-800 border-4 text-xl m-2 p-2" onclick="change(${id},'${btnid}')">Undone</button>
    <button id="${btnid2}" class="bg-blue-700 border-blue-800 border-4 text-white p-2 m-2 w-20" onclick="changeicon(${id},'${btnid2}')">${icon1.innerHTML}</button>
    <button class="rounded bg-red-600 text-white text-2xl m-1 w-30 p-2" onclick="deletetask(${id})">DELETE</button>
    </div>
    `;
    outputbox.appendChild(newtask);
}

function deletetask(id){
    let task = document.getElementById(id);
    task.remove();
}

function change(id, btnid){
    let task = document.getElementById(id);
    let button = document.getElementById(btnid);
   if (button.innerText == "Undone"){
    task.classList.remove("bg-blue-200","bg-red-300");
    task.classList.add("bg-green-300");
    button.innerText = "Done";
    button.classList.remove("bg-red-600");
    button.classList.add("bg-green-600");
   }else{
      task.classList.remove("bg-green-300");
    task.classList.add("bg-red-300");
    button.innerText = "Undone";
    button.classList.remove("bg-green-600");
    button.classList.add("bg-red-600");
   }
}

function changeicon(id,btnid){
    let task = document.getElementById(id);
    let button = document.getElementById(btnid);
   if (task.classList.contains("bg-green-300")){
    task.classList.remove("bg-green-300");
    task.classList.add("bg-red-300");
    button.innerHTML = icon2.innerHTML;
     button.classList.remove("bg-green-600");
    button.classList.add("bg-red-600");
   }else{
      task.classList.remove("bg-red-300", "bg-blue-200");
    task.classList.add("bg-green-300");
    button.innerHTML = icon1.innerHTML;
    button.classList.remove("bg-red-600");
    button.classList.add("bg-green-600");
   }
}

