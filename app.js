// Add document ready function to prevent incorrect performance on website (i.e., first load website, then perform js/ jQuery code)
//$(document).ready(function () {
    $('#logInForm').hide();

    $('#logIn').click(function(){
        $('#logInForm').show();
    });
//});
