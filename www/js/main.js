$.ready(showList());
//function to generate the full list and category divS
function showList(){
    $.ajax({
        type: 'GET',
        url: 'wine',
        success: function(list){
            var products = list;
            var $form = $('<form id="colorCategoryDropDown">');
            var colorList = '<option selected="selected" value="0">- Select color of wine -</option>';
            var listItems = '<div id="objectCollection">';
            var lookup = {};
            var result = [];
            //Fetches all wines
            for (var i = 0; i < products.length; i++) {
                listItems += '<div class="objectDiv">' + products[i].name + ' ' + products[i].price + '</div>';
                
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
            var $select = $('<select id="categoryList" onchange="categorizeList(this.value)">').append(
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
                    listItems += '<div class="objectDiv">' + products[i].name + ' ' + products[i].price + '</div>';
                    
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
                    categorizedProducts += '<div class="objectDiv">' + products[i].name + ' ' + products[i].price + '</div>';
                };
            };
            //puts them inside the div
            $('#wineList').append(
                categorizedProducts
            );

        }
    });
};