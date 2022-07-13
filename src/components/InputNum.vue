<template>
    <div class='inputnum'>
        <div class="left" @click="reduce" :class="{'is-disabled':(model==props.min)}">-</div>
        <div class="mid">
            <input class="midinput" :readonly="props.disable==''" :class="{'is-disabled':(props.disable=='')}"  type="text" v-model="model"
            @blur="props.onBlur"
            @focus="props.onFocus"
            @change="props.onChange"
            >
        </div>
        <div class="right" @click="add" :class="{'is-disabled':(model==props.max)}">+</div>
    </div>
</template>
<script>
export default {
    name: "MyInputNum",
}
</script>
<script setup>
import { computed, ref } from 'vue';
// var props=defineProps(['modelValue','min','max','disable','step','precision'])
var props=defineProps({
    'modelValue':[String, Number],
    'precision':{
        type: [String, Number],
        default: 1
    },
    'step':{
        type: [String, Number],
        default: 1
    },
    'disable':null,
    'min':[String, Number],
    'max':[String, Number],
    'onBlur':null,
    'onFocus':null,
    'onChange':null

})
var emit=defineEmits(['update:modelValue'])
var model=computed({
    get(){
        var value=props.modelValue
        return Number(value)
    },
    set(value){
        emit('update:modelValue',Number(value).toFixed(props.precision)) 
    }
})
function reduce(){
    var value=model.value
    value-=props.step
    if(value<=props.min){
        value=props.min
    }
    emit('update:modelValue',Number(value).toFixed(props.precision))
}
function add(){
    var value=model.value
    // value++
    value+=Number(props.step)
    if(value>=props.min){
        value=props.max
    }
    console.log(value)
    emit('update:modelValue',Number(value).toFixed(props.precision))
}
</script>
<style scoped lang="scss">
.inputnum{
    display: flex;
    width: 140px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid rgb(220,223,230);
    border-radius: 5px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;   
}
.left,.right{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: rgb(245,247,250);
    cursor: pointer;
    // font-size: 20px;
    &:hover{
        color: rgb(64,158,255);
    }
}
.left{
    border-right: 1px solid rgb(220,223,230);
}
.right{
    border-left: 1px solid rgb(220,223,230);
}
.mid{
    flex: 2;
}
.midinput{
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    box-sizing: border-box;
    -webkit-appearance: none;
    outline: none;
    border:none;
}
.is-disabled{
    opacity: 0.3;
    &:hover{
        cursor: not-allowed;
    }
}
</style>
