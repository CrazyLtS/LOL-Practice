((w) => {
    const Public = {}
    // 头部按钮选中逻辑
    // 函数参数默认值不可以在箭头函数中使用
    Public.selected = function (handleType = 'hover', ajaxBack = (ele) => { }, callBack) {
        // 获取按钮
        const [...navBtns] = this.querySelectorAll('.nav-btn')
        // 触发事件类型
        switch (handleType) {
            case 'hover':
                handleEvent = 'mouseenter'
                break;
            case 'click':
                handleEvent = 'click'
                break;
        }
        // 处理按钮逻辑触发类型
        // 监听事件
        navBtns.forEach((ele) => {
            ele.addEventListener(handleEvent, () => {
                // 添加类
                ele.classList.add('selected')
                // 删除其他兄弟元素的selected类
                navBtns.forEach((other) => {
                    if (other !== ele) {
                        other.classList.remove('selected')
                    }
                })
                // 判断是否需要获取数据
                let needAJAX = true
                const dataWrap = this.querySelector('[data-type="wrap"]')
                // 清除所有模块的display类
                const [...items] = dataWrap.querySelectorAll('[data-url]')
                items.forEach((item) => {
                    item.classList.remove('displaytype')
                    // 判读需要载入的模块是否匹配
                    if (item.dataset.url === ele.dataset.url && item.className.indexOf('error') === -1) {
                        item.classList.add('displaytype')
                        needAJAX = false
                    }
                })
                // 调用回调函数
                if (needAJAX) {ajaxBack(ele)}
                if (callBack) {callBack(ele)}
            })
        })
    }
    // ajax请求数据
    Public.getNodeIfo = (url) => {
        // 返回一个promise对象
        return new Promise((res, rej) => {
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
    // 抛出public
    w.Public = Public
})(window)