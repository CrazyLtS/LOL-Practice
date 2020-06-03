let canvas
let ctx

// 初始化canvas画布
const setSize = function () {
    canvas = document.getElementById('draw')
    // 创建2D画布对象
    ctx = canvas.getContext('2d')
    // 设置画布大小
    const width = canvas.width = document.documentElement.clientWidth
    const height = canvas.height = document.documentElement.clientHeight
    // 初始化画布背景
    ctx.fillStyle = 'rgba(0, 0, 0, .8)'
    ctx.fillRect(0, 0, width, height)
}
setSize()

const width = canvas.width
const height = canvas.height
let pars = []

class Particle {
    constructor (X, Y, upAgle, radius) {
        this.x = X
        this.y = Y
        this.upAgle = upAgle
        this.radius = radius
        this.roundRadius = Math.sqrt((this.x * this.x) + (this.y * this.y))
        this.agle = Math.floor(Math.atan(this.y / this.x) * 180)
    }
    // 创造外层圆
    createOutRound (radius) {
        const index = radius / 6
        for (let i=0; i<index; i++) {
            // 开始路径
            ctx.beginPath()
            // ctx.translate(width / 2, height / 2)
            // 绘制外部的遮罩圆形
            ctx.arc(this.x, this.y, (radius - (i * 6)), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.005 + (i / 1000)})`
            // 以实心填充图形
            ctx.fill()
        }
    }
    // 创造中层圆
    createMiddleRound (radius) {
        const index = radius / 4
        for (let i=0; i<index; i++) {
            // 开始路径
            ctx.beginPath()
            // ctx.translate(width / 2, height / 2)
            // 绘制外部的遮罩圆形
            ctx.arc(this.x, this.y, (radius - (i * 4)), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(46, 66, 243, ${0.05 + (i / 1000)})`
            // 以实心填充图形
            ctx.fill()
        }
    }
    // 创造内层圆
    createInnerRound (radius) {
        for (let i=0; i<radius; i++) {
            // 开始路径
            ctx.beginPath()
            // ctx.translate(width / 2, height / 2)
            // 绘制外部的遮罩圆形
            ctx.arc(this.x, this.y, (radius - i), 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + (i / 10)})`
            // 以实心填充图形
            ctx.fill()
        }
    }
    // 创造运动拖尾
    createTail (radius, length) {
        const outRadius = radius * 1.5
        const outIndex = outRadius / 3
        const index = radius/ 2
        // 外层
        for (let i=0; i<outIndex; i++) {
            // 开始路径
            ctx.beginPath()
            // 绘制外部的遮罩圆形
            ctx.moveTo(((this.x - length) + (i * 6)), this.y)
            ctx.arc(this.x, this.y, (outRadius - (i * 1.5)), (- Math.PI / 2), Math.PI / 2)
            ctx.fillStyle = `rgba(46, 66, 243, ${0.016 + (i / 1000)})`
            // 以实心填充图形
            ctx.fill()
        }
        // 内层
        for (let i=0; i<index; i++) {
            // 开始路径
            ctx.beginPath()
            // 绘制外部的遮罩圆形
            ctx.moveTo(((this.x - length) + (i * 6)), this.y)
            ctx.arc(this.x, this.y, (radius - (i * 1.5)), (- Math.PI / 2), Math.PI / 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.016 + (i / 1000)})`
            // 以实心填充图形
            ctx.fill()
        }
    }
    // 绘画粒子
    drawPar () {
        const outRadius = this.radius * 6
        const middleRadius = this.radius * 2
        // this.createTail(this.radius, outRadius + 1)
        this.createOutRound (outRadius)
        this.createMiddleRound(middleRadius)
        this.createInnerRound(this.radius)
    }
    // 更新坐标数据
    upParDate (radius) {
        if (this.agle >= 360) {
            this.agle = 0
        }
        this.agle = this.agle + this.upAgle
        // 实时坐标
        const nowY = Math.floor(Math.cos(this.agle * (Math.PI / 180)) * radius) 
        const nowX = Math.floor(Math.sin(this.agle * (Math.PI / 180)) * radius) 
        this.x = nowX
        this.y = nowY
    }
}

// 随机创建一个数字
function randomNum (start, end) {
    const dix = end - start
    return Math.floor((Math.random() * dix) + start)
}
// 动画
ctx.translate(width / 2, height / 2)
function loop () {
    // 创建背景
    ctx.fillStyle = 'rgba(0, 0, 0, 1)'
    ctx.fillRect(-(width / 2), -(height / 2), width, height)
    while (pars.length < 250) {
        const nowX = randomNum(-(width/2), width/2)
        const nowY = randomNum(-(height/2), height/2)
        const par  = new Particle(
            nowX,
            nowY,
            Math.random(),
            randomNum(1, 4)
        )
        // 添加至小球数组
        pars.push(par)
    }
    // 执行绘画方法和位置更新方法
    pars.forEach( (value)=> {
        value.drawPar()
        value.upParDate(value.roundRadius)
    })
    // 调用window全局函数requestAnimationFrame(cb)执行逐帧动画
    
    requestAnimationFrame(loop)
}
loop()

const forBG = document.querySelector('#froword-bg')
const showBtn = document.querySelector('.show-btn')
const wraper = document.querySelector('.wraper')
const body = document.body
const html = document.querySelector('html')

showBtn.addEventListener('click', ()=> {
    forBG.style.visibility = 'hidden'
    wraper.style.visibility = 'visible'
    body.style.overflow = 'auto'
    html.style.overflow = 'auto'
})