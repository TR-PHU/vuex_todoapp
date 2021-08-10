<template>
    <div>
        <div class="input-data">
            <input type="text" v-model="$store.state.newWork" placeholder="Enter your work ...">
            <b-button class= "btn-add" variant="outline-success" @click="addTodo({ content : $store.state.newWork , done : false})">ADD</b-button>
        </div>
        <div class="list-work">
            <Todo v-for="(work,index) in getWorks" :key="index" :work="work" :index="index" />
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Todo from './Todo.vue'
export default {
    computed: {
        ...mapGetters(['getWorks'])
    },
    components: {
        Todo
    },
    methods: {
        ...mapActions(['addTodo'])
    }
}
</script>

<style scoped>
.input-data input {
    margin-left: 97px;
    margin-right: 10px;
    width: 500px;
    height: 40px;
    border: 1px solid #000;
}
.input-data .btn-add {
    width: 90px;
    height: 44px;
}
.list-work {
    margin-top: 100px;
}
</style>