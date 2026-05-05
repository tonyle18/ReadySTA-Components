import { PrimaryButton } from '../components/PrimaryButton';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary Button component from the ReadySTA design system. Blue gradient default with three interaction states.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Press/Clicked'],
      description: 'Visual interaction state of the button',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    state: 'Default',
    label: 'Confirm',
  },
};

export const Hover = {
  args: {
    state: 'Hover',
    label: 'Confirm',
  },
};

export const PressClicked = {
  name: 'Press / Clicked',
  args: {
    state: 'Press/Clicked',
    label: 'Confirm',
  },
};

export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <PrimaryButton state="Default" label="Default" />
      <PrimaryButton state="Hover" label="Hover" />
      <PrimaryButton state="Press/Clicked" label="Press / Clicked" />
    </div>
  ),
};
