document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    const fName = document.getElementById("fName").value.trim();
    
    if (!fName) {
    alert("Please enter a valid name!");
    return;
    }
    
    localStorage.setItem("fName", fName); // Save player name in local storage
    
    window.location.href = "xedin.html"; // Redirect to the game/scoreboard page
    });