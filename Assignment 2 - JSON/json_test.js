const portfolio={
    name: 'Curtis',
    accountNum: 5432,
    streetNum: 6995,
    streetName: 'Frances Street',
    city: 'Riverside',
    zip: 92506
}

//stringify
const stringing = JSON.stringify(portfolio);
console.log('\n The complete JSON stringify object is: ', stringing, "\n");

//parse
const parsing = JSON.parse(stringing);
console.log('\n Now it is a completed object and we can call certain parts\n');
console.log('The Street Name is: ',parsing.streetName, "\n");
console.log('The account holders Name is: ', parsing.name, "\n\n");
