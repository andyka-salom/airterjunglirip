<script setup>
defineProps({
  from: { type: String, default: '#fdfafb' },
  to: { type: String, default: '#fff0f5' },
  flip: { type: Boolean, default: false }
})
</script>

<template>
  <div class="petal-divider" :class="{ flip }" aria-hidden="true">
    <svg viewBox="0 0 1200 90" preserveAspectRatio="none">
      <path
        d="M0,32 C120,80 240,0 360,28 C480,56 600,90 720,60 C840,30 960,-10 1080,20 C1140,35 1170,45 1200,40 L1200,90 L0,90 Z"
        :fill="to"
      />
    </svg>
  </div>
</template>

<style scoped>
.petal-divider {
  width: 100%;
  line-height: 0;
  transform: translateY(1px);
}
.petal-divider.flip { transform: scaleY(-1) translateY(1px); }
.petal-divider svg { width: 100%; height: 64px; display: block; }
@media (max-width: 700px) {
  .petal-divider svg { height: 40px; }
}
</style>
