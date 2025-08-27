<?php
// Connect to database
$mysqli = new mysqli("localhost", "root", "", "airline");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Capture form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $booking_reference = $_POST['booking_reference'] ?? '';
    $passenger_name    = $_POST['passenger_name'] ?? '';
    $flight_number     = $_POST['flight_number'] ?? '';
    $seat_selection    = $_POST['seat_selection'] ?? '';
    $baggage_info      = $_POST['baggage_info'] ?? '';

    // Insert into database
    $sql = "INSERT INTO check_in (booking_reference, passenger_name, flight_number, seat_selection, baggage_info)
            VALUES (?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sssss", $booking_reference, $passenger_name, $flight_number, $seat_selection, $baggage_info);

    if ($stmt->execute()) {
        echo "✅ Check-in successful!";
    } else {
        echo "❌ Error: " . $stmt->error;
    }

    $stmt->close();
}

$mysqli->close();
?>
