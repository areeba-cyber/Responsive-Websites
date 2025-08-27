<?php
// Database connection settings
$host = "localhost";   // XAMPP runs MySQL on localhost
$user = "root";        // default username
$pass = "";            // default password is empty in XAMPP
$db   = "airline";        // 🔴 replace with your actual database name (the one you created in phpMyAdmin)

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
} 
// else {
//     echo "✅ Database connected successfully"; // (optional for testing)
// }
?>