const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=980&status=active');
//get complete link
console.log(myUrl.href);
console.log(myUrl.toString());

//get only website link (root domain)
console.log(myUrl.host);

//host name - without port
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//searched item
console.log(myUrl.search);

//Search parameter
console.log(myUrl.searchParams);

//add parameter
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through searched
myUrl.searchParams.forEach((value, name) => console.log(`${name}, ${value}`));
