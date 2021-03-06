<template>
  <div
    class="modal"
    :class="{ 'modal--active': isActive }"
    @click.self="$emit(EVENTS.close)"
  >
    <component
      :is="data.type"
      v-bind="data.data"
      class="modal__component"
      @close-modal="$emit(EVENTS.close)"
    />
  </div>
</template>

<script>
export const MODAL_TYPES = Object.freeze({
  exampleModal: () => import('@/components/modals/Example'),
});

const EVENTS = {
  close: 'close',
};

export default {
  props: {
    isActive: { type: Boolean, default: false },
    /**
     * @param data - modal object
     * @param data.data - passed data
     * @param data.type - modal type
     * @param data.hideOnWidth - hide modal on window width
     */
    data: {
      type: Object,
      required: true,
      validator(value) {
        if (Object.keys(value).length) {
          if (
            !(value.type && Object.values(MODAL_TYPES).includes(value.type))
          ) {
            // eslint-disable-next-line no-console
            console.error(`Modal component. Data prop should contain required "type" key and it should be one of ${Object.values(MODAL_TYPES)}.`);
            return false;
          }
        }
        return true;
      },
    },
  },
  data: () => ({
    EVENTS,
  }),
  created() {
    window.addEventListener('resize', this.windowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowResize);
  },
  methods: {
    windowResize() {
      if (this.data.hideOnWidth && this.isActive) {
        const width = window.innerWidth;
        if (width < this.data.hideOnWidth) {
          this.$emit(EVENTS.close);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(#1b1f26, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: .3s ease-out;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 80px 24px 24px;
  cursor: pointer;

  z-index: var(--z-modal);

  &.modal--active {
    opacity: 1;
    visibility: visible;
  }
}
.modal__component {
  cursor: initial;
}
</style>
