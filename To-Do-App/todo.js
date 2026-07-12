let headbox = document.getElementById("head-box");
headbox.classList = "text-6xl italic bold text-white text-center bg-blue-800 m-2 p-10";
headbox.innerText = "....TO-DO-LIST....";
let inputbox = document.getElementById("input-box");
inputbox.classList = "flex flex-col m-5 border bg-blue-200 rounded-2xl p-5";
inputbox.innerHTML =`
<input type="text" class ="text-3xl w-200 h-20 m-5 border bg-white" placeholder="Enter Title" id="title-box">
<textarea placeholder="Enter Description" class="text-2xl bg-white w-200 h-20 m-5 border " id="description-box"></textarea>
<button class="border bg-blue-600 text-white text-4xl p-6 w-90 rounded-xl ml-50" onclick="addTask()">Add to List</button>
`;
let j=0;

let icon1 = document.createElement("div");
icon1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>`;
let icon2 = document.createElement("div");
icon2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-vault-icon lucide-vault"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><path d="m7.9 7.9 2.7 2.7"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><path d="m13.4 10.6 2.7-2.7"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><path d="m7.9 16.1 2.7-2.7"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><path d="m13.4 13.4 2.7 2.7"/><circle cx="12" cy="12" r="2"/></svg>`;
let del = document.createElement("div");
del.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
let edit = document.createElement("div");
edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-sparkles-icon lucide-pencil-sparkles"><path d="M10 3H8"/><path d="m15.007 5.008 3.987 3.986"/><path d="M20 15v4"/><path d="M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="M22 17h-4"/><path d="M4 5v4"/><path d="M6 7H2"/><path d="M9 2v2"/></svg>`;

let outputbox = document.getElementById("output-box");
outputbox.innerHTML = `<h1 class="italic text-2xl bg-blue-400 w-60 p-5 m-3"> Task's To-Do</h1>`;
outputbox.classList ="flex flex-col m-5 border rounded-xl p-5 h-130 overflow-y-scroll ";

let tasks = getlocal();
    for (let i=0;i<tasks.length;i++){
        displaytask(tasks[i].title, tasks[i].description, tasks[i].date, tasks[i].index);
    }


function savelocal(tasks){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getlocal(){
    let taskstring = localStorage.getItem("tasks");
    if (taskstring == null)return[];
    return JSON.parse(taskstring);
}


function addTask(){
    let titlebox = document.getElementById("title-box");
    let descriptionbox = document.getElementById("description-box");
    let titleboxvalue = titlebox.value;
    let descriptionboxvalue = descriptionbox.value;
    let datestring = new Date().toLocaleString();
    let index = j++;
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
    displaytask(titleboxvalue.trim(), descriptionboxvalue.trim(), datestring, index);
    let task = {"title":titleboxvalue, "description":descriptionboxvalue, "date":datestring, "index":index};
    console.log(task);
    tasks.push(task);
    savelocal(tasks);
}


function displaytask(titlevalue, descriptionvalue, date, index){

    let newtask = document.createElement("div");
    newtask.classList = "border-2 border-blue-600 w-100 p-3 bg-blue-200 rounded-sm m-3";
    let id = new Date().getTime();
    newtask.id=id;
    let btnid2 = "btn2" + id;
    newtask.innerHTML =`<div class="flex flex-col">
    <p class = "text-4xl bold border-blue-500 m-1 bg-blue-500 bold text-center text-white" id="etitle" >${titlevalue}</p>
    <p class = "text-2xl border m-1" id="edesc">${descriptionvalue}</p>
    <p class = "text-xl text-gray-800 m-1 bold">${date}</p>
    <div class = "flex">
    <button id="${btnid2}" class="bg-blue-700 border-blue-800 border-4 text-white p-2 m-2" onclick="changeicon(${id},'${btnid2}')">${icon1.innerHTML}</button>
    <button class="rounded bg-red-600 text-white border-4 border-blue-800 m-2  p-2" onclick="deletetask(${id}, ${index})">${del.innerHTML}</button>
    <button class="rounded bg-yellow-300 border-4 border-blue-800 m-2  p-2" onclick="edittask(${id}, ${index})">${edit.innerHTML}</button>
    </div>
    `;
    outputbox.appendChild(newtask);
}

function deletetask(id,index){
    let task = document.getElementById(id);
    task.remove();
    tasks.splice(index,1);
    savelocal(tasks);
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


function edittask(id, index) {
    let newTitle = prompt("✏️ Edit Title", tasks[index].title);
     if (newTitle == null) return;
     while (newTitle.trim() == "") {
        newTitle = prompt("Title cannot be empty.\nEnter New Title", tasks[index].title);

        if (newTitle == null) return;
    }
    let newDescription = prompt("📝 Edit Description", tasks[index].description);
      if (newDescription == null) return;

    while (newDescription.trim() == "") {
        newDescription = prompt("Description cannot be empty.\nEnter New Description", tasks[index].description);

        if (newDescription == null) return;
    }
    let confirmEdit = confirm("Do you want to save the changes?");
    if (!confirmEdit) return;
    tasks[index].title = newTitle;
    tasks[index].description = newDescription;
    tasks[index].date = new Date().toLocaleString();   // Update edit time (optional)
    savelocal(tasks);
    alert("✅ Task Updated Successfully!");
    location.reload();
}