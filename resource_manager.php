<?php
$file = $_SERVER['DOCUMENT_ROOT'] . '/Downloads/ICT_Resume_MA2024.pdf';
if (file_exists($file)) {
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="ICT_Resume_MA2024.pdf"');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
} else {
    echo "File not found.";
}
?>