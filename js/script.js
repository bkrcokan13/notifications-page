const markReadAllBtn = document.getElementById("mark-all-btn");
const notificationCountLabel = document.getElementById("notification-count");
const notificationBoxs = document.querySelectorAll(".notification-box");
const notificationIcon = document.querySelectorAll(".unread-notification-icon");
function readAllNotifications() {
    document.addEventListener('DOMContentLoaded',() => {
        
        markReadAllBtn.addEventListener('click', () => {
            notificationBoxs.forEach((val,idx) => {
                val.classList.remove("unread-message");
                notificationIcon.forEach((val) => {
                    val.style.display = "none";
                })
                notificationCountLabel.style.display = "none";
            });
        })

    })
}

readAllNotifications();