<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// 1. Connect to MySQL
$conn = new mysqli("localhost", "root", "", "airline");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Make sure all fields are set
    if (
        isset($_POST['departure']) &&
        isset($_POST['arrival']) &&
        isset($_POST['departure_date']) &&
        isset($_POST['return_date']) &&
        isset($_POST['passengers']) &&
        isset($_POST['class']) &&
        isset($_POST['special_requests'])
    ) {
        // Escape and assign form values
        $departure = $conn->real_escape_string($_POST['departure']);
        $arrival = $conn->real_escape_string($_POST['arrival']);
        $departure_date = $conn->real_escape_string($_POST['departure_date']);
        $return_date = $conn->real_escape_string($_POST['return_date']);
        $passengers = (int)$_POST['passengers'];
        $class = $conn->real_escape_string($_POST['class']);
        $special_requests = $conn->real_escape_string($_POST['special_requests']);

        // 3. Perform the update
        $sql = "UPDATE booking 
                SET arrival = '$arrival',
                    departure_date = '$departure_date',
                    return_date = '$return_date',
                    passengers = $passengers,
                    class = '$class',
                    special_requests = '$special_requests'
                WHERE departure = '$departure'";

        if ($conn->query($sql) === TRUE) {
            if ($conn->affected_rows > 0) {
                echo "✅ Booking updated successfully.";
            } else {
                echo "⚠️ No booking found with the given departure city.";
            }
        } else {
            echo "❌ Error updating booking: " . $conn->error;
        }
    } else {
        echo "❌ Missing required fields.";
    }
} else {
    echo "Invalid request method.";
}

$conn->close();
?>
