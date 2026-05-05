import React from 'react';
import { Banner } from '../components/Banner';

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Banners/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Banner component from the ReadySTA design system. Used to display contextual feedback messages. Supports Success, Information, Warning, Error, and Grey variants. The close button is toggleable on all variants except Grey.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['Success', 'Information', 'Warning', 'Error', 'Grey'],
      description: 'Visual variant of the banner',
    },
    message: {
      control: 'text',
      description: 'Message text displayed in the banner',
    },
    showClose: {
      control: 'boolean',
      description: 'Show the dismiss button (not available on Grey variant)',
    },
    onClose: { action: 'closed' },
  },
};

export const Success = {
  args: {
    type: 'Success',
    message: 'Hi, Welcome to AVETARS',
    showClose: true,
  },
};

export const Information = {
  args: {
    type: 'Information',
    message: 'Hi, Welcome to AVETARS',
    showClose: true,
  },
};

export const Warning = {
  args: {
    type: 'Warning',
    message: 'Hi, Welcome to AVETARS',
    showClose: true,
  },
};

export const Error = {
  args: {
    type: 'Error',
    message: 'Hi, Welcome to AVETARS',
    showClose: true,
  },
};

export const Grey = {
  args: {
    type: 'Grey',
    message: 'No items to display here!',
    showClose: false,
  },
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '613px' }}>
      <Banner type="Success" message="Hi, Welcome to AVETARS" showClose />
      <Banner type="Information" message="Hi, Welcome to AVETARS" showClose />
      <Banner type="Warning" message="Hi, Welcome to AVETARS" showClose />
      <Banner type="Error" message="Hi, Welcome to AVETARS" showClose />
      <Banner type="Grey" message="No items to display here!" showClose={false} />
    </div>
  ),
};
