'use strict'

console.log("updating page...");

let getButton = document.getElementById('getUsersButton');
getButton.addEventListener('click', function () {
    console.log("Security Alert! Get Users button has been engaged!");

    console.log('Before calling API');

    let fetchResult = fetch("https://randomuser.me/api/?results=10");

    let jsonResponse = fetchResult.then(function (response) {
        console.log('Processing the results!', response);
        return response.json();
    })

    jsonResponse.then(function(json) {
        // save the file as an array so we can then dig into it
        let addressBookArray = json.results;
        console.log(`Json has landed! There are ${json.results.length} people!`);
        // since we want everything to happen with just one click, we need to populate the data onto the screen as well
        // i'd like to do that in a new function, populateAddresses()
        populateAddresses(addressBookArray);
    })
})

let populateAddresses = function (addressBookArray2) {
    let myAddresses = document.getElementById("addresses");

    // find paths to all of the data and populate in order with a for loop
    for (let i = 0; i < addressBookArray2.length; i++) {
        let contactDiv = document.createElement("div");
        // I need each div to have a exclusive id, so add the index to the end with the loop
        contactDiv.id = "hoverContact" + i;
        myAddresses.appendChild(contactDiv);

        // Create a text node with first + last and add to div already created
        let firstName = addressBookArray2[i].name.first;
        let lastName = addressBookArray2[i].name.last;
        let name = document.createTextNode(firstName + " " + lastName);
        contactDiv.appendChild(name);

        // add picture with the thumbnail and create an img instead of a div
        let newPicture = addressBookArray2[i].picture.thumbnail;
        let newImage = document.createElement("img");
        contactDiv.appendChild(newImage);
        newImage.src = newPicture;

        // combine address information into one statement to appear when element hovered on
        let streetNumber = addressBookArray2[i].location.street.number;
        let streetName = addressBookArray2[i].location.street.name;
        let city = addressBookArray2[i].location.city;
        let state = addressBookArray2[i].location.state;
        let zip = addressBookArray2[i].location.postcode;

        // remove style since we will be editing hover style later
        // add the address line
        let hoverDiv = document.createElement("div");
        hoverDiv.style.display = 'none';
        contactDiv.appendChild(hoverDiv);
        let theAddress = document.createTextNode(`Current Address: ${streetNumber} ${streetName}, ${city}, ${state}, ${zip}`);
        hoverDiv.appendChild(theAddress);

        // make the element block when hovered so it will appear and move elements around the newly appearing text
        let currentDiv = document.getElementById("hoverContact" + i);
        currentDiv.addEventListener('mouseover', function () {
            hoverDiv.style.display = 'block';
        })
        currentDiv.addEventListener('mouseout', function () {
            hoverDiv.style.display = 'none';
        })


    }
}


// assignment...
// display a list of users (10)
// show their names and pictures
// if user interacts with user through hover,
// .. show details such as address, email address, etc
