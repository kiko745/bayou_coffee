// password.js

const correctPassword = "bayoucoffee123";

const userPassword = prompt("Enter password to access Bayou's Coffee site:");

if (userPassword !== correctPassword) {
  document.body.innerHTML = "<h1 style='text-align:center; margin-top:20%; font-family:sans-serif;'>Access Denied 🚫</h1>";
  throw new Error("Wrong password - stopping script execution.");
}
