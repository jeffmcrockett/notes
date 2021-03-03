'use strict'

console.log("updating page...");

let getButton = document.getElementById('getUsersButton');
getButton.addEventListener('click', function(){
    console.log("Security Alert! Get Users button has been engaged!");

    console.log('Before calling API');

    let fetchResult = fetch("https://randomuser.me/api/");

    let jsonResponse = fetchResult.then(function(response) {
        console.log('Processing the results!', response);
        return response.json();

    })

    jsonResponse.then(function(json) {
        console.log(`Json has landed! The first person is ${json.results[0].name.first}`);
    })

    console.log('After calling API');

})

// assignment...
// display a list of users (10)
// show their names and pictures
// if user interacts with user through hover,
// .. show details such as address, email address, etc.
