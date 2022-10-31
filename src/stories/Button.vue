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
        let color = '';
        if (props.color) color = `default-${props.color}`;
        if (props.variant) color = `${props.variant}-default`;
        if (props.disabled) color = `default-disabled}`;
        if (props.variant && props.color) color = `${props.variant}-${props.color}`;
        if (!props.variant && !props.color && !props.disabled) color = 'default-default';
        if ((props.variant && props.disabled) || (props.variant && props.color && props.disabled)) color = `${props.variant}-disabled`;
        if ((!props.variant && props.disabled) || (!props.variant && !props.color && props.disabled)) color = 'default-disabled';
        return color;
      }),

      buttonVariant: computed(() => props.variant ? 'dui-button' : 'dui-button'),

      onClick() {
        emit('click');
      }
    }
  },
};
</script>
