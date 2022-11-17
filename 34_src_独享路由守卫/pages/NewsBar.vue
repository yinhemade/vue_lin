<template>
  <div>
    <h3 :style="{opacity}">{{msg}}</h3>  
    <ul>      
        <li>news001<input></li>
        <li>news002<input></li>
        <li>news003<input></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'NewsBar',
    data(){
        return{
            msg:'欢迎学习Vue!',
            opacity:1,
        }
    },
    activated(){
        console.log('我News又开始了');
        this.timer1 = setInterval(() => {
            this.opacity -=0.01
            if(this.opacity <= 0) this.opacity = 1;
        }, 16)
    },
    deactivated(){
        console.log('News被暂停了');
        clearInterval(this.timer1)
    }
}
</script>