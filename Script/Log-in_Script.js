
function validateLogin() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Add your authentication logic here
      if (username === "rena_lyn"&& password === "2004") {
        window.location.href = "Home.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }