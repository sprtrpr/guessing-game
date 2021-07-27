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
                //window.alert("Correct!the number was: " + num + "\n You guessed it in " + tries + " tries.");
                //location.reload();
                function winfadeIn() {
                    document.getElementsByClassName('uWon')[0].style.display = 'block';
                    document.getElementsByClassName('content')[0].style.display = 'none';
                    var fade = document.getElementsByClassName('uWon')[0];
                    var opacity = 0;
                    var intervalID = setInterval(function() {
                        if (opacity < 1) {
                            opacity = opacity + 0.1
                            fade.style.opacity = opacity;
                        } else {
                            clearInterval(intervalID);
                        }
                    }, 50);
                }
                document.getElementById('answer').innerHTML = num;
                document.getElementById('numTries').innerHTML = tries;
                winfadeIn();
            }
            if (tries == 10) {
                //window.alert("Sorry! Times Up, the number was: " + num );
                //location.reload(); 
                function lostfadeIn() {
                    document.getElementsByClassName('sry')[0].style.display = 'block';
                    document.getElementsByClassName('content')[0].style.display = 'none';
                    var fade = document.getElementsByClassName('sry')[0];
                    var opacity = 0;
                    var intervalID = setInterval(function() {
                        if (opacity < 1) {
                            opacity = opacity + 0.1
                            fade.style.opacity = opacity;
                        } else {
                            clearInterval(intervalID);
                        }
                    }, 50);
                }
                document.getElementById('answer2').innerHTML = num;
                lostfadeIn();
            }
        }