const person = {
    name: 'Abdul Jobber',
    age: 22,
    profession: 'Developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'Kuakata']
}

person.salary=30000 ;
person['age']= 26;
person['fav places'] = ['maldives', 'bali', 'pataya'];

const propName = 'professtion';
person[propName] = ' Teacher';
console.log(person)
