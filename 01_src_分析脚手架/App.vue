<template>
  <div>
    <School></School>
    <Student/>
  </div>
</template>

<script>
    import School from './components/SchoolPart.vue'
    import Student from './components/StudentPart.vue'
    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>

<style>

</style>