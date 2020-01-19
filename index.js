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

    /*************************qrcode***********************/
    var qr_close = document.querySelector('.qr-close')
    var qr_wraper = document.querySelector('.qr-wraper')
    qr_close.addEventListener('click', function () {
        qr_wraper.style.display = 'none'
    })

    /***********************service-float****************/
    var menu_items = document.querySelectorAll('.menu-item')
    var service_float = document.querySelector('.service-float')
    for (var i = 0; i < menu_items.length; i++) {
        menu_items[i].setAttribute('data-groupid', i)
        menu_items[i].addEventListener('mouseover', function () {
            service_float.style.display = 'block'
        })
        menu_items[i].addEventListener('mouseout', function () {
            service_float.style.display = 'none'
        })
    }
    service_float.addEventListener('mouseover', function () {
        service_float.style.display = 'block'
    })
    service_float.addEventListener('mouseout', function () {
        service_float.style.display = 'none'
    })

    /**********************notice-bd*********************/
    var notice_hd_li = document.querySelectorAll('.notice-hd>li')
    var notice_bd_ul = this.document.querySelectorAll('.notice-bd>ul')
    for (var i = 0; i < notice_hd_li.length; i++) {
        notice_hd_li[i].setAttribute('data-index', i)
        notice_hd_li[i].addEventListener('mouseover', function () {
            for (var i = 0; i < notice_hd_li.length; i++) {
                notice_hd_li[i].classList.remove('selected')
                notice_bd_ul[i].classList.remove('selected')
            }
            this.classList.add('selected')
            idx = parseInt(this.getAttribute('data-index'))
            notice_bd_ul[idx].classList.add('selected')
        })
    }

    /********************conve-bd-box*******************/
    var conve_list_float = document.querySelectorAll('.conve-float')
    var conve_bd_box = document.querySelector('.conve-bd-box')
    var conve_bd_items = document.querySelectorAll('.conve-bd-item')
    console.dir(conve_list_float)
    for (var i = 0; i < conve_list_float.length; i++) {
        conve_list_float[i].setAttribute('data-index', i)
        conve_bd_items[i].setAttribute('data-index', i)
        conve_list_float[i].addEventListener('mouseover', function () {
            for (var i = 0; i < conve_list_float.length; i++) {
                conve_list_float[i].classList.remove('selected')
                conve_bd_items[i].style.display = 'none'
            }
            this.classList.add('selected')
            conve_bd_box.style.display = 'block'
            item_idx = parseInt(this.getAttribute('data-index'))
            conve_bd_items[item_idx].style.display = 'block'
        })
    }
    var conve_bd_box_close = document.querySelector('.conve-bd-box-close')
    conve_bd_box_close.addEventListener('click', function () {
        conve_bd_box.style.display = 'none'
        for (var i = 0; i < conve_list_float.length; i++) {
            conve_list_float[i].classList.remove('selected')
        }
    })
    var phone_tabs = document.querySelectorAll('.phone-tabs>a')
    var phone_tabs_bd = document.querySelector('.phone-tabs-bd')
    var tabs_flag = true
    for (var i = 0; i < phone_tabs.length; i++) {
        phone_tabs[i].setAttribute('data-index', i)
        phone_tabs[i].addEventListener('mouseover', function () {
            if (tabs_flag) {
                tabs_flag = false
                for (var i = 0; i < phone_tabs.length; i++) {
                    phone_tabs[i].classList.remove('selected')
                }
                this.classList.add('selected')
                idx = parseInt(this.getAttribute('data-index'))
                animate(phone_tabs_bd, -idx * phone_tabs_bd.children[0].offsetWidth, function () {
                    tabs_flag = true
                })
            }
        })
    }
    /*****************************tbh-app***********************/
    var tbh_app_li = document.querySelectorAll(".tbh-app>ul>li")
    for (var i = 0; i < tbh_app_li.length; i++) {
        tbh_app_li[i].addEventListener('mouseover', function () {
            app_qr = this.querySelector(".app-qr")
            app_qr.style.display = 'block'
        })
        tbh_app_li[i].addEventListener('mouseout', function () {
            app_qr = this.querySelector(".app-qr")
            app_qr.style.display = 'none'
        })
    }
})