# Smart Parking Project (IOT)
#### [`LINK TO THE APP`](http://arunabharjun.com/iiitg/smrtprk/)  

```
🗂 API | Contains the API for client app  
🗂 CLIENT_APP | Contains the ReactJS App files
🗂 MQTT | Contains the Broker, Publisher & Subscriber for the RaspberryPi
```


# How it works

### THE RASPBERRY PI MODULE

```
1. With the help of MQTT (implemented with Express.js on top of Node.js using the MQTT.js library), the publisher in every 5 seconds from the sensors connected to the RaspberyPi Board.

2. The Broker then broadcasts the published messages.

3. The subscriber then recieves the messages to the topics it has subscribed to and then pushes the message as current status of the parking spot to the database.

4. Both the Publisher and the Subscriber treats each parking slot like a topic.

5. The publisher & before every publish, checks the current count of registered slots in the database and physically connected slots to make sure there is no discrepancy in the messages being published.

6. Both publisher and subscriber for every message transmitted and recieved, creates list of topics according to the data in the database rendering the whole implementation dynamic.
```

### THE API
```
1. Written using Express.js on top of Node.js
2. Connects to databse (MongoDB) and returns data in JSON format
```

### THE CLIENT APP

```
1. Designed and Developed with ReactJS
2. Uses the API to fetch data in JSON format and present it in the app
```


### Usage
> Download or clone the repository and follow instructions in the respective folders.