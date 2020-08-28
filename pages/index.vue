<template>
  <section class="container">
    <Button>Hello</Button>
  </section>
</template>

<script>
import Button from '@/components/common/Button';

export default {
  components: {
    Button,
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
