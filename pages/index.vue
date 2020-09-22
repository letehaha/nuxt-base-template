<template>
  <section class="container">
    <Button @click="openExampleModal">
      Open modal
    </Button>
    <LanguageSelector />
  </section>
</template>

<script>
import { NUXT_EVENTS } from '@/js/const';
import { MODAL_TYPES } from '@/components/Modal';
import Button from '@/components/common/Button';
import LanguageSelector from '@/components/LanguageSelector';

export default {
  components: {
    Button,
    LanguageSelector,
  },
  methods: {
    openExampleModal() {
      this.$nuxt.$emit(NUXT_EVENTS.modalOpen, {
        type: MODAL_TYPES.exampleModal,
      });
    },
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
