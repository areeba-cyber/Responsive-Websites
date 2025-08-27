<!-- <?php
// Fetch form data
$name = $_POST['name'];
$email = $_POST['email'];
$flight_number = $_POST['flight-number'];
$date = $_POST['date'];
$rating = $_POST['rating'];
$comments = $_POST['comments'];

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

// Prepare and execute SQL statement
$sql = "INSERT INTO feedback (Name, Email, Flight_Number, Date, Rating, Comments)
        VALUES ('$name', '$email', '$flight_number', '$date', '$rating', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "Feedback submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?> -->
