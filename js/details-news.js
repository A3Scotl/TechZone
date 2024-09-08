document.addEventListener("DOMContentLoaded", function () {
    var sp = JSON.parse(localStorage.getItem("detail-news"));
    document.getElementById("name").innerHTML = sp.name;
    document.getElementById("author").innerHTML = sp.author;

});