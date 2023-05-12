// this script generates conversion tables for web page

// conversion data - length, weight, volumn
const lenArray = 
[['Meters','Kilometers','Inches','Feet','Yards','Miles'],
[1,0.001,39.37008,3.28084,1.093613,0.000621],
[1000,1,39370.08,3280.84,1093.613,0.621371],
[0.0254,0.000025,1,0.083333,0.027778,0.000016],
[0.3048,0.000305,12,1,0.333333,0.000189],
[0.9144,0.000914,36,3,1,0.000568],
[1609.344,1.609344,63360,5280,1760,1]]

const wgtArray = 
[['Grams','Kilograms','Metric tons','Pounds','Ounces'],
[1.0,0.001,1e-06,0.002205,0.035273],
[1000.0,1.0,0.001,2.204586,35.27337],
[1000000.0,1000.0,1.0,2204.586,35273.37],
[453.6,0.4536,0.000454,1.0,16.0],
[28.0,0.02835,2.8e-05,0.0625,1.0]]

const areaArray = 
[['sq meters', 'hectare (ha)', 'sq feet (ft2)', 'sq mile (mi2)', 'acre (ac)'],
[1, 0.0001, 10.7639, 0.0000004, 0.000247], [1000, 1, 107639.10, 0.00386, 2.4711], 
[0.0929, 0.0000093, 1, 3.587e-08, 2.29568e-05], 
[2589988.11, 258.9988, 27878399.99, 1, 639.99], [4046.856, 0.404686, 43560.0, 0.0015625, 1]]

const volArray = 
[['Meter cube', 'Liter', 'US gallon', 'US quart', 'US Pint', 'US barrel (oil)'],
[1.0, 1000.0, 264.17, 1056.689, 2113.378, 6.29], [0.001, 1.0, 0.26417, 1.056689, 2.113378, 0.00629], [0.003785, 3.79, 1.0, 4.0, 8.0, 0.02381], [0.0009463525, 0.9463525, 0.25, 1.0, 2.0, 0.0059525], [0.0004731763, 0.47317625, 0.125, 0.5, 1.0, 0.00297625]]


// the function to add html tags
// 'placement' is the position in the html for the table
function showTable(array){
    var headerRow = ''
    var bodyRows = ''
    var table_html = ''
    for(let i = 0; i< array[0].length; i++){
        headerRow += '<th>'+ array[0][i] +'</th>';
    }

    for(let row_idx=1; row_idx < array.length; row_idx++){
        var cell_data = '';
        var row_data = '';
        for(let col_idx=0; col_idx<array[row_idx].length; col_idx++){
            cell_data += '<td>'+ array[row_idx][col_idx] +'</td>'
        };
        row_data += '<tr>'+ cell_data +'</tr>'
        bodyRows += row_data
    }

    headerRow = '<thead>' + '<tr>' + headerRow + '</tr>' + '</thead>'
    bodyRows = '<tbody>'+ bodyRows + '</tbody>'
    table_html = headerRow + bodyRows
    console.log(table_html)

    document.getElementById('conversionTable').innerHTML = table_html;
}
showTable(areaArray)