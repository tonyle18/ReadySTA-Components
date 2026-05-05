import { OutlineButton } from '../components/OutlineButton';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/OutlineButton',
  component: OutlineButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Outline Button component from the ReadySTA design system. Supports three interaction states and optional icon, text, and chevron slots.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Press/Click'],
      description: 'Visual interaction state of the button',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show the leading pin-drop icon',
    },
    showChevron: {
      control: 'boolean',
      description: 'Show the trailing chevron icon',
    },
    showText: {
      control: 'boolean',
      description: 'Show the button label text',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args:{
    state:'Default',
    showIcon:true,
    showChevron:true,
    showText:true,
    label:"Label",
  },
};

export const Hover = {
  args: {
    state: 'Hover',
    showIcon: true,
    showChevron: true,
    showText: true,
    label: 'Edit Details',
  },
};

export const PressClick = {
  name: 'Press / Click',
  args: {
    state: 'Press/Click',
    showIcon: true,
    showChevron: true,
    showText: true,
    label: 'Edit Details',
  },
};

export const IconOnly = {
  args: {
    state: 'Default',
    showIcon: true,
    showChevron: false,
    showText: false,
    label: 'Edit Details',
  },
};

export const TextOnly = {
  args: {
    state: 'Default',
    showIcon: false,
    showChevron: false,
    showText: true,
    label: 'Edit Details',
  },
};

export const NoChevron = {
  args: {
    state: 'Default',
    showIcon: true,
    showChevron: false,
    showText: true,
    label: 'Edit Details',
  },
};

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <OutlineButton state="Default" showIcon showChevron showText label="Default" />
      <OutlineButton state="Hover" showIcon showChevron showText label="Hover" />
      <OutlineButton state="Press/Click" showIcon showChevron showText label="Press / Click" />
    </div>
  ),
};
