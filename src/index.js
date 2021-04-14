const dogBarDiv = document.getElementById('dog-bar');
const dogSpotDiv = document.getElementById('dog-info');
const filterBtn = document.getElementById('good-dog-filter');
const dbURL = 'http://localhost:3000/pups';

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

function fetchDog(id) {
    const URL = `${dbURL}/${id}`;
    fetch(URL)
    .then(resp => resp.json())
    .then(result => {
        dog = result;
        renderDog(dog);
        return result;
    })
    .catch(err => console.log(err));
};

function renderDog(dog) {
    dogSpotDiv.innerHTML = '';
    const img = document.createElement('img');
    // const cpn = document.createElement('caption');
    const p1 = document.createElement('p');
    const btn = document.createElement('btn');
    img.src = dog.image;
    img.alt = "The selected dog.";
    p1.innerHTML = dog.name;
    let dogQlty = "Bad Dog!";
    if (dog.isGoodDog) dogQlty = "Good Dog!";
    btn.innerHTML = dogQlty;
    btn.id = "dog-quality-toggler";
    // img.appendChild(cpn);
    dogSpotDiv.appendChild(img);
    dogSpotDiv.appendChild(p1);
    dogSpotDiv.appendChild(btn);
}

function fetchDogs(number=0, quality='') {
    fetch(dbURL)
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
        spn.addEventListener('click', () => fetchDog(dog.id));
        dogBarDiv.appendChild(spn);
    });
}
