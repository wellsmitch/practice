zy.util.provide("zy.util.global.mq");
zy.util.global.mq = {
    data: {},
    get: function (name) {
        return this.data[name];
    },
    put: function (name, obj) {
        this.data[name] = obj;
        // console.log(this.data);
        return this;
    }
};
zy.util.provide("zy.util.mq");
zy.util.mq = function (topic, data, listenerKeyList) {
    // console.log(topic);
    zy.util.global.mq.put(topic, this);
    this.data = data;
    this.subscribeList = [];
    this.listenerKeyList = listenerKeyList;
    var that = this;
    if (this.data instanceof Array) {
        this.data.push = function (info) {
            that.add(info);
        };
        this.data.splice = function (index, length) {
            that.remove(index, length);
        };

        this.tempData = this.data.concat();
        this.data.forEach(function (item, index) {
            that.addListener(index);
        });
    }
};
zy.util.mq.prototype.register = function (obj) {
    this.subscribeList.push(obj);
};
zy.util.mq.prototype.addListener = function (index) {
    var that = this;
    if (this.data instanceof Array) {
        if (Object.getOwnPropertyDescriptor(that.data, index).get) {
            return;
        }
        Object.defineProperty(that.data, index, {
            get: function () {
                return that.tempData[index];
            },
            set: function (newValue) {
                var oldInfo = that.tempData[index];
                that.tempData[index] = newValue;
                if (!that.removing) {
                    that.update(newValue, oldInfo);
                }
            }
        });
    }

    this.listenerKeyList.forEach(function (key) {
        if (typeof that.data[index] != 'object') {
            return;
        }
        if (Object.getOwnPropertyDescriptor(that.data[index], key)) {
            return;
        }
        var data = JSON.parse(JSON.stringify(that.data[index]));
        (function (data) {
            Object.defineProperty(that.data[index], key, {
                get: function () {
                    return data[key];
                },
                set: function (newValue) {
                    data[key] = newValue;
                    that.modifyProperties(that.data[index], key, newValue);
                }
            });
        })(data);
    });
};
zy.util.mq.prototype.add = function (info) {
    Array.prototype.push.call(this.data, info);
    Array.prototype.push.call(this.tempData, info);
    this.addListener(this.data.length - 1);
    this.subscribeList.forEach(function (item) {
        try {
            item.add && item.add(info);
        } catch (e) {
            console.error(e);
        }
    });
};
zy.util.mq.prototype.update = function (newInfo, oldInfo) {
    this.subscribeList.forEach(function (item) {
        try {
            item.update && item.update(newInfo, oldInfo);
        } catch (e) {
            console.error(e);
        }
    });
};
zy.util.mq.prototype.remove = function (index, length) {
    var info = this.data[index];
    this.removing = true;
    Array.prototype.splice.call(this.data, index, length);
    Array.prototype.pop.call(this.tempData);
    this.removing = false;
    this.subscribeList.forEach(function (item) {
        try {
            item.remove && item.remove(info, index);
        } catch (e) {
            console.error(e);
        }
    });

};
zy.util.mq.prototype.modifyProperties = function (info, key, value) {
    this.subscribeList.forEach(function (item) {
        try {
            item.modifyProperties && item.modifyProperties(info, key, value);
        } catch (e) {
            console.error(e);
        }
    });
};
zy.util.mq.prototype.getData = function () {
    return this.data;
};