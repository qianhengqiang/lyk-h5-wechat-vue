import Vue from 'vue'

Vue.filter('imgSrc',(path)=>{
    let imgBaseUrl = "https://img.yalangke.vip/"
    let defaultImgSrc = ''
    let result = path ? imgBaseUrl + path : defaultImgSrc
    return result
})

Vue.filter('paseInt',(num)=>{
    return parseInt(num)
})