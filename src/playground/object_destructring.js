const person = {
    name: 'Poorna',
    age: 34,
    location: {
        city: 'Bangalore',
        temp: 27
    }
};

// destructring means convert {person.name} into name.
// const {name, age} = person

const {name : firstName = 'Anonymous', age} = person

console.log(`${firstName} is  ${age}.`);

//const {city, temp} = person.location

// if (temp && city){
//     console.log(`It's ${temp} in ${city}`)
// }

        // rename destructor variable to new name
        // example const {city, temp: temperature} = person.location
        // after defining temperature , temp vairable is no longer exist

const {city, temp: temperature} = person.location

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

////// ----- Challenge task -----//////
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
       name: 'Penguin'
    }
};

const {name: publisherName = 'self-Published' } = book.publisher

console.log(publisherName)