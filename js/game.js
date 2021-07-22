var num = Math.floor(Math.random() * 100) + 1;
        var tries = 0;
        function Guess() {
            var g = document.form1.guess1.value;
            tries++;
            status = "Tries: " + tries;
            if (g < num)
                document.form1.hint.value = "No, guess higher.";
            if (g > num)
                document.form1.hint.value = "No, guess lower.";
            if (g == num) {
                window.alert("Correct!the number was: " + num + "\n You guessed it in " + tries + " tries.");
                location.reload();
            }
            if (tries == 10) {
                window.alert("Sorry! Times Up, the number was: " + num );
                location.reload(); 
            }
        }