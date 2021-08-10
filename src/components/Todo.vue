<template>
    <div class="to-do">
        <span class="checkbox" :class="{checked : work.done}" @click="work.done = !work.done"></span>
        <span class="to-do-content">{{work.content}}</span>
        <b-button @click="removeTodo(index)" variant="outline-danger">REMOVE</b-button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props: ['work','index'],
    methods: {
        ...mapActions(['removeTodo'])
    }
}
</script>
<style scoped>
.to-do {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.checkbox {
    display: inline-block;
    width: 40px;
    border: 1px solid #000;
    margin-left: 54px;
    margin-right: 10px;
}
.checkbox.checked {
    background-color: blue;
    opacity: 0.7;
}
.to-do > span.to-do-content {
    width: 400px;
    border: 1px solid #000;
    height: 40px;
    margin-right:10px ;
    line-height: 40px;
}
</style>