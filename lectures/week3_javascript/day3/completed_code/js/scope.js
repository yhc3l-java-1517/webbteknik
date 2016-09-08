var myApi = (function() {
    var password = 'mySecret'; //private
    return {
        getPassword: function() {
            return password;
        }
    }
})();
