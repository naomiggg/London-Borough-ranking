$(document).ready(function() {

    var select = $('<select><option>Choose Area</option></select>').appendTo('.selection');

    $.get('boroughs.json', function(data) {

        $.each(data, function(index, item) {
            select.append($('<option>').attr('value', item.area).text(item.area));
        });

        select.change(function(e) {
            var area = data.find(item => item['area'] === this.value);

            var area_info = [
                '<div>Area Name: ' + area['area'] + '</div>',
                '<div>Population: ' + area['population'] + '</div>',
                '<div>Bars and Pubs: ' + area['bars-and-pubs'] + '</div>',
                '<div>Crime: ' + area['crime'] + '</div>',
                '<div>Crime per Population: ' + area['crime-per-pop'] + '</div>',
                '<div>Rent: ' + area['rent'] + '</div>',
                
            ];

            $('.area-details').html(area_info);
        });

    });

});