(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const {selected, getNodeIfo} = Public
    // 用于创建template
    const nodeText = function (data = {}) {
        // 编写template并返回
        const nodeText = `<div class="master">
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
        </div>`
        return nodeText
    }
    // 获取数据，生成DOM
    getNodeIfo('./mock/notice.json').then((data) => {
        const noticeNode = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['contain-center', 'component-8']
                }
            },
            template: nodeText().trim(),
            addEvent: {
                methods: {
                    // 一些方法
                    handleBar: function () {
                        const  ps8  =  new  PerfectScrollbar('.component-8 .href-nav', { 
                            wheelSpeed: .5,
                            wheelPropagation: true,
                            minScrollbarLength: 10
                          })
                    }
                }
            }
        })
        // 向父级组件添加子组件
        document.querySelector('.contain .main').appendChild(noticeNode)
    }).catch((error) => {
        console.log(error)
    })
})()