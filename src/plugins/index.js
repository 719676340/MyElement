import CheckBox from '../components/CheckBox.vue'
import CheckBoxGroup from '../components/CheckBoxGroup.vue'
import InputNum from '../components/InputNum.vue'
import MyButton from '../components/MyButton.vue'
import MyCarousel from '../components/MyCarousel.vue'
import MyCarouselItem from '../components/MyCarouselItem.vue'
import MyDialog from '../components/MyDialog.vue'
import MyIcon from '../components/MyIcon.vue'
import MyInput from '../components/MyInput.vue'
import MyOption from '../components/MyOption.vue'
import MyPagination from '../components/MyPagination.vue'
import MyRadio from '../components/MyRadio.vue'
import MySelect from '../components/MySelect.vue'
import MySwitch from '../components/MySwitch.vue'
import MyRadioGroup from '../components/MyRadioGroup.vue'
import MyMessage from '../components/MyMessage.js'


const components = [
    CheckBox,
    CheckBoxGroup,
    InputNum,
    MyButton,
    MyCarousel,
    MyCarouselItem,
    MyDialog,
    MyInput,
    MyIcon,
    MyOption,
    MyPagination,
    MyRadio,
    MySelect,
    MySwitch,
    MyRadioGroup
  ]
  const install = function (app) {
    // 全局注册所有的组件
    app.config.globalProperties.$MyMessage = MyMessage
    components.forEach((item) => {
        app.component(item.name, item)
    })

  }
  export default {
    install
  }