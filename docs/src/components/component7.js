(() => {
    /* 公共方法 */
    // 头部按钮方法selected, ajax方法getNodeIfo
    const { selected, getNodeIfo } = Public
    // 用于创建template
    const com7Text = function (data = {}) {
        // 编写template并返回
        const nodeText = `<div class="wrap-vp">
            <!-- 导航头部 -->
            <div class="cam-header">
                <div class="cam-title">英雄资料</div>
                <ul class="cam-nav">
                    <li class="cam-nav-btn nav-btn selected" data-url="allhero">所有英雄</li>
                    <li class="cam-nav-btn nav-btn" data-url="sdhero">战士</li>
                    <li class="cam-nav-btn nav-btn" data-url="mghero">法师</li>
                    <li class="cam-nav-btn nav-btn" data-url="asshero">刺客</li>
                    <li class="cam-nav-btn nav-btn" data-url="tkhero">坦克</li>
                    <li class="cam-nav-btn nav-btn" data-url="achero">射手</li>
                    <li class="cam-nav-btn nav-btn" data-url="adhero">辅助</li>
                    <li class="move-btn">
                        <span class="c2">资料库</span>
                        <i class="more-arrow"></i>
                    </li>
                </ul>
            </div>
            <!-- 英雄资料主体包含块 -->
            <div class="hero-list-wrap" data-type="wrap"></div>
        </div>`
        return nodeText
    }
    // 用于创建hero列表的template
    const heroText = function (data) {
        // 编写template并返回
        const nodeText = `<ul>${data.map((hero) => {
            return `<li class="hero-item">
                <a href="javascript:;">
                    <img src="${hero.heroProt}"/>
                    <i class="hover-icon"></i>
                    <p class="hero-name">
                        ${hero.heroName}
                    </p>
                </a>
            </li>`
        }).join('').trim()}
        </ul>`
        return nodeText
    }
    // 获取数据，生成DOM
        const com7Node = createNode({
            wrap: {
                ele: 'div',
                attr: {
                    className: ['g-wrap-vp', 'component-7']
                }
            },
            template: com7Text().trim(),
            addEvent: {
                methods: {
                    // 一些方法
                    // 头部部分逻辑
                    selected: function () {
                        selected.bind(this)('click', (ele) => {
                            const ifonWrap = this.querySelector('[data-type="wrap"]')
                            // 创建对应的模块
                            let heroType = ''
                            switch (ele.dataset.url) {
                                case 'allhero':
                                    heroType = 'allhero'
                                    break;
                                case 'sdhero':
                                    heroType = 'fighter'
                                    break;
                                case 'mghero':
                                    heroType = 'mage'
                                    break;
                                case 'asshero':
                                    heroType = 'assassin'
                                    break;
                                case 'tkhero':
                                    heroType = 'tank'
                                    break;
                                case 'achero':
                                    heroType = 'marksman'
                                    break;
                                case 'adhero':
                                    heroType = 'support'
                                    break;
                            }
                            const heroArray = this.data.filter((heroObj) => {
                                if (heroObj.career.indexOf(heroType) !== -1) {
                                    return heroObj
                                }
                            })
                            // 创建对应节点
                            const heroNode = createNode({
                                wrap: {
                                    ele: 'div',
                                    attr: {
                                        className: ['hero-inner-list', 'displaytype'],
                                        dataset: {'data-url': ele.dataset.url}
                                    }
                                },
                                template: heroText(heroArray).trim(),
                                addEvent: {
                                    methods: {
                                        addBar: function () {
                                            const ps = new PerfectScrollbar(this , {
                                                wheelSpeed: 0.5,
                                                wheelPropagation: true,
                                                minScrollbarLength: 20
                                            })
                                        }
                                    }
                                }
                            })

                            // 添加节点
                            this.querySelector('.hero-list-wrap').appendChild(heroNode)
                        })
                    },
                    // 加载初始化内容
                    startContent: function () {
                        getNodeIfo('./mock/com-7/heroList.json').then((data) => {
                            const startNode = createNode({
                                wrap: {
                                    ele: 'div',
                                    attr: {
                                        className: ['hero-inner-list', 'displaytype'],
                                        dataset: {'data-url': 'allhero'}
                                    }
                                },
                                template: heroText(data.data).trim(),
                                addEvent: {
                                    methods: {
                                        addBar: function () {
                                            const ps = new PerfectScrollbar(this , {
                                                wheelSpeed: 0.5,
                                                wheelPropagation: true,
                                                minScrollbarLength: 20
                                            })
                                        }
                                    }
                                }
                            })
                            this.data = data.data
                            this.querySelector('.hero-list-wrap').appendChild(startNode)
                        }).catch((error) => {
                            console.log(error)
                        })
                    }
                }
            }
        })
        // 向父级组件添加子组件
        document.querySelector('.contain .main').appendChild(com7Node)
})()