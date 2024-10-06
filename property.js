const person = {
    name: 'Abdul Jobber',
    age: 22,
    profession: 'Developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'Kuakata']
}
console.log(person);

// dot notation : dot symbol diya object er property er value access kora
console.log(person.profession);
const income = person.salary;
console.log(income)


// bracket Notation : third bracket diya access kora
console.log(person['age']);

const boyos = person['age']
console.log(boyos)

//error
//console.log(person. 'fev places')
console.log(person['fev places'])

const keyName = 'profession';
console.log(person[keyName])