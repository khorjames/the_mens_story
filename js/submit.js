// Javascript will be executed when the submit button is clicked.
//
$("#formSubmit").click(function(event){

    // The method "event.preventDefault" prevents default actions that browsers make when an event is triggered.
    //
    event.preventDefault();
    var record = [];
    var firstName;
    var lastName;
    var country;
    var email;
    var subject;
    var index = 0;

    $('#formFashion input, #formFashion select, #formFashion textarea').each(
        function(index){
            var input = $(this);
            if (input.attr('name') == "firstName") {
                firstName = input.val();
                console.log(firstName);
            }
            if (input.attr('name') == "lastName") {
                lastName = input.val();
                console.log(lastName);
            }

            if (input.attr('name') == "email") {
                email = input.val();
                console.log(email);
            }

            if (input.attr('name') == "country") {
                country = input.val();
                console.log(country);
            }

            if (input.attr('name') == "subject") {
                subject = input.val();
                console.log(subject);
            }
        }
    );

    // Assign the variable to the array record
    //
    var record = [firstName, lastName, country, email, subject];

    console.log(record);

    // Write the array to the session storage
    //
    window.sessionStorage.setItem(firstName,JSON.stringify(record));
})