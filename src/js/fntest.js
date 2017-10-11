//函数扩展

{
  //函数默认值
  function test(x,y=5,z){  // test(x,y=5,z) 这样会报undefined，默认值之后不允许再有未定义的
    console.log(x,y)  //9 5  
  } 
  test(9)
  
  //rest参数。将参数转化为数组.使用时只能有rest参数一个
  function test2(...arg){
    arg.forEach((item)=>{
      console.log('rest',item)
    })
  }
  test2(1,2,3,4,"r","p")
  
  //数组转为离散的值
  console.log('s',...[1,2,4])
}
{
  //箭头函数
  
  let arrow = v => v*2 //  let arrow = () => 5 
//函数名         参数       返回值                    无参
  console.log(arrow(3))
}
{
  //对象扩展
  //简洁表示法
  let a=2;
  let b=5
  let es5={
    a:a,
    b:b
  }
  let es6={
    a,b
  }
  //es5.key3=3
  console.log(es5,es6)
 
  let es5_method={
    hello:function(){
      console.log('hello')
    }
  }
  let es6_method={
    hello(){
      console.log("hello")
    }
  }  
  console.log(es5_method.hello(),es6_method.hello())
}

{
  //新增API
  //Object.is 判断两个值是否相等 类似于===  
  console.log('字符串',Object.is('wer','wer'))  //true
  
  //Object.assign 拷贝 浅拷贝，只有自身属性，不包含继承
  console.log(Object.assign({a:'a'},{b:'b'})) //将第一个对象，拷贝到第二个对象中
  
  //Object.entries  输出key值 value值
  let arr={a:1,b:2,c:3}
  for(let [key,value] of Object.entries(arr)){
    console.log(key,value)
  }
    
}

{
  //Symbol 数据类型，提供一个独一无二的值。声明的值不相等，唯一的
  
  //数据结构 set数据类型。元素为唯一的，不可重复
  let list=new Set();
  list.add(5)
  list.add(7)
  list.add(5)  //不可重复。无效
  console.log(list.size)  //2 size类似于length
  
  let arr=[1,2,3,3,2,"2"]
  let list2=new Set(arr)
  console.log(list2)  //123  数组去重场景，不会做数据类型转换
}
{
  //set实例方法
  //add()添加  delete() 删除  clear()清除  has()判断
  
  let arr=[1,2,3,4,5]
  let list = new Set(arr)  //转set数据类型

  console.log(list.has(1))  //true
  console.log(list.delete(2),list)  //1345 
  console.log(list.clear(),list)   //{} 
}
{
  //set()数据类型遍历
  let arr =[1,2,3,4,5]
  let list= new Set(arr)
  //使用数组方法keys遍历key值
  for(let key of list.keys()){
    console.log(key)  //12345
  }
  //使用数组方法values遍历value值
  for(let value of list.values()){
    console.log(value)  //12345 
  }
  
  list.forEach((item)=>{
    console.log(item)
  })
}

{
  //weakset 与set 区别  。支持的数据类型不一样。weakset只能是对象
  let o={}
  let weakset= new WeakSet()
  weakset.add(o) // {}
  //weakset.add(1)  //报错，无效的值，只能是对象
  console.log(weakset)
}

{
  //map  添加元素用set()  获取值用get  map的key可以是任何数据类型
  let map=new Map()
  let arr=[1,2,3]
  map.set(arr,[5,6,7])
  console.log(map,map.get(arr))
  
  //map 和Array 的增删改查比较
  
  let maps= new Map()
  let array= []
  
  //增
  maps.set('t',2)
  array.push({t:2})
  console.log(maps,array)  
  //改
  maps.set('t',1)
  array.forEach(item=>item.t?item.t=1:'')
   console.log(maps,array)
  //查
  console.log(maps.has('t'))
  console.log(array.find(item=>item.t))
  //删
  maps.delete('t')
  let index=array.findIndex(item=>item.t)
  array.splice(index)
  console.log(maps,array)
}

{
  //Proxy()代理对象属性
  let obj={
    time:'2017-09-09',
    name:'jj'
  }  
  let proxy=new Proxy(obj,{
    //代理对象属性读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    //代理对象属性的设置
    set(target,key,value){
      if(key==='name'){
        return target[key]=value
      }else{
        return target[key]
      }
    },
    //拦截key in Object  判断key值是否存在
    has(target,key){
      if(key==='name'){
        return target[key]
      }else{
        return false
      }
    },
    //拦截删除属性
    deleteProperty(target,key){
      if(key==='time'){
        delete target[key]
        return true
      }else{
        return target[key]
      }
    }
    
    
  })
  console.log(proxy.time)  //2018-09-09
  
  proxy.time="2020"  //设置time值
  proxy.name="啦啦啦"
  console.log(proxy)
  console.log('name' in proxy)  //true  判断是否存在name key
  delete proxy.time
  console.log(proxy)
}





