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