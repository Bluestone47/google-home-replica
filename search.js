const history = ['html', 'css', 'javascript']

const dropdownList = document.getElementById('dropdown')
const dropdownButton = document.getElementById('dropdown-button')

history.map(string => {
    const historyHTMLString = `
    <div class="search-bar dropdown-item">
        <div class="search-logo history-logo"></div>
        <p class="history">${string}</p>
        <a class="remove">Remove</a>
    </div>
    `
    const historyHTML = new DOMParser().parseFromString(historyHTMLString, 'text/html').body.childNodes[0]
    dropdownList.insertBefore(historyHTML, dropdownButton)
})

$('input').focus(() => {
    $('.dropdown').show()
    $('.search-button-container').hide()
    $('#dropdown-button').show()
});

$('input').blur(function () {
    $('.dropdown').hide()
    $('.search-button-container').show()
});