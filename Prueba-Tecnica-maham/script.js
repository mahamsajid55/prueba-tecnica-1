document.querySelector('.password-toggle').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'imagenes/bx-show.svg';
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'imagenes/bx-low-vision(1).svg';
    }
});

document.getElementById('loginform').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
});



//register
 document.getElementById("registerForm").addEventlListner("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Password do not match");
        return;
    }
    
    const user = {
        name: name,
        username: username,
        password: password,
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("userregistered successfully");
    window.location.href = "login.html";
 });


  