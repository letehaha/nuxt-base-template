<template>
  <div
    :class="{
      'input-field--error': errorMessage,
      'input-field--disabled': $attrs.disabled
    }"
    class="input-field"
  >
    <span
      v-if="label"
      class="input-field__label"
    >
      {{ label }}
    </span>
    <input
      :type="type"
      :value="value"
      :placeholder="$attrs.placeholder || ''"
      :style="inputFieldStyles"
      :tabindex="tabindex"
      v-bind="$attrs"
      class="input-field__input"
      v-on="listeners"
    >
    <div
      v-if="isSubLabelExist"
      class="input-fields__sublabel"
    >
      <slot name="subLabel" />
    </div>
    <p
      v-if="errorMessage"
      class="input-field__err-mes"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>

const EVENTS = {
  input: 'input',
};

export default {
  props: {
    label: { type: String, default: undefined },
    value: { type: [String, Number], default: undefined },
    type: { type: String, default: undefined },
    tabindex: { type: String, default: undefined },
    errorMessage: { type: String, default: undefined },
    inputFieldStyles: { type: Object, default: undefined },
  },
  data: () => ({
  }),
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          if (this.value === event.target.value) return;
          this.$emit(EVENTS.input, event.target.value);
        },
      };
    },
    isSubLabelExist() {
      return !!this.$slots.subLabel;
    },
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.input-field {
  position: relative;
  width: 100%;
  flex: 1;
}

.input-field__input {
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  padding: 15px 20px;
  background-color: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  width: 100%;

  @include placeholder-custom(rgba(#000000, 0.4));

  &:focus {
    border-color: #ffffff;
  }
}

.input-field__label {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 10px;
  display: block;
}

.input-field__err-mes {
  color: red;
  font-size: 14px;
  margin-top: 4px;
  margin-left: 8px;
}

.input-fields__sublabel {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 16px;
  font-weight: 400;
  color: #000000;

  a {
    color: #ffffff;
    text-decoration: none;
  }
}
</style>
