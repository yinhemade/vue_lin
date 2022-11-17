<template>
    <div>
        <h3>学生姓名：{{name}}</h3>
        <h3>年龄：{{age}}</h3>
    </div>
</template>
<script>
export default {
    name:'StudentPart',
    data(){
        return{
            name:'只因哥',
            age:23,
        }
    },
}
</script>