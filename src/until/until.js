     //将防抖函数抽离   因为其它组件也有可能要用
     // debounce 防抖节流 的意思    参数一传入需要防抖的函数   参数二 传入需要等待的时间
export function debounce(fnc,delay){
  let time=null
  //ags   如果函数有参数则解析
 return function(...ags){
   //如果time 是个空  则执行  定时器
   if(time) clearInterval(time)
   time=setInterval(()=>{
     //使用 apply方法改变this指向   因为fnc这个函数  指向的是vue实例  进入这里之后调用者变成了home组件
     fnc.apply(this,ags)
   },delay)
 }
}