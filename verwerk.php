<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gebruikersnaam = $_POST["gebruikersnaam"];
    $email = $_POST["email"];
    $wachtwoord = $_POST["wachtwoord"];
    
    // Voeg hier verdere verwerking toe, zoals het opslaan van de gegevens in een database
    
    // Voorbeeld: Sla de gegevens op in een tekstbestand
    $bestand = fopen("gegevens.txt", "a");
    fwrite($bestand, "Gebruikersnaam: " . $gebruikersnaam . "\n");
    fwrite($bestand, "Email: " . $email . "\n");
    fwrite($bestand, "Wachtwoord: " . $wachtwoord . "\n\n");
    fclose($bestand);
}
?>
