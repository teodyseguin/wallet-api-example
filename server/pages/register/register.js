(function($) {
    'use strict';

    $('#register').click(function() {
        let details = {
            name: $('#name').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            type: 'POST',
            url: '/v1/wallet/api/users',
            data: JSON.stringify(details),
            contentType: 'application/json',
            success: function(data) {
                if (data.registered) {
                    $.ajax({
                        type: 'POST',
                        url: '/v1/wallet/api/auth',
                        data: JSON.stringify({ email: details.email, password: details.password }),
                        contentType: 'application/json',
                        success: function(data) {
                            if (data.message === 'User authenticated') {
                                window.location = '/load';
                            }
                        }
                    });
                }
                else {
                    alert('Something went wrong, please try again');
                }
            }
        });
    });
})(jQuery);
