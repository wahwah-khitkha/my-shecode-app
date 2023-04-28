 // Challenge 1
        // Add click eventListener to the button. Alert `It is 18 degrees`
        function showTemp() {
            alert("It is 18 degrees");
        }
        let button = document.querySelector("button");
        button.addEventListener("click", showTemp);

        // Challenge 2
        // When the button is clicked, replace button label by ‘18 degrees’
        function changebutton(event) {
            event.preventDefault();
            event.target.innerHTML = "18 degrees";
        }
        button.addEventListener("click", changebutton);
