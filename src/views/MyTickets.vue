<template>
  <div>
    <h2>我的优惠券</h2>
    <ul>
      <li v-for="item in data" :key="item.coupon_id">{{ item.coupon_name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import {onMounted, computed, reactive, ref} from 'vue';
import {ITicketItem, ITicketListResponse} from "../api/types/Coupon";
import {AjaxEngineResponse} from "../api";
import {getAvailableTicketList} from "../api/Coupon";

const data = ref([]);
// 数据初始化
onMounted(async () => {
  // 获取领取列表
  const res: AjaxEngineResponse<ITicketListResponse<ITicketItem>> = await getAvailableTicketList(<ITicketListRequest>{
    status: '2', _fail: (err: AjaxEngineResponse<any>) => {
      // todo 针对于这个请求异常处理
    }});
  data.value = res.DATA.rds
});

</script>
