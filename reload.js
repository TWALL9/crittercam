[
    'accessKeyId',
    'secretKey'
].forEach(function(field) {
    var id = "#" + field;

    try {
        var localStorageValue = localStorage.getItem(field);
        if (localStorageValue) {
            $(id).val(localStorageValue);
            $(id).trigger('change');
        }
    } catch (e) {
        console.error(e);
    }

    $(id).change(function() {
        try {
            localStorage.setItem(field, $(id).val());
        } catch (e) {
            console.error(e);
        }
    });
});