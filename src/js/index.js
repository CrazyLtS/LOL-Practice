    /* 
        主题图片逻辑
     */
    const switchImg = function () {
        let index = 0;
        $('.wraper').scroll(function () {
            index++
            if (index === 3) {
                $('.hot-news>img').eq(1).fadeOut(1000)
                $('.hot-news>img').eq(1).on('transitionend', function () {
                    $(this).addClass('fade-out')
                })
                $('.hot-news>img').eq(0).fadeIn(1000)
                $('.hot-news>img').eq(0).on('transitionend', function () {
                    $(this).removeClass('fade-out')
                })
                $('.hot-news').css({ height: '360px' })
                $(this).off('scroll')
            }
        })
    }
    switchImg()
    /* 
        轮播图逻辑
     */
    const swiper = function () {

        // 获取li 元素
        const item = $('.swiper .swiper-item')
        const itemLength = item.length

        // 获取ul元素
        const swiper = $('.swiper')
        swiper.css({
            'width': item.width() * itemLength + 'px',
        })

        let timer;
        const handleTimer = function () {
            swiper.css('transition', 'left .5s')
            swiper.css('left', (swiper.position().left - item.width()) + 'px')
            swiper.on('transitionend', function () {
                if (swiper.position().left <= (-item.width() * (itemLength - 1))) {
                    swiper.css('transition', 'left 0s')
                    swiper.css('left', 0 + 'px')
                }
                let index = Math.abs(swiper.position().left / (-item.width()))
                $('.swiper-icon').eq(index).siblings().removeClass('active')
                $('.swiper-icon').eq(index).addClass('active')
            })
        }
        timer = setInterval(handleTimer, 2000)

        $('.swiper-icon').mouseenter(function () {
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
            clearInterval(timer)
            swiper.css('left', (-$(this).index() * item.width()) + 'px')
            $(this).mouseleave(function () {
                clearInterval(timer)
                timer = setInterval(handleTimer, 2000);
            })
        })

    }
    swiper()
    /* 
        公告部分逻辑
    */
    const selected = function () {
        $('.nav-btn').mouseenter(function () {
            $(this).siblings().removeClass('selected')
            $(this).addClass('selected')
        })
    }
    selected()
    /* 
        视频播放暂停控制
     */
    const ctrlVideo = function () {
        let isFirst = true
        const $video = $('.inner-video')
        const video = $('.video-src').get(0)
        let timer
        let videoShow = function () {
            if (isFirst) {
                isFirst = false
                video.muted = true
            }
            $video.css({ display: 'block', transition: '.3s' })
            clearTimeout(timer)
            timer = setTimeout(() => {
                $video.addClass('show-video')
                video.play()
            }, 10)
            $('.skin-nav').css({ 'marginTop': '42px' })
            $('.more-skin').css({ height: '159px' })
        }
        let videoDis = function () {
            $video.removeClass('show-video')
            video.pause()
            $video.css({ display: 'none', transition: '' })
            $('.skin-nav').css({ 'marginTop': '0' })
            $('.more-skin').css({ height: '0' })
        }
        $('.new-skin').hover(videoShow, videoDis)
        $('.skin-nav').hover(videoShow, videoDis)
    }
    ctrlVideo()

    const hoverImg = function () {
        $('.version-left>.d2').hover(() => {
            $('.version-left>.d2>img').eq(1).fadeOut(200)
            $('.version-left>.d2>img').eq(0).fadeIn(200)
        }, () => {
            $('.version-left>.d2>img').eq(0).fadeOut(200)
            $('.version-left>.d2>img').eq(1).fadeIn(200)
        })
    }
    hoverImg()
    /* 
    周免英雄列表
     */
    const heroList = function () {
        let timer
        $('.zm-btn').hover(() => {
            clearTimeout(timer)
            $('.fzhero-list').addClass('fzshow')
        }, () => {
            timer = setTimeout(() => {
                $('.fzhero-list').removeClass('fzshow')
            }, 100)
        })
        $('.fzhero-list').hover(function (e) {
            e.stopPropagation()
            clearTimeout(timer)
            $(this).addClass('fzshow')
        }, function (e) {
            e.stopPropagation()
            timer = setTimeout(() => {
                $(this).removeClass('fzshow')
            }, 100)
        })
    }
    heroList()