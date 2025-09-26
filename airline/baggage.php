<?php
include 'db.php';

//INSERT INTO check_in (Booking_Reference, Passenger_Name, Flight_Number, Seat_Selection, Baggage_Info, TSA_Pre_Check)

// Fetch form data
$passenger_name = $_POST['passenger-name'];
$flight_details = $_POST['flight-details'];
$baggage_description = $_POST['baggage-description'];
$baggage_tag = $_POST['baggage-tag'];
$incident_date = $_POST['incident-date'];
$compensation = $_POST['compensation'];


// Prepare and execute SQL statement
$sql = "INSERT INTO baggage (Passenger_Name, Flight_Details, Baggage_Description, Baggage_Tag, Incident_Date, Compensation)
        VALUES ('$passenger_name', '$flight_details', '$baggage_description', '$baggage_tag', '$incident_date', '$compensation')";

if ($conn->query($sql) === TRUE) {
    echo "Baggage claim submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
