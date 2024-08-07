<?php
$file = $_SERVER['DOCUMENT_ROOT'] . '/Downloads/ICT_Resume_MA2024.pdf';
if (file_exists($file)) {
    // Asetetaan tarvittavat headerit
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="ICT_Resume_MA2024.pdf"');
    header('Content-Length: ' . filesize($file));
    
    // Lisätään turvallisuusheadereita
    header('X-Content-Type-Options: nosniff'); // Estää selaimia arvaamasta sisältötyyppiä
    header('X-Frame-Options: DENY'); // estää sivun upottamisen iframe-elementteihin, mikä suojaa clickjacking-hyökkäyksiltä.
    header('Cache-Control: private, max-age=0, must-revalidate'); // estää selainta välimuistittamasta tiedostoa, mikä on hyvä käytäntö dynaamisen sisällön kanssa

    // Lähetetään tiedosto
    readfile($file);
    exit;
} else {
    // Jos tiedostoa ei löydy, lähetetään 404-virhe
    header("HTTP/1.0 404 Not Found");
    echo "File not found.";
}
?>