const searchBar = document.getElementsByClassName('search-bar')

$("input").focus(() => {
    $(".dropdown").show()
});

$("input").blur(function () {
    $(".dropdown").hide()
});