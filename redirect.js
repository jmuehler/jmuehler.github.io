var urls = ["https://www.limesurvey.uni-hamburg.de/index.php/113389?lang=de", "https://ww3.unipark.de/uc/hh_fak2_denzmann/277e/"];
var randNum = Math.floor(Math.random() * urls.length); //generates random number corresponding to a elemnt in urls array
window.location.replace(urls[randNum]); //redirects to the selected URL
