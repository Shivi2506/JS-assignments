let books=[
  { bookId: 101, title: "B Programming", author: "Dennis Ritchie", category: "Programming", copies: 5 },
  { bookId: 102, title: "Clean Code", author: "Robert C. Martin", category: "Programming", copies: 8 },
  { bookId: 103, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", copies: 6 },
  { bookId: 104, title: "Effective Java", author: "Joshua Bloch", category: "Programming", copies: 4 },

  { bookId: 105, title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database", copies: 7 },
  { bookId: 106, title: "SQL Fundamentals", author: "John J. Patrick", category: "Database", copies: 5 },
  { bookId: 107, title: "Learning MySQL", author: "Seyed Tahaghoghi", category: "Database", copies: 6 },
  { bookId: 108, title: "MongoDB Basics", author: "Kristina Chodorow", category: "Database", copies: 4 },

  { bookId: 109, title: "Engineering Mathematics", author: "B.S. Grewal", category: "Mathematics", copies: 10 },
  { bookId: 110, title: "Discrete Mathematics", author: "Kenneth Rosen", category: "Mathematics", copies: 8 },
  { bookId: 111, title: "Linear Algebra", author: "Gilbert Strang", category: "Mathematics", copies: 2 },
  { bookId: 112, title: "Calculus", author: "James Stewart", category: "Mathematics", copies: 7 },

  { bookId: 113, title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Network", copies: 6 },
  { bookId: 114, title: "Data Communications and Networking", author: "Behrouz Forouzan", category: "Network", copies: 5 },
  { bookId: 115, title: "Network Security Essentials", author: "William Stallings", category: "Network", copies: 4 }
];

//TASK1
function display_books(){
    let len=books.length;
  for(let i=0;i<len;i++){
console.log("Book-Id: ", books[i].bookId);
console.log("Title: ",books[i].title);
console.log("Author: ", books[i].author);
console.log("Category: ",books[i].category);
console.log("Copies: ",books[i].copies);
console.log("---------------------------------------");
console.log(" ");
}
}

display_books();

//TASK2
function book_length() {
return books.length;
}
console.log("Total Books :", book_length());
console.log("---------------------------------------");

//TASK3
function availability(){
    let len=book_length();
    let cat={};
    for(let i=0;i<len;i++){
        if(books[i].copies<6){
            if(cat[books[i].category]){
                cat[books[i].category]++;
            }else{
                cat[books[i].category]=1;
            }
            //console.log(cat);
            //
            // console.log(" ");
        }
    }
    let keys= Object.keys(cat);
    let objlen = keys.length;
    for(let i=0;i<objlen;i++){
        console.log(keys[i], "-" , cat[keys[i]], "Copies");
    }
}
availability();
console.log("---------------------------------------");


//TASK4
function SearchById(id) {
let len= book_length();
let flag=0;
for(let i=0;i<len;i++){
    if(books[i].bookId==id){ flag=1;
        console.log("Book Found");
        console.log("Title: ",books[i].title);
        console.log("Author: ", books[i].author);
    }
}
if(flag==0){
    console.log("Book Not Found");
}
}
SearchById(112);
console.log("---------------------------------------");


//TASK5
function category_count(){
let len= book_length();
let cat={};
    for(let i=0;i<len;i++){
            if(cat[books[i].category]){
                cat[books[i].category]++;
            }else{
                cat[books[i].category]=1;
            }
        }
        let keys= Object.keys(cat);
    let objlen = keys.length;
    for(let i=0;i<objlen;i++){
        console.log(keys[i], ": " , cat[keys[i]]);
    }
}

category_count();
console.log("---------------------------------------");

//TASK6
function max_available(){
let len= book_length();
let max=books[0];
for(let i=0;i<len;i++){
    if(books[i].copies>max.copies) max=books[i];
}
return (max.title,"- ", max.copies,"Copies");
}
console.log("Most Available Book =",max_available());
console.log("---------------------------------------");


//TASK7
var a=0,l=0,c=0;
function availability_status(){
    let len= book_length();
    for(let i=0;i<len;i++){
        if(books[i].copies<3){c++;
            console.log(books[i].title," - ", "Critical");
        }
        else if(books[i].copies==3 || books[i].copies==4){l++;
            console.log(books[i].title," - ", "Limited");
        }
        else{a++;
            console.log(books[i].title," - ", "Available");
        }
    }
}
availability_status();
console.log("---------------------------------------");



//Task8

console.log("Available-",a);
console.log("Limited-",l);
console.log("Critical-",c);
console.log("---------------------------------------");



//Task9
function find_books(str){
    let len=books.length;
  for(let i=0;i<len;i++){
    if(books[i].category==str){
console.log("Book-Id: ", books[i].bookId);
console.log("Title: ",books[i].title);
console.log("Author: ", books[i].author);
console.log("Category: ",books[i].category);
console.log("Copies: ",books[i].copies);
console.log("---------------------------------------");
console.log(" ");
  }
}
}
console.log("Programming Books");
find_books("Programming");

//Task10
function lib_report(){
console.log("----------------LIBRARY REPORT--------------");
console.log("Total Books :", book_length());
console.log("Available-Books :",a);
console.log("Limited-Books :",l);
console.log("Critical-Books :",c);
console.log("Highest Copies Available :",max_available());
console.log("----------------END OF REPORT--------------");
}
lib_report();
console.log("---------------------------------------");

//Task11
let searchId = Number(prompt("Enter Book ID to search:"));
SearchById(searchId);
console.log("---------------------------------------");

//Task12
function DeleteById(del){
let found = false;

for(let i = 0; i < books.length; i++)
{
    if(books[i].bookId == del)
    {
        console.log("Book Deleted:");
        console.log(books[i]);

        books.splice(i,1);

        found = true;
        break;
    }
}

if(!found)
{
    console.log("Book Not Found");
}
}
let deleteId = Number(prompt("Enter Book ID to delete:"));
DeleteById(deleteId);
console.log("Total Books :", book_length());
console.log("---------------------------------------");
