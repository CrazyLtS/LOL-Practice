(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const { selected, getNodeIfo } = Public
    // 包装mouseenter和mouseleave事件
    const hover = function (obj, enter, leave) {
        if (enter) {
            obj.addEventListener('mouseenter', enter)
        }
        if (leave) {
            obj.addEventListener('mouseleave', leave)
        }
    }
    // 用于创建template
    const com4Text = function (data = {}) {
        // 编写template并返回
        const nodeText = `<div class="master newthing">
            <div class="new-hero">
                <img src="${data.newHero.heroImg}" width="100%">
                <a class="label">新英雄</a>
                <p class="p-title">${data.newHero.heroDes}</p>
                <p class="p3">${data.newHero.name}</p>
                <div class="inner-ifon">
                    <p class="p1">${data.newHero.name}</p>
                    <div class="detail-btn">
                        查看详情
                        <i class="more-arrow"></i>
                    </div>
                </div>
            </div>
            <div class="new-skin">
                <div class="skin-video">
                    <img src="${data.newSkin.skinImg}" width="100%">
                    <a class="label">新皮肤</a>
                    <p class="p-title">${data.newSkin.skinDes}</p>
                    <p class="p3">${data.newSkin.name}</p>
                    <div class="inner-video">
                        <video class="video-src" controls preload="auto" width="100%" height="auto">
                            <source src="./src/imgs/contain/hero/video-0.mp4">
                        </video>
                        <div class="skin-ifon">
                            <p class="p1">${data.newSkin.skinDes}</p>
                            <p class="p2">${data.newSkin.name}</p>
                            <div class="md-btn">查看详情</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 服务 -->
        <div class="side version">
           <div class="version-left">
               <div class="d1">
                       <img src="./src/imgs/contain/hero/version-img/0 .jpg">
                       <div class="inner-version">
                        <img class="version-src" src="./src/imgs/contain/hero/version-img/0 .jpg"/>
                        <div class="version-ifon">
                            <p class="p1">版本更新</p>
                            <p class="p2">游戏版本10.8</p>
                            <div class="md-btn">查看详情</div>
                        </div>
                        </div>
                </div>
                <div class="d2">
                    <img class="hover-img" src="./src/imgs/contain/hero/version-img/d2-2.jpg">
                    <img src="./src/imgs/contain/hero/version-img/d2-1.jpg">
                </div>
           </div>
           <div class="version-right">
                <div class="dev-ifon">
                    <img src="./src/imgs/contain/hero/version-img/dev.jpg">
                    <div class="dev-msg">
                        <p class="p2">/开发者日志：风暴欲临</p>
                        <p class="p3">沃利贝尔更新的最新进展，提前了解他的模型、语音以及更多信息。</p>
                    </div>
                </div>
                <div class="zm-btn">
                    周免
                    <i class="more-arrow"></i>
                    <ul class="fzhero-list">
                        <i class="up-agl"></i>
                        ${data.fzheroList.map((fzhero) => {
                            return `<li class="fz-item" title="${fzhero.heroName}"><img width="100%" height="100%" src="${fzhero.heroImg}"/></li>`
                        }).join('').trim()}
                    </ul>
                </div>
           </div>
        </div>
        <div class="more-skin">
            <ul class="skin-nav">
                ${data.moreSkin.map((skin) => {
                    return `<li class="skin-item"><img class="skin-item-img" src="${skin.skinImg}"/><p>${skin.name}</p></li>`
                }).join('').trim()}
                </ul>
        </div>`
        return nodeText
    }
    // 获取数据，生成DOM
    getNodeIfo('./mock/component4.json').then((data) => {
        const com4Node = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['contain-center', 'component-4']
                }
            },
            template: com4Text(data.data).trim(),
            addEvent: {
                methods: {
                    // 一些方法
                    // 头部按键
                    selected: function () {
                        selected.bind(this)('hover', (ele) => {
                            const innerWrap = this.querySelector('[data-type="wrap"]')
                            const url = `./mock/${ele.dataset.url}.json`
                            getNodeIfo(url).then(() => { }).catch((error) => {
                                // 判断是否曾获取数据失败
                                if (innerWrap.querySelector(`[data-url="${ele.dataset.url}"]`)) {
                                    innerWrap.removeChild(innerWrap.querySelector(`[data-url="${ele.dataset.url}"]`))
                                }
                                // 创建请求错误处理元素节点
                                const errorEle = document.createElement('div')
                                // 清除所有
                                errorEle.classList.add('error', 'displaytype')
                                errorEle.setAttribute('data-url', ele.dataset.url)
                                // 添加错误提示内容
                                errorEle.innerHTML = `<h4>
                                                    请求失败，请稍后再试!
                                                    <p>错误代码：${error}</p>
                                                    </h4>`
                                // 添加到消息模块中
                                innerWrap.appendChild(errorEle)
                            })
                        })
                    },
                    // 控制视频播放显示
                    ctrlVideo: function () {
                        // 计时器
                        let timer
                        // 判断是否第一次
                        let isFirst = true
                        // 视频播放触发节点
                        const innerVideo = this.querySelector('.inner-video')
                        const video = this.querySelector('.video-src')
                        // 播放事件
                        let videoShow = function (e) {
                            e.stopPropagation()
                            if (isFirst) {
                                isFirst = false
                                video.muted = true
                            }
                            innerVideo.style.display = 'block'
                            innerVideo.style.transition = 'all .3s'
                            // 清除计时器
                            clearTimeout(timer)
                            timer = setTimeout(() => {
                                innerVideo.classList.add('show-video')
                                video.play()
                            }, 10)
                            this.querySelector('.skin-nav').style.marginTop = '42px'
                            this.querySelector('.more-skin').style.height = '159px'
                        }.bind(this)
                        // 停止播放事件
                        let videoDis = function (e) {
                            e.stopPropagation()
                            innerVideo.classList.remove('show-video')
                            video.pause()
                            innerVideo.style.display = 'none'
                            innerVideo.style.transition = ' '
                            this.querySelector('.skin-nav').style.marginTop = '0px'
                            this.querySelector('.more-skin').style.height = '0px'
                        }.bind(this)
                        hover(this.querySelector('.new-skin'), videoShow, videoDis)
                        hover(this.querySelector('.skin-nav'), videoShow, videoDis)
                    },
                    // 切换图片，动画使用了jQuery动画
                    hoverImg: function () {
                        const $leftD2 = $(this.querySelectorAll('.version-left>.d2>img'))
                        hover(this.querySelector('.version-left>.d2'), function () {
                            $leftD2.eq(1).fadeOut(200)
                            $leftD2.eq(0).fadeIn(200)
                        }, function () {
                            $leftD2.eq(0).fadeOut(200)
                            $leftD2.eq(1).fadeIn(200)
                        })
                    },
                    // 切换周免英雄列表开合
                    hoverList: function () {
                        let timer
                        const $this = this
                        hover()
                        hover(this.querySelector('.zm-btn'), function () {
                            clearTimeout(timer)
                            $this.querySelector('.fzhero-list').classList.add('fzshow')
                        }, function () {
                            timer = setTimeout(() => {
                                $this.querySelector('.fzhero-list').classList.remove('fzshow')
                            }, 100)
                        })
                        hover(this.querySelector('.fzhero-list'), function (e) {
                            e.stopPropagation()
                            clearTimeout(timer)
                            this.classList.add('fzshow')
                        }, function (e) {
                            e.stopPropagation()
                            timer = setTimeout(() => {
                                this.classList.remove('fzshow')
                            }, 100)
                        })
                    }
                }
            }
        })
        // 向父级组件添加子组件
        document.querySelector('.contain .main').appendChild(com4Node)
    })
})()