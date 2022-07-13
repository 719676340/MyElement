<template>
  <div>
    <!-- <MyButton type="danger" disabled round plain icon="phone">
      <span>内容内容内容内容内容内容内容内容11</span>
    </MyButton>
    <MyIcon name="phone" color="red" size="20"></MyIcon> -->
    <!-- <MyRadio v-model="radio1" size="small" label="选项一" border></MyRadio>
    <MyRadio label="选项二"  size="lagre" border v-model="radio2"></MyRadio> -->
    <!-- <MyRadioGroup v-model="radio1">
      <MyRadio size="small" label="第一个" border></MyRadio>
      <MyRadio size="small" label="第2个" border></MyRadio>
    </MyRadioGroup> -->
    <!-- <MyCheckBox v-model="checked2" label="Option 2" size="large"></MyCheckBox>
    <MyCheckBox v-model="checked2" label="Option 2" size="small"></MyCheckBox> -->
    <MyCheckBoxGroup v-model="checkList">
      <MyCheckBox label="Option A"></MyCheckBox>
      <MyCheckBox label="Option B"></MyCheckBox>
      <MyCheckBox label="Option C"></MyCheckBox>
      <MyCheckBox label="selected and disabled" disabled></MyCheckBox>
    </MyCheckBoxGroup>
    <!-- <MySwitch v-model="sign" activecolor="#13ce66"
  inactivecolor="#ff4949"
  activetext="开"
  inactivetext="关"></MySwitch> -->
  <!-- <div class="myinput">
    <MyInput v-model="input" type="textarea" placeholder="请输入内容" maxlength=10 showwordlimit></MyInput>
  </div> -->
  <!-- <i class="iconfont icon-chacha"></i> -->
  <!-- <InputNum v-model="num" step=2 precision=3 min=-2 max=2 @change="help"></InputNum> -->
  <!-- <MySelect v-model="input" :width="240" :height="40">
    <MyOption label="11111" value="11111"></MyOption>
    <MyOption label="22222" value="22222"></MyOption>
    <MyOption label="33333" value="33333"></MyOption>
  </MySelect> -->
  <!-- <MyMessage type="error" message="消息消息消息消息消息消息"></MyMessage> -->
  <!-- <MyDialog v-model="sign" title="11111" top='100px' center>
    <span>这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息</span>
    <template #footer>
      <MyButton type="danger" disabled round plain icon="phone">
        <span>内容内容</span>
      </MyButton>
      <MyButton type="danger" disabled round plain icon="phone">
        <span>内容内容</span>
      </MyButton>
    </template>
  </MyDialog> -->
  <!-- <div class="out">
      <MyCarousel class="myinput">
        <MyCarouselItem v-for="(item, index) in 10" :key="item">
          {{index}}
        </MyCarouselItem>
    </MyCarousel>
  </div> -->
  <MyPagination v-model="num" total=1020 pagercount=13 pagesizes="20" background></MyPagination>
  </div>
</template>
<script setup>
// https://blog.csdn.net/weixin_43130350/article/details/122097272
import { onMounted, reactive, ref ,getCurrentInstance} from 'vue';
// import MyButton from './components/MyButton.vue'
// import MyIcon from './components/MyIcon.vue';
// import MyRadio from './components/MyRadio.vue';
// import MyRadioGroup from './components/MyRadioGroup.vue';
// import CheckBox from './components/CheckBox.vue'
// import CheckBoxGroup from './components/CheckBoxGroup.vue'
// import AA from './components/AA.vue';
// import BB from './BB.vue'
// import BB from './componentnums/BB.vue';
// import MySwitch from './components/MySwitch.vue';
// import MyInput from './components/MyInput.vue';
// import InputNum from './components/InputNum.vue';
// import MySelect from './components/MySelect.vue';
// import MyOption from './components/MyOption.vue';
// import MyMessage from './components/MyMessage.vue';
// import MyMessage1 from './components/MyMessage.js';
// import MyDialog from './components/MyDialog.vue';
// import MyCarousel from './components/MyCarousel.vue'
// import MyCarouselItem from './components/MyCarouselItem.vue'
// import MyPagination from './components/MyPagination.vue';
var radio1=ref('')
var checked2=ref('')
var sign=ref(true)
var input=ref('')
var num=ref(10)
var checkList = ref(['selected and disabled', 'Option A'])
function help(){
  console.log('help')
}
const {proxy} = getCurrentInstance();
onMounted(()=>{
  // MyMessage({ type: "success", message: "登录成功" });
  // const {proxy} = getCurrentInstance();
  // console.log(proxy)
  proxy.$MyMessage({ type: "success", message: "登录成功" });
})
</script>
<style>
.out{
  display: flex;
  justify-content: center;
}
.myinput{
  display: flex;
  justify-content: center;
  width: 600px;
  height: 300px;
}
</style>
