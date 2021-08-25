// Constants
const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['Tomasz', 'Janusz', 'Kacper', 'Mirek', 'Juliusz', 'Konrad', 'Bartosz', 'Szymon', 'Sczepan'];
const femaleNames = ['Alicja', 'Beata', 'Dagmara', 'Barbara', 'Alina', 'Agnieszka', 'Karolina', 'Judyta', 'Klaudia'];
const lastNames = ['Bogusz', 'Janik', 'Kowalczyk', 'Nowak', 'Wójcik', 'Szymek', 'Stępień', 'Betlej', 'Bocian'];
const people = [];
const wst = ['50', '51', '53', '57', '60', '66', '69', '72', '73', '78', '79', '88', '44']

// Function for randomizing the choice of an Array element
function randChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const choice = arr[index];

  return choice;
}

// Loop creating 20 random identities
for (let i = 0; i < 20; i++) {
  const person = {};
  person.gender = randChoice(genders);

  if (person.gender === 'M') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 60) + 18;
  person.num = randChoice(wst);

  for (let i = 0; i < 7; i++) {
    const number = Math.floor(Math.random() * 10);
    const string = number.toString()

    person.num += string;
  }

  const email = person.firstName + '.' + person.lastName + '@gmail.com';
  person.email = email.toLowerCase();

  people.push(person);
}

// Converting people Object into JSON and writing it in a file

peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
