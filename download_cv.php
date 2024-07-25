<?php
$file = '/polku/MiiaArkko-cv.pdf'; // TODO  Muuta tämä oikeaksi poluksi!!
if (file_exists($file)) {
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="MiiaArkko-cv.pdf"');
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: DENY');
    readfile($file);
    exit;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "File not found.";
}