<template>
  <div
    class="qr-code__wrapper"
    :style="{
      padding: `${padding}${paddingDimension}`,
      background,
    }"
  >
    <qr-code
      :value="value"
      :size="size - (padding * 2)"
      :background="background"
      :foreground="foreground"
      :class-name="className"
      :level="level"
    />
  </div>
</template>

<script>
import QrCode from 'qrcode.vue';

export default {
  components: {
    QrCode,
  },
  props: {
    value: { type: String, default: '' },
    size: { type: Number, default: 200 },
    background: { type: String, default: '#fff' },
    foreground: { type: String, default: '#262626' },
    className: { type: String, default: '' },
    level: { type: String, default: 'L' },
    padding: { type: Number, default: 5 },
    paddingDimension: { type: String, default: 'px' },
  },
};
</script>

<style lang="scss" scoped>
.qr-code__wrapper {
  border-radius: 6px;
}
</style>
