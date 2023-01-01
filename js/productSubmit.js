// Javascript will be executed when the submit button is clicked.
//
$("#formSubmit").click(function(event){

    // The method "event.preventDefault" prevents default actions that browsers make when an event is triggered.
    //
    event.preventDefault();
    var record = [];
    var sku;
    var size;
    var quantity;
    var index = 0;
    var desc;

    // Jquery script to retrieve input, select elements in the form
    //
    $('#formProduct input, #formProduct select').each(
        function(index){
            var input = $(this);
            console.log(input);
            if (input.attr('name') == "size") {
                size = input.val();
            }
            if (input.attr('name') == "quantity") {
                quantity = input.val();
            }
        }
    );

    //Jquery script to retrieve the SKU based on class that is not hidden
    //
    index = 0;
    $('.polo :visible').each(
        function(index){
            var input = $(this);
            descr = input.html();
            //Check if the input has the string "SKU"
            //
            if (descr.indexOf("SKU") > 0){
                //Extract the SKU number from the string
                //
                sku = descr.substring(descr.indexOf("SKU"),descr.substring(descr.indexOf("SKU")+5));
            }
        }
    )
    // Assign the variable to the array record
    //
    var record = [sku, size, quantity];
    // Write the array to the session storage
    //
    window.sessionStorage.setItem(sku,JSON.stringify(record));
})