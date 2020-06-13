(() => {
    const {getNodeIfo} = Public
    // 创建主体模块
    // header模块
    const createHeader = function (value) {
        const headerNode = document.createElement('div')
        headerNode.classList.add('header')
        const nodeText =  `
        <div class="header-left">
            <a class="header-logo" href="javascript:;"><img class="header-logo-img" src="${value.logoUrl}"></a>
            </div>
            <div class="header-contain">
                <ul class="contain-list">
                    <li class="list-item"><a href="javascript:;">
                        <span class="item-text-ch">游戏资料</span>
                        <span class="item-text-en">GAME INFO</span></a>
                    </li>
                    <li class="list-item"><a href="javascript:;">
                        <span class="item-text-ch">商城/合作</span>
                        <span class="item-text-en">STORE</span></a>
                    </li>
                    <li class="list-item"><a href="javascript:;">
                        <span class="item-text-ch">社区互动</span>
                        <span class="item-text-en">COMMUNITY</span></a>
                    </li>
                    <li class="list-item"><a href="javascript:;">
                        <span class="item-text-ch">赛事官网</span>
                        <span class="item-text-en">ESPORTS</span></a>
                    </li>
                    <li class="list-item"><a href="javascript:;">
                        <span class="item-text-ch">自助系统</span>
                        <span class="item-text-en">SYSTEM</span></a>
                    </li>
                </ul>
            </div>
            <div class="header-rigth">
                    <div class="header-btn">
                        <span class="btn-icon btn-search"></span>
                        <span class="btn-icon btn-phone"></span>
                    </div>
                    <div class="header-login">
                        <a href="javascript:;">
                            <img class="login-img" src="${value.loginUrl}">
                            <span></span>
                        </a>
                        <p class="login-ifon">亲爱的召唤师，欢迎 <a class="login-btn" href="javascript:;">登录</a></p>
                    </div>
            </div>`
        // 添加内容
        headerNode.innerHTML = nodeText
        return headerNode
    }
    // contain模块
    const createContain = function () {
        // 创建contain节点
        const containNode = document.createElement('div')
        // 添加类
        containNode.classList.add('contain')
        // 返回节点
        return containNode
    }
    // hot-new模块
    const createHotNew = function (value) {
        const hotNewNode = document.createElement('div')
        hotNewNode.classList.add('hot-news')
        const nodeText = `<img class="fade-out" src="${value.imgUrl01}">
            <img src="${value.imgUrl02}">
            <div class="bg-btn check-ifon">查看详情</div>
            <div class="game-version">
                <span class="v-text">当前游戏版本:</span>
                <em class="v-ifon">Ver 10.8</em>
                <button class="md-btn v-detail">版本详情</button>
            </div>
            <div class="dark-mask"></div>`
        // 添加内容
        hotNewNode.innerHTML = nodeText
        return hotNewNode
    }
    // main模块
    const createMain = function () {
        const mainNode = document.createElement('div')
        mainNode.classList.add('main')
        return mainNode
    }
    // footer模块
    const createFoot = function () {
        const footNode = document.createElement('div')
        footNode.classList.add('footer')
        const nodeText = `<div class="foot-inner">
        <div class="foot_lefts">
            <a href="javascript:;"></a>
            <span></span>
        </div>
        <ul class="foot_links">
            <li class="link_map">
                <a href="javascript:;">腾讯互动娱乐</a>
                <span class="line">|</span>
                <a href="javascript:;">服务条款</a>
                <span class="line">|</span>
                <a href="javascript:;">隐私保护指引</a>
                <span class="line">|</span>
                <a href="javascript:;">儿童隐私保护指引</a>
                <span class="line">|</span>
                <a href="javascript:;">腾讯游戏招聘</a>
                <span class="line">|</span>
                <a href="javascript:;">腾讯游戏客服</a>
                <span class="line">|</span>
                <a href="javascript:;">游戏列表</a>
                <span class="line">|</span>
                <a href="javascript:;">广告服务及商务合作</a>
            </li>
            <li class="copyright_zh">
                <a href="javascript:;">腾讯公司版权所有</a>
            </li>
            <li class="copyright_en">
                <p class="copyright_txt">COPYRIGHT © 1998 - 2020 TENCENT. ALL RIGHTS RESERVED.</p>
                <p class="copyright_txt">COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</p>
            </li>
            <li class="limit_age">本网络游戏适合18+岁的用户使用；为了您的健康，请合理控制游戏时间。</li>
            <li class="copyright_public">
                <a href="javascript:;">
                    <img src="./src/imgs/gswj.png">
                    工商网监电子标识
                </a>
                <span class="line">|</span>
                <a href="javascript:;">粤网文[2017]6138-1456号</a>
                <span class="line">|</span>
                <a href="javascript:;">（总）网出证（粤）字第057号</a>
            </li>
            <li class="copyright_private">
                批准文号：新出审字[2011]310号 
                <span class="line">|</span>
                出版物号：ISBN 978-7-89989-145-2
                <span class="line">|</span>
                全国文化市场统一举报电话：12318 
            </li>
        </ul>
    </div>`
        // 添加内容
        footNode.innerHTML = nodeText
        return footNode
    }
    // 创建script标签
    const createScript = function (url) {
        const scriptNode = document.createElement('script')
        // 配置src
        scriptNode.src = url
        return scriptNode
    }

    // 创建wraper包含块
    const wrapNode = document.createElement('div')
    wrapNode.classList.add('wraper')
    // 生成contain节点
    const containNode = createContain()
    // 获取数据创建模块
    getNodeIfo('./mock/header.json').then((value) => {
        // 添加到文档
        document.body.appendChild(wrapNode)
        // 向wrapNode 中添加子模块
        wrapNode.appendChild(createHeader(value.data))
        // 发送hotnew数据请求
        return getNodeIfo('./mock/hotnew.json')
    })
    .then((value) => {
        containNode.appendChild(createHotNew(value.data))
        // 将contain节点添加到wrapnode中
        wrapNode.appendChild(containNode)
        // 创建footer节点
        wrapNode.appendChild(createFoot())
    })
    .then(() => {
        containNode.appendChild(createMain())
    })
    .then(() => {
        const htmlNode = document.documentElement
        const noticeScript = createScript('./src/components/notice.js')
        
        noticeScript.onload = function () {
            // 关闭加载动画
            const forShowNode = document.getElementById('froword-bg')
            document.body.removeChild(forShowNode)
            wrapNode.style.visibility = 'visible'
            const com3Script = createScript('./src/components/component3.js')
            htmlNode.appendChild(com3Script)
            com3Script.addEventListener('load', function () {
                const com4Script = createScript('./src/components/component4.js')
                htmlNode.appendChild(com4Script)
                com4Script.addEventListener('load', () => {

                    let endScroll = 0
                    let nowScroll
                    let loadTimes = 0
                    const handleWheel =  function () {
                        // 模块加载完之后移除wheel事件
                        if (loadTimes === 4) {
                            this.removeEventListener('wheel', handleWheel)
                        }
                        nowScroll = this.scrollTop === 0 ? null : this.scrollTop
                        if (endScroll === nowScroll) {
                            switch (loadTimes) {
                                case 0:
                                    const com5Script = createScript('./src/components/component5.js')
                                    htmlNode.appendChild(com5Script)
                                    break;
                                case 1:
                                    const com6Script = createScript('./src/components/component6.js')
                                    htmlNode.appendChild(com6Script)
                                    break;
                                case 2:
                                    const com7Script = createScript('./src/components/component7.js')
                                    htmlNode.appendChild(com7Script)
                                    break;
                                case 3:
                                    const com8Script = createScript('./src/components/component8.js')
                                    htmlNode.appendChild(com8Script)
                                    break;
                            }
                            loadTimes++
                        }
                        endScroll = nowScroll
                    }
                    wrapNode.addEventListener('wheel', handleWheel)
                })
            })
        }
        htmlNode.appendChild(noticeScript)
        htmlNode.appendChild(createScript('./src/js/index.js'))
    })
})()