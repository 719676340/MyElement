<template>
  <div class=''>
    <!-- <BB></BB> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, ref} from 'vue';
// import BB from './BB.vue'
var num=ref(2)
function changeAA(value){
  num.value=value
}
provide('changeAA',changeAA)
</script>
<style lang="scss" scoped>
</style>
