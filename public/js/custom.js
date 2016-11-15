

/*---------------------------------------------------------------------------------------------------------------------+
* Adds list of countries to choose from matching the first 3 characters inserted in the input text
* */
var input = $('#from-airport, #to-airport');

input.each(function () {
    var element = $(this);
    element.on('input', function () {

        if (element.val().length === 3) {
            element.attr('list', 'places');
        } else if (element.val().length < 4 && element.attr('list') == "places") {
            element.attr('list', '');
        }
    });
});


