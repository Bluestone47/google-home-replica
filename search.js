const searchBar = document.getElementsByClassName('search-bar')

$('input').focus(() => {
    $('.dropdown').show()
    $('.search-button-container').hide()
    $('#dropdown-button').show()
});

$('input').blur(function () {
    $('.dropdown').hide()
    $('.search-button-container').show()
});