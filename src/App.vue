<template>
  <div style="width:500px;">
    <d-panel type="primary" :is-collapsed="true" :show-animation="true">
      <d-panel-header>Panel with foldable</d-panel-header>
      <d-panel-body>This is body</d-panel-body>
    </d-panel>
    <br />
    <br />
    <d-panel @toggle="toggle" :is-collapsed="true" :show-animation="true" :has-left-padding="false">
      <d-panel-header>
        Panel has no left padding
        <em :class="`icon icon-chevron-${toggleState ? 'down' : 'up'}`"></em>
      </d-panel-header>
      <d-panel-body>This is body</d-panel-body>
    </d-panel>
    <br />
    <br />
    <d-panel :is-collapsed="true" :before-toggle="beforeToggle">
      <d-panel-header>Panel with header and footer</d-panel-header>
      <d-panel-body>This is body</d-panel-body>
      <d-panel-footer>This is footer</d-panel-footer>
    </d-panel>
    <br>
    <br>
    <d-button type="">Button</d-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";

let toggleState = ref(true);
const toggle = (value: boolean) => {
  toggleState.value = value;
}
const beforeToggle = (value:boolean,done: ()=>void) => {
  console.log(value);
}
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>