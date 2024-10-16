
document.getElementById("submitButton").addEventListener("click", function() {
    const namesList = document.getElementById("namesList");
    namesList.innerHTML = "";

    const names = ["John Erwin Bacani", "Ryan Kim Lazaga", "Vince Gio Ladia"]; 

    names.forEach(name => {
        const nameElement = document.createElement("p");
        nameElement.textContent = name; 
        namesList.appendChild(nameElement);
    });
});
