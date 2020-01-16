window.addEventListener('load', function () {
    /*************promo轮播图**************/
    var thb_promo = document.querySelector('.tbh-promo')
    var arrow_left = document.querySelector('.arrow-left')
    var arrow_right = document.querySelector('.arrow-right')
    thb_promo.addEventListener('mouseover', function () {
        arrow_left.style.display = 'block'
        arrow_right.style.display = 'block'
    })
    thb_promo.addEventListener('mouseout', function () {
        arrow_left.style.display = 'none'
        arrow_right.style.display = 'none'
    })
    var promo_img_li = document.querySelectorAll('.promo-img>li')
    var promo_nav = document.querySelector(".promo-nav")
    var promo_img = document.querySelector(".promo-img")
    var promo_nav_len = promo_img_li.length
    var promo_flag = true
    promo_img.appendChild(promo_img_li[0].cloneNode(true))
    for (var i = 0; i < promo_nav_len; i++) {
        li = document.createElement('li')
        li.setAttribute('data-index', i)
        promo_nav.appendChild(li)
        li.addEventListener('click', function () {
            if (promo_flag) {
                promo_flag = false
                clearInterval(promo_timer)
                for (var j = 0; j < promo_nav_len; j++) {
                    promo_nav.children[j].className = ''
                }
                this.className = 'selected'
                idx = this.getAttribute('data-index')
                animate(promo_img, -idx * promo_img_li[idx].offsetWidth, function () {
                    promo_flag = true
                    promo_timer = setInterval(function () {
                        arrow_right.click()
                    }, 5000)
                })
            }
        })
    }
    promo_nav.children[0].className = 'selected'
    arrow_right.addEventListener('click', function () {
        if (promo_flag) {
            promo_flag = false
            var promo_nav_li_selected = document.querySelector('.promo-nav>li.selected')
            idx = parseInt(promo_nav_li_selected.getAttribute('data-index')) + 1
            for (var i = 0; i < promo_nav_len; i++) {
                promo_nav.children[i].className = ''
            }
            if (idx >= promo_nav_len) {
                promo_nav.children[0].className = 'selected'
                promo_img.style.left = 0
            } else {
                promo_nav.children[idx].className = 'selected'
            }
            animate(promo_img, -idx * promo_img_li[0].offsetWidth, function () {
                promo_flag = true
            })
        }
    })
    var promo_timer = setInterval(function () {
        arrow_right.click()
    }, 5000)
    arrow_left.addEventListener('click', function () {
        if (promo_flag) {
            promo_flag = false
            clearInterval(promo_timer)
            var promo_nav_li_selected = document.querySelector('.promo-nav>li.selected')
            idx = parseInt(promo_nav_li_selected.getAttribute('data-index')) - 1
            for (var i = 0; i < promo_nav_len; i++) {
                promo_nav.children[i].className = ''
            }
            if (idx < 0) {
                idx = promo_nav_len - 1
                promo_nav.children[idx].className = 'selected'
                promo_img.style.left = idx * promo_nav.children[0].offsetWidth
            } else {
                promo_nav.children[idx].className = 'selected'
            }
            animate(promo_img, -idx * promo_img_li[idx].offsetWidth, function () {
                promo_flag = true
                promo_timer = setInterval(function () {
                    arrow_right.click()
                }, 5000)
            })
        }
    })
    promo_img.addEventListener('mouseover', function () {
        clearInterval(promo_timer)
        promo_timer = null
    })
    promo_img.addEventListener('mouseout', function () {
        promo_timer = setInterval(function () {
            arrow_right.click()
        }, 5000)
    })

    /*******************fixedtool***********************/
    var fixedtool = document.querySelector(".fixedtool")
    var totop = fixedtool.children[6]
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= 530) {
            fixedtool.className = 'fixedtool fixedtool-fixed'
            totop.style.display = 'block'
        } else {
            fixedtool.className = 'fixedtool'
            totop.style.display = 'none'
        }
    })
    totop.addEventListener('click', function () {
        scroll_Y(window, 0)
    })
})