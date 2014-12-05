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

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    // Empty
}

// Show a custom alert
//
function showAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        'Game Over',            // title
        'Done'                  // buttonName
    );
}

// Beep three times
//
function playBeep() {
    navigator.notification.beep(3);
}

// Vibrate for 2 seconds
//
function vibrate() {
    navigator.notification.vibrate(2000);
}