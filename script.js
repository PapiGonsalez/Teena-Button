document.addEventListener('DOMContentLoaded', function() {
    var notificationButton = document.getElementById('notificationButton');
    notificationButton.addEventListener('click', function() {
        sendNotification();
    });

    function sendNotification() {
        // Send a notification
        OneSignal.sendSelfNotification(
            /* Title (can be omitted for some platforms) */
            "Hello from your website!",
            /* Message */
            "You pressed the notification button!",
            /* URL to open when notification is clicked */
            'https://example.com',
            /* Icon URL (can be omitted for some platforms) */
            'https://yourwebsite.com/icon.png',
            /* Callback function after notification is sent */
            function (ignored) {
                console.log('Notification sent!');
            }
        );
    }
});
