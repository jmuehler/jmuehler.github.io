var urls = ["http://www.url1.com", "http://www.url2.com"];
var randNum = Math.floor(Math.random() * urls.length); //generates random number corresponding to a elemnt in urls array
window.location.replace(urls[randNum]); //redirects to the selected URL
