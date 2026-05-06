```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Growth Hackers</title>

<style>
body {
    margin: 0;
    font-family: Arial;
    scroll-behavior: smooth;
}

/* Navbar */
nav {
    background: #222;
    padding: 10px;
    text-align: center;
    position: fixed;
    width: 100%;
}

nav a {
    color: white;
    margin: 10px;
    text-decoration: none;
}

/* Sections */
section {
    padding: 80px 20px;
    text-align: center;
}

/* Home */
#home {
    background: #4facfe;
    color: white;
}

/* Services */
.box {
    display: inline-block;
    background: #eee;
    padding: 20px;
    margin: 10px;
    width: 200px;
    border-radius: 10px;
}

/* Stats */
#stats {
    background: #333;
    color: white;
}

.counter {
    font-size: 30px;
}

/* Contact */
#contact {
    background: #f4f4f4;
}

input {
    padding: 10px;
}

button {
    padding: 10px;
}
</style>
</head>

<body>

<nav>
<a href="#home">Home</a>
<a href="#services">Services</a>
<a href="#stats">Stats</a>
<a href="#contact">Contact</a>
</nav>

<section id="home">
<h1>Growth Hackers</h1>
<p>Simple Digital Marketing Agency</p>
</section>

<section id="services">
<h2>Services</h2>
<div class="box">SEO</div>
<div class="box">Ads</div>
<div class="box">Analytics</div>
</section>

<section id="stats">
<h2>Stats</h2>
<p class="counter" id="c1">0</p>
<p>Clients</p>
</section>

<section id="contact">
<h2>Newsletter</h2>
<input type="email" id="email" placeholder="Enter email">
<button onclick="subscribe()">Subscribe</button>
<p id="msg"></p>
</section>

<script>
// Counter
let count = 0;
let interval = setInterval(() => {
    if(count < 100){
        count++;
        document.getElementById("c1").innerText = count;
    } else {
        clearInterval(interval);
    }
}, 30);

// Newsletter
function subscribe(){
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if(email.includes("@")){
        msg.innerText = "Subscribed!";
    } else {
        msg.innerText = "Invalid Email!";
    }
}
</script>

</body>
</html>
```
