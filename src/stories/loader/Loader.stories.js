import DuiLoader from './Loader.vue';

export default {
  title: 'Atoms/Loader',
  component: DuiLoader,
  argTypes: {
    isLoading: {
      control: { type: 'radio' },
      options: ['true', 'false'],
    },
  },
};

const Template = (args) => ({
  components: { DuiLoader },
  setup() {
    return { args };
  },
  template: '<DuiLoader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
};
