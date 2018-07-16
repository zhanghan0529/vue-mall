let mixin = {
    filters: {
        price: function (value) {
            value = String(value)
            if (!value) return;
            if (value.indexOf('.') === -1) {
                return value = value + '.00'
            } else {
                let arr = value.split('.')
                if (arr[1].length === 1) {
                    return value = value + '0'
                } else {
                    return value;
                }
            }
        }
    }
}
export default mixin