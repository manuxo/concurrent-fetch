# fetch API
Getting started with Promises (async-await) and fetch API

## Fetch  with Promises
```javascript
//fetch GET
fetch('http://api-to-call.com/endpoint').then(response => {
	if(response.ok){
		return response.json();
	}
	throw new Error('Request Failed!');
},networkError => console.log(networkError.message))
.then(jsonResponse => {
	//Code to execute with JSON response
});
 ```
 ```javascript
//fetch POST
fetch('http://api-to-call.com/endpoint',{
	method: 'POST',
	body: JSON.stringify({id: '200'})
}).then(response => {
	if(response.ok){
		return response.json();
	}
	throw new Error('Request Failed!');
},networkError => console.log(networkError.message))
.then(jsonResponse => {
	//Code to execute with JSON response
});
 ```

## Fetch with async-await
```javascript 
//fetch GET
async function getData(){
	try{
		const response = await fetch('http://api-to-call.com/endpoint');
		if(response.ok){
			const jsonResponse = await response.json();
			//Code to execute with JSON response
		}
		throw new Error('Request Failed!')
	}catch(error){
		console.log(error);
	}
}
```
```javascript 
//fetch POST
async function postData(data){
	try{
		const response = await fetch('http://api-to-call.com/endpoint', { 
			method: 'POST',
			body: JSON.stringify(data)
		});
		if(response.ok){
			const jsonResponse = await response.json();
			//Code to execute with JSON response
		}
		throw new Error('Request Failed!')
	}catch(error){
		console.log(error);
	}
}
```
