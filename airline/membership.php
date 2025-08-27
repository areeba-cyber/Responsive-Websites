<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$database = "airline";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch form data
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$dob = $_POST['dob'];
$membership_tier = $_POST['membership-tier'];
$preferences = $_POST['preferences'];

// Prepare and execute SQL statement
$sql = "INSERT INTO membership (Name, Email, Address, DOB, Membership_Tier, Preferences)
        VALUES ('$name', '$email', '$address', '$dob', '$membership_tier', '$preferences')";

if ($conn->query($sql) === TRUE) {
    echo "Membership joined successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
