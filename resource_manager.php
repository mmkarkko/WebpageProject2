<?php
// Määritä tiedoston sijainti
$file = 'Downloads/ICT_Resume_MA2024.pdf';

// Tarkista että tiedosto on olemassa
if (!file_exists($file)) {
    header('HTTP/1.0 404 Not Found');
    echo 'Tiedostoa ei löydy.';
    exit;
}

// Aseta oikeat headerit tiedoston lataamista varten
header('Content-Description: File Transfer');
header('Content-Type: application/pdf');
header('Content-Disposition: attachment; filename="' . basename($file) . '"');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($file));

// Lähetä tiedosto käyttäjälle
readfile($file);
exit;
?>
