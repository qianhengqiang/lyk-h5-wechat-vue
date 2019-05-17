import Vue from 'vue'
import axios from 'axios';

let option = {
    baseURL: 'http://wx-api.yalangke.vip'
}

let instance = axios.create(option)

export default {
    option,
    instance,
    indexSilder(){
        return instance.get('/index/app_slide')
    },
    housePosition(){
        return instance.get('/house/recommend_house')
    },
    expertPosition(){
        return instance.get('/expert/recommend_expert')
    },
    informationPosition(){
        return instance.get('/information/recommend_information')
    }
}