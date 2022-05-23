<template>
    <div>
      Hello world!
    </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import Base from '@/lib/ts/Base'
import {getTicketList, TicketListRequest} from '@/api/AjaxEngineApi';
import { computed, ref } from "vue";
import { useStore } from '@/store';
import {NeTztResponse, TicketListResponse} from "../api/AjaxEngineApi";


const res: NeTztResponse<TicketListResponse> = await getTicketList(<TicketListRequest>{
  status: '2'
});
for (let rd of res.DATA.rds) {
  console.log(rd);
}
</script>
