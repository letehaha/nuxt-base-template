<template>
  <section class="container">
    <Button>Button</Button>
    <LanguageSelector />
  </section>
</template>

<script>
import Button from '@/components/common/Button';
import LanguageSelector from '@/components/LanguageSelector';

export default {
  components: {
    Button,
    LanguageSelector,
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: grid;
  grid-gap: 24px;
  grid-template-rows: 48px;
}
</style>
