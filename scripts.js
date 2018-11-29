
$('form').submit(function(e) {
    e.preventDefault();
    $.get("https://api.github.com/users/jmz007", displayName)
    function displayName(data) {
        $('form').append('<h1>' + data.name + '</h1>');
    }
});    