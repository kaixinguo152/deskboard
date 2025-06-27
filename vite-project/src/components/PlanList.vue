<template>
  <div>
    <ul>
      <li class="plan" :class="isPlanFinished" v-for="plan in planList" :key="plan.index">
        <input type="checkbox" :id="plan.index" v-model="isChecked" @change="finishPlan()">
        <label :for="plan.index" >{{ plan.content }}</label>
        <p>{{isPlanFinished}}</p>
      </li>
    </ul>

    <button class="addPlanButton" :class="DisplayAddPlanButton" @click="addPlan()" id="add">+</button>
    <input v-model.lazy="inputValue" placeholder="plan" :class="DisplayInput">
    <button @click="submitHandle()" class="submitButton" :class="DisplaySubmitButton">submit</button>
  </div>
</template>

<script lang="ts">
import {planList} from "../datas/planList.ts";
import {ref,onMounted} from "vue";

export default {
  // setup() {
  //   const isPlanFinished = ref('notFinished');
  //
  //   onMounted(() => {
  //     const checkbox = document.getElementById("CheckPlan");
  //
  //     checkbox.addEventListener('change', function() {
  //       if (checkbox.checked) {
  //         console.log('复选框被选中');
  //         isPlanFinished.value = 'isFinished';
  //       } else {
  //         console.log('复选框被取消选中');
  //         isPlanFinished.value = 'notFinished';
  //       }
  //     });
  //   });
  //
  //   return {
  //     isPlanFinished,
  //   };
  // },
    data(){
      return {
        planList,
        inputValue: "",
        DisplayAddPlanButton : 'isDisplayAddPlanButton',
        DisplayInput: 'notDisplayInput',
        DisplaySubmitButton : 'notDisplaySubmitButton',
        isChecked: false,
      }
    },
    methods:{
      finishPlan(){
        if(isChe)
      },
      addPlan(){
        this.DisplayAddPlanButton = "notDisplayAddPlanButton";
        this.DisplayInput = 'isDisplayInput';
        this.DisplaySubmitButton = 'isDisplaySubmitButton';
      },
      submitHandle(){
        this.DisplayAddPlanButton = 'isDisplayAddPlanButton';
        this.DisplayInput = 'notDisplayInput';
        this.DisplaySubmitButton = 'notDisplaySubmitButton';

        this.planList.push({
          index: this.planList.length + 1,
          content: this.inputValue,
        });
        this.inputValue = "";
      }
    },
};

</script>

<style lang="less" scoped>
ul{
  list-style: none;
  li{
    border: 1px solid black;
  }
}
.isFinished{
  background-color: green;
}
.notFinished{
  background-color: red;
}

.addPlanButton{
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin: 3px;
}
.isDisplayAddPlanButton{
  display: block;
}
.notDisplayAddPlanButton{
  display: none;
}

.isDisplayInput{
  display: block;
}
.notDisplayInput{
  display: none;
}

input{
  display: block;
  margin: 3px;
  float: left;
}

.submitButton{
  display: none;
  margin: 3px;
}
.isDisplaySubmitButton{
  display: block;
}
.notDisplaySubmitButton{
  display: none;
}
</style>
