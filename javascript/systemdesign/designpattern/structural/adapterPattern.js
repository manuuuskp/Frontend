// Adapter Pattern is a design pattern that is used when format of data of one object should be converted to the other format of another object.
// for example -  if the response of one APi is for XML format and that response should be sent to another API in the form of JSON then
// Adapter Pattern comes into picture which handles the format conversion.
// One more example is that we have array of object which has population in millions and when we try to add one more obj inside array with other format,
// we can go with the adapter pattern.

const obj = [
    {
        city: 'chennai',
        pop: 70.0
    },
    {
        city: 'bangalore',
        pop: 50.0
    },
]

const obj2 = {
    city: 'hyderabad',
    pop: 400000000
}

const adapter = obj => obj.pop = (obj.pop/1000000).toFixed(1);

adapter(obj2);