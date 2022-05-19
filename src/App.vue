<template>
	<el-config-provider :locale="locale">
		<div id="nav">
			<router-link to="/">首页</router-link> |
			<router-link to="/about">关于</router-link> |
			<router-link to="/example">示例</router-link> |
			<a href="src/pages/test.html" target="_blank">访问多入口</a>
		</div>
		<router-view />
		<div>我知道你肯定会修改这里的^.^</div>
	</el-config-provider>
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
