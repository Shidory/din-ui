import DuiInput from './Input.vue';

export default {
  title: 'Atoms/Input',
  component: DuiInput,
  argTypes: {},
};

const Template = (args) => ({
  components: { DuiInput },
  setup() {
    return { args };
  },
  template: '<DuiInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  label: 'Default',
};
