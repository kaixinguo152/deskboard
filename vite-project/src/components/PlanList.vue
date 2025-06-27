<template>
  <div>
    <ul>
      <li style="border-bottom: 1px solid black"></li><!--补齐上边线-->
      <li class="plan" v-for="plan in planList" :key="plan.id">
          <input type="checkbox" :id="plan.id" v-model="isChecked" @change="finishPlan()">
          <label :class="isPlanFinished" :for="plan.id" >{{ plan.content }}</label>
      </li>
    </ul>

    <button class="addPlanButton" :class="DisplayAddPlanButton" @click="addPlan()" id="add">+</button>
    <input v-model.lazy="inputValue" placeholder="plan" :class="DisplayInput">
    <button @click="submitHandle()" class="submitButton" :class="DisplaySubmitButton">submit</button>
  </div>
</template>

<script lang="ts">
import {planList} from "../datas/planList.ts";

export default {
    data(){
      return {
        planList,
        inputValue: "",
        DisplayAddPlanButton : 'isDisplayAddPlanButton',
        DisplayInput: 'notDisplayInput',
        DisplaySubmitButton : 'notDisplaySubmitButton',
        isPlanFinished: 'notFinished',
        isChecked: false,
      }
    },
    methods:{
      finishPlan(){
        this.isPlanFinished = this.isChecked ? 'isFinished' : 'notFinished';
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

        const id = this.planList.length + 1;
        this.planList.push({
          id: String(id),
          isFinished: false,
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
    border-top: 0;
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
