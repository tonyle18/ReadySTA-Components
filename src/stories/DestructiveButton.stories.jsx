import { DestructiveButton } from '../components/DestructiveButton';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/DestructiveButton',
  component: DestructiveButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Destructive Button for irreversible or dangerous actions. Red gradient with three interaction states.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Pressed/Clicked'],
      description: 'Visual interaction state',
    },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export const Default = { args: { state: 'Default', label: 'Confirm' } };
export const Hover = { args: { state: 'Hover', label: 'Confirm' } };
export const PressedClicked = {
  name: 'Pressed / Clicked',
  args: { state: 'Pressed/Clicked', label: 'Confirm' },
};
export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <DestructiveButton state="Default" label="Default" />
      <DestructiveButton state="Hover" label="Hover" />
      <DestructiveButton state="Pressed/Clicked" label="Pressed" />
    </div>
  ),
};
