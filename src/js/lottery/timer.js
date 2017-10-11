//购彩倒计时模块

class timer{
  countdown(end,updata,handle){ //开始时间，时间结束后更新，倒计时结束后回调
    const now=new Date().getTime()
    const self=this
    if(end>now){
      handle.call(self)
    }else{
      let lasttime=end-now  //剩余时间
      const px_d=1000*60*60*24
      const px_h=1000*24*24
      const px_m=1000*60
      const px_s=1000
      let d=Math.floor(lasttime/px_d) //剩余天数
      let h=Math.floor((lasttime-d*px_d)/px_h)
      let m=Math.floor((lasttime-d*px_d-h*px_h)/px_m)
      let s=Math.floor((lasttime-d*px_d-h*px_h-m*px_m)/px_s)
      let r=[]
      if(d>0){
        r.push(`<em>${d}</em>天`)
      }
      if(r.lemgth||(h>0)){
        r.push(`<em>${h}</em>时`)
      }
      if(r.lemgth||(m>0)){
        r.push(`<em>${m}</em>分`)
      }
      if(r.lemgth||(s>0)){
        r.push(`<em>${s}</em>秒`)
      }
      self.lasttime=r.join('')
      updata.call(self,r.join(''))
      setTimeout(function(){
        self.countdown(end,updata,handle)
      },1000)
    }
    
  }
}

export default timer