<template>
  <main>
    <nuxt />
    <client-only>
      <Modal
        :data="modalData"
        :is-active="isModalVisible"
        @close="closeModal"
      />
    </client-only>
  </main>
</template>

<script>
import { NUXT_EVENTS } from '@/js/const';

import Modal from '@/components/Modal';

export default {
  components: {
    Modal,
  },
  data: () => ({
    isModalVisible: false,
    modalData: {},
  }),
  mounted() {
    this.$nuxt.$on(NUXT_EVENTS.modalOpen, this.onOpenMessage);
    this.$nuxt.$on(NUXT_EVENTS.modalClose, this.closeModal);
  },
  methods: {
    onOpenMessage(data) {
      this.isModalVisible = true;
      this.modalData = data;
    },
    closeModal() {
      this.modalData = {};
      this.isModalVisible = false;
    },
  },
};
</script>
