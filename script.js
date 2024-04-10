document.addEventListener('DOMContentLoaded', function() {
    var notificationButton = document.getElementById('notificationButton');
    notificationButton.addEventListener('click', function() {
        sendNotification();
    });

    function sendNotification() {
        OneSignal.push(function() {
            OneSignal.sendSelfNotification('Hello from OneSignal!', function() {
                console.log('Notification sent!');
            });
        });
    }
});
