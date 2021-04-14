const dogBarDiv = document.getElementById('dog-bar');
const dogSpotDiv = document.getElementById('dog-info');
const filterBtn = document.getElementById('good-dog-filter');

const dogs = [];
let dog;
let number = 0; // <= delete this past the debugging stage

// Test run commands:
console.log('hello');
fetchDogs();

function fetchDogs(number=0, quality='') {
    let URL = 'http://localhost:3000/pups'
    if (number>0) URL = `${URL}/${number}`;
    fetch(URL)
    .then(resp => resp.json())
    .then(results => {
        console.log(results);
        return results;
    })
    .then(results => {
        // main processing goes here to assign values to
        //   dogs and dog
        return results;
    })
    .catch(err => console.log(err));
}

function renderDogs() {}
