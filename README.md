# RIFA LIVE
## Description
Raffle is a web application designed to help sell 200-number raffles. The application offers an interface to display the prize and the 200 available numbers. Users can view the availability of numbers and purchase one by clicking the corresponding button. Once a number is available, clicking on it will send a message to the raffle administrator via WhatsApp to complete the purchase. Additionally, the app features a number consultant for added transparency, allowing users to verify who has purchased a specific number. It also includes a link to the live stream of the giveaway.

Currently, the app does not have user login and registration functionality to allow each user to run giveaways and share links with others. This feature has not been implemented yet.

## Used technology
- React
- Material-UI: The user interface is implemented using the Material Design components provided by Material-UI.
- Firebase: Firebase is used to store data and handle application logic.
- WhatsApp API (to send messages to the administrator)
- Video streaming API (for live streaming)

## Demo App
You can access the EasySaleRegister demo [here](https://rifalive.netlify.app) .

## Features
- Interface to show the prize and the 200 available numbers.
- Purchase of numbers through WhatsApp.
- Number consultant to verify purchase information.
- Link to the live broadcast of the draw.

## Sold Numbers Management
To mark sold numbers, Firestore is used. Currently, the admin panel for dialing sold numbers is not built in the app. Instead, you must do it manually in the Firestore database. Here is a description of how you can do it:

1- Create a collection called "raffle" in your Firestore database.
2- Within the "raffle" collection, create a document called "raffle-001" (or another suitable name).
3- Inside the document "raffle-001", add a field called "soldTickets" of type array.
4- Within the "soldTickets" field, you can add each sold number as an object in the form of a map with two fields: "number" (ticket number, type number) and "name" (buyer name, type string).

## Setup
1. Clone the repository to your local machine:
```
git clone https://github.com/joselacruz/rifaLive.git
cd rifaLive

```
2. Install dependencies using npm
```
npm install

```

# Usage
1. Start the development server:
```sh
npm run dev
```
Access the application from your browser at http://localhost:5173.

# Contributing
Feel free to contribute to this project by opening pull requests or issues on the repository.

# Credits
This project was created by Jose Lacruz.

#License
This project is licensed under the MIT License - see the LICENSE file for details.
