(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const {selected, getNodeIfo} = Public
    // 用于创建template
    const nodeText = function (data = {}) {
        // 编写template并返回
        const nodeText = `<div class="notice-swiper">
            <ul class="slip-main">
                ${data.noticeItems.map((itemObj) => {
                    return `<li class="slip-item"><img src="${itemObj.imgUrl}"/></li>`
                }).join('')}
            </ul>
            <ul class="swiper-icon-nav">
                ${data.noticeItems.map((itemObj, index) => {
                    if (index === 0) {
                        return `<li class="swiper-icon active">${itemObj.itemTitle}</li>`
                    }
                    return `<li class="swiper-icon">${itemObj.itemTitle}</li>`
                }).join('')}
            </ul>
        </div>
        <div class="notice-news">
            <ul class="notice-nav">
                <li class="notice-btn nav-btn selected" data-url="cph">综合</li>
                <li class="notice-btn nav-btn">公告</li>
                <li class="notice-btn nav-btn">赛事</li>
                <li class="notice-btn nav-btn">攻略</li>
                <li class="notice-btn nav-btn">社区</li>
            </ul>
            <div class="ifon-wrap" data-type="wrap">
                <ul class="notice-ifon displaytype" data-url="cph">
                    <h3 class="ifon-title">${data.noticeNews.title}</h3>
                    ${data.noticeNews.ifons.map((ifon) => {
                        return `<li class="ifon"><span class="ifon-logo ${ifon.type}-logo">${ifon.name}</span><p class="ifon-text ${ifon.type}-text">${ifon.text}</p><span class="notice-time">${ifon.time}</span></li>`
                    }).join('')}
                </ul>
            </div>
            <div class="notice-btn-detail">
                <span>阅读更多</span>
                <span class="c2">最新资讯</span>
                <i class="more-arrow"></i>
            </div>
        </div>`
        return nodeText
    }
    // 监听slip的transitionrun事件
    const handleTransitionRen = function (slipObj) {
        const [...pointItmes] = this.parentElement.querySelectorAll('.swiper-icon')
        // 当前图片index
        let index = Math.floor(Number.parseInt(slipObj.getTransform('translateX')) / slipObj.parameters.speed) % pointItmes.length
        // 添加active类
        if (index < 0) {index = 0}
        pointItmes[index].classList.add('active')
        // 去除其他兄弟元素的active类
        pointItmes.forEach(other => {
            if (other !== pointItmes[index]) {
                other.classList.remove('active')
            }
        })
    }
    // 自动轮播
    const autoSwiper = function () {
        const slipNode = this.querySelector('.notice-swiper')
        // 创建轮播对象，实现轮播
            const slipObj = new Slip(slipNode)
            slipObj.parameters = {
                speed: -762,
                interval: 2000,
                isAuto: true,
                autoMove: true,
                manual: false,
            }
            slipObj.start()
            slipPoint(slipNode, this, slipObj)
            // 添加transionrun事件，处理轮播导航标逻辑
            slipObj.slipObj.addEventListener('transitionrun', handleTransitionRen.bind(slipObj.slipObj, slipObj))
    }
    // 轮播导航点
    const slipPoint = function (obj, ele, slipObj) {
        const [...pointItmes] = ele.querySelectorAll('.swiper-icon')
        pointItmes.forEach((pointItme, index) => {
            // 其他兄弟元素
            const otherPoints = []
            // 监听鼠标进入事件
            pointItme.addEventListener('mouseenter', function () {
                clearInterval(slipObj.timer)
                // 移除slipObj.slipObj中的transitionrun事件
                slipObj.slipObj.removeEventListener('transitionrun', handleTransitionRen)
                // 添加active类
                this.classList.add('active')
                slipObj.setTransform('translateX', -index * 762 + 'px')
                // 去除其他兄弟元素的active类
                pointItmes.forEach(other => {
                    if (other !== this) {
                        other.classList.remove('active')
                    }
                })
            })
            pointItme.addEventListener('mouseleave', function () {
                // 启动轮播、
                slipObj.auto()
            })
        })
    }
    // 获取数据，生成DOM
    getNodeIfo('./mock/notice.json').then((data) => {
        const noticeNode = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['notice', 'contain-center']
                }
            },
            template: nodeText(data.data),
            addEvent: {
                methods: {
                    // 轮播逻辑函数
                    autoSwiper,
                    // 公告部分逻辑
                    selected: function () {
                        selected.bind(this)('hover', (ele) => {
                            const ifonWrap = this.querySelector('[data-type="wrap"]')
                            const url = `./mock/${ele.dataset.url}.json`
                            getNodeIfo(url).then(() => {}).catch((error) => {
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
        document.querySelector('.contain .main').appendChild(noticeNode)
    }).catch((error) => {
        console.log(error)
    })
})()