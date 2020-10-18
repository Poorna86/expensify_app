const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [street, city, state, zip] = address

// ignore 1st and last item, define like below
// const [,city, state = 'New York'] = address

console.log(`You are in ${city} ${state}`)

// ----- chalange task ----- // 

const item = ['Coffee (hot)', '$2.00', '$3.00', '$3.75'];

const [itemName,,medium,large] = item

console.log(`A medium ${itemName} costs ${medium}`)