import { ConfirmationButton } from '../components/ConfirmationButton';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/ConfirmationButton',
  component: ConfirmationButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Confirmation Button for positive/success actions. Green gradient with three interaction states.',
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
      <ConfirmationButton state="Default" label="Default" />
      <ConfirmationButton state="Hover" label="Hover" />
      <ConfirmationButton state="Pressed/Clicked" label="Pressed" />
    </div>
  ),
};
