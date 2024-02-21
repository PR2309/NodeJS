const fs= require('fs');
fs.readFile('activity.json','utf8',( err,data) => {
    const activity = JSON.parse(data);
    activity.name = "Piyush";
    activity.section = "K22LQ";
    console.log(activity);
    const json = JSON.stringify(activity, null, 2);
    fs.writeFile("activity.json",json, "utf8", (err) => {
        if(err) throw err;
        console.log("File is Saved...");
    });
});