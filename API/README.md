# Smart Parking Project (IOT)

### After downloading, first install the dependencies and then start the app
### `npm i`  
### `npm start`  

#### The JSON data will be available in `<what_ever_is_the_domain>/api/get_data` in the production build   
#### If cloned in your local, machine just go to [`http://localhost:8080/api/get_data`](http://localhost:8080/api/get_data)

### Prequisite  
`A MongoDB with a DB named "smrtprk" and a collection named "parks"`  
#### Example of a Document
```json
{  
	"_id" : "ranDomobJectigGeneraTEdbyMOngoDb",
	"slot_no" : "1",  
	"place" : "IIITG Academic Building",  
	"status" : "Available",  
	"nav" : "https://goo.gl/maps/RvjK932nEVfpPEZq9"  
}
```
