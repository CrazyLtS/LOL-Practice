(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const { selected, getNodeIfo } = Public

    // 用于创建left的template
    const leftText = function (data) {
        const nodeText = `<div class="cam-header">
                        <div class="cam-title">最新视频</div>
                        <ul class="cam-nav">
                            <li class="cam-nav-btn nav-btn" data-url="vsug">推荐</li>
                            <li class="cam-nav-btn nav-btn" data-url="vofi">官方</li>
                            <li class="cam-nav-btn nav-btn" data-url="vent">娱乐</li>
                            <li class="cam-nav-btn nav-btn" data-url="vgm">赛事</li>
                            <li class="cam-nav-btn nav-btn" data-url="vyun">云顶之弈</li>
                            <li class="cam-nav-btn nav-btn" data-url="vtch">教学</li>
                            <li class="move-btn">
                                <span class="c2">更多</span>
                                <i class="more-arrow"></i>
                            </li>
                            <li class="netx">
                                <span>换一批</span>
                                <i class="icon-hyp"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="video-wrap" data-type="wrap">
                    <ul class="video-content displaytype" data-url="vsug">
                        ${data.map((vIfon) => {
            return `<li class="video-item">
                            <div class="mask-img">
                                <img src="${vIfon.vdUrl}"/>
                            </div>
                            <a class="video-length">${vIfon.vdTime}</a>
                            <p class="name-video">
                                ${vIfon.vdContent}
                            </p>
                            <a class="play-times">${vIfon.plTimes}</a>
                            <a class="update-time">${vIfon.upTime}</a>
                        </li>`
        }).join('').trim()}
                    </ul>
                </div>`
        return nodeText
    }
    // 用于创建right的template
    const rightText = function (albums) {
        const nodeText = `<div class="cam-header">
                        <div class="cam-title">热门专辑</div>
                        <ul class="cam-nav">
                            <li class="cam-nav-btn nav-btn" data-url="hmon">周一</li>
                            <li class="cam-nav-btn nav-btn" data-url="htue">周二</li>
                            <li class="cam-nav-btn nav-btn" data-url="hwed">周三</li>
                            <li class="cam-nav-btn nav-btn" data-url="hthu">周四</li>
                            <li class="cam-nav-btn nav-btn" data-url="hfri">周五</li>
                            <li class="cam-nav-btn nav-btn" data-url="hsat">周六</li>
                            <li class="cam-nav-btn nav-btn" data-url="hsun">周日</li>
                        </ul>
                    </div>
                    <main class="slip-wrap" data-type="wrap">
                        <ul class="slip-main displaytype" data-url="hmon">
                            ${albums.map((album) => {
            return `<li class="slip-item">
                                <div class="item-wraper">
                                    <img class="program-pic" src="${album.alUrl}">
                                    <h4 class="name-program">${album.alName}</h4>
                                    <p class="progress-program">${album.alProg}</p>
                                </div>
                                <p class="name-progress">${album.alText}</p>
                                <div class="author-program">
                                    <img src="${album.alAuthorImg}">
                                    <span>${album.alAuthorName}</span>
                                </div>
                            </li>`
        }).join('').trim()}
                        </ul>
                    </main>
                    <div class="more-hotprogram">
                        前往视频中心
                        <i class="more-arrow "></i>
                    </div>
                    <span class="swiper-left"></span>
                    <span class="swiper-right"></span>`
        return nodeText
    }
    // 创建父级组件
    const createCom5 = function () {
        return new Promise((res, rej) => {
            const com5Node = createNode({
                wrap: {
                    ele: 'div',
                    attr: {
                        className: ['g-wrap-vp', 'component-5']
                    }
                },
                template: '<div class="wrap-vp"></div>'
            })
            // 向父级组件添加子组件
            document.querySelector('.contain .main').appendChild(com5Node)
            return res(com5Node)
        })
    }
    // 创建左和右边子组件
    createCom5().then((parentNode) => {
        // 创建左边组件
        getNodeIfo('./mock/com-5/vsug.json').then((data) => {
            const com5LeftNode = createNode({
                wrap: {
                    ele: 'div',
                    attr: {
                        className: ['master', 'new-video']
                    }
                },
                template: leftText(data.data).trim(),
                addEvent: {
                    methods: {
                        // 一些方法
                        selected: function () {
                            selected.bind(this)('hover', (ele) => {
                                const ifonWrap = this.querySelector('[data-type="wrap"]')
                                const url = `./mock/${ele.dataset.url}.json`
                                getNodeIfo(url).then(() => { }).catch((error) => {
                                    // 判断是否曾获取数据失败
                                    if (ifonWrap.querySelector(`[data-url="${ele.dataset.url}"]`)) {
                                        ifonWrap.removeChild(ifonWrap.querySelector(`[data-url="${ele.dataset.url}"]`))
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
                                    ifonWrap.appendChild(errorEle)
                                })
                            })
                        }
                    }
                }
            })
            // 向父级组件添加子组件
            parentNode.querySelector('.wrap-vp').appendChild(com5LeftNode)
        })
        // 创建右边组件
        getNodeIfo('./mock/com-5/hmon.json').then((data) => {
            const com5RightNode = createNode({
                wrap: {
                    ele: 'div',
                    attr: {
                        className: ['side', 'hot-album']
                    }
                },
                template: rightText(data.data).trim(),
                addEvent: {
                    methods: {
                        // 自动轮播
                        autoSilp: function () {
                            const mainNode = this.querySelector('.slip-wrap')
                            const slip = new Slip(mainNode)
                            slip.parameters = {
                                speed: -326,
                                interval: 2000,
                                isAuto: true,
                                autoMove: true,
                                manual: false,
                            }
                            slip.start()
                            slip.setSize(13)
                            slip.slipObj.style.height = '307px'
                            // 监听左移按钮click事件
                            this.querySelector('.swiper-left').addEventListener('click', () => {
                                clearInterval(slip.timer)
                                slip.movePosition(326)
                                slip.auto()
                            })
                            // 监听右移按钮click事件
                            this.querySelector('.swiper-right').addEventListener('click', () => {
                                clearInterval(slip.timer)
                                slip.movePosition(-326)
                                slip.auto()
                            })

                            // 头部按钮逻辑
                            selected.bind(this)('hover', (ele) => {
                                const ifonWrap = this.querySelector('[data-type="wrap"]')
                                const url = `./mock/${ele.dataset.url}.json`
                                getNodeIfo(url).then(() => { }).catch((error) => {
                                    // 判断是否曾获取数据失败
                                    if (ifonWrap.querySelector(`[data-url="${ele.dataset.url}"]`)) {
                                        ifonWrap.removeChild(ifonWrap.querySelector(`[data-url="${ele.dataset.url}"]`))
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
                                    ifonWrap.appendChild(errorEle)
                                })
                            }, () => {
                                slip.auto()
                            })
                        }
                    }
                }
            })
            // 向父级组件添加子组件
            parentNode.querySelector('.wrap-vp').appendChild(com5RightNode)
        })
    }).catch((error) => {
        console.log(error);
    })
})()