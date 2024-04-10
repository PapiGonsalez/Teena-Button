document.addEventListener('DOMContentLoaded', function() {
    var notificationButton = document.getElementById('notificationButton');
    notificationButton.addEventListener('click', function() {
        sendNotification();
    });

    function sendNotification() {
        // Prepare the notification payload
        var notificationData = {
            headings: { en: "Hello from your website!" },
            contents: { en: "You pressed the notification button!" },
            url: "https://example.com",
            // You can customize additional properties here if needed
        };

        // Send the notification
        OneSignal.push(function() {
            OneSignal.postNotification(notificationData, function(successResponse) {
            console.log("Notification sent:", successResponse);
        },  function(errorResponse) {
            console.error("Notification failed:", errorResponse);
        });
    }});
});


