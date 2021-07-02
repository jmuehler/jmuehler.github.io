var urls = ["https://www.limesurvey.uni-hamburg.de/index.php/admin/questions/sa/view/surveyid/877747/gid/56929/qid/681924", "https://ww3.unipark.de/www/front.php?controller=login&module=survey"];
var randNum = Math.floor(Math.random() * urls.length); //generates random number corresponding to a elemnt in urls array
window.location.replace(urls[randNum]); //redirects to the selected URL
