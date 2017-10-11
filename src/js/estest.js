//es6 语法学习

//数组解构
{
  let a,b,c;
  [a,b]=[1,2];
  console.log(a,b)  //1,2  数组中的值赋值ab变量
}

{
  let a,b,c
  [a,b,...c]=[1,2,3,4,5,6]
  console.log(a,b,c)  //1,2[3,4,5,6]  c赋值为a b 匹配后数组
}

{
  let a,b
  [a,,,b]=[1,2,3,4,5,6]   //逗号空匹配占位
  console.log(a,b)  //1,4
}

//数组解构默认值
{
  let a,b,c;
  [a,b,c=5]=[1,2];
  console.log(a,b,c)  //1,2,5  数组中的值赋值ab变量,c默认值 
//  [a,b,c]=[1,2];  //1,2,undefined  没有匹配成功为c的值 undefined
}

//使用环境：变量交换 ，取出函数返回值
{
  let a=1;
  let b=2;
  [a,b]=[b,a]
  console.log(a,b)  //2,1 
}


{
  function f(){
    return [1,2]
  }
  let a,b
  [a,b]=f()
  console.log(a,b)  // 1,2 
}



//对象解构赋值
{
  let a,b
  ({a,b}={a:1,b:2})
  console.log(a,b)
}

{
  let o={p:1,q:true}
  let {p,q,l}=o        //左右都为对象
  console.log("test",p,q,l)  //1,ture ,undefined  。左侧像右侧匹配，匹配到的赋值，否则为undefined
}

{
  let {a=10,b=3}={a:3}
  console.log(a,b)  //3,3 
}

{
  let obj={
    title:'test',
    test:[{
      title:"lalala",
      lalala:"啦啦啦"
    }]
  }
  //左侧的数据结构要和右边的一致
  let {title:estitle,test:[{title:cntitle,lalala:testlala}]}=obj
  console.log(estitle,cntitle,testlala)  //test lalala  啦啦啦  
}


//字符串

{
  let str="string"
  console.log(str.includes('s'))  //是否存在
  console.log(str.startsWith('str'))  //开始判断
  console.log(str.endsWith('ng'))     //结尾判断
}

{
  let str="string"
  console.log(str.repeat(2))  //stringstring  拼接两次
}

{
  let name="list"
  let info="hello world"
  let m=`${name},${info}`
  console.log(m)  //list hello world  字符串拼接
}

//es7提出，需要babel-polyfill  来解决兼容
{
  let str="1"
  console.log(str.padStart(2,'0')) //规定长度两位，不足向前补充
  console.log(str.padEnd(2,'0'))   //向后补充
}

//标签模板
{
  let use={
    name:'list',
    info:'hello world'
  }
  console.log(abc`i im ${use.name},${use.info}`)
  
  function abc(s,v1,v2){
    console.log(s,v1,v2)
    return s+v1+v2
  }
}


//数值扩展

{
  //判断是否为有尽数值  无穷
  console.log(Number.isFinite(15))  //true 
  //判断是否整数
  console.log(Number.isInteger(25))  //true
  //返回一个小数的整数部分
  console.log(Math.trunc(23.9))   //23
  //判断正数，负数，还是0
  console.log(Math.sign(5))  //正数返回1 负数返回-1 包含隐式转换
  
}

//数组扩展
{
  //将一串内容转为数组
  let arr=Array.of(3,"test",9,0)
  console.log(arr)  //[3, "test", 9, 0]  如果为空，则为空数组
  
  //将伪数组和可遍历对象转为数组
  let p=document.getElementsByTagName("p")
  //console.log(p)   显示为数组，其实为伪数组，不能forEach遍历
  let parr=Array.from(p)  //转为数组 
  parr.forEach(function(item){
    console.log(item.innerHTML)
  })
  //转为数组的同时map
  console.log(Array.from([2,4,6],function(item){return item*2}))
}
  //数组填充
{
  let arr=[2,4,undefined,6,9,1,0]
  //console.log(arr.fill(7))    //将数组内容全部替换为7
  console.log(arr.fill(7,1,3))  //[2, 7, 7, 6, 9, 1, 0] arr.fill(value, start, end)
}
{
  //获取下标和value值
  let arr=[3,6,3,5,32,56,6]
  for(let index of arr.keys() ){  //arr.keys() 获取索引值
    console.log(index)
  }
  for(let value of arr.values()){  //arr.values() 获取value值
    console.log(value)
  }
  for(let [index,value] of arr.entries()){  //arr.values() 获取value值和index值
    console.log(index,value)
  }
}

{
  //数组查找
  let arr=[1,2,3,4,5]
  console.log(arr.find(function(item){
    return item>2    //3  find只返回第一个符合的值
  }))
  
  console.log(arr.findIndex(function(item){
    return item>2    //3  findIndex只返回第一个符合的值的索引值
  }))
  
  console.log(arr.includes(1))  //true  includes判断是否包含 
}





