//针对于home 请求数据的 封装 
import request from 'request'
export function getGoods(type,page){
 return request({
     //请求地址
     url:'/home/goods',
     //get 请求添加参数
    params:{
        type,
        page
    }
 })
}