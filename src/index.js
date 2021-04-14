const dogBarDiv = document.getElementById('dog-bar');
const dogSpotDiv = document.getElementById('dog-info');
const filterBtn = document.getElementById('good-dog-filter');

const dogs = [];
let dog;
// let number = 0; // <= delete this past the debugging stage

// Strategy:
//
// Draft this similarly to the Dog CEO homework.
//
// Take advantage of the pre-written style sheet and the
// mock up to complete this homework commit by commit.
//

// Test run commands:
console.log('hello');
fetchDogs();
console.log(!!dog);

function fetchDogs(number=0, quality='') {
    let URL = 'http://localhost:3000/pups'
    if (number>0) URL = `${URL}/${number}`;
    fetch(URL)
    .then(resp => resp.json())
    .then(results => {
        // main processing goes here to assign values to
        //   dogs and dog
        results.forEach( dog => dogs.push(dog));
        
        console.log(!!dog);
        console.log(!!quality); // <- make a new function for quality
        console.log(results);
        
        renderDogs(dogs);
        return results;
    })
    .catch(err => console.log(err));
}

function renderDogs(dogs) {
    const spn = document.createElement('span');
    dogs.forEach( dog => {
        const spn = document.createElement('span');
        spn.innerHTML = `${dog.name}`;
        // spn.innerHTML = `<h3>${dog.name}</h3>`;
        dogBarDiv.appendChild(spn);
    });
}
