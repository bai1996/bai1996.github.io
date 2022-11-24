/// <reference types="vite/client" />
//导出vue的配置
declare module '*.vue' {
  import type { DefineComponent } from "vue";
  const vueComponent: DefineComponent<{},{},any>;
  export default vueComponent;
}