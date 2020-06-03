'use strict'
/* 
       创建滑屏类slip
        */
class Slip {
    // 构建函数
    constructor(obj) {
        this.obj = obj
        this.slipObj = obj.querySelector('.slip-main')
        this.parameters = {
            speed: -273,
            interval: 1000,
            isAuto: true,
            autoMove: true,
            manual: true,
        }
        this.timer = null
    }

    // 获取transform的属性单个属性值
    getTransform(att) {
        const obj = this.slipObj
        let tranText
        // 查询匹配属性
        if (obj.transObj) { return obj.transObj[att] }
        switch (att) {
            case 'translateX':
            case 'translateY':
            case 'rotate':
                tranText = 0
                break
            case 'scale':
                tranText = 1
                break
        }
        return tranText
    }

    // 设置transform的值
    setTransform(att, value) {
        const obj = this.slipObj
        let tranText = ''
        // 判断是否含有transObj
        if (!obj.transObj) { obj.transObj = {} }
        // 给匹配的属性赋值
        obj.transObj[att] = `${value}`
        // 循环遍历transObj,设置obj的transform属性
        for (const key in obj.transObj) {
            tranText += `${key}(${obj.transObj[key]})`
        }
        // 设置transform的值
        obj.style.transform = tranText
    }

    // 设置主体包含块的宽
    setSize(Spacing = 0) {
        let slips = this.slipObj.querySelectorAll('.slip-item')
        // 保存轮播包含块的宽度
        let ulWidth = slips.length * (slips[0].offsetWidth + Spacing)
        // 保存轮播的次数
        let index;
        // 判断是否需要循环轮播
        if (this.parameters.isAuto) {
            for (const iterator of slips) {
                this.slipObj.append(iterator.cloneNode(true))
            }
            slips = this.slipObj.querySelectorAll('.slip-item')
            // 重置宽度
            ulWidth = slips.length * (slips[0].offsetWidth + Spacing)
            // 设置初始位置
            index =Math.abs(Math.round(this.slipObj.offsetWidth / (this.parameters.speed + Spacing)))
            
            this.setTransform('translateX', `${this.parameters.speed * (index / 2)}px`)
        }
        // 设置主体包含块的宽高
        this.slipObj.style.width = ulWidth + 'px'
        this.slipObj.style.height = slips[0].offsetHeight + 'px'
        // 设置样式
        this.slipObj.style.transition = 'transform .5s'
    }

    // 移动包含块的位置
    movePosition(range) {
        this.isBeyond()
        setTimeout(() => {
            this.slipObj.style.transition = 'transform .5s'
            // 获取当前位置
            const nowPosiX = parseInt(this.getTransform('translateX'))
            // 设置接下来的位置
            this.setTransform('translateX', `${nowPosiX + range}px`)
        }, 20)
    }

    isBeyond() {
        const beyond = parseInt(this.getTransform('translateX'))
        const num = Slip.getShowNum(this)
        const slips = this.slipObj.querySelectorAll('.slip-item')
        let index = Math.abs(Math.round(this.slipObj.offsetWidth / this.parameters.speed))
        if (this.parameters.isAuto) {
            if (beyond >= 0) {
                this.slipObj.style.transition = 'none'
                this.setTransform('translateX', `${(index / 2) * this.parameters.speed}px`)
            }
            else if (beyond <= (index - num) * this.parameters.speed) {
                this.slipObj.style.transition = 'none'
                this.setTransform('translateX', `${(index / 2 - num) * this.parameters.speed}px`)
            }
        }
    }

    // 自动轮播
    auto(resetSize = null) {
        this.slipObj.removeEventListener('transitionend', resetSize)
        if (!this.parameters.isAuto) { return }
        clearInterval(this.timer)
        this.timer = setInterval(() => {
                this.movePosition(this.parameters.speed)
        }, this.parameters.interval)
    }

    // 鼠标拖动
    mouseTo() {
        // 绑定this
        const $this = this
        // 相关事件处理器
        let startHandle = 'mousedown'
        let moveHandle = 'mousemove'
        let endHandle = 'mouseup'
        // 判断是否在移动端
        if (window.ontouchstart === undefined) {
            startHandle = 'mousedown'
            moveHandle = 'mousemove'
            endHandle = 'mouseup'
        }
        // 开始位置
        let startAxis = { X: 0, Y: 0 }
        let elePosiX = 0
        let isMove = false

        // 重置位置
        const resetSize = function () {
            $this.isBeyond()
        }
        // 鼠标/手指移动相关函数
        const startFn = function (e) {
            e.preventDefault()
            e.stopPropagation()
            const touch = e.touchChanges ? e.touchChanges[0] : e
            // 关闭相关计时器
            clearInterval($this.timer)
            // 获取开始的坐标位置
            startAxis = { X: touch.clientX, Y: touch.clientY }
            elePosiX = parseInt($this.getTransform('translateX'))
            // 监听鼠标/手指移动事件
            $this.obj.addEventListener(moveHandle, moveFn)
            // 取消相关过度效果
            $this.slipObj.style.transition = 'none'
        }
        const moveFn = function (e) {
            e.stopPropagation()
            if (!isMove) {
                isMove = true
                return
            }
            const touch = e.touchChanges ? e.touchChanges[0] : e
            // 获取移动的实时鼠标位置
            let moveAxis = { X: touch.clientX, Y: touch.clientY }
            let disAxis = { X: moveAxis.X - startAxis.X, Y: moveAxis.Y - startAxis.Y }
            // 设置主体包含块的位置
            $this.setTransform('translateX', `${(elePosiX + disAxis.X)}px`)
        }
        const endFn = function (e) {
            e.stopPropagation()
            const touch = e.touchChanges ? e.touchChanges[0] : e
            const num = Slip.getShowNum($this)
            // 获取移动的实时鼠标位置
            let moveAxis = { X: touch.clientX, Y: touch.clientY }
            let disAxis = { X: moveAxis.X - startAxis.X, Y: moveAxis.Y - startAxis.Y }
            // 移除moveHandle事件监听器
            $this.obj.removeEventListener(moveHandle, moveFn)
            // 添加过度效果
            $this.slipObj.style.transition = 'transform .5s'
            // 结束时主体滑动块的位置
            const beyond = parseInt($this.getTransform('translateX'))
            // 判断是否关闭了自动循环轮播
            if (!$this.parameters.isAuto) {
                // 判断是否超出
                if (beyond > 0) {
                    $this.setTransform('translateX', `0px`)
                    return
                } else if (beyond < ($this.slipObj.querySelectorAll('.slip-item').length - num) * $this.parameters.speed) {
                    $this.setTransform('translateX', `${($this.slipObj.querySelectorAll('.slip-item').length - num) * $this.parameters.speed}px`)
                    return
                }
            }
            // // 鼠标/手指抬起时，前一和返回原来（动画）
            if (isMove && Math.abs(disAxis.X) > (Math.abs($this.parameters.speed) / 2)) {
                const nowPosiX = disAxis.X > 0 ? elePosiX - $this.parameters.speed : elePosiX + $this.parameters.speed
                $this.setTransform('translateX', `${nowPosiX}px`)
            } else {
                $this.setTransform('translateX', `${elePosiX}px`)
            }
            // 判断是否开启的循环轮播
            if ($this.parameters.isAuto) {
                $this.slipObj.addEventListener('transitionend', resetSize)
            }
            // 判断是否开启的自动轮播
            if ($this.parameters.autoMove) {
                $this.auto(resetSize)
            }
            isMove = false
        }

        // 监听鼠标/手指开始事件
        this.obj.addEventListener(startHandle, startFn)
        // 监听鼠标/手指结束事件
        this.obj.addEventListener(endHandle, endFn)
        // this.obj.addEventListener('mouseout', endFn)
        // this.slipObj.addEventListener('mouseout', (e) => { e.stopPropagation() })
    }
    // 启动函数
    start() {
        this.setSize()
        if (this.parameters.autoMove) {
            this.auto()
        }
        if (this.parameters.manual)
            this.mouseTo()
    }
    // 静态函数，计算显示的个数
    static getShowNum = function (obj) {
        return Math.round(obj.obj.offsetWidth / obj.slipObj.querySelector('.slip-item').offsetWidth)
    }
}