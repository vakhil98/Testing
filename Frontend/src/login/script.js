function showSignupForm() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function hideSignupForm() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showResetPasswordForm() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none'; 
    document.getElementById('resetPasswordForm').style.display = 'block';
}

function hideResetPasswordForm() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('resetPasswordForm').style.display = 'none';
}

document.getElementById('registerButton').addEventListener('click', function(event) {
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault(); // Prevent the form from submitting
    }
});

function checkPasswordStrength() {
    var passwordInput = document.getElementById("passwordInput").value;
    var strengthMessage = document.getElementById("passwordStrength");

    if (passwordInput.length < 8) {
        strengthMessage.innerHTML = "Password is too short!";
        strengthMessage.style.color = "red";
    } else if (passwordInput.length > 15) {
        strengthMessage.innerHTML = "Password is too long!";
        strengthMessage.style.color = "red";
    } else if (passwordInput.search(/[A-Z]/) < 0 || passwordInput.search(/[a-z]/) < 0 || passwordInput.search(/[0-9]/) < 0 || passwordInput.search(/[@$!%*?&#]/) < 0) {
        strengthMessage.innerHTML = "Password is weak!";
        strengthMessage.style.color = "orange";
    } else {
        strengthMessage.innerHTML = "Password is strong!";
        strengthMessage.style.color = "green";
    }
}



function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}