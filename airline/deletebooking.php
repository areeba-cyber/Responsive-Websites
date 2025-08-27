<?php
// Database connection config
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'airline';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the departure city from POST (assuming form method="POST")
if (isset($_POST['departure'])) {
    $departure = $conn->real_escape_string($_POST['departure']);

    // Delete query based on departure city
    $sql = "DELETE FROM booking WHERE departure = '$departure'";

    if ($conn->query($sql) === TRUE) {
        echo "Record(s) with departure city '$departure' deleted successfully.";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
} else {
    echo "No departure city provided.";
}

$conn->close();
?>
