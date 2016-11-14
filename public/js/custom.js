
var input = $('#from-airport');

input.keyup(function () {

    if (input.val().length === 3){
        input.attr('list','places');
    }else if (input.val().length < 3 && input.attr('list') == "places"){
        input.attr('list', '');
    }

});

