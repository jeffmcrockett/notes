let getButton = document.getElementById('ingredientInput');
    getButton.addEventListener('click', function(){
    console.log("Button has been clicked");

    let submitText = document.getElementById("liquorOfChoice");
    let liquor = submitText.value;

    console.log('Before calling API');

    let fetchResult = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`);

    let jsonResponse = fetchResult.then(function(response) {
        console.log('Processing the results!', response);
        return response.json();
    })
    
    jsonResponse.then(function(json) {
        console.log("Drink results are", json);

        ul = document.createElement('ul');

        document.getElementById('myItemList').appendChild(ul);

        let array = json.drinks;

        for (i = 0; i < array.length; i++) {
            let element = array[i].strDrink;
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML += element;
        };
    })


})
