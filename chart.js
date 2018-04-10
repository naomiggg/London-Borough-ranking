

Highcharts.chart('container', {

    chart: {
        type: 'scatter',
        plotBorderWidth: 0.1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Rents and crime rates per borough'
    },

    subtitle: {
        text: 'Source: <a href="met.police.uk/stats-and-data/">Met Police</a> and <a href="https://data.london.gov.uk/dataset/average-private-rents-borough/">London Datastore</a> <p>Excluding City of London</p>'
   },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Average rent for one bedroom flat'
        },
        labels: {
            format: '{value} £'
        },
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 2,
            value: 65,
            label: {
                rotation: 0,
                y: 15,
                style: {
                    fontStyle: 'italic'
                },
                text: 'Average crime rate per 1000: 73 cases'
            },
            zIndex: 3
        }]
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Crime rate per 1000 residents'
        },
        labels: {
            format: '{value} cases'
        },
        maxPadding: 0.2,
        plotLines: [{
            color: 'black',
            dashStyle: 'dot',
            width: 1,
            value: 20,
            label: {
                align: 'right',
                style: {
                    fontStyle: 'italic'
                },
                text: 'Average rent for one bedroom: £1,250',
                x: -10
            },
            zIndex: 2
        }]
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Average rent:</th><td>£{point.x}</td></tr>' +
            '<tr><th>Crime rate per 1000:</th><td>{point.y}cases</td></tr>' +
            '<tr><th>Precentage of Independent schools:</th><td>{point.z}%</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 2181 , y: 108.2, z:51.2 , name:'KnC', country: 'Kensington and Chelsea' },
            { x: 1973, y: 175.19, z:32.2 , name: 'WE', country: 'Westminster' },
            { x: 1612, y: 104.7, z:34.7, name: 'CA', country: 'Camden' },
            { x: 1590, y: 100.6, z:9.3 , name: 'IS', country: 'Islington' },
            { x: 1515, y: 85.5, z: 15.7, name: 'TH', country: 'Tower Hamlets' },
            { x: 1472, y: 90.9, z: 29.5, name: 'HA', country: 'Hackney' },
            { x: 1435, y: 95.1, z: 26.2, name: 'HF', country: 'Hammersmith and Fulham' },
            { x: 1403, y: 64.8, z: 26.7, name: 'WA', country: 'Wandsworth' },
            { x: 1377, y: 87.6, z: 10.7, name: 'SW', country: 'Southwark' },
            { x: 1340, y: 90.6, z: 9.9, name: 'LA', country: 'Lambeth' },
            { x: 1240, y: 69.9, z: 14.3, name: 'BR', country: 'Brent' },
            { x: 1232, y: 67.3, z: 18.2, name: 'EA', country: 'Ealing' },
            { x: 1229, y: 85.9, z: 12.8, name: 'HA', country: 'Haringey' },
            { x: 1200, y: 70, z: 14.1, name: 'HO', country: 'Hounslow' },
            { x: 1199, y: 52.7, z: 23.3, name: 'ME', country: 'Merton' },
            { x: 1199, y: 49.6, z: 27.5, name: 'RT', country: 'Richmond upon Thames' },
            { x: 1177, y: 76.7, z: 8.3, name: 'NE', country: 'Newham' },
            { x: 1135, y: 55.3, z: 22.3, name: 'BA', country: 'Barnet' },
            { x: 1125, y: 68.1, z: 8.4, name: 'LE', country: 'Lewisham' },
            { x: 1123, y: 71.5, z: 13.7, name: 'GR', country: 'Greenwich' },
            { x: 1108, y: 49.8, z: 18.7, name: 'KT', country: 'Kingston upon Thames' },
           { x: 1056, y: 64.8, z: 9.2, name: 'WF', country: 'Waltham Forest' },
           { x: 1055, y: 44.8, z: 17.6, name: 'HR', country: 'Harrow' },
         { x: 1035, y: 58.3, z: 11.2, name: 'EN', country: 'Enfield' },
        { x: 973, y: 63.7, z: 8.2, name: 'HI', country: 'Hillingdon' },
        { x: 972, y: 52.6, z: 15.7, name: 'BL', country: 'Bromley' },
       { x: 966, y: 55.7, z: 19.8, name: 'RB', country: 'Redbridge' },
       { x: 943, y: 70, z: 6.2, name: 'BD', country: 'Barking and Dagenham' },
      { x: 926, y: 66.7, z: 15.8, name: 'CR', country: 'Croydon' },
      { x: 896, y: 44.9, z: 8.7, name: 'ST', country: 'Sutton' },
     { x: 846, y:57.7, z: 7.8, name: 'HV', country: 'Havering' },
   { x: 821, y:45.7 , z: 5.6, name: 'BE', country: 'Bexley' }
      
       
        
      
     
           
            
        ]
    }]

});