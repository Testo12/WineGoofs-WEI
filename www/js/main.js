$.ready(showList());
//function to generate the full list and category divS
function showList(){
    $.ajax({
        type: 'GET',
        url: 'wine',
        success: function(list){
            var products = list;
            var $form = $('<form id="colorCategoryDropDown">');
            var colorList = '<option selected="selected" value="0">- Välj vin sort -</option>';
            var listItems = '<div id="objectCollection">';
            var lookup = {};
            var result = [];
            //Fetches all wines
            for (var i = 0; i < products.length; i++) {
         

                listItems += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + '</div></div>';

                
            };
            listItems += '</div>'
            //Puts results of the previous loop inside the wineList div
            $('#wineList').append(
                listItems
            );
            //Fetches all different wine colors uniquely. No duplicates. This will be used for categorization
            for (var item, i = 0; item = products[i++];) {
                var color = item.color;

                if (!(color in lookup)) {
                lookup[color] = 1;
                result.push(color);
                }
            };

            //creates all the different options
            for(var i = 0; i < result.length; i++){
                colorList += '<option value="'+result[i]+'">'+result[i]+'</option>';
            };
            //an option to go back and show all the wines
            colorList += '<option value="all">Show all</option>'
            //append everything to the div
            var $select = $('<select id="categoryList" class="winecategory" onchange="categorizeList(this.value)">').append(
                colorList
                

            );
            $form.append(
                $select
            );

            $('#categories').append(
                $form
            );

        }
    });
};

// after you click on a category it goes to this orginized function
function categorizeList(color){
    $.ajax({
        type: 'GET',
        url: 'wine',
        success: function(list){
            //Empties the div to prepare for input of new values
            $('#wineList').empty();
            var categorizedProducts = '';
            var products = list;
            listItems = '';
            if(color == 'all'){
            //Fetches all wines
                for (var i = 0; i < products.length; i++) {
                    listItems += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + '</div></div>';
                    
                };
                listItems += '</div>';
                //Puts results of the previous loop inside the wineList div
                $('#wineList').append(
                    listItems
                );
            };
            //fetches wines in this specific category
            for(var i = 0; i < products.length; i++){
                if(products[i].color == color){
                    categorizedProducts += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + '</div></div>';

                };
            };
            //puts them inside the div
            $('#wineList').append(
                categorizedProducts
            );

        }
    });
};

function showDetails(wineID){
    $.ajax({
        type: 'GET',
        url: 'wine/'+wineID,
        success: function(wine){
            $('.wineDetailsOverlay').empty();
            $('.wineDetailsOverlay').append(
                $('<span class="wineDetailsOverlay-close">x</span><img src="" />')
            );
            var wineDiv = $('#objectDiv');
            var wineOverlay = $('.wineDetailsOverlay');
            var productInformation = wine;
            var grapeArr = '';
            var $table = $('<table>');
            var $name = $('<tr>').append(
                $('<th>').text("Name"),
                $('<td>').text(productInformation.name)
            );
            var $price = $('<tr>').append(
                $('<th>').text("Price"),
                $('<td>').text(productInformation.price)                   
            );
            var $rating = $('<tr>').append(
                $('<th>').text("Rating"),
                $('<td>').text(productInformation.stars)
            );
            var $color = $('<tr>').append(
                $('<th>').text("Color"),
                $('<td>').text(productInformation.color)
            );
            var $country = $('<tr>').append(
                $('<th>').text("Country of origin"),
                $('<td>').text(productInformation.country)
            );
            for(var i = 0; i<productInformation.grapes.length; i++){
                grapeArr += '<option value = "'+productInformation.grapes[i]+'">'+productInformation.grapes[i]+'</option>';
            }
            var $grapes = $('<tr>').append(
                $('<th>').text("Grapes"),
                $('<td>').append(
                    $('<form id="grapeDropDown">').append(
                        $('<select id="grapeList">').append(
                            grapeArr
                        )
                    )

                )
            );
            var $year = $('<tr>').append(
                $('<th>').text("Year Made"),
                $('<td>').text(productInformation.yearMade)
            );
            var $region = $('<tr>').append(
                $('<th>').text("Region"),
                $('<td>').text(productInformation.region)
            );
            $table.append(
                $name,
                $price,
                $rating,
                $color,
                $country,
                $grapes,
                $year,
                $region
            );
            $('.wineDetailsOverlay').append(
                $table
            );
            wineOverlay.fadeIn(100);
            $('body').css('overflow', 'hidden');
            $('.wineDetailsOverlay-close').click(function () {
                wineOverlay.fadeOut(100);
                $('body').css('overflow', 'auto');
            });

        }
    });
};