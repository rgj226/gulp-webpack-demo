{
  //基本定义
  let ajax=function(callback){
    console.log('执行')
    setTimeout(function(){
      callback&&callback.call()
    },1000)
  }  
  ajax(function(){
    console.log('timeout1')
  })
}

{
  //promise 使用
  let ajax=function(){
    console.log('执行1')
    //Promise 的两个参数resolve 执行下一步操作，reject 拒绝下一步操作
    return new Promise(function(resolve,reject){
      setTimeout(function(){
       resolve()  
      },2000)
    })
  }
  
  ajax().then(function(){
    console.log('promise','timeout2')
  })
}
{
  let ajax=function(){
    console.log('执行2')
    //Promise 的两个参数resolve 执行下一步操作，reject 拒绝下一步操作
    return new Promise(function(resolve,reject){
      setTimeout(function(){
       resolve()  
      },2000)
    })
  }
  
  ajax().then(function(){
    //返回的promise 依旧可以继续进行promise方法。依次下一步执行
    return new Promise(function(resolve,reject ){
      resolve()
    },2000)
  }).then(function(){
    console.log('timeout3')
  })
}
{
  //异常错误捕获catch 
  let ajax=function(num){
    console.log('执行4')
    //Promise 的两个参数resolve 执行下一步操作，reject 拒绝下一步操作
    return new Promise(function(resolve,reject){
     if(num>5){
       resolve()
     }else{
       throw new Error('出错了')
     }
    })
  }
  function test(){
    console.log('test')
  }
  ajax(3).then(test).catch(function(err){
     console.log('log',err)
  })
  
}

{
  //所有图片加载完后加载图片promise.all()
  function loadimg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img')
      img.src=src
      img.onload=function(){
        resolve(img)
      }
      img.onerror=function(err){
        reject(err)
      }
    })
  }
  
  function showimg(imgs){
    imgs.forEach((item)=>{
      document.body.appendChild(item)
    })
  }
  
  Promise.all([
    loadimg('http://img2.xiazaizhijia.com/walls/20160224/mid_131fe8e7621684d.jpg'),
    loadimg('http://img3.xiazaizhijia.com/walls/20160224/mid_96422b7952373c6.jpg'),
    loadimg('http://img2.xiazaizhijia.com/walls/20160224/mid_6e994b37173e6b7.jpg')
  ]).then(showimg)
}  
  
{
  //Promese.race  多个实例中，任何一个最先改变就执行谁
  function loadimg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img')
      img.src=src
      img.onload=function(){
        resolve(img)
      }
      img.onerror=function(err){
        reject(err)
      }
    })
  }
  
  function showimg(imgs){   
    let p=document.createElement('p')
    p.appendChild(imgs)
    document.body.appendChild(p)   
  }
  Promise.race([
    loadimg('http://img2.xiazaizhijia.com/walls/20160224/mid_131fe8e7621684d.jpg'),
    loadimg('http://img3.xiazaizhijia.com/walls/20160224/mid_96422b7952373c6.jpg'),
    loadimg('http://img2.xiazaizhijia.com/walls/20160224/mid_6e994b37173e6b7.jpg')
  ]).then(showimg)
  
}
  
{
  //Symbol.iterator  迭代器是一种设计模式，它是一个对象，它可以遍历并选择序列中的对象
  //Symbol.iterator 必须有next() 的返回  next 返回值包含value和done  表示获得的值，以及是否结束 true 和false
 let obj={
    start:[2,3,5],
    end:[6,8,9],
    [Symbol.iterator](){
      let self=this
      let arr=self.start.concat(self.end)
      let index=0
      let len=arr.length
      return{
        next(){
          if(index<len){
            return{
              value:arr[index++],
              done:false
            }
          }else{
            return{
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  
  for(let item of obj){
    console.log(item)
  }
}
  
  










