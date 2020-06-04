(function () {
     // 获取数据
     
    const getGameIfo = (url) => {
        // 返回一个promise对象
        return new Promise( (res, rej) => {
            /* 
                原生AJAX
                */
            const XML = new XMLHttpRequest()
            let data
            // 打开请求
            XML.open('GET', url)
            XML.responseType = 'json'
            XML.timeout = 2000
            // 监听完成
            XML.addEventListener('readystatechange', function () {
                // 监听请求完成
                if (this.readyState === 4) {
                    // 监听请求成功
                    if (this.status === 200) {
                        data = this.response
                        res(data)
                    } else {
                        rej('Error code: ' + this.status)
                    }
                }
            })
            // 发送请求
            XML.send()
        })
    }

    // 处理轮播的数据
    const handleSlipData = function (Data) {
        if(Data.ref) {
            const data = Data.data
            const gameIfo = Data.gameIfo
            const dataItem = data.dataItem
            let itemText = ''
            // 循环遍历，获得全部的item
            dataItem.forEach(ele => {
                itemText += `<li class="slip-item game-ifo">
                <div class="game-header">
                    <span class="span1">${ele.state}</span>
                    <span class="span3">${ele.time}</span>
                    <span class="span2">${ele.date}</span>
                </div>
                <div class="game-main">
                    <div class="game-team-a">
                        <span>
                            <img src="${ele.oneImg}">
                        </span>
                        <a>${ele.oneName}</a>
                    </div>
                    <div class="game-team-c">
                        <div class="game-score">
                            <a>${ele.gameScoreOne}</a>
                            <a>:</a>
                            <a>${ele.gameScoreTwo}</a>
                        </div>
                        <div class="game-view-cb">
                            视频回放
                        </div>
                    </div>
                    <div class="game-team-b">
                        <span>
                            <img src="${ele.twoImg}">
                        </span>
                        <a>${ele.twoName}</a>
                    </div>
                </div>
                <div class="game-foor">
                    <p class="p1">${gameIfo.p1}</p>
                    <p class="p2">${gameIfo.p2}</p>
                </div>
                </li>
                `
            })
            // 返回数据结构
            return $(`
            <main class="slip-wrap game-wrap">
                <ul class="slip-main">
                ${itemText}
                </ul>
            </main>
            <span class="swiper-left"></span>
            <span class="swiper-right"></span>`)
        }
    }
    // 处理最佳玩家数据
    const handlePlayerData = function (Data) {
        // 判断是否已经获取正确数据
        if (!Data.ref) {return}
        // 处理获取的数据
        const data = Data.data
        let textNode = ''
        data.forEach((value) => {
            textNode += `
            <li class="power-item">
                <div class="lpl-player">
                    <img class="player" src="${value.playerImg}">
                    <i class="power-rank-role" style="background-position:${value.rolePosition}"></i>
                    <img class="player-team-logo" src="${value.teamLogo}">
                </div>
                <p class="player-name">${value.playerName}</p>
            </li>
            `
        })
        return $(`
        <div class="master power-rank">
            <h2 class="part-top-tab">每周最佳阵容</h2>
            <ul class="power-list">
                ${textNode}
            </ul>
        </div>
        `)
     }
    // 处理战队排名数据
    const handleRankData = function (Data = null) {
        // 判断是否已经获取数据
        if (!Data.ref) {return}
        // 获取保存数据
        const data = Data.data
        let itemText = ''
        // 解析处理数据
        data.forEach(value => {
            itemText += `
                <li class="rank-list-item">
                    <a class="a-1">${value.rank}</a>
                    <span class="a-2"><img src="${value.clubImg}"/>${value.clubName}</span>
                    <a class="a-3">${value.Outcome}</a>
                    <a class="a-4">${value.integral}</a>
                </li>
            `
        })
        // 返回处理好的数据
        return $(`
            <ul class="score-rank-list">
                ${itemText}
            </ul>
        `)
    }
    // 切换不同的模块
    $('.component-6 [data-tab^="con-"]').mouseenter( function () {
        // 显示当前页
        // 获取用于匹配的key值
        const key = $(this).attr('data-tab')
        // 获取赛事容器对象
        const gameCon = $('[class$="-container"]')
        
        // 选择对应的内容页
        let conTab = gameCon.children(`.${key}`)
        
        // 判断是否需要AJAX提取数据
        if (!conTab.length && key === 'con-01') {
            // 创建主体包含块
            conTab = $(`<div class="${key}">
                </div>
            `)
            // 
            gameCon.append(conTab)
            // 获取主体包含块对象
            const conNode = $(`.component-6 .${key}`)
            // AJAX获取轮播的数据
            getGameIfo('./mock/slip.json').then( data => {
                conNode.append(handleSlipData(data))
                conTab = gameCon.children(`.${key}`)
                
                // 设置轮播
                const mainNode = $('.component-6 .slip-wrap').get(0)
                const slip = new Slip(mainNode)
                slip.parameters = {
                    speed: -522,
                    interval: 2000,
                    isAuto: true,
                    autoMove: false,
                    manual: true,
                }
                slip.start()
                slip.setSize(16)
                $('.component-6 .swiper-left').click(function () {
                    slip.movePosition(522)
                })
                $('.component-6 .swiper-right').click(function () {
                    slip.movePosition(-522)
                })
                // 显示该页面
                conTab.fadeIn(1000)
                return
            })
            .then(() => {
                // 生成排名模块的主体框架
                conTab.append($(`
                <aside class="side score-rank">
                    <h2 class="part-top-tab">积分榜</h2>
                    <div class="rank">
                        <header>
                            <h4 class="score-rank-list-title">
                                <a class="a-1">排名</a>
                                <a class="a-2">俱乐部</a>
                                <a class="a-3">胜负</a>
                                <a class="a-4">积分</a>
                            </h4>
                        </header>
                        <main class="rank-scroll-bar">
                        </main>
                    </div>
                </aside>
                `))
                // 获取最佳阵容名单
                getGameIfo('./mock/player.json').then( data => {
                    conTab.append(handlePlayerData(data))
                    // 处理滚动条逻辑
                    const  ps  =  new  PerfectScrollbar('.component-6 .rank-scroll-bar', { 
                        wheelSpeed: 1,
                        wheelPropagation: true,
                        minScrollbarLength: 20 
                      })
                })
                getGameIfo('./mock/rank.json').then( data => {
                    const $data = handleRankData(data)
                    $('.component-6 .rank-scroll-bar').append($data)
                })
            }).catch(() => {})
        }
        // 隐藏其他同辈页面
        conTab.siblings().fadeOut(10)
        // 显示匹配的页面
        conTab.fadeIn(200)
    })
})()