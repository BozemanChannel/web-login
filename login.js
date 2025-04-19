$(document).ready(function () {
    $('input').focus(function () {
        const icon = $(this).siblings('img');
        icon.attr('src', 'PNG/login_activated.png');
    }).blur(function () {
        const icon = $(this).siblings('img');
        icon.attr('src', $(this).attr('type') === 'email' ? 'PNG/user.png' : 'PNG/locked.png');
    });

    $('.button').click(function (e) {
        e.preventDefault(); // чтобы форма не отправлялась

        const $btn = $(this);
        const originalHtml = $btn.html();

        $btn.html(`<div class="spinner"></div> Loading...`);
        $btn.prop('disabled', true); // отключаем кнопку

        setTimeout(() => {
            $btn.html(originalHtml);
            $btn.prop('disabled', false);
        }, 2000); // ← тут можно указать время "загрузки"
    });
});
