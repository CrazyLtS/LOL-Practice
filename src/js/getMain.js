(() => {
    // ajax
    const getNodeIfo = (url) => {
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
        const nodeText = `
        <div class="notice contain-center">
            <div class="notice-swiper">
                <ul class="swiper">
                    <li class="swiper-item"><img src="./src/imgs/contain/swiper/monv.jpeg"/></li>
                    <li class="swiper-item"><img src="./src/imgs/contain/swiper/monv2020.jpeg"/></li>
                    <li class="swiper-item"><img src="./src/imgs/contain/swiper/winqbi.jpeg"/></li>
                    <li class="swiper-item"><img src="./src/imgs/contain/swiper/yinhe.jpeg"/></li>
                    <li class="swiper-item"><img src="./src/imgs/contain/swiper/lolsaid.jpeg"/></li>
                    <li class="swiper-item"><img src="./src/imgs/contain/swiper/monv.jpeg"/></li>
                </ul>
                <ul class="swiper-icon-nav">
                    <li class="swiper-icon active">魔女 婕拉 至臻</li>
                    <li class="swiper-icon">魔女2020</li>
                    <li class="swiper-icon">参与竞猜赢Q币</li>
                    <li class="swiper-icon">银河战争通行证</li>
                    <li class="swiper-icon">LPL周边特惠</li>
                </ul>
            </div>
            <div class="notice-news">
                <ul class="notice-nav">
                    <li class="notice-btn nav-btn active">综合</li>
                    <li class="notice-btn nav-btn">公告</li>
                    <li class="notice-btn nav-btn">赛事</li>
                    <li class="notice-btn nav-btn">攻略</li>
                    <li class="notice-btn nav-btn">社区</li>
                </ul>
                <ul class="notice-ifon">
                    <h3 class="ifon-title">LPL春季赛季后赛赛程正式公布</h3>
                    <li class="ifon"><span class="nt-logo ifon-logo">公告</span><p class="ifon-text nt-text">10.8云顶之弈更新：暗星法师泽拉斯降临</p><span class="notice-time">04-15</span></li>
                    <li class="ifon"><span class="nt-logo ifon-logo">公告</span><p class="ifon-text nt-text">10.8版本更新公告：死亡机制迎来重大调整</p><span class="notice-time">04-15</span></li>
                    <li class="ifon"><span class="gm-logo ifon-logo">赛事</span><p class="ifon-text gm-text">LPL春季赛季后赛将启 群雄逐鹿决战巅峰</p><span class="notice-time">04-20</span></li>
                    <li class="ifon"><span class="nt-logo ifon-logo">公告</span><p class="ifon-text nt-text">凤出东方 凰鸣四海！FPX冠军手办抢先看！</p><span class="notice-time">04-20</span></li>
                    <li class="ifon"><span class="gm-logo ifon-logo">赛事</span><p class="ifon-text gm-text">2020LPL春季赛常规赛荣誉评定开启</p><span class="notice-time">04-17</span></li>
                    <li class="ifon"><span class="nt-logo ifon-logo">公告</span><p class="ifon-text  nt-text">甜心少女赖美云加盟《偶像陪练团》 携手红莲大战云顶之弈</p><span class="notice-time">04-16</span></li>
                </ul>
                <div class="notice-btn-detail">
                    <span>阅读更多</span>
                    <span class="c2">最新资讯</span>
                    <i class="more-arrow"></i>
                </div>
            </div>
        </div>
        <div class="contain-center component-3">
            <!-- 热门活动 -->
            <div class="master campaign">
                <div class="cam-header">
                    <div class="cam-title">热门活动</div>
                    <ul class="cam-nav">
                        <li class="cam-nav-btn nav-btn">正在进行</li>
                        <li class="cam-nav-btn nav-btn">商城特惠</li>
                        <li class="cam-nav-btn nav-btn">长期活动</li>
                        <li class="move-btn">
                            <span class="c2">更多</span>
                            <i class="more-arrow"></i>
                        </li>
                    </ul>
                </div>
                <div class="cam-contain">
                    <div class="tap">
                        <img class="tap-img" src="./src/imgs/contain/cam/01.jpg"/>
                        <div class="innerhover">
                            <div class="innerhover-border">
                                <h4>谁是最强竞猜王</h4>
                                <p>4月20日-5月2日参与2020LPL春季赛竞猜活动，赢取Q币和周边奖励。</p>
                                <p>2020-04-20 - 2020-05-02</p>
                            </div>
                        </div>
                        <p class="tap-title">谁是最强竞猜王</p>
                        <div class="end-time">10天后结束<i class="new-btn"></i></div>
                    </div>

                    <div class="tap">
                        <img class="tap-img" src="./src/imgs/contain/cam/02.jpg"/>
                        <div class="innerhover">
                            <div class="innerhover-border">
                                <h4>LPL周边特惠</h4>
                                <p>助威LPL季后赛，LPL主题周边限时7折回馈。</p>
                                <p>2020-04-20 - 2020-05-05</p>
                            </div>
                        </div>
                        <p class="tap-title">LPL周边特惠</p>
                        <div class="end-time">13天后结束<i class="new-btn"></i></div>
                    </div>
                    
                    <div class="tap">
                        <img class="tap-img" src="./src/imgs/contain/cam/03.jpg"/>
                        <div class="innerhover">
                            <div class="innerhover-border">
                                <h4>魔女 婕拉 至臻</h4>
                                <p>100 至臻点(2020)兑换</p>
                                <p>2020-04-17 - 2021-01-29</p>
                            </div>
                        </div>
                        <p class="tap-title">魔女 婕拉 至臻</p>
                        <div class="end-time">282天后结束<i class="new-btn"></i></div>
                    </div>
                    
                    <div class="tap">
                        <img class="tap-img" src="./src/imgs/contain/cam/04.jpg"/>
                        <div class="innerhover">
                            <div class="innerhover-border">
                                <h4>银河战争通行证</h4>
                                <p>集银河币兑换暗星 墨菲特 至臻、至臻点（2020）等专属奖励</p>
                                <p>2020-03-27 - 2020-05-01</p>
                            </div>
                        </div>
                        <p class="tap-title">银河战争通行证</p>
                        <div class="end-time">9天后结束<i class="new-btn"></i></div>
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
            </div>
        </div>
        <div class="contain-center component-4">
            <!-- 新英雄新皮肤 -->
            <div class="master newthing">
                <div class="new-hero">
                    <img src="./src/imgs/contain/hero/hero-0.jpg" width="100%">
                    <a class="label">新英雄</a>
                    <p class="p-title">穿街过市 人声皆暗。</p>
                    <p class="p3">远古恐惧 费德提克</p>
                    <div class="inner-ifon">
                        <p class="p1">远古恐惧 费德提克</p>
                        <div class="detail-btn">
                            查看详情
                            <i class="more-arrow"></i>
                        </div>
                    </div>
                </div>
                <div class="new-skin">
                    <div class="skin-video">
                        <img src="./src/imgs/contain/hero/skin-0.jpg" width="100%">
                        <a class="label">新皮肤</a>
                        <p class="p-title">全新皮肤、炫彩礼包上线</p>
                        <p class="p3">魔女2020</p>
                        <div class="inner-video">
                            <video class="video-src" controls preload="auto" width="100%" height="auto">
                                <source src="./src/imgs/contain/hero/video-0.mp4">
                            </video>
                            <div class="skin-ifon">
                                <p class="p1">全新皮肤、炫彩礼包上线</p>
                                <p class="p2">魔女2020</p>
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
                            <li class="fz-item" title="Ashe"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Ashe.png"/></li>
                            <li class="fz-item" title="Gangplank"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Gangplank.png"/></li>
                            <li class="fz-item" title="Heimerdinger"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Heimerdinger.png"/></li>
                            <li class="fz-item" title="Jhin"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Jhin.png"/></li>
                            <li class="fz-item" title="Kalista"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Kalista.png"/></li>
                            <li class="fz-item" title="Kassadin"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Kassadin.png"/></li>
                            <li class="fz-item" title="Katarina"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Katarina.png"/></li>
                            <li class="fz-item" title="LeeSin"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/LeeSin.png"/></li>
                            <li class="fz-item" title="Lissandra"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Lissandra.png"/></li>
                            <li class="fz-item" title="Nami"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Nami.png"/></li>
                            <li class="fz-item" title="Poppy"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Poppy.png"/></li>
                            <li class="fz-item" title="Ryze"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Ryze.png"/></li>
                            <li class="fz-item" title="Skarner"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Skarner.png"/></li>
                            <li class="fz-item" title="Sona"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Sona.png"/></li>
                            <li class="fz-item" title="Talon"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Talon.png"/></li>
                            <li class="fz-item" title="Teemo"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Teemo.png"/></li>
                            <li class="fz-item" title="Trundle"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Trundle.png"/></li>
                            <li class="fz-item" title="Viktor"><img width="100%" height="100%" src="./src/imgs/contain/hero/fz-hero/Viktor.png"/></li>
                        </ul>
                    </div>
               </div>
            </div>
            <div class="more-skin">
                <ul class="skin-nav">
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/0.jpg"/><p>创世魔神2020</p></li>
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/1.jpg"/><p>愚人节2020</p></li>
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/2.jpg"/><p>峡谷勇者2020</p></li>
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/3.jpg"/><p>银河战争</p></li>
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/4.jpg"/><p>黯晶2020</p></li>
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/5.jpg"/><p>腥红之月2020</p></li>
                    <li class="skin-item"><img class="skin-item-img" src="./src/imgs/contain/hero/skin-nav/6.jpg"/><p>2020情人节</p></li>
                </ul>
            </div>
        </div>
        <div class="g-wrap-vp component-5">
            <div class="wrap-vp">
                <div class="master new-video">
                    <div class="cam-header">
                        <div class="cam-title">最新视频</div>
                        <ul class="cam-nav">
                            <li class="cam-nav-btn nav-btn">推荐</li>
                            <li class="cam-nav-btn nav-btn">官方</li>
                            <li class="cam-nav-btn nav-btn">娱乐</li>
                            <li class="cam-nav-btn nav-btn">赛事</li>
                            <li class="cam-nav-btn nav-btn">云顶之弈</li>
                            <li class="cam-nav-btn nav-btn">教学</li>
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
                    <ul class="video-content">
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/01.jpg"/>
                            </div>
                            <a class="video-length">01:51</a>
                            <p class="name-video">
                                这是克制女团与暗星的最强装备？斗鱼梨落解锁经典斗枪出装
                            </p>
                            <a class="play-times">4314</a>
                            <a class="update-time">4小时前</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/02.jpg"/>
                            </div>
                            <a class="video-length">06:16</a>
                            <p class="name-video">
                                
      LOL：令人欢呼的5大完美团战，这配合看完后，就一句话：痛快
                            </p>
                            <a class="play-times">1.2万次播放</a>
                            <a class="update-time">2020-04-26</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/03.jpg"/>
                            </div>
                            <a class="video-length">01:45</a>
                            <p class="name-video">
                                
      云顶之弈：星守女团被吊打，粉丝不开心，斗鱼纯子：福利来搭救！
                            </p>
                            <a class="play-times">7万次播放</a>
                            <a class="update-time">2020-04-24</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/04.jpg"/>
                            </div>
                            <a class="video-length">10:47</a>
                            <p class="name-video">
                                
      英雄在干嘛：理发师小白料理师蛇蛇上线小花生分享队员初印象
                            </p>
                            <a class="play-times">2万次播放</a>
                            <a class="update-time">2020-04-20</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/05.jpg"/>
                            </div>
                            <a class="video-length">03:23</a>
                            <p class="name-video">
                                
      TOP5：Doinb瑞兹掌控雷电极限五杀
                            </p>
                            <a class="play-times">1.8万次播放</a>
                            <a class="update-time">2020-04-26</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/06.jpg"/>
                            </div>
                            <a class="video-length">02:21</a>
                            <p class="name-video">
                                
      Mlxg复盘RNG比赛 喊话Ming：看你们比赛看饿了！
                            </p>
                            <a class="play-times">3万次播放</a>
                            <a class="update-time">2020-04-25</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/07.jpg"/>
                            </div>
                            <a class="video-length">03:49</a>
                            <p class="name-video">
      【JDG英雄联盟】《JLOG》京东 加油
                            </p>
                            <a class="play-times">1.7万次播放</a>
                            <a class="update-time">2020-04-23</a>
                        </li>
                        <li class="video-item">
                            <div class="mask-img">
                                <img src="./src/imgs/contain/hotVideo/0.jpg"/>
                            </div>
                            <a class="video-length">00:46</a>
                            <p class="name-video">
                            theshy厄斐琉斯上单秀翻Puff：iG又多了一个黑科技?
                            </p>
                            <a class="play-times">3.7万次播放</a>
                            <a class="update-time">2020-04-25</a>
                        </li>
                    </ul>
                </div>
                <div class="side hot-album">
                    <div class="cam-header">
                        <div class="cam-title">热门专辑</div>
                        <ul class="cam-nav">
                            <li class="cam-nav-btn nav-btn">周一</li>
                            <li class="cam-nav-btn nav-btn">周二</li>
                            <li class="cam-nav-btn nav-btn">周三</li>
                            <li class="cam-nav-btn nav-btn">周四</li>
                            <li class="cam-nav-btn nav-btn">周五</li>
                            <li class="cam-nav-btn nav-btn">周六</li>
                            <li class="cam-nav-btn nav-btn">周日</li>
                        </ul>
                    </div>
                    <main class="slip-wrap">
                        <ul class="slip-main">
                            <li class="slip-item">
                                <div class="item-wraper">
                                    <img class="program-pic" src="./src//imgs/contain/swiper/hotAlbem/01.jpg">
                                    <h4 class="name-program">主播日报</h4>
                                    <p class="progress-program">2020-04-27更新</p>
                                </div>
                                <p class="name-progress">主播每日搞笑镜 头集锦。</p>
                                <div class="author-program">
                                    <img src="./src//imgs/contain/swiper/hotAlbem/01-a.jpg">
                                    <span>兔玩LOL</span>
                                </div>
                            </li>
                            <li class="slip-item">
                                <div class="item-wraper">
                                    <img class="program-pic" src="./src//imgs/contain/swiper/hotAlbem/02.png">
                                    <h4 class="name-program">巅峰top5</h4>
                                    <p class="progress-program">2019-12-02更新</p>
                                </div>
                                <p class="name-progress">巅峰top5是一档精彩英雄联盟赛事集锦节目，为广大玩家带来每日LPL比赛精彩镜头</p>
                                <div class="author-program">
                                    <img src="./src//imgs/contain/swiper/hotAlbem/02-a.webp">
                                    <span>飞熊TV英雄联盟</span>
                                </div>
                            </li>
                            <li class="slip-item">
                                <div class="item-wraper">
                                    <img class="program-pic" src="./src//imgs/contain/swiper/hotAlbem/03.jpg">
                                    <h4 class="name-program">小鱼Top5</h4>
                                    <p class="progress-program">2020-04-27更新</p>
                                </div>
                                <p class="name-progress">汇集英雄联盟最顶级精彩操作视频。</p>
                                <div class="author-program">
                                    <img src="./src//imgs/contain/swiper/hotAlbem/03-a.png">
                                    <span>LOL解说小鱼</span>
                                </div>
                            </li>
                            <li class="slip-item">
                                <div class="item-wraper">
                                    <img class="program-pic" src="./src//imgs/contain/swiper/hotAlbem/04.jpg">
                                    <h4 class="name-program">联盟囧事</h4>
                                    <p class="progress-program">2019-12-19更新</p>
                                </div>
                                <p class="name-progress">联盟囧事为您展示游戏中的逗B操作/坑爹队友的花式神操作，一分钟小视频带你笑不停！悄悄告诉您【这是一档每日搞笑的节目】</p>
                                <div class="author-program">
                                    <span>帅气猫出品</span>
                                </div>
                            </li>
                            <li class="slip-item">
                                <div class="item-wraper">
                                    <img class="program-pic" src="./src//imgs/contain/swiper/hotAlbem/05.jpg">
                                    <h4 class="name-program">鹌鹑云顶锦囊</h4>
                                    <p class="progress-program">2020-03-09更新</p>
                                </div>
                                <p class="name-progress">7连鸡，吃鸡霸主，云顶吃鸡小王子的吃鸡秘诀，斗帝流、盾法流、东北大乱盾创造者</p>
                                <div class="author-program">
                                    <img src="./src//imgs/contain/swiper/hotAlbem/05-a.webp">
                                    <span>东北大鹌鹑</span>
                                </div>
                            </li>
                        </ul>
                    </main>
                    <div class="more-hotprogram">
                        前往视频中心
                        <i class="more-arrow "></i>
                    </div>
                    <span class="swiper-left"></span>
                    <span class="swiper-right"></span>
                </div>
            </div>
        </div>
        <div class="contain-center component-6">
            <div class="cam-header">
                <div class="cam-title">赛事中心</div>
                <ul class="cam-nav">
                    <li class="cam-nav-btn nav-btn" data-tab="con-01">春季赛季后赛</li>
                    <li class="cam-nav-btn nav-btn" data-tab="con-02">春季赛常规赛</li>
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
            <div class="games-container">
                <!-- 添加赛事数据 -->
                <div class="con-02">
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
            </div>
        </div>
        <div class="g-wrap-vp component-7">
            <div class="wrap-vp">
                <!-- 导航头部 -->
                <div class="cam-header">
                    <div class="cam-title">赛事中心</div>
                    <ul class="cam-nav">
                        <li class="cam-nav-btn nav-btn">所有英雄</li>
                        <li class="cam-nav-btn nav-btn">战士</li>
                        <li class="cam-nav-btn nav-btn">法师</li>
                        <li class="cam-nav-btn nav-btn">刺客</li>
                        <li class="cam-nav-btn nav-btn">坦克</li>
                        <li class="cam-nav-btn nav-btn">射手</li>
                        <li class="cam-nav-btn nav-btn">辅助</li>
                        <li class="move-btn">
                            <span class="c2">资料库</span>
                            <i class="more-arrow"></i>
                        </li>
                    </ul>
                </div>
                <!-- 英雄资料主体包含块 -->
                <div class="hero-slip-wrap">
                </div>
            </div>
        </div>
        <div class="contain-center component-8">
            <div class="master">
                <div class="cam-header">
                    <div class="cam-title">FANART创作馆</div>
                    <ul class="cam-nav">
                        <li class="move-btn">
                            <span class="c2">更多</span>
                            <i class="more-arrow"></i>
                        </li>
                    </ul>
                </div>
                <!-- 模块内容 -->
                <ul class="fanart-content">
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/ruiwen/258.jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    兔兔瑞文的头像
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/ruiwen/g.jpg">
                                    巷子深
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>52</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/jie/258.jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    劫
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/jie/g.jpg">
                                    废人
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>12</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/kaiyin/258 .jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    忏悔
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/kaiyin/g.jpg">
                                    敷衍
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>84</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/yasuo/258.jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    亚索 疾风剑豪
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/yasuo/g.jpg">
                                    我能活到200岁
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>22</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/liqing/258 .jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    劳动节盲僧
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/liqing/g.jpg">
                                    一盏魂灯渡黑鸭
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>25</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/akl/258.jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    魔女婕拉~
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/akl/g.jpg">
                                    妹红姬
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>61</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/tienan/258.jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    莫德凯撒
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/tienan/g.jpg">
                                    62
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>59</span>
                                </a>
                            </p>
                        </div>
                    </li>
                    <li class="fanart-item">
                        <a href="javascript:;">
                            <img src="./src/imgs/fanart/nvjing/258.jpg">
                        </a>
                        <div class="innerhover-bottom">
                            <h4>
                                <a href="javascript:;">
                                    凯特琳
                                  </a>
                            </h4>
                            <p>
                                <a href="javascript:;">
                                    <img src="./src/imgs/fanart/nvjing/g.jpg">
                                    2晴
                                </a>
                                <a href="javascript:;">
                                    <i class="icon-666"></i>
                                    <span>185</span>
                                </a>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="side">
                <div class="side-column">
                    <a href="javascript:;">
                    <img src="./src/imgs/fanart/column/0.png">
                    </a>
                </div>
                <ul class="side-right">
                    <li class="href-right">
                        <img src="./src/imgs/fanart/column/href-bg-2.jpg">
                        <a href="javascript:;">
                            <i class="inline-icon"></i>英雄联盟用户调查</a>
                    </li>
                    <li class="href-right">
                        <img src="./src/imgs/fanart/column/href-bg-3.jpg">
                        <a href="javascript:;">
                            <i class="inline-icon"></i>见证版本历史</a>
                    </li>
                    <li class="href-right">
                        <img src="./src/imgs/fanart/column/href-bg-4.jpg">
                        <a href="javascript:;">
                            <i class="inline-icon"></i>年度品牌展示</a>
                    </li>
                    <li class="href-right-nav">
                        <a href="javascript:;">
                            <i class="icon-left"></i>
                            合作媒体
                            <i class="icon-more"></i>
                            <i class="icon-right"></i>
                        </a>
                        <div class="href-nav">
                            <a href="javascript:;">兔玩</a>
                            <a href="javascript:;">特玩</a>
                            <a href="javascript:;">T-rex</a>
                            <a href="javascript:;">大电竞</a>
                            <a href="javascript:;">虎扑电竞</a>
                            <a href="javascript:;">大咖</a>
                            <a href="javascript:;">多玩</a>
                            <a href="javascript:;">玩加电竞</a>
                            <a href="javascript:;">伐木累</a>
                            <a href="javascript:;">捞月狗</a>
                            <a href="javascript:;">飞熊TV</a>
                            <a href="javascript:;">游戏魅</a>
                            <a href="javascript:;">电竞虎</a>
                            <a href="javascript:;">掌游宝</a>
                            <a href="javascript:;">u9</a>
                            <a href="javascript:;">爱拍</a>
                            <a href="javascript:;">木木不哭</a>
                            <a href="javascript:;">NGA</a>
                            <a href="javascript:;">178</a>
                            <a href="javascript:;">锐派</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>`
        // 添加内容
        mainNode.innerHTML = nodeText
        return mainNode
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
    })
    .then(() => {
        containNode.appendChild(createMain())
    })
    .then(() => {
        const htmlNode = document.documentElement
        const jqNode = createScript('./src/js/jquery.js')
        jqNode.onload = function () {
            const indexNode = createScript('./src/js/index.js')
            indexNode.onload = function () {
                // 关闭加载动画
                const forShowNode = document.getElementById('froword-bg')
                document.body.removeChild(forShowNode)
                wrapNode.style.visibility = 'visible'
            }
            htmlNode.appendChild(createScript('./src/js/Slip.js'))
            htmlNode.appendChild(createScript('./src/js/getIfo.js'))
            htmlNode.appendChild(indexNode)
            htmlNode.appendChild(createScript('./src/js/hotAlbum.js'))
            htmlNode.appendChild(createScript('./src/js/compont8.js'))
        }
        htmlNode.appendChild(jqNode)
        htmlNode.appendChild(createScript('./src/js/perfect_scrollbar.js'))
    })
})()