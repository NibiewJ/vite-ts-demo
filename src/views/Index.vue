<template>
	<div>领券中心</div>
</template>

<style scoped>
#admin { width: 100%; min-height: 100vh; height: 100vh; }
.top { height: 20px; }

.main { height: calc(100% - 40px); }
.main .nav { width: 200px; }
.main .tabs { width: calc(100% - 200px); }
</style>

<script setup lang="ts">
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
import {operatePageView} from "../sensors";

/**
 * 进入页面
 */
onBeforeRouteUpdate(((to, from, next) => {
  operatePageView({
    page_title: "测试页面标题"
  });
  next();
}))
/**
 * 离开页面
 */
onBeforeRouteLeave( (to, from, next) => {
  console.log('onBeforeRouteLeave');
  next();
})
</script>
