! function(e) {
    "use strict";

    function t(t) {
        e(t).length > 0 && e(t).each((function() {
            var t = e(this).find("a");
            e(this).find(t).each((function() {
                e(this).on("click", (function() {
                    var t = e(this.getAttribute("href"));
                    t.length && (event.preventDefault(), e("html, body").stop().animate({
                        scrollTop: t.offset().top - 10
                    }, 1e3))
                }))
            }))
        }))
    }
    if (e(window).on("load", (function() {
            e(".preloader").fadeOut()
        })), e(window).on("resize", (function() {
            e(".slick-slider").slick("refresh")
        })), e(".nice-select").length && e(".nice-select").niceSelect(), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(".preloader").css("display", "none")
            }))
        })), e.fn.thmobilemenu = function(t) {
            var s = e.extend({
                menuToggleBtn: ".th-menu-toggle",
                bodyToggleClass: "th-body-visible",
                subMenuClass: "th-submenu",
                subMenuParent: "menu-item-has-children",
                thSubMenuParent: "th-item-has-children",
                subMenuParentToggle: "th-active",
                meanExpandClass: "th-mean-expand",
                subMenuToggleClass: "th-open",
                toggleSpeed: 400
            }, t);
            return this.each((function() {
                var t = e(this);

                function a() {
                    t.toggleClass(s.bodyToggleClass);
                    var a = "." + s.subMenuClass;
                    e(a).each((function() {
                        e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle))
                    }))
                }
                t.find("." + s.subMenuParent).each((function() {
                    var t = e(this).find("ul");
                    t.addClass(s.subMenuClass), t.css("display", "none"), e(this).addClass(s.subMenuParent), e(this).addClass(s.thSubMenuParent), e(this).children("a").append(s.appendElement)
                }));
                var o = "." + s.thSubMenuParent + " > a";
                e(o).each((function() {
                    e(this).on("click", (function(t) {
                        var a, o;
                        t.preventDefault(), a = e(this).parent(), (o = a.children("ul")).length > 0 && (a.toggleClass(s.subMenuParentToggle), o.slideToggle(s.toggleSpeed), o.toggleClass(s.subMenuToggleClass))
                    }))
                })), e(s.menuToggleBtn).each((function() {
                    e(this).on("click", (function() {
                        a()
                    }))
                })), t.on("click", (function(e) {
                    e.stopPropagation(), a()
                })), t.find("div").on("click", (function(e) {
                    e.stopPropagation()
                }))
            }))
        }, e(".th-menu-wrapper").thmobilemenu(), e(window).on("scroll", (function() {
            var t = e(this).scrollTop();

            function s() {
                t > 400 && (e(".sticky-wrapper").addClass("sticky"), e(".sticky-wrapper").removeClass("will-sticky"))
            }
            s(), t > 150 ? (e(".sticky-wrapper").addClass("will-sticky"), s()) : (e(".sticky-wrapper").removeClass("sticky"), e(".sticky-wrapper").removeClass("will-sticky"))
        })), t(".onepage-nav"), t(".scroll-down"), e(".scroll-top").length > 0) {
        var s = document.querySelector(".scroll-top"),
            a = document.querySelector(".scroll-top path"),
            o = a.getTotalLength();
        a.style.transition = a.style.WebkitTransition = "none", a.style.strokeDasharray = o + " " + o, a.style.strokeDashoffset = o, a.getBoundingClientRect(), a.style.transition = a.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var n = function() {
            var t = e(window).scrollTop(),
                s = e(document).height() - e(window).height(),
                n = o - t * o / s;
            a.style.strokeDashoffset = n
        };
        n(), e(window).scroll(n);
        jQuery(window).on("scroll", (function() {
            jQuery(this).scrollTop() > 50 ? jQuery(s).addClass("show") : jQuery(s).removeClass("show")
        })), jQuery(s).on("click", (function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 750), !1
        }))
    }
    e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e(".th-carousel").each((function() {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }
        var a = '<button type="button" class="slick-prev"><i class="' + s("prev-arrow") + '"></i></button>',
            o = '<button type="button" class="slick-next"><i class="' + s("next-arrow") + '"></i></button>';
        e("[data-slick-next]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-next")).slick("slickNext")
            }))
        })), e("[data-slick-prev]").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(e(this).data("slick-prev")).slick("slickPrev")
            }))
        })), 1 == s("arrows") && (t.closest(".arrow-wrap").length || t.closest(".container").parent().addClass("arrow-wrap")), t.slick({
            dots: !!s("dots"),
            fade: !!s("fade"),
            arrows: !!s("arrows"),
            speed: s("speed") ? s("speed") : 1e3,
            asNavFor: !!s("asnavfor") && s("asnavfor"),
            autoplay: 0 != s("autoplay"),
            infinite: 0 != s("infinite"),
            slidesToShow: s("slide-show") ? s("slide-show") : 1,
            adaptiveHeight: !!s("adaptive-height"),
            centerMode: !!s("center-mode"),
            autoplaySpeed: s("autoplay-speed") ? s("autoplay-speed") : 8e3,
            centerPadding: s("center-padding") ? s("center-padding") : "0",
            focusOnSelect: 0 != s("focuson-select"),
            pauseOnFocus: !!s("pauseon-focus"),
            pauseOnHover: !!s("pauseon-hover"),
            variableWidth: !!s("variable-width"),
            vertical: !!s("vertical"),
            verticalSwiping: !!s("vertical"),
            prevArrow: s("prev-arrow") ? a : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: s("next-arrow") ? o : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            rtl: "rtl" == e("html").attr("dir"),
            responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: !!s("xl-arrows"),
                    dots: !!s("xl-dots"),
                    slidesToShow: s("xl-slide-show") ? s("xl-slide-show") : s("slide-show"),
                    centerMode: !!s("xl-center-mode"),
                    centerPadding: "0"
                }
            }, {
                breakpoint: 1400,
                settings: {
                    arrows: !!s("ml-arrows"),
                    dots: !!s("ml-dots"),
                    slidesToShow: s("ml-slide-show") ? s("ml-slide-show") : s("slide-show"),
                    centerMode: !!s("ml-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: !!s("lg-arrows"),
                    dots: !!s("lg-dots"),
                    slidesToShow: s("lg-slide-show") ? s("lg-slide-show") : s("slide-show"),
                    centerMode: !!s("lg-center-mode") && s("lg-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 992,
                settings: {
                    arrows: !!s("md-arrows"),
                    dots: !!s("md-dots"),
                    slidesToShow: s("md-slide-show") ? s("md-slide-show") : 1,
                    centerMode: !!s("md-center-mode") && s("md-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !!s("sm-arrows"),
                    dots: !!s("sm-dots"),
                    slidesToShow: s("sm-slide-show") ? s("sm-slide-show") : 1,
                    centerMode: !!s("sm-center-mode") && s("sm-center-mode"),
                    centerPadding: 0
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: !!s("xs-arrows"),
                    dots: !!s("xs-dots"),
                    slidesToShow: s("xs-slide-show") ? s("xs-slide-show") : 1,
                    centerMode: !!s("xs-center-mode") && s("xs-center-mode"),
                    centerPadding: 0
                }
            }]
        })
    }));
    var i = e(".hero-slider-6"),
        r = e(".progress"),
        l = e(".pagingInfo1"),
        c = e(".slider__label"),
        d = e(".pagingInfo2");
    i.on("init reInit afterChange", (function(e, t, s, a) {
        if (t.$dots) {
            var o = (s || 0) + 0;
            l.text(o + 1), d.text(t.slideCount)
        }
    })), i.on("beforeChange", (function(e, t, s, a) {
        var o = a / (t.slideCount - 1) * 100;
        r.css("background-size", o + "% 100%").attr("aria-valuenow", o), c.text(o + "% completed")
    }));
    var u = e(".slick-3d-active");
    u.on("init", (function(t, s, a) {
        var o = e(s.$slides[s.currentSlide]),
            n = o.next(),
            i = o.next().next(),
            r = o.prev(),
            l = o.prev().prev();
        r.addClass("slick-3d-prev"), n.addClass("slick-3d-next"), l.addClass("slick-3d-prev2"), i.addClass("slick-3d-next2"), o.removeClass("slick-3d-next").removeClass("slick-3d-prev").removeClass("slick-3d-next2").removeClass("slick-3d-prev2"), s.$prev = r, s.$next = n
    })).on("beforeChange", (function(t, s, a, o) {
        var n = e(s.$slides[o]);
        s.$prev.removeClass("slick-3d-prev"), s.$next.removeClass("slick-3d-next"), s.$prev.prev().removeClass("slick-3d-prev2"), s.$next.next().removeClass("slick-3d-next2");
        var i = n.next(),
            r = n.prev();
        r.addClass("slick-3d-prev"), i.addClass("slick-3d-next"), r.prev().addClass("slick-3d-prev2"), i.next().addClass("slick-3d-next2"), s.$prev = r, s.$next = i, n.removeClass("slick-next").removeClass("slick-3d-prev").removeClass("slick-next2").removeClass("slick-3d-prev2")
    })), u.slick({
        speed: 1e3,
        arrows: !1,
        dots: !1,
        focusOnSelect: !0,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        infinite: !0,
        centerMode: !0,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0",
        swipe: !0,
        customPaging: function(e, t) {
            return ""
        },
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: !1
            }
        }]
    });
    i = e(".heroSlider"), r = e(".progress"), l = e(".pagingInfo1"), c = e(".slider__label"), d = e(".pagingInfo2");
    i.on("init reInit afterChange", (function(e, t, s, a) {
        if (t.$dots) {
            var o = (s || 0) + 0;
            l.text(o + 1), d.text(t.slideCount)
        }
    })), i.on("beforeChange", (function(e, t, s, a) {
        var o = a / (t.slideCount - 1) * 100;
        r.css("background-size", o + "% 100%").attr("aria-valuenow", o), c.text(o + "% completed")
    })), e(".heroSlide").slick({
        arrows: !1,
        autoplay: !0,
        dots: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button class='arrowLeft'><i class='fa-solid fa-arrow-left'></i></button>",
        nextArrow: "<button class='arrowRight'><i class='fa-solid fa-arrow-right ms-2'></i></button>"
    }), e("[data-ani-duration]").each((function() {
        var t = e(this).data("ani-duration");
        e(this).css("animation-duration", t)
    })), e("[data-ani-delay]").each((function() {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t)
    })), e("[data-ani]").each((function() {
        var t = e(this).data("ani");
        e(this).addClass(t), e(".slick-current [data-ani]").addClass("th-animated")
    })), e(".th-carousel").on("afterChange", (function(t, s, a, o) {
        e(s.$slides).find("[data-ani]").removeClass("th-animated"), e(s.$slides[a]).find("[data-ani]").addClass("th-animated")
    })), e(".flip-gallery").length > 0 && e(".flip-gallery").flipster({
        style: "carousel",
        spacing: -.5,
        nav: !0,
        buttons: !0,
        loop: !0,
        scrollwheel: !1
    });
    var p, h, f, v = ".ajax-contact",
        g = '[name="email"]',
        m = e(".form-messages");

    function b() {
        var t = e(v).serialize();
        (function() {
            var t, s = !0;

            function a(a) {
                a = a.split(",");
                for (var o = 0; o < a.length; o++) t = v + " " + a[o], e(t).val() ? (e(t).removeClass("is-invalid"), s = !0) : (e(t).addClass("is-invalid"), s = !1)
            }
            a('[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'), e(g).val() && e(g).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(g).removeClass("is-invalid"), s = !0) : (e(g).addClass("is-invalid"), s = !1);
            return s
        })() && jQuery.ajax({
            url: e(v).attr("action"),
            data: t,
            type: "POST"
        }).done((function(t) {
            m.removeClass("error"), m.addClass("success"), m.text(t), e(v + ' input:not([type="submit"]),' + v + " textarea").val("")
        })).fail((function(e) {
            m.removeClass("success"), m.addClass("error"), "" !== e.responseText ? m.html(e.responseText) : m.html("Oops! An error occured and your message could not be sent.")
        }))
    }

    function w(t, s, a, o) {
        e(s).on("click", (function(s) {
            s.preventDefault(), e(t).addClass(o)
        })), e(t).on("click", (function(s) {
            s.stopPropagation(), e(t).removeClass(o)
        })), e(t + " > div").on("click", (function(s) {
            s.stopPropagation(), e(t).addClass(o)
        })), e(a).on("click", (function(s) {
            s.preventDefault(), s.stopPropagation(), e(t).removeClass(o)
        }))
    }

    function w(t, s, a, o) {
        e(s).on("click", (function(s) {
            s.preventDefault(), e(t).addClass(o)
        })), e(t).on("click", (function(s) {
            s.stopPropagation(), e(t).removeClass(o)
        })), e(t + " > div").on("click", (function(s) {
            s.stopPropagation(), e(t).addClass(o)
        })), e(a).on("click", (function(s) {
            s.preventDefault(), s.stopPropagation(), e(t).removeClass(o)
        }))
    }

    function k(t, s, a, o) {
        var n = t.text().split(s),
            i = "";
        n.length && (e(n).each((function(e, t) {
            i += '<span class="' + a + (e + 1) + '">' + t + "</span>" + o
        })), t.empty().append(i))
    }
    e(v).on("submit", (function(e) {
        e.preventDefault(), b()
    })), p = ".popup-search-box", h = ".searchClose", f = "show", e(".searchBoxToggler").on("click", (function(t) {
        t.preventDefault(), e(p).addClass(f)
    })), e(p).on("click", (function(t) {
        t.stopPropagation(), e(p).removeClass(f)
    })), e(p).find("form").on("click", (function(t) {
        t.stopPropagation(), e(p).addClass(f)
    })), e(h).on("click", (function(t) {
        t.preventDefault(), t.stopPropagation(), e(p).removeClass(f)
    })), w(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"), w(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show"), e(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe"
    }), e(".popup-content").magnificPopup({
        type: "inline",
        midClick: !0
    }), e(".popup-content").on("click", (function() {
        e(".slick-slider").slick("refresh")
    })), e(".tilt-active").tilt({
        maxTilt: 7,
        perspective: 1e3
    });
    var C = {
        init: function() {
            return this.each((function() {
                k(e(this), "", "char", "")
            }))
        },
        words: function() {
            return this.each((function() {
                k(e(this), " ", "word", " ")
            }))
        },
        lines: function() {
            return this.each((function() {
                var t = "eefec303079ad17405c889e092e105b0";
                k(e(this).children("br").replaceWith(t).end(), t, "line", "")
            }))
        }
    };

    function y(e) {
        return parseInt(e, 10)
    }
    e.fn.lettering = function(t) {
        return t && C[t] ? C[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this) : C.init.apply(this, [].slice.call(arguments, 0))
    }, e(".about-anime").lettering(), e.fn.sectionPosition = function(t, s) {
        e(this).each((function() {
            var a, o, n, i, r, l = e(this);
            a = Math.floor(l.height() / 2), o = l.attr(t), n = l.attr(s), i = y(e(n).css("padding-top")), r = y(e(n).css("padding-bottom")), "top-half" === o ? (e(n).css("padding-bottom", r + a + "px"), l.css("margin-top", "-" + a + "px")) : "bottom-half" === o && (e(n).css("padding-top", i + a + "px"), l.css("margin-bottom", "-" + a + "px"))
        }))
    };
    e("[data-sec-pos]").length && e("[data-sec-pos]").imagesLoaded((function() {
        e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for")
    })), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var t = e(".filter-active").isotope({
                itemSelector: ".filter-item",
                filter: "*",
                masonry: {
                    columnWidth: 1
                }
            });
            e(".filter-menu-active").on("click", "button", (function() {
                var s = e(this).attr("data-filter");
                t.isotope({
                    filter: s
                })
            })), e(".filter-menu-active").on("click", "button", (function(t) {
                t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
            }))
        }
    })), e(".masonary-active").imagesLoaded((function() {
        e(".masonary-active").length > 0 && e(".masonary-active").isotope({
            itemSelector: ".filter-item",
            filter: "*",
            masonry: {
                columnWidth: 1
            }
        })
    })), e(".odometer").length && (e(".odometer").appear(), e(document.body).on("appear", ".odometer", (function(t) {
        e(".odometer").each((function() {
            var t = e(this).attr("data-count");
            e(this).html(t)
        })), window.odometerOptions = {
            format: "d"
        }
    }))), e(".date-pick").datetimepicker({
        timepicker: !1,
        datepicker: !0,
        format: "d-m-y",
        step: 10
    }), e(".time-pick").datetimepicker({
        datepicker: !1,
        format: "H:i",
        step: 30
    });
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    });
    (new WOW).init(), e.fn.asTab = function(t) {
        var s = e.extend({
            sliderTab: !1,
            tabButton: "button"
        }, t);
        e(this).each((function() {
            var t = e(this),
                a = t.find(s.tabButton);
            t.append('<span class="indicator"></span>');
            var o = t.find(".indicator");
            if (a.on("click", (function(t) {
                    t.preventDefault();
                    var a = e(this);
                    a.addClass("active").siblings().removeClass("active"), s.sliderTab ? e(n).slick("slickGoTo", a.data("slide-go-to")) : r()
                })), s.sliderTab) {
                var n = t.data("asnavfor"),
                    i = 0;
                a.each((function() {
                    var a = e(this);
                    a.attr("data-slide-go-to", i), i++, a.hasClass("active") && e(n).slick("slickGoTo", a.data("slide-go-to")), e(n).on("beforeChange", (function(e, a, o, n) {
                        t.find(s.tabButton + '[data-slide-go-to="' + n + '"]').addClass("active").siblings().removeClass("active"), r()
                    }))
                }))
            }

            function r() {
                var n = t.find(s.tabButton + ".active"),
                    i = n.css("height"),
                    r = n.css("width"),
                    l = n.position().top + "px",
                    c = n.position().left + "px";
                o.get(0).style.setProperty("--height-set", i), o.get(0).style.setProperty("--width-set", r), o.get(0).style.setProperty("--pos-y", l), o.get(0).style.setProperty("--pos-x", c), e(a).first().position().left == n.position().left ? o.addClass("start").removeClass("center").removeClass("end") : e(a).last().position().left == n.position().left ? o.addClass("end").removeClass("center").removeClass("start") : o.addClass("center").removeClass("start").removeClass("end")
            }
            r()
        }))
    }, e(".testi-box-tab").length && e(".testi-box-tab").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".testi-block-tab").length && e(".testi-block-tab").asTab({
        sliderTab: !0,
        tabButton: ".tab-btn"
    }), e(".hero-indicator").length && e(".hero-indicator").asTab({
        sliderTab: !0,
        tabButton: ".indicatior-btn"
    }), e(".hero-indicator3").length && e(".hero-indicator3").asTab({
        sliderTab: !0,
        tabButton: ".indicatior-btn"
    }), e(".hero-indicator.style2").length && e(".hero-indicator.style2").asTab({
        sliderTab: !0,
        tabButton: ".indicatior-btn"
    }), e.fn.vsTab = function(t) {
        var s = e.extend({
            sliderTab: !1,
            tabButton: "button",
            indicator: !1
        }, t);
        e(this).each((function() {
            var t = e(this),
                a = t.find(s.tabButton);
            if (a.on("click", (function(t) {
                    t.preventDefault();
                    var a = e(this);
                    a.addClass("active").siblings().removeClass("active"), s.sliderTab && e(o).slick("slickGoTo", a.data("slide-go-to"))
                })), s.sliderTab) {
                var o = t.data("asnavfor"),
                    n = 0;
                a.each((function() {
                    var a = e(this);
                    a.attr("data-slide-go-to", n), n++, a.hasClass("active") && e(o).slick("slickGoTo", a.data("slide-go-to")), e(o).on("beforeChange", (function(e, a, o, n) {
                        t.find(s.tabButton + '[data-slide-go-to="' + n + '"]').addClass("active").siblings().removeClass("active")
                    }))
                }))
            }
        }))
    }, e(".th-custom-dots").length && e(".th-custom-dots").vsTab({
        sliderTab: !0,
        tabButton: ".dot-btn"
    }), e.fn.shapeMockup = function() {
        e(this).each((function() {
            var t = e(this),
                s = t.data("top"),
                a = t.data("right"),
                o = t.data("bottom"),
                n = t.data("left");
            t.css({
                top: s,
                right: a,
                bottom: o,
                left: n
            }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
        }))
    }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e.fn.countdown = function() {
        e(this).each((function() {
            var t = e(this),
                s = new Date(t.data("offer-date")).getTime();

            function a(e) {
                return t.find(e)
            }
            var o = setInterval((function() {
                var e = (new Date).getTime(),
                    n = s - e,
                    i = Math.floor(n / 864e5),
                    r = Math.floor(n % 864e5 / 36e5),
                    l = Math.floor(n % 36e5 / 6e4),
                    c = Math.floor(n % 6e4 / 1e3);
                i < 10 && (i = "0" + i), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), c < 10 && (c = "0" + c), n < 0 ? (clearInterval(o), t.addClass("expired"), t.find(".message").css("display", "block")) : (a(".day").html(i), a(".hour").html(r), a(".minute").html(l), a(".seconds").html(c))
            }), 1e3)
        }))
    }, e(".counter-list").length && e(".counter-list").countdown(), e("#priceSlide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        vertical: !0,
        verticalSwiping: !0
    }), e(".price_slider").slider({
        range: !0,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function(t, s) {
            e(".from").text("$" + s.values[0]), e(".to").text("$" + s.values[1])
        }
    }), e(".from").text("$" + e(".price_slider").slider("values", 0)), e(".to").text("$" + e(".price_slider").slider("values", 1)), e("#slider").on("input change", t => {
        const s = t.target.value;
        e(".foreground-img").css("width", s + "%"), e(".slider-button").css("left", `calc(${s}% - 18px)`)
    }), e("#productSlide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        vertical: !0,
        verticalSwiping: !0
    }), e("#productSlide2").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        vertical: !0,
        verticalSwiping: !0
    }), e((function() {
        e(".progress-bar").each((function() {
            e(this).find(".progress-content").animate({
                width: e(this).attr("data-percentage")
            }, 2e3), e(this).find(".progress-number-mark").animate({
                left: e(this).attr("data-percentage")
            }, {
                duration: 2e3,
                step: function(t, s) {
                    var a = Math.round(t);
                    e(this).find(".percent").html(a + "%")
                }
            })
        }))
    })), e(window).on("scroll", (function() {
        e(".onepage").length > 0 && (e(window).scrollTop() > 0 ? e(".th-header .sticky-active").addClass("sticky") : e(".th-header .sticky-active").removeClass("sticky"))
    })), e.fn.indicator = function() {
        var t = e(this),
            s = t.find("a"),
            a = t.find("button");
        t.append('<span class="indicator"></span>');
        var o = t.find(".indicator");
        if (s.length) var n = s;
        else if (a.length) n = a;

        function i() {
            var s = t.find(".active"),
                a = s.css("height"),
                n = s.css("width"),
                i = s.position().top + "px",
                r = s.position().left + "px";
            e(window).on("resize", (function() {
                i = s.position().top + "px", r = s.position().left + "px"
            })), o.get(0).style.setProperty("--height-set", a), o.get(0).style.setProperty("--width-set", n), o.get(0).style.setProperty("--pos-y", i), o.get(0).style.setProperty("--pos-x", r)
        }
        n.on("click", (function(t) {
            t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active"), i()
        })), i()
    }, e(".indicator-active").length && e(".indicator-active").indicator(), e((function() {
        e(".project-sec").slice(0, 4).show(), e("#loadMore").on("click", (function(t) {
            t.preventDefault(), e(".loadcontent:hidden").slice(0, 3).slideDown(), 0 == e(".loadcontent:hidden").length && e("#loadMore").text("No Content").addClass("noContent")
        }))
    })), e("#ship-to-different-address-checkbox").on("change", (function() {
        e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
        t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function(t) {
        t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
        e(this).on("change", (function() {
            e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
        }))
    })), e(".rating-select .stars a").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
        }))
    })), e(".quantity-plus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"),
                a = parseInt(s.val(), 10);
            isNaN(a) || s.val(a + 1)
        }))
    })), e(".quantity-minus").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault();
            var s = e(this).siblings(".qty-input"),
                a = parseInt(s.val(), 10);
            !isNaN(a) && a > 1 && s.val(a - 1)
        }))
    })), e(".color-switch-btns button").each((function() {
        const t = e(this),
            s = t.data("color");
        t.css("--theme-color", s), t.on("click", (function() {
            const t = e(this).data("color");
            e(":root").css("--theme-color", t)
        }))
    })), e(document).on("click", ".switchIcon", (function() {
        e(".color-scheme-wrap").toggleClass("active")
    })), window.addEventListener("contextmenu", (function(e) {
        e.preventDefault()
    }), !1), document.onkeydown = function(e) {
        return 123 != event.keyCode && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) && ((!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && ((!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && void 0))))
    }
}(jQuery);


    
