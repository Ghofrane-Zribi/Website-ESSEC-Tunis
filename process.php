<?php
// Tableau statique des utilisateurs avec leurs mots de passe
$utilisateurs = [
    "utilisateur1" => "motdepasse1",
    "utilisateur2" => "motdepasse2",
    "utilisateur3" => "motdepasse3"
];

// Vérifier si les champs sont remplis
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vérifier si l'utilisateur existe et si le mot de passe est correct
    if (array_key_exists($username, $utilisateurs) && $utilisateurs[$username] === $password) {
        // Si le combo est correct, rediriger vers index.html
        header("Location: index.html");
        exit();
    } else {
        // Si le combo est incorrect, rediriger vers login.html avec un message d'erreur
        header("Location: login.html?error=true");
        exit();
    }
} else {
    // Si les champs ne sont pas remplis, rediriger vers login.html
    header("Location: login.html");
    exit();
}
?>
