var db = new Dexie("test-database");

// Define Database Schema
db.version(1).stores({
    users: "++id, firstname,lastname"
});

// Open Database
db.open();  

function add_new(fname,lname){
    // Interact With Database
    db.transaction('rw', db.users, function () {
        // Let's add some data to db:
        insert_object = {firstname:fname,lastname:lname};
        db.users.add(insert_object);
    }).catch(function(err) {
        console.error(err.stack || err);
    });    
}

document.querySelector("button").addEventListener("click",function(e){
    add_new(document.getElementById("fname").value,document.getElementById("lname").value);
});

