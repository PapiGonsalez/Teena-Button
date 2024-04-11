document.addEventListener('DOMContentLoaded', function() {
    var notificationButton = document.getElementById('notificationButton');
    notificationButton.addEventListener('click', function() {
        sendNotification();
    });

    function sendNotification() {
        // Check if OneSignal is initialized
        if (!OneSignal) {
            console.error("OneSignal is not initialized.");
            return;
        }

        // Prepare notification data
        var notificationData = {
            headings: { en: "Hello from your website!" },
            contents: { en: "You pressed the notification button!" },
            url: 'https://example.com',
            // icon: 'https://yourwebsite.com/icon.png', // You can include an icon if needed
            data: { additionalData: 'optional additional data' },
            buttons: [{ id: 'view-button', text: 'View', icon: 'https://example.com/view-button-icon.png' }]
        };

        // Send the notification
        OneSignal.postNotification(notificationData,
            function(successResponse) {
                console.log("Notification sent:", successResponse);
            },
            function(errorResponse) {
                console.error("Error
