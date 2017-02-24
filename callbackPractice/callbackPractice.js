/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the sayHi function that makes the code above work, 
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
*/


// 1. Write a function called first that returns the first item of the array using a callback function
function first(str,anon){
  return anon(str[0])
}
  // Code Here

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



// 2. Write a function called last which returns the last item of the array using a callback function.
function last(str, anon){
  return anon(str[str.length - 1])
}
  //Code Here

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



// 3. Write a function called multiply that multiplies two numbers using a callback function.
function multiply(num1, num2, anon){

  return anon(num1 * num2);
}
  //Code Here


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array. 
// If it does, return true using the callback, if not return false.
function contains(str, search, anon) {
  var newResult = false;
    for(var x=0;x<str.length;x++){
      if(search === str[x]){
        newResult = true;
        break;
      }
      else{newResult = false;
      }
    }
  return anon(newResult)

}
  //Code Here

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns 
// the callback function with the array of unique names.
  function uniq(names, anon){



    var newNames = names.filter(function(a, pos){
    return names.indexOf(a) == pos;
    });

    return anon(newNames);
  }
    //Code Here

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each item, use a callback 
// function to return the indices and item.
function each(arr, anon){
 for(var u in arr){
   anon(arr[u],arr.indexOf(u));
 }
}
    //Code Here 

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID 
// and returns that user.
function getUserById(arr, search, anon){
  for (var o in arr) {
      if(arr[o].id === search){

          return anon(arr[o]);
      }
  }
}
 //Code Here

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  }
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});