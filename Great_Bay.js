const inquirer = require("inquirer")
const mysql = require("mysql")




const auction = () => {
    inquirer
        .prompt(
            {
                type: "list",
                message: "Are you trying to make a POST or make a BID",
                choices: ["POST", "BID"],
                name: "pOrB",

            }
        )
        .then(function(res) {
            if (res.pOrb === "POST") {

                inquirer
                    .prompt(
                        {
                            type: "input",
                            message: "What is the item that you would like to post",
                            name: "itemName",
                        }, {
                            type: "input",
                            message: "In what catagory would you like to post your item",
                            name: "catagory",
                        }, {
                            type: "input",
                            message: "What would you like to set the satring bid at",
                            name: "startPrice",
                        }
                    )
                    .then(function(res) {

                        const post = () => {
        
                        }
                    })
            }
            else if (res.pOrb === "BID") {

                inquirer
                    .prompt(
                        {
                            type: "input",
                            message: "What is the item that you are looking to bid on.",
                            name: "itemBid",
                        }, {
                            type: "input",
                            message: "How much are you looking to bit.",
                            name: "bid",
                        }
                    )
                    .then(function(res) {

                        const bid = () => {

                        }
                    })

                
            }
        })

};



const updateBid = () => {

}

const createItem = () => {

}