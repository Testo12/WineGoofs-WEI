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
         

<<<<<<< HEAD
                listItems += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + " kr" + '</div></div>';
=======
                listItems += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img-fluid" alt="Responsive image" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + " kr" + '</div></div>';
>>>>>>> 3faace69bf7d39f64265da359dff5b0c28154a66

                
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
<<<<<<< HEAD
                    listItems += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + " kr" + '</div></div>';
=======
                    listItems += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img-fluid" alt="Responsive image" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + " kr" + '</div></div>';
>>>>>>> 3faace69bf7d39f64265da359dff5b0c28154a66
                    
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
<<<<<<< HEAD
                    categorizedProducts += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + " kr" + '</div></div>';
=======
                    categorizedProducts += '<div class="wines" onClick=showDetails("'+ products[i]._id +'")><img class="img-fluid" alt="Responsive image" src="../IMG/'+products[i].articleNumber+'.jpg"><div class="wineName">' + products[i].name + '</div> <div class="winePrice">' + products[i].price + " kr" + '</div></div>';
>>>>>>> 3faace69bf7d39f64265da359dff5b0c28154a66

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
                $('<span type="button" class=" wineDetailsOverlay-close btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Close">X</span><img src="" />')
            );
            var wineDiv = $('#objectDiv');
            var wineOverlay = $('.wineDetailsOverlay');
            var productInformation = wine;
            var grapeArr = '';
            var $table = $('<table class="winedetails">');

            var $name = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Namn: " + productInformation.name)
            );
            var $price = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Pris: " + productInformation.price)                   
            );
            var $rating = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Betyg: " + productInformation.stars)
            );
            var $color = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Vinsort: " + productInformation.color)
            );
            var $country = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Ursprung: " + productInformation.country)

            );
            
            if (productInformation.grapes.length <= 1) 
            {
                grapeArr = productInformation.grapes
            }

            else
                {
                    for(var i = 0; i<productInformation.grapes.length; i++){
                        grapeArr += productInformation.grapes[i]+ ", "
                    }
                }
            var $grapes = $('<tr class="infospace">').append(
                $('<td class="infospace">').append(
                    "Druvor: " + grapeArr
                    )
            );

            var $year = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Produktions År: " + productInformation.yearMade)

            );
            var $region = $('<tr class="infospace">').append(
                
                $('<td class="infospace">').text("Region: " + productInformation.region)
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
                $table,
                $('<button onClick="addCart("'+ productInformation.articleNumber +'")">Lägg till korgen</button>')
            );
            $('.wineDetailsOverlay, #overlay-back').fadeIn(500);
            $('body').css('overflow', 'hidden');
            $('.wineDetailsOverlay-close').click(function () {
                $('.wineDetailsOverlay, #overlay-back').fadeOut(500);
                $('body').css('overflow', 'auto');
            });

        }
    });
};

function addCart(wineNumber){
    var product = {
        winearticleNumber: wineNumber
    };
    $.ajax({
        type: 'POST',
        contentType : "application/json",
        url: 'cart/create',
        data : JSON.stringify(product),
        success: function(response){
            loadCart(wineNumber);
        }
    });
};

function loadCart(wineNumber){
    $.ajax({
        type: 'GET',
        url: 'wine',
        success: function(list){
            var wineList = list;
            var wineID;
            for(var i = 0; i < wineList; i++){
                if(wineNumber == wineList[i].articleNumber){
                    wineID += wineList[i]._id;
                };
            };
            $.ajax({
                type: 'GET',
                url: 'cart/'+wineID,
                success: function(result){
                    
                }
            })
        }
    });
};

