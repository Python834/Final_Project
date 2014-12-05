/**
 * Created by Owner on 11/4/2014.
 */
$(".container").tabs({
    collapsible: false,
    show: {effect:"slide", duration: 500}
});

$( "#sortable" ).sortable();

$('#orderLink').on('click', function(event){
    event.preventDefault();
    Navigator.vibrate(5000);
    showAlert()
});

document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    // Empty
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

function showAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
}