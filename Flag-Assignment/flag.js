let mainframe= document.getElementById("main-frame");
mainframe.classList="flex flex-wrap p-10 m-10";

let flagbox= document.createElement("div");
 
let inputbox = document.createElement("input");
inputbox.classList= "h-10 bg-blue-200 m-5 p-3";

let searchbar = document.createElement("button");
searchbar.innerText="Search Country";
searchbar.classList="bg-blue-300 h-10 m-4 p-3 italic font-bold rounded";

//INDIAN FLAG
function getindiaflag(){
let indianflag= document.createElement("div");
indianflag.classList="border-3 w-51 h-37 m-5";

let orangestrap= document.createElement("div");
orangestrap.classList="h-12 w-50 bg-orange-600";

let whitestrap= document.createElement("div");
whitestrap.classList="h-12 w-50 justify-items-center";

let greenstrap= document.createElement("div");
greenstrap.classList="h-12 w-50 bg-green-600";

let bluedics= document.createElement("div");
bluedics.classList="h-12 w-12 bg-blue-700 rounded-full";

let flag1= document.createElement("h2");
flag1.innerText="INDIAN-FLAG";
flag1.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

whitestrap.appendChild(bluedics);
indianflag.appendChild(orangestrap);
indianflag.appendChild(whitestrap);
indianflag.appendChild(greenstrap);
indianflag.appendChild(flag1);
return indianflag;
}

//JAPAN FLAG
function getjapanflag(){
let japanflag = document.createElement("div");

let japanbg= document.createElement("div");
japanbg.classList ="border-3 w-55 h-41 justify-items-center content-center m-5";

let redDics = document.createElement("div");
redDics.classList = "bg-red-700 w-15 h-15 rounded-full";
japanbg.appendChild(redDics);

let flag2= document.createElement("h2");
flag2.innerText="JAPAN-FLAG";
flag2.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

japanflag.appendChild(japanbg);
japanflag.appendChild(flag2);
return japanflag;
}

//BANGLA FLAG
function getbanglaflag(){
let banflag = document.createElement("div");

let banbg= document.createElement("div");
banbg.classList ="border-3 w-55 h-41 justify-items-center content-center m-5 bg-green-800";

let red2dics = document.createElement("div");
red2dics.classList = "bg-red-700 w-15 h-15 rounded-full";
banbg.appendChild(red2dics);

let flag3= document.createElement("h2");
flag3.innerText="BANGLADESH-FLAG";
flag3.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

banflag.appendChild(banbg);
banflag.appendChild(flag3);
return banflag;
}

//RUSSIA FLAG
function getrussiaflag(){
let russiaflag = document.createElement("div");
russiaflag.classList = "border-3 w-51 h-37 m-5";

let white2Strap = document.createElement("div");
white2Strap.classList = "h-12 w-50 ";

let blueStrap = document.createElement("div");
blueStrap.classList = "h-12 w-50 bg-blue-600";

let redStrap = document.createElement("div");
redStrap.classList = "h-12 w-50 bg-red-500";

let flag4= document.createElement("h2");
flag4.innerText="RUSSIA-FLAG";
flag4.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";


russiaflag.appendChild(white2Strap);
russiaflag.appendChild(blueStrap);
russiaflag.appendChild(redStrap);
russiaflag.appendChild(flag4);
return russiaflag;
}

//NEW ZEALAND FLAG
function getnewflag(){
let newflag = document.createElement("div");

let newbg= document.createElement("div");
newbg.classList ="border-3 w-55 h-41 m-5 bg-blue-800";

let plus=document.createElement("div");

let vline=document.createElement("div");
vline.classList="bg-red-800 border-2 border-white w-5 h-15 ml-8";

let hline=document.createElement("div");
hline.classList="bg-red-800 border-2 border-white w-22 h-4 -mt-10";

let flag5= document.createElement("h2");
flag5.innerText="NEW-ZEALAND-FLAG";
flag5.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

plus.appendChild(vline);
plus.appendChild(hline);
newbg.appendChild(plus);
newflag.appendChild(newbg);
newflag.appendChild(flag5);
return newflag;
}

//DENMARK FLAG
function getdenflag(){
let denflag = document.createElement("div");

let denbg= document.createElement("div");
denbg.classList ="border-3 w-55 h-41 m-5 bg-orange-700";

let v2line=document.createElement("div");
v2line.classList="w-7 h-40 ml-8 bg-white";

let h2line=document.createElement("div");
h2line.classList="w-54 h-7 -mt-25 bg-white";

let flag6= document.createElement("h2");
flag6.innerText="DENMARK-FLAG";
flag6.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

denbg.appendChild(v2line);
denbg.appendChild(h2line);
denflag.appendChild(denbg);
denflag.appendChild(flag6);
return denflag;
}

//COLUMBIA FLAG
function getcolflag(){
let colflag = document.createElement("div");
colflag.classList = "border-3 w-51 h-41 m-5";

let yellowstrap = document.createElement("div");
yellowstrap.classList = "h-16 w-50 bg-yellow-500";

let blue2strap = document.createElement("div");
blue2strap.classList = "h-12 w-50 bg-blue-900";

let red2strap = document.createElement("div");
red2strap.classList = "h-12 w-50 bg-red-600";

let flag7= document.createElement("h2");
flag7.innerText="COLUMBIA-FLAG";
flag7.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";


colflag.appendChild(yellowstrap);
colflag.appendChild(blue2strap);
colflag.appendChild(red2strap);
colflag.appendChild(flag7);
return colflag;
}

//CANADA FLAG
function getcanflag(){
let canflag = document.createElement("div");

let canbgflag= document.createElement("div");
canbgflag.classList = "border-3 w-51 h-41 m-5 flex";

let red3strap = document.createElement("div");
red3strap.classList = "h-40 w-20 bg-red-600";

let white3strap = document.createElement("div");
white3strap.classList = "h-40 w-30 bg-white justify-items-center content-center";

let red4strap = document.createElement("div");
red4strap.classList = "h-40 w-20 bg-red-600";

let red3dics = document.createElement("div");
red3dics.classList = "bg-red-700 w-15 h-15 rounded-full";
white3strap.appendChild(red3dics);

let flag8= document.createElement("h2");
flag8.innerText="CANADA-FLAG";
flag8.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

canbgflag.appendChild(red3strap);
canbgflag.appendChild(white3strap);
canbgflag.appendChild(red4strap);
canflag.appendChild(canbgflag);
canflag.appendChild(flag8);
return canflag;
}

//GREECE FLAG
function getgreeceflag(){
let greeceflag = document.createElement("div");

let greecebg = document.createElement("div");
greecebg.classList = "border-2 w-52 h-37 m-5";

let bluestrip1 = document.createElement("div");
bluestrip1.classList="bg-blue-400 h-4";
    
let whitestrip2 = document.createElement("div");
whitestrip2.classList="bg-white h-4";

let bluestrip3 = document.createElement("div");
bluestrip3.classList="bg-blue-400 h-4";

let whitestrip4 = document.createElement("div");
whitestrip4.classList="bg-white h-4";

let firsthalf= document.createElement("div");
firsthalf.classList="relative m-0 p-0";
firsthalf.appendChild(bluestrip1);
firsthalf.appendChild(whitestrip2);
firsthalf.appendChild(bluestrip3);
firsthalf.appendChild(whitestrip4);

let plus3=document.createElement("div");
plus3.classList="bg-blue-400 absolute top-0 left-0 m-0 h-16";

let v3line=document.createElement("div");
v3line.classList="bg-white w-5 h-18 ml-8";

let h3line=document.createElement("div");
h3line.classList="bg-white w-22 h-4 -mt-10";

plus3.appendChild(v3line);
plus3.appendChild(h3line);
firsthalf.appendChild(plus3);

let bluestrip5 = document.createElement("div");
bluestrip5.classList="bg-blue-400 h-4";
    
let whitestrip6 = document.createElement("div");
whitestrip6.classList="bg-white h-4";

let bluestrip7 = document.createElement("div");
bluestrip7.classList="bg-blue-400 h-4";

let whitestrip8 = document.createElement("div");
whitestrip8.classList="bg-white h-4";

let bluestrip9 = document.createElement("div");
bluestrip9.classList="bg-blue-400 h-4";

let sechalf= document.createElement("div");
sechalf.appendChild(bluestrip5);
sechalf.appendChild(whitestrip6);
sechalf.appendChild(bluestrip7);
sechalf.appendChild(whitestrip8);
sechalf.appendChild(bluestrip9);

greecebg.appendChild(firsthalf);
greecebg.appendChild(sechalf);
greeceflag.appendChild(greecebg);

    
let flag9 = document.createElement("h2");
flag9.innerText = "GREECE-FLAG";
flag9.classList ="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";
greeceflag.appendChild(flag9);
return greeceflag;
}

//ITALY FLAG
function getitalyflag(){
let italyflag= document.createElement("div");

let italyflagbg= document.createElement("div");
italyflagbg.classList="border-3 w-52 h-37 m-5 flex";

let greenstrap_italy= document.createElement("div");
greenstrap_italy.classList="h-36 w-17 bg-green-600";

let whitestrap_italy= document.createElement("div");
whitestrap_italy.classList="h-36 w-17 bg-white";

let orangestrap_italy= document.createElement("div");
orangestrap_italy.classList="h-36 w-17 bg-orange-700";

let flag10= document.createElement("h2");
flag10.innerText="ITALY-FLAG";
flag10.classList="bg-blue-200 m-2 p-2 text-blue-800 text-justify font-bold italic underline text-center";

italyflagbg.appendChild(greenstrap_italy);
italyflagbg.appendChild(whitestrap_italy);
italyflagbg.appendChild(orangestrap_italy);
italyflag.appendChild(italyflagbg);
italyflag.appendChild(flag10);
return italyflag;
}



//-------------------***----------------------
mainframe.appendChild(inputbox);
mainframe.appendChild(searchbar);
mainframe.appendChild(flagbox);

let countryname="india";
flagbox.appendChild(getindiaflag());
searchbar.addEventListener("click", () =>{
    let country= inputbox.value;
    countryname= country;
    flagbox.innerHTML=" ";
    inputbox.value = "";
    if(countryname == "japan"){
        flagbox.appendChild(getjapanflag());
    }else if(countryname == "bangladesh"){
        flagbox.appendChild(getbanglaflag());
    }else if(countryname == "russia"){
        flagbox.appendChild(getrussiaflag());
    }else if(countryname == "new-zealand"){
        flagbox.appendChild(getnewflag());
    }else if(countryname == "denmark"){
        flagbox.appendChild(getdenflag());
    }else if(countryname == "columbia"){
        flagbox.appendChild(getcolflag());
    }else if(countryname == "canada"){
        flagbox.appendChild(getcanflag());
    }else if(countryname == "greece"){
        flagbox.appendChild(getgreeceflag());
    }else if(countryname == "italy"){
        flagbox.appendChild(getitalyflag());
    }else{
        flagbox.appendChild(getindiaflag());
    }
})
