/* 
    热门专辑列表
    */
const hotAlbumList = function () {
    const mainNode = document.querySelector('.component-5 .slip-wrap')
    const slip =  new Slip(mainNode)
    slip.parameters = {
            speed: -326,
            interval: 2000,
            isAuto: true,
            autoMove: true,
            manual: false,
        }
    slip.start()
    slip.setSize(13)
    
    $('.component-5 .swiper-left').click(function () {
        clearInterval(slip.timer)
        slip.movePosition(326)
        slip.auto()
    })
    $('.component-5 .swiper-right').click(function () {
        clearInterval(slip.timer)
        slip.movePosition(-326)
        slip.auto()
    })
}
hotAlbumList()