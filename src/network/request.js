import axios from 'axios'
export function request(config) {
    //创建axios 实例
   const instance=axios.create({
       baseURL:'http://www.baidu.com',
       timeout:3000
   })
   //相应拦截
   instance.interceptors.response(res=>{
       //直接返回数据
       return res.data;
   },err=>{
       console.log(err);
       
   })
   //发送网络请求
   return instance(config)
}