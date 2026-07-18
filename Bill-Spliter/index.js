let main= document.getElementById("main-frame");
main.classList="border-4 border-blue-800 m-5 p-5  flex  ";
let box1=document.createElement("div");
let box2=document.createElement("div");
box2.classList="ml-50 border-blue-600 border-4 p-5";
main.appendChild(box1);
main.appendChild(box2);

let heading = document.createElement("div");
heading.innerText=`BILL SPLITTER`;
heading.classList="bg-blue-200 text-5xl text-center m-2 p-4";
box1.appendChild(heading);

let input = document.createElement("input");
input.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded ";
input.placeholder="Enter Total Amount:";
box1.appendChild(input);

let innerbox1=document.createElement("div");
innerbox1.classList="flex p-3 m-3";
box1.appendChild(innerbox1);

let button1= document.createElement("button");
button1.innerText="5%";
button1.classList="text-2xl bg-blue-200 p-4 m-2";
innerbox1.appendChild(button1);
button1.addEventListener("click",()=>{
     div.innerHTML="";
    tipInput=document.createElement("input");
    tipInput.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded";
    tipInput.value="5";
    div.appendChild(tipInput);
})

let button2= document.createElement("button");
button2.innerText="10%";
button2.classList="text-2xl bg-blue-200 p-4 m-2";
innerbox1.appendChild(button2);
button2.addEventListener("click",()=>{
    div.innerHTML="";
    tipInput=document.createElement("input");
    tipInput.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded";
    tipInput.value="10";
    div.appendChild(tipInput);
})

let button3= document.createElement("button");
button3.innerText="25%";
button3.classList="text-2xl bg-blue-200 p-4 m-2";
innerbox1.appendChild(button3);
button3.addEventListener("click",()=>{
     div.innerHTML="";
    tipInput=document.createElement("input");
    tipInput.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded";
    tipInput.value="25";
    div.appendChild(tipInput);
})

let button4= document.createElement("button");
button4.innerText="50%";
button4.classList="text-2xl bg-blue-200 p-4 m-2";
innerbox1.appendChild(button4);
button4.addEventListener("click",()=>{
     div.innerHTML="";
    tipInput=document.createElement("input");
    tipInput.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded";
    tipInput.value="50";
    div.appendChild(tipInput);
})

let button5= document.createElement("button");
button5.innerText="Custom";
button5.classList="text-2xl bg-blue-200 p-4 m-2";
innerbox1.appendChild(button5);
button5.addEventListener("click",()=>{
    div.innerHTML="";
    tipInput=document.createElement("input");
    tipInput.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded";
    tipInput.placeholder="Enter Tip %";
    div.appendChild(tipInput);
})

let div= document.createElement("div");
box1.appendChild(div);

let input2 = document.createElement("input");
input2.classList="text-3xl m-5 p-4 text-white bg-blue-600 rounded ";
input2.placeholder="Enter Total no of Persons:";
box1.appendChild(input2);

let button= document.createElement("button");
button.innerText="Calulate";
button.classList="text-2xl text-white bg-blue-800 p-4 m-2";
box1.appendChild(button);

let totaltip= document.createElement("h1");
totaltip.innerText="Total Tip:";
box2.appendChild(totaltip);
totaltip.classList="text-5xl bold italic";

let display1 = document.createElement("div");
display1.classList="w-60 h-20 m-5 bg-blue-500 text-2xl text-white display1";
box2.append(display1);

let totalbill= document.createElement("h1");
totalbill.innerText="Total Bill Per Person:";
box2.appendChild(totalbill);
totalbill.classList="text-5xl bold italic";

let display2 = document.createElement("div");
display2.classList="w-60 h-20 m-5 bg-blue-500 text-2xl text-white";
box2.append(display2);

button.addEventListener("click", () => {
    let bill = Number(input.value);
    let persons = Number(input2.value);
    let tipPercent = Number(tipInput.value);
    if (bill <= 0 || persons <= 0 || isNaN(tipPercent)) {
        alert("Please enter valid values.");
        return;
    }
    let tipAmount = (bill * tipPercent) / 100;
    let totalBill = bill + tipAmount;
    let perPerson = totalBill / persons;
    display1.innerText = "₹ " + tipAmount.toFixed(2);
    display2.innerText = "₹ " + perPerson.toFixed(2);
});
