<template>
  <button :disabled='disabled' type="button" :class="[buttonVariant, buttonColor, size]" @click="onClick">{{ label }}</button>
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
  name: 'DuiButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    variant: {
      type: String,
    },
     disabled: {
      type: String,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      buttonColor: computed(() => {
        let color = 'default';
        if (props.variant === 'default' && props.color === 'primary') color = `${props.variant}-${props.color}`;
        if (props.variant === 'default' && props.color === 'news') color = `${props.variant}-${props.color}`;
        if (props.variant === 'default' && props.color === 'info') color = `${props.variant}-${props.color}`;
        if (props.variant === 'default' && props.color === 'success') color = `${props.variant}-${props.color}`;
        if (props.variant === 'default' && props.color === 'warning') color = `${props.variant}-${props.color}`;
        if (props.variant === 'default' && props.color === 'error') color = `${props.variant}-${props.color}`;
        if (props.variant === 'default' && props.disabled) color = 'default-disabled';
        return color;
      }),

      buttonVariant: computed(() => props.variant ? `dui-button ${props.variant}` : 'dui-button'),

      onClick() {
        emit('click');
      }
    }
  },
};
</script>
