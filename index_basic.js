function animate(obj, target, callback) {
    var timer = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearInterval(timer)
            callback && callback()
        } else {
            step = (target - obj.offsetLeft) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            obj.style.left = obj.offsetLeft + step + 'px'
        }
    }, 10)
}

function scroll_Y(obj, target, callback) {
    var timer = setInterval(function () {
        if (obj.pageYOffset == target) {
            clearInterval(timer)
            callback && callback()
        } else {
            step = (target - obj.pageYOffset) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            obj.scroll(0, obj.pageYOffset + step)
        }
    }, 15)
}
