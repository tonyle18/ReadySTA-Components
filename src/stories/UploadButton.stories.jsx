import { UploadButton } from '../components/UploadButton';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Buttons/UploadButton',
  component: UploadButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Upload / file-picker button. Light grey with dark border, three interaction states.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Pressed'],
      description: 'Visual interaction state',
    },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export const Default = { args: { state: 'Default', label: 'Choose File' } };
export const Hover = { args: { state: 'Hover', label: 'Choose File' } };
export const Pressed = { args: { state: 'Pressed', label: 'Choose File' } };
export const AllStates = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <UploadButton state="Default" label="Default" />
      <UploadButton state="Hover" label="Hover" />
      <UploadButton state="Pressed" label="Pressed" />
    </div>
  ),
};
