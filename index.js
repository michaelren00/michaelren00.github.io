let name = 'Michael'; // this is how to declare a variable

const constantNumber = 20; // this is how to declare a constant

// object literal, key/value pairs
let person = {      
    name: 'Michael',
    age: 19,
    birthmonth: 'January'
}
person.birthmonth = 'March' // dot notation to correct my birthmonth
person['age'] = 20 // bracket notation to correct my age

// array, basically a python list
let friends = ['Amy', 'Justin', 'Michelle']; 

// functions
function findFriends(name) {  
    if (friends.includes(name)) {
        console.log('friend ' + name + ' found!');
    }
    else {
        console.log('friend ' + name + ' not found :(');
    }
}

findFriends('Nathan');

// First Javascript code
console.log(friends);

