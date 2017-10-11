//generator 异步编程的一种解决方案 ，相对promise要高级
// generator 中的next函数 与 yield 语法

{
  //generator基本用法 返回的是一个 iterator 接口
  let tell=function* (){
    yield 'a';  //yield 类似于console.log 但是是暂停函数，之后可以继续函数运行
    yield 'b';
    yield 'c';
    return 'd'
  }
  
  let k=tell()
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  
}

{
  //generator 作为遍历器的返回值
  
}

