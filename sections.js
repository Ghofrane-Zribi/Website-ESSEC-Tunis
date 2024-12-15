document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi réel du formulaire    
    // Récupérer les valeurs des champs
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const reason = document.getElementById('reason').value.trim();

    // Vérifier si tous les champs sont remplis
    if (firstName === '' || lastName === '' || email === '' || phone === '' || reason === '') {
        // Afficher un message d'erreur si un champ est vide
        document.getElementById('error-message').classList.remove('hidden');
        return;
    }

    // Si tout est rempli, masquer le message d'erreur et afficher le message de succès
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('success-message').classList.remove('hidden');
    
    // Réinitialiser le formulaire après soumission
    document.getElementById('contact-form').reset();
});
