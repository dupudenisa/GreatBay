const mySql = require("mysql");

const connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password:"",
   database: "great_baydb" 
})

connection.connect(function(err){
    if(err) throw err;
    console.log("connected");
    selectAll();
    createProduct();
    deleteProduct();
});

function createUser(){
    console.log("Inserting a new user...\n");
    const query = connection.query(
        "INSERT INTO user SET?",
        {
            id: "",
            username: "",
            password:""

    },
    function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + "user inserted\n");
        updateUser();
    }
    );
    console.log(query.sql);
}


function createItem(){
    console.log("Inserting a new item...\n");
    const query = connection.query(
        "INSERT INTO user SET?",
        {
            id: "",
            price: "",
            name:"",
            description:""

    },
    function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + "user inserted\n");
        updateItem();
    }
    );
    console.log(query.sql);
}



function createBid(){
    console.log("Inserting a new bid...\n");
    const query = connection.query(
        "INSERT INTO user SET?",
        {
            item: "",
            username: "",
            bid:"",
            bidId:""

    },
    function (err, res) {
        if (err) throw err;
        console.log(res.affectedRows + "user inserted\n");
        updateBid();
    }
    );
    console.log(query.sql);
}


function updateItem() {
    
    const query = connection.query(
      "UPDATE user SET ? WHERE ?",
      [
        {
          price: 100
        },
        {
          Item: ""
        }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " item updated!\n");
        
        deleteItems();
      }
    );
    }

    function updateBid() {
    
        const query = connection.query(
          "UPDATE user SET ? WHERE ?",
          [
            {
              bid: 100
            },
            {
              bidid: ""
            }
          ],
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " item updated!\n");
            
            deleteItems();
          }
        );
        }