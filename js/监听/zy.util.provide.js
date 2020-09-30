var zy = {
    util: {
        provide: function (name) {
            var list = name.split('.');
            var concat = '';
            list.forEach(function (name) {
                concat += name;
                if (eval('typeof ' + concat + '===\'undefined\'')) {
                    eval(concat + '= {}');
                }
                concat += '.';
            });
            return this;
        }
    }
};