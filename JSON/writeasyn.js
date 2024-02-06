const fs= require("fs");

let student={
    name:"Mike",
    age:30,
    gender:"Other",
    department:"Plumber",
    car:"auto riksha"
};

let data= JSON.stringify(student,null,2);
//let data = JSON.stringify(student,['car'],2);
fs.writeFile("new student-3.json",data,(err)=>{
    if(err) throw err;
    console.log("Data written to file.");
});