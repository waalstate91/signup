document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('signIn');
    const signUpBtn = document.getElementById('signUp');
    const container = document.querySelector('.container');
    const signUpForm = document.getElementById('form1');
    const usernameInput = signUpForm.querySelector('input[name="gebruikersnaam"]');
    const emailInput = signUpForm.querySelector('input[name="email"]');
    const passwordInput = signUpForm.querySelector('input[name="wachtwoord"]');

    signInBtn.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    signUpBtn.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Verzenden naar de server kan hier worden geïmplementeerd
        console.log('Gebruikersnaam:', usernameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Wachtwoord:', passwordInput.value);

        // Voeg hier code toe om de gegevens naar de server te verzenden
        // Bijvoorbeeld met behulp van fetch() of een XMLHttpRequest
    });
});
