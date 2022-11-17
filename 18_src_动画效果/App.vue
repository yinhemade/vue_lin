<template>
    <div>
        <Test/>
        <hr>
        <Test2/>
        <hr>
        <Test3/>
        <hr>
        <Test4/>
    </div>
</template>

<script>
    import Test from './components/TestPart'
    import Test2 from './components/TestPart2';
    import Test3 from './components/TestPart3';
    import Test4 from './components/TestPart4';

export default {
    name:'App',
    components:{ Test, Test2, Test3, Test4}
}
</script>
<style>
    h1{
        width: 500px;
    }
</style>