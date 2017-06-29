(function($) {
    'use strict';

    $('#load').click(function() {
        let loadDetails = {
            amount: parseInt($('#loads').val()),
            currency: $('#loads option:selected').attr('data-currency'),
            payment_method: $('input[type="radio"]:checked').val()
        };

        $.ajax({
            type: 'POST',
            url: '/v1/wallet/api/credits',
            data: JSON.stringify(loadDetails),
            contentType: 'application/json',
            success: function(data) {
                window.location = data.redirect;
            }
        });
    });

    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: '/v1/wallet/api/credits',
            success: function(data) {
                $('#current-balance span').text(data.balance + ' ' + data.currency)
            }
        });
    });
})(jQuery);
