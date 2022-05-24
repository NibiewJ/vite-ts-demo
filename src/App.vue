<template>
	<div>
		<div id="nav">
			<router-link to="/">领券中心</router-link> |
			<router-link to="/myTickets">我的优惠券</router-link> |
			<router-link to="/historyTickets">历史优惠券</router-link>
		</div>
		<router-view />
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { version, buildTime } from "../build/info.json"

console.log(`%c Release Build Info
%cVersion			v${version}
BuildTime		${buildTime}`
, "background:#000;color:#FFF;font-weight:bold;"
, "background:#FFF;color:#000;"
)

</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav { padding: 30px; }
#nav a { font-weight: bold; color: #2c3e50; }
#nav a.router-link-exact-active { color: #42b983; }
</style>
