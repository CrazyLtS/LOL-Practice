((window) => {
    /* 
        用于创建node节点
        */
    const createNode = function ({
        wrap = { ele: '', attr: {} },
        template = '',
        addEvent = {},
        childNodes = {}
    }) {
        const eleNode = document.createElement(wrap.ele)
        // 判断是否需要配置html属性
        if (wrap.attr) {
            for (const key in wrap.attr) {
                // 判断是否为属于attr中的属性
                if (wrap.attr.hasOwnProperty(key)) {
                    const value = wrap.attr[key];
                    switch (key) {
                        // 添加类
                        case 'className':
                            if (value instanceof Array) {
                                value.forEach((className) => {
                                    eleNode.classList.add(className)
                                })
                            } else {
                                eleNode.classList.add(value)
                            }
                            break
                            // 添加属性
                        case 'dataset':
                            if (value instanceof Array) {
                                value.forEach((data) => {
                                    if (data instanceof Array) {
                                        eleNode.setAttribute(data)
                                    }
                                })
                            } else if (typeof value === 'object') {
                                for (const key in value) {
                                    if (value.hasOwnProperty(key)) {
                                        const element = value[key];
                                        eleNode.setAttribute(key, element)
                                    }
                                }
                            } else {
                                eleNode.setAttribute(value)
                            }
                            break
                    }
                }
            }
        }
        // 添加template组件结构
        if (template.length > 0) {
            // 匹配template中的内容，HTML标签内容和text文本内容
            /^(<[\s\S]+>)[\s\S]*(<\/[a-zA-Z0-9_-]+>)$/.test(template) ? eleNode.innerHTML = template : eleNode.innerText = template
        }
        // template加载完之后触发以下检测
        setTimeout(() => {
            // 添加event事件监听器及方法
            if (Object.getOwnPropertyNames(addEvent).length > 0) {
                // 判断是否有设置系统事件监听
                if (addEvent.events) {
                    const events = addEvent.events
                    // 监听系统事件
                    for (const key in events) {
                        // 判断是否events自有属性，且key值属性的值为Function
                        if (events.hasOwnProperty(key) && typeof events[key] === 'function') {
                            const event = events[key].bind(eleNode)
                            // 监听事件
                            // 回调函数的参数可以使用默认值的方式传入如：(e = event) => {log(e)}
                            eleNode.addEventListener((key + '').trim(), event)
                        }
                    }
                }

                // 调用方法
                // 判断是否有methods对象
                const methods = addEvent.methods ? addEvent.methods : addEvent
                for (const key in methods) {
                    // 判断是否methods自有属性，且key值属性的值为Function
                    if (methods.hasOwnProperty(key) && typeof methods[key] === 'function') {
                        // 绑定this指向
                        const event = methods[key].bind(eleNode)
                        // 调用方法
                        event()
                    }
                }
            }
            // 判断是否添加子类
            if (Object.getOwnPropertyNames(childNodes).length > 0) {
                for (const key in childNodes) {
                    if (childNodes.hasOwnProperty(key)) {
                        const childNode = childNodes[key]
                        // 加入子类
                        eleNode.appendChild(childNode)
                    }
                }
            }
        }, 10)
        
        return eleNode
    }

    window.createNode = createNode
})(window)
