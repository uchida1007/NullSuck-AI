<template>
  <div>
    <div id="chartdiv"></div>
    <div id="point">
      <span :style="fontSize">美味しいワインである確率</span>
      <span class="display-3">{{ result }}%</span>
    </div>
  </div>
</template>