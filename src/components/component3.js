(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const {selected, getNodeIfo} = Public
    // 用于创建template
    const nodeText = function (data = {}) {
        // 编写template并返回
        const nodeText = `<div class="master campaign">
            <div class="cam-header">
                <div class="cam-title">热门活动</div>
                <ul class="cam-nav">
                    <li class="cam-nav-btn nav-btn selected" data-url="hding">正在进行</li>
                    <li class="cam-nav-btn nav-btn" data-url="hdiscount">商城特惠</li>
                    <li class="cam-nav-btn nav-btn" data-url="haction">长期活动</li>
                    <li class="move-btn">
                        <span class="c2">更多</span>
                        <i class="more-arrow"></i>
                    </li>
                </ul>
            </div>
            <div class="cam-contain" data-type="wrap">
                <div class="hot-doing displaytype" data-url="hding">
                    ${data.map((meg) => {
                        return `<div class="tap">
                            <img class="tap-img" src="${meg.tapUrl}"/>
                            <div class="innerhover">
                                <div class="innerhover-border">
                                    <h4>${meg.tapTitle}</h4>
                                    <p>${meg.tapMeg}</p>
                                    <p>${meg.tapTime}</p>
                                </div>
                            </div>
                            <p class="tap-title">${meg.tapTitle}</p>
                            <div class="end-time">${meg.tapOver}<i class="new-btn"></i></div>
                        </div>`.trim()
                    }).join('')}
                </div>
            </div>
        </div>
        <!-- 服务 -->
        <div class="side service">
            <div class="ser-headre">
                <div class="down-game">
                    <video class="down-game-video" autoplay loop muted>
                        <source src="./src/video/btn-download.mp4">
                    </video>
                </div>
                <div class="benefits">
                    <div class="type-0-wraper">
                        <div class="href-type-0">新手必备</div>
                        <div class="inner-href">
                            <a href="javascript:;">
                                <i class="guide-btn"></i>
                                指引
                            </a>
                            <a href="javascript:;">
                                <i class="gift-btn"></i>
                                礼包
                            </a>
                        </div>
                    </div>
                    <div class="href-type-1">领取中心</div>
                </div>
            </div>
            <div class="ser-tab">
                <ul class="tab-wraper">
                    <li class="tab-item"><i class="icon-kf"></i>在线客服</li>
                    <li class="tab-item"><i class="icon-zx"></i>秩序殿堂</li>
                    <li class="tab-item"><i class="icon-zl"></i>游戏资料</li>
                    <li class="tab-item"><i class="icon-xg"></i>峡谷之巅</li>
                    <li class="tab-item"><i class="icon-yd"></i>云顶之弈</li>
                    <li class="tab-item"><i class="icon-gl"></i>攻略中心</li>
                    <li class="tab-item"><i class="icon-yz"></i>LOL宇宙</li>
                    <li class="tab-item"><i class="icon-bd"></i>微信绑定</li>
                </ul>
            </div>
        </div>`
        return nodeText
    }
    // 获取数据，生成DOM
    getNodeIfo('./mock/component3.json').then((data) => {
        const componentNode = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['contain-center', 'component-3']
                }
            },
            template: nodeText(data.data).trim(),
            addEvent: {
                methods: {
                    // 一些方法
                    selected: function () {
                        selected.bind(this)('hover', (ele) => {
                            const innerWrap = this.querySelector('[data-type="wrap"')
                            const url = `./mock/${ele.dataset.url}.json`
                            getNodeIfo(url).then(() => {}).catch((error) => {
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
                    }
                }
            }
        })
        // 向父级组件添加子组件
        document.querySelector('.contain .main').appendChild(componentNode)
    }).catch((error) => {
        console.log(error)
    })
})()