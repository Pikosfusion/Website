<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? filter_var($data['phone'], FILTER_SANITIZE_STRING) : '';
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

$to = 'info@pikosfusion.de';
$subject = 'Neue Kontaktanfrage von ' . $name;
$headers = [
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/html; charset=UTF-8'
];

$emailBody = "
<html>
<body>
    <h2>Neue Kontaktanfrage</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>E-Mail:</strong> {$email}</p>
    " . ($phone ? "<p><strong>Telefon:</strong> {$phone}</p>" : "") . "
    <p><strong>Nachricht:</strong></p>
    <p>{$message}</p>
</body>
</html>
";

$success = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Nachricht erfolgreich gesendet']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Senden der Nachricht']);
}
?>