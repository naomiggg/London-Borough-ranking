$(document).ready(function() {

    var select = $('<select><option>Choose Area</option></select>').appendTo('.selection');
    var selectDatas = $('.selection-types select');

    $.get('boroughs.json', function(data) {

        $.each(data, function(index, item) {
            select.append($('<option>').attr('value', item.area).text(item.area));
        });

        select.change(function(e) {
            var area = data.find(item => item['area'] === this.value);

            var tweets = [];

            $.each(area['tweets'], function(index,tweet){                    
                tweets.push('<div class="tweet"><p class="text">' + tweet['text'] + '</p> <p class="info">By ' + tweet['screen_name'] + ' at ' + tweet['created_at'] + '</p></div>');
            });

            var area_info = [
                '<div><strong>Area Name:</strong> ' + area['area'] + '</div>',
                '<div><strong>Population 2017:</strong> ' + area['population'] + '</div>',
                '<div><strong>Bars and Pubs:</strong> ' + area['bars-and-pubs'] + '</div>',
                '<div><strong>Crime:</strong> ' + area['crime'] + '</div>',
                '<div><strong>Crime per 1000 residents:</strong> ' + area['crime-per-pop'] + '</div>',
                '<div><strong>Average rent for a one bedroom flat:</strong> £' + area['rent'] + '</div>',
                '<div><strong>Schools:</strong> ' + area['schools'] + '</div>',
                '<div><strong>Independent Schools:</strong> ' + area['independent-schools'] + '</div>',
                '<strong>Tweets from area:</strong> <br />' + tweets.join('')
            ];

            $('.area-details').html(area_info);
        });

        selectDatas.change(function(e) {

            var type = this.value;
            

            if(type) {

                var all_type_data = [];

                $.each(data, function(index, item) {
                    all_type_data.push({
                        area: item['area'],
                        value: item[type]
                    });
                });

                all_type_data.sort(function(a, b) {
                    return b.value - a.value;
                });


                var area_info = [];

                $.each(all_type_data, function(index, item) {
                    
                    area_info.push(
                        '<div><strong>' + item['area'] + '</strong> ' + item['value'] + '</div>'
                    );
    
               
    
                });
    
                $('.area-details-types').html(area_info);
            } else {
                $('.area-details-types').html('Select data type from the list');
            }

          
            
        });



        var mymap = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibmFvbWlnIiwiYSI6ImNqZnU3ZmV5NjAxb3oycG1hbzllN2x5dmIifQ.pXBlEaoKwx_yPBesCr5X_A'
        }).addTo(mymap);
    
        

        $.each(data, function(index, item) {

            var marker = L.marker([item.latitude, item.longitude]).addTo(mymap);

            var popupText = [
                '<h4>' + item['area'] + '</h4>',
            '<div><strong>Population 2017:</strong> ' + item['population'] + '</div>',
                '<div><strong>Bars and Pubs:</strong> ' + item['bars-and-pubs'] + '</div>',
            '<div><strong>Crime:</strong> ' + item['crime'] + '</div>',
           '<div><strong>Crime per 1000 residents:</strong> ' + item['crime-per-pop'] + '</div>',
                '<div><strong>Average rent for a one bedroom flat:</strong> £' + item['rent'] + '</div>',
                '<div><strong>Schools:</strong> ' + item['schools'] + '</div>',
                '<div><strong>Independent Schools:</strong> ' + item['independent-schools'] + '</div>',
            ];
            
            marker.bindPopup(popupText.join(''));

        });
    
    
   
    
    





    });


});