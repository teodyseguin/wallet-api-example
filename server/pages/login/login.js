(function() {
    'use strict';

    $('#login').click(function() {
        let loginDetails = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            type: 'POST',
            url: '/v1/wallet/api/auth',
            data: JSON.stringify(loginDetails),
            contentType: 'application/json',
            success: function(data) {
                if (data.message === 'User authenticated') {
                    window.location = '/load';
                }
            }
        });
    });
})();
