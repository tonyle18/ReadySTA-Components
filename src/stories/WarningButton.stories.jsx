import { WarningButton } from '../components/WarningButton';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/WarningButton',
  component: WarningButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Warning Button for cautionary actions. Orange gradient with three interaction states.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Pressed/Hover'],
      description: 'Visual interaction state',
    },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export const Default = { args: { state: 'Default', label: 'Confirm' } };
export const Hover = { args: { state: 'Hover', label: 'Confirm' } };
export const PressedHover = {
  name: 'Pressed / Hover',
  args: { state: 'Pressed/Hover', label: 'Confirm' },
};
export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <WarningButton state="Default" label="Default" />
      <WarningButton state="Hover" label="Hover" />
      <WarningButton state="Pressed/Hover" label="Pressed" />
    </div>
  ),
};
