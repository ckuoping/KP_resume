mouseEffect();


// 滑鼠效果
function mouseEffect() {
    const img_setting = document.querySelector(".img-setting")
    const img_origin = '../img/dp_7.png'
    const img_change = '../img/dp_8.png'

    img_setting.addEventListener('mouseover', function(e) {
        img_setting.src = img_change

    })

    img_setting.addEventListener('mouseout', function(e) {
        img_setting.src = img_origin
    })

}