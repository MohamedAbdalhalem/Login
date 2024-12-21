const body = document.body;
let email_signin = document.getElementById('email-signin');
let password_signin = document.getElementById('password-signin');
let loginbutton = document.getElementById('loginbutton');
let register = document.getElementById('register');
let alert_login = document.getElementById('alert-login');
let name_signup, email_signup, password_signup, registerbutton, alert_signup , login;
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
let users = [] ;
if(localStorage.getItem('users') === null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem('users'));
}
loginbutton.addEventListener('click', () => {
  
    let user = users.find(user => user.email === email_signin.value && user.password === password_signin.value);
    if (user) {
        body.innerHTML= `<section class="vh-100 d-flex justify-content-center align-items-center" id="home">
    <nav class="navbar navbar-expand-md bg-one shadow-special fixed-top">
      <div class="container">
        <a class="navbar-brand fs-4 titillium text-white" href="#">SMART LOGIN</a>
        <button class="navbar-toggler px-2 border-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon d-flex justify-content-center align-items-center text-white fs-3"><i class="fa-solid fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="mt-3 mt-lg-0 navbar-nav ms-auto">
            <li class="nav-item">
              <a class="titillium d-block w-100 text-center  text-decoration-none py-2 rounded-1 px-2 active" href="" id="log-out">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-8 offset-2 py-5 bg-one shadow-special text-center">
                <h1 class="text-two py-4 titillium">Welcome ${user.name}</h1>
            </div>
        </div>
    </div>
  </section>`
    }else {
        alert_login.classList.remove('d-none');
    }
 });
register.addEventListener('click', () => {
    let content = `<section class="w-75 m-auto" id="sign-up">
    <div class="mt-5 bg-one shadow-special p-5">
      <h1 class="text-center text-two">Smart Login System</h1>
      <input type="text" class="bg-transparent border border-1 p-2 text-white rounded-2 border-white  w-100 mt-3" placeholder="Enter your name" id="name-signup">
      <input type="email" class="bg-transparent border border-1 p-2 text-white rounded-2 border-white w-100 mt-3" placeholder="Enter your email" id="email-signup">
      <input type="password" class="bg-transparent border border-1 p-2 text-white rounded-2 border-white w-100 mb-2 mt-3" placeholder="Enter password" id="password-signup" >
      <button class="w-100 bg-transparent border border-1 rounded-1 py-2 mt-3 text-two" id="registerbutton">Sign Up</button>
      <p class="text-danger text-center" id="alert-suginup"></p>
      <p class="text-white text-center fw-medium mt-3">You have an account? <a href="" id="login" class="text-white text-decoration-none">Signin</a></p>
    </div>
  </section>`
    body.innerHTML = content;
    name_signup = document.getElementById('name-signup');
    email_signup = document.getElementById('email-signup');
    password_signup = document.getElementById('password-signup');
  registerbutton = document.getElementById('registerbutton');
  alert_signup = document.getElementById('alert-suginup');
    login = document.getElementById('login');
  registerbutton.addEventListener('click', () => {
    if (name_signup.value === "" || email_signup.value === "" || password_signup.value === "") {
      alert_signup.textContent = "All fields are required";
    } else {
      if (users.find(user => user.email === email_signup.value)) {
        alert_signup.textContent = "Email already exists";
        if(alert_signup.classList.contains('text-success')) {
          alert_signup.classList.replace('text-success','text-danger');
        }
      } else {
        users.push(new User(name_signup.value, email_signup.value, password_signup.value));
        localStorage.setItem('users', JSON.stringify(users));
        alert_signup.textContent = "User created successfully";
        alert_signup.classList.replace('text-danger','text-success');
      }
    }
    });
});


