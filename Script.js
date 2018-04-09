$(document).ready(function() {

    $.get('boroughs.json', function(data) {

        var select = $('<select>').appendTo('.selection');

        $.each(data, function(index, item) {
            select.append($('<option>').attr('value', item.area).text(item.area));
        });

    });

});