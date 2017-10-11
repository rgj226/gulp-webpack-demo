//数据请求

import $ from 'jquery';

class interfacecode{
  //获取历史遗漏号码
  getomit(issue){  //参数当前期号
    let self=this
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/getOmit',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          self.setOmit=(res,data)  //当前数据保存到当前对象
          resolve.call(self,res) //将取得数据传给resolve
        },
        error:function(){
          reject.call(err)
        }
      })
    })
    
  }
  
  //获取开奖号码
  getopencode(issue){
    let self=this
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/opencode',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          self.opencode=(res,data)  //当前数据保存到当前对象
          resolve.call(self,res) //将取得数据传给resolve
        },
        error:function(){
          reject.call(err)
        }
      })
    })
  }
  
  //获取开奖状态
  getstate(issue){
    let self=this
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/state',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          self.state=(res,data)  //当前数据保存到当前对象
          resolve.call(self,res) //将取得数据传给resolve
        },
        error:function(){
          reject.call(err)
        }
      })
    })
  }
}

export default interfacecode





