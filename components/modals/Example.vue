<template>
  <div>
    Example
    <button
      @click="$emit(EVENTS.closeModal)"
    >
      Close
    </button>
  </div>
</template>

<script>
const EVENTS = {
  closeModal: 'close-modal',
};

export default {
  data: () => ({
    EVENTS,
  }),
};
</script>
