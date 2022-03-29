// funtions to get array of active accounts
function activeAccount(){
const fs = require('fs');
// read JSON object from file
fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    // parse JSON object
    const user = JSON.parse(data.toString());
    //retrieving active accounts only 
    const active=user.filter(isactive);
    function isactive(status){
        return status = true;
    }
    // print JSON object
    console.log(isactive);
});
}


//functions to get highest balance
function highestBalance(){
    const fs = require('fs');
    // read JSON object from file
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // parse JSON object
        const user = JSON.parse(data.toInt());
        //retrieving balances
        const fields=user.balance;
        const highest = fields.map(highest)
        function highestNum(){
            return max(highest)
        }
        // print JSON object
        console.log(highestNum.toString);
    });
}


//functions to get friends of all accounts
function friends(){
    const fs = require('fs');
    // read JSON object from file
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // parse JSON object
        const user = JSON.parse(data.toString());
        //retrieving all friends accounts 
        const friends=user.friends.fields;
        // print JSON object
        console.log(friends);
    });
}

//functions to get account holder names
function accountNames(){
    const fs = require('fs');
    // read JSON object from file
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // parse JSON object
        const user = JSON.parse(data.toString());
        //retrieving active accounts only 
        const fields=user.name;
        // print JSON object
        console.log(fields);
    });
}