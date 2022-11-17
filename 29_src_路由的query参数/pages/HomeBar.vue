<template>  
  <div>
    <h2>我是HOME的内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeBar',
    
}
</script>