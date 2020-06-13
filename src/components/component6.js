(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const { selected, getNodeIfo } = Public
    // 用于创建template
    const nodeText = function (data = {}) {
        // 编写template并返回
        const nodeText = `<div class="cam-header">
                <div class="cam-title">赛事中心</div>
                <ul class="cam-nav">
                    <li class="cam-nav-btn nav-btn" data-tab="con-01" data-url="sgb">春季赛季后赛</li>
                    <li class="cam-nav-btn nav-btn" data-tab="con-02" data-url="sgc">春季赛常规赛</li>
                    <li class="move-btn">
                        <span class="c2">更多</span>
                        <i class="more-arrow"></i>
                    </li>
                    <li class="moregame">
                        <a class="more-game-url">2020英雄联盟职业联赛</a>
                        <i class="i con-hyp"></i>
                    </li>
                </ul>
            </div>
            <div class="games-container" data-type="wrap">
                <!-- 添加赛事数据 -->
                <div class="con-02 displaytype" data-url="sgb">
                    <div class="event-type-1">
                        <!-- 第一轮 -->
                        <div class="list-col">
                            <div class="list-col-one">
                                <h3 class="match-part-name">第一轮</h3>
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月22日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/es.png" ></span>
                                    <a class="team-name">ES</a>
                                    <a class="score">1</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/0.png" ></span>
                                    <a class="team-name">WE</a>
                                    <a class="score">3</a>
                                </p>
                            </div>
                            <div class="list-col-one">
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月23日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/edg.png" ></span>
                                    <a class="team-name">EDG</a>
                                    <a class="score">3</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/rng.png" ></span>
                                    <a class="team-name">RNG</a>
                                    <a class="score">1</a>
                                </p>
                            </div>
                        </div>
                        <i class="link-0"></i>
                        <!-- 第二轮 -->
                        <div class="list-col">
                            <div class="list-col-one">
                                <h3 class="match-part-name">第二轮</h3>
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月24日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/playerIfo/tes.png" ></span>
                                    <a class="team-name">TES</a>
                                    <a class="score">3</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/0.png" ></span>
                                    <a class="team-name">WE</a>
                                    <a class="score">3</a>
                                </p>
                            </div>
                            <div class="list-col-one">
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月25日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/fpx.png" ></span>
                                    <a class="team-name">FPX</a>
                                    <a class="score">3</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/edg.png" ></span>
                                    <a class="team-name">EDG</a>
                                    <a class="score">1</a>
                                </p>
                            </div>
                        </div>
                        <i class="link-0"></i>
                        <!-- 第三轮 -->
                        <div class="list-col">
                            <div class="list-col-one">
                                <h3 class="match-part-name">第三轮</h3>
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月26日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/ig.png" ></span>
                                    <a class="team-name">IG</a>
                                    <a class="score">1</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/playerIfo/tes.png" ></span>
                                    <a class="team-name">TES</a>
                                    <a class="score">3</a>
                                </p>
                            </div>
                            <div class="list-col-one">
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月27日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/jdg.png" ></span>
                                    <a class="team-name">JDG</a>
                                    <a class="score">3</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/fpx.png" ></span>
                                    <a class="team-name">FPX</a>
                                    <a class="score">0</a>
                                </p>
                            </div>
                        </div>
                        <i class="link-1"></i>
                        <!-- 总决赛 -->
                        <div class="list-col final">
                            <div class="list-col-one">
                                <h3 class="match-part-name">总决赛</h3>
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">5月02日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/playerIfo/tes.png" ></span>
                                    <a class="team-name">TES</a>
                                    <a class="score">2</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/jdg.png" ></span>
                                    <a class="team-name">JDG</a>
                                    <a class="score">3</a>
                                </p>
                            </div>
                        <!-- 季军赛 -->
                        <div class="m-third">
                            <div class="list-col-one">
                                <h3 class="match-part-name">季军赛</h3>
                                <p class="info">
                                    <span class="status">已结束</span>
                                    <span class="time">4月29日 17:00</span>
                                    <a class="href-view" href="javascript:;">视频</a>
                                    <a class="href-data" href="javascript:;">数据</a>
                                </p>
                                <p class="team">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/ig.png" ></span>
                                    <a class="team-name">IG</a>
                                    <a class="score">0</a>
                                </p>
                                <p class="team win">
                                    <span class="img-wrap"><img src="./src/imgs/contain/gameIfo/fpx.png" ></span>
                                    <a class="team-name">FPX</a>
                                    <a class="score">3</a>
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>`
        return nodeText
    }
    // 处理轮播的数据
    const con2Text = function (Data) {
        if (Data.ref) {
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
            return `<main class="slip-wrap game-wrap">
                <ul class="slip-main">
                ${itemText}
                </ul>
            </main>
            <span class="swiper-left"></span>
            <span class="swiper-right"></span>`
        }
    }
    const rankText = function () {
        return `<h2 class="part-top-tab">积分榜</h2>
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
            </div>`
    }
    // 处理模块02的数据, 使用了jQuery
    const createCon2 = function (data, parent) {
        // 创建con2节点
        const con2Node = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['con-01'],
                    dataset: { 'data-url': 'sgc' }
                }
            },
            template: con2Text(data).trim(),
            addEvent: {
                methods: {
                    con2Auto: function () {
                        // 设置轮播
                        const mainNode = this.querySelector('.slip-wrap')
                        const slip = new Slip(mainNode)
                        slip.parameters = {
                            speed: -522,
                            interval: 2000,
                            isAuto: false,
                            autoMove: false,
                            manual: true,
                        }
                        slip.start()
                        slip.setSize(16)
                        parent.querySelector('.swiper-left').onclick = function () {
                            if (Number.parseInt(slip.getTransform('translateX')) >= 0) {return}
                            slip.movePosition(522)
                        }
                        parent.querySelector('.swiper-right').onclick = function () {
                            console.log((slip.slipObj.offsetWidth - slip.obj.offsetWidth));
                            
                            if (Number.parseInt(slip.getTransform('translateX')) < -(slip.slipObj.offsetWidth - slip.obj.offsetWidth - 522)) {return}
                            slip.movePosition(-522)
                        }
                    }
                }
            }
        })
        return con2Node
    }
    // 生成排名模块
    const createRank = function () {
        const rankNode = createNode({
            wrap: {
                ele: 'aside',
                attr: {
                    className: ['side', 'score-rank']
                }
            },
            template: rankText().trim(),
            addEvent: {
                methods: {
                    scrollBar: function () {
                        const barNode = this.querySelector('.rank-scroll-bar')
                        const ps = new PerfectScrollbar(barNode , {
                            wheelSpeed: 1,
                            wheelPropagation: true,
                            minScrollbarLength: 20
                        })
                    }
                }
            }
        })
        return rankNode
    }
    // 处理最佳玩家数据
    const handlePlayerData = function (Data) {
        // 判断是否已经获取正确数据
        if (!Data.ref) {return}
        // 处理获取的数据
        const data = Data.data
        const playText = `<h2 class="part-top-tab">每周最佳阵容</h2>
            <ul class="power-list">
                ${data.map((value) => {
                    return `<li class="power-item">
                        <div class="lpl-player">
                            <img class="player" src="${value.playerImg}">
                            <i class="power-rank-role" style="background-position:${value.rolePosition}"></i>
                            <img class="player-team-logo" src="${value.teamLogo}">
                        </div>
                        <p class="player-name">${value.playerName}</p>
                    </li>`
                }).join('').trim()}
            </ul>`
        // 创建player节点
        const playerNode = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['master', 'power-rank']
                }
            },
            template: playText.trim()
        })
        return playerNode
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
    // 获取数据，生成DOM
    const com6Node = createNode({
        wrap: {
            ele: 'div',
            attr: {
                className: ['contain-center', 'component-6']
            }
        },
        template: nodeText().trim(),
        addEvent: {
            methods: {
                // 一些方法
                // 头部按钮部分逻辑
                selected: function () {
                    selected.bind(this)('hover', (ele) => {
                        const $this =this
                        const con2Wrap = this.querySelector('[data-type="wrap"]')
                        const url = `./mock/${ele.dataset.url}.json`
                        getNodeIfo(url).then((data) => {
                            const con2Node = createCon2(data, $this)
                            con2Wrap.appendChild(con2Node)
                            return con2Node
                        })
                        .then((con2Node) => {
                            // 生成排名模块的主体框架
                            const renkNode = createRank()
                            con2Node.appendChild(renkNode)
                            // 滑动区域
                            const barNode = renkNode.querySelector('.rank-scroll-bar')
                            // 获取最佳阵容名单
                            getNodeIfo('./mock/player.json').then(data => {
                                con2Node.appendChild(handlePlayerData(data))
                            })
                            getNodeIfo('./mock/rank.json').then(data => {
                                const $data = handleRankData(data)
                                $(barNode).append($data)
                            })
                        })
                        .catch((error) => {
                            // 判断是否曾获取数据失败
                            if (con2Wrap.querySelector(`[data-url="${ele.dataset.url}"]`)) {
                                con2Wrap.removeChild(con2Wrap.querySelector(`[data-url="${ele.dataset.url}"]`))
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
                            con2Wrap.appendChild(errorEle)
                        })
                    })
                }
            }
        }
    })
    // 向父级组件添加子组件
    document.querySelector('.contain .main').appendChild(com6Node)
})()