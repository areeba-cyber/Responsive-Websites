<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connect to database
$conn = new mysqli("localhost", "root", "", "airline");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values safely
    $departure_city = $conn->real_escape_string($_POST['departure']);
    $arrival_city = $conn->real_escape_string($_POST['arrival']);
    $departure_date = $conn->real_escape_string($_POST['departure_date']);
    $return_date = $conn->real_escape_string($_POST['return_date']);
    $num_passengers = (int)$_POST['passengers'];  // cast to int
    $class = $conn->real_escape_string($_POST['class']);
    $special_requests = $conn->real_escape_string($_POST['special_requests']);

    // Insert into booking table
    $sql = "INSERT INTO booking (departure, arrival, departure_date, return_date, passengers, class, special_requests) VALUES ('$departure_city', '$arrival_city', '$departure_date', '$return_date', $num_passengers, '$class', '$special_requests')";

    if ($conn->query($sql) === TRUE) {
        echo "Booking Successful";
    } else {
        echo "Error: " . $conn->error;
    }
} else {
    echo "No data submitted";
}

$conn->close();
?>
