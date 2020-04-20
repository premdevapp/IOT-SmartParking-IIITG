# Smart Parking Project (IOT)
#### [`LINK TO THE WEBAPP`](http://arunabharjun.com/iiitg/smrtprk/)  

```
🗂 API > Contains the API for client app  
🗂 CLIENT_APP > Contains the ReactJS App files
🗂 MQTT > Contains the Broker, Publisher & Subscriber for the RaspberryPi
```


# How it works

### THE RASPBERRY PI MODULE

```
1. Using the MQTT protocol (implemented with Express.js on top of Node.js using the MQTT.js & MOSCA.js libraries), the publisher in every 5 seconds, publishes the current state of parking slot(topics) as "Available" or "Occupied" from the sensors connected to the RaspberyPi Board.

2. The Broker then broadcasts the published messages.

3. The subscriber then recieves the messages to the topics(slot names) it has subscribed to and then pushes the message as current status of the parking spot to the database.

4. Both the Publisher and the Subscriber treats each parking slot like a topic.

5. The publisher, while every message transmission, matches the current count of registered slots in the database with the physically connected slots to make sure there is no discrepancy in the messages being published.

6. Both publisher and subscriber for every message transmitted and recieved, creates list of topics(ie. the slots) according to the data in the database rendering the whole implementation to be dynamic.
```

### THE API
```
1. Written using Express.js on top of Node.js.
2. Connects to database (MongoDB) and returns data in JSON format.
```

### THE CLIENT APP

```
1. Designed and Developed with React.js.
2. Uses the API to fetch data in JSON format and present it in the app.
```


### Usage
> Download or clone the repository and follow instructions (as given in README.md file) in each of the respective folders.