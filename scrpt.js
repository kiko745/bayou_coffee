// password.js

const correctPassword = "1010";

// Check if password was already entered this session
if (sessionStorage.getItem('accessGranted') !== 'true') {
  const userPassword = prompt("Enter password to access Bayou's Coffee site:");

  if (userPassword === correctPassword) {
    sessionStorage.setItem('accessGranted', 'true');
  } else {
    document.body.innerHTML = "<h1 style='text-align:center; margin-top:20%; font-family:sans-serif;'>Access Denied 🚫</h1>";
    throw new Error("Wrong password - stopping script execution.");
  }
}
