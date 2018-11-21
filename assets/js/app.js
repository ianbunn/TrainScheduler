// Initialize Firebase
var config = {
    apiKey: "AIzaSyCIuxD9naUHcmgVhCpRpWowLurjDzNAjPs",
    authDomain: "trainscheduler-a31b7.firebaseapp.com",
    databaseURL: "https://trainscheduler-a31b7.firebaseio.com",
    projectId: "trainscheduler-a31b7",
    storageBucket: "",
    messagingSenderId: "993881230488"
};
firebase.initializeApp(config);
var database = firebase.database();

// Adding new train from form input values and saving it in Firebase DB with timestamp
$("#submit").on("click",function(event){
    event.preventDefault();

    var name = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var time = $("#time").val().trim();
    var frequency = $("#frequency").val().trim();

    $("form")[0].reset();

    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    alert("New train has been added.");

});

// Requesting Firebase DB values and making them a tr with td text to append to html
database.ref().on("child_added", function(x){
    var train = $("<tr>");

    var trainName = $("<td>");
    $(trainName).append(x.val().name);
    $(train).append(trainName);

    var trainDestination = $("<td>");
    $(trainDestination).append(x.val().destination);
    $(train).append(trainDestination);

    var trainFrequency = $("<td>");
    $(trainFrequency).append("Every "+ x.val().frequency +" minutes");
    $(train).append(trainFrequency);

    var trainArrival = $("<td>");

    var arrivalTime = moment(x.val().time, "HH:mm").subtract(1, "years");
    var timeDiff = moment().diff(moment(arrivalTime),"minutes");
    
    var timeApart = timeDiff % x.val().frequency;

    var timeRemaining = x.val().frequency - timeApart;

    var nextArrival = moment().add(timeRemaining,"minutes").format("HH:mm");

    $(trainArrival).append(nextArrival);
    $(train).append(trainArrival);

    var trainMinutesAway = $("<td>");
    $(trainMinutesAway).append("Arriving in " + timeRemaining + " minutes");
    $(train).append(trainMinutesAway);

    $(".table").append(train);

});

