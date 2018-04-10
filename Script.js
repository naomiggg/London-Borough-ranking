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
                '<div>Population 2017: ' + area['population'] + '</div>',
                '<div>Bars and Pubs: ' + area['bars-and-pubs'] + '</div>',
                '<div>Crime: ' + area['crime'] + '</div>',
                '<div>Crime per 1000 residents: ' + area['crime-per-pop'] + '</div>',
                '<div>Average rent for a one bedroom flat: ' + area['rent'] + '</div>',
                
            ];

            $('.area-details').html(area_info);
        });

    });


    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmFvbWlnIiwiYSI6ImNqZnU3ZmV5NjAxb3oycG1hbzllN2x5dmIifQ.pXBlEaoKwx_yPBesCr5X_A'
}).addTo(mymap);

    var marker = L.marker([51.5155, 0.13352768]).addTo(mymap);

    marker.bindPopup("<b>Barking and Dagenham</b><br>Population: 209k Bars and Pubs: 20 Crime: 14638 Crime per Population: 70.03827751 Rent: 943").openPopup();



});

