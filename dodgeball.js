// create an array of names and traits that will be included in the dodgeball game
const arrOfPeople = [
    {
        id: 0,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 1,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 2,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 3,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 4,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 5,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 6,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]

const listOfPlayers = []

class player {
    id;
    name;
    age;
    throwSpeed;
    dodgeSkill;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.throwSpeed = Math.floor(Math.random() * 10); // 1-10 player rating
        this.dodgeSkill = Math.floor(Math.random() * 10); // 1-10 player rating
        // as each new entry into the class is created, push them into the listOfPlayers array
        listOfPlayers.push(player);
    }   
}

class Teammate extends player{
    color;
    constructor(color) {
        this.color = color;
    } 
}

const listPeopleChoices = () => {
    // This needs to populate 10 names into the people group through the li element with in the id - people
    // also, this needs to create a 'make player' button with onclick event to run the next function
    const listElement = document.getElementById('people');
    arrOfPeople.map(person => {
        const li = document.createElement("li");
        li.id = person.name;

        const button = document.createElement("button");
        button.innerHTML = "Make Player";
        // use person.id to identify original array data to be utilized
        button.addEventListener('click', function () { makePlayer(person.id) });
        li.appendChild(button);
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
        listElement.append(li);
    })
}

const makePlayer = (id) => {
    // use data from original array to create a new player with the class
    // incorporate two new data points with the class, throwspeed and dodgeskill
    let newPlayerClass = new player(arrOfPeople[id].id, arrOfPeople[id].name, arrOfPeople[id].age);
    listOfPlayers.push(newPlayerClass);
    console.log(listOfPlayers);
    let playerList = document.getElementById("players");
    let newPlayer = document.createElement("li");
    newPlayer.id = newPlayerClass.name;
    newPlayer.appendChild(document.createTextNode('Name: ' + newPlayerClass.name + ' - Throw Speed: ' + newPlayerClass.throwSpeed));
    playerList.append(newPlayer);

    // create two new buttons, red team and blue team, to initiate onclick functions to move players to the teams
    const redButton = document.createElement("button"); 
    const blueButton = document.createElement("button");
    redButton.innerHTML =  "Red Team"; 
    blueButton.innerHTML = "Blue Team";
    newPlayer.appendChild(redButton);
    newPlayer.appendChild(document.createTextNode(' ')); 
    newPlayer.appendChild(blueButton);
    redButton.addEventListener('click', function() {addRedTeam(newPlayerClass)}); 
    blueButton.addEventListener('click', function() {addBlueTeam(newPlayerClass)});

    // remove the name from its previous location
    document.getElementById(arrOfPeople[id].name).remove();
}

const addRedTeam = function(info) {
    // move the player to the red team list while also removing them from the player list
    let playerList = document.getElementById("red");
    let newPlayer = document.createElement("li");
    newPlayer.appendChild(document.createTextNode('Name: ' + info.name + ' - Throw Speed: ' + info.throwSpeed));
    playerList.append(newPlayer);

    document.getElementById(info.name).remove();
}

const addBlueTeam = function(info) {
    // move the player to the blue team list while also removing them from the player list
    let playerList = document.getElementById("blue");
    let newPlayer = document.createElement("li");
    newPlayer.appendChild(document.createTextNode('Name: ' + info.name + ' - Throw Speed: ' + info.throwSpeed));
    playerList.append(newPlayer);

    document.getElementById(info.name).remove();
}

/**
 * I'm really not 100% sure how to create unit tests for a GUI..
 * Here are three suggested tests:
 * 1. When the "List People" button is clicked, are 10 people created and do each populate with additional data?
 * 2. When "Make Player" is clicked, does the play move to the Player list, become a new class, and receive the additional data points from the class?
 * 3. When "Red Team" is clicked, does the player extend into the teammate class and do they move to the red team column while also disappearing from the players column?
 * 
 */