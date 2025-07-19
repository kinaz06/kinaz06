// برنامج بسيط لإظهار رسالة بعد إرسال نموذج الاتصال

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح!');
            form.reset();
        });
    }
});
