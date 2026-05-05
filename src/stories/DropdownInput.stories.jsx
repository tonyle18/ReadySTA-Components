import React, { useState, useCallback } from 'react';
import { DropdownInput } from '../components/DropdownInput';

const RESET_BTN = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  marginTop: '12px',
  padding: '4px 10px',
  fontSize: '12px',
  fontFamily: '"Open Sans", sans-serif',
  color: '#555',
  background: '#F5F5F5',
  border: '1px solid #CCC',
  borderRadius: '4px',
  cursor: 'pointer',
};

const SAMPLE_OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

/** @type { import('@storybook/react').Meta } */
export default {
  title: 'ReadySTA/Inputs/Dropdown Input/Vertical',
  component: DropdownInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Dropdown Input with label stacked above the input field.',
      },
    },
  },
  args: { layout: 'vertical', options: SAMPLE_OPTIONS, label: 'Heading', required: true, placeholder: 'Category' },
  argTypes: {
    label: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    options: { control: 'object' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    layout: { table: { disable: true } },
    onChange: { action: 'changed' },
  },
};

export const Default = {
  args: { disabled: false },
};

export const Hover = {
  name: 'Hover',
  args: { disabled: false, forceHover: true },
};

export const Active = {
  render: () => {
    const [key, setKey] = useState(0);
    const reset = useCallback(() => setKey((k) => k + 1), []);
    return (
      <div>
        <DropdownInput
          key={key}
          label="Heading"
          required
          placeholder="Category"
          options={SAMPLE_OPTIONS}
          value="Option 1"
          layout="vertical"
        />
        <button style={RESET_BTN} onClick={reset}>↺ Reset</button>
      </div>
    );
  },
};

export const Disabled = {
  args: { disabled: true },
};

export const AllStates = {
  name: 'All States',
  render: () => {
    const label = (text) => (
      <span style={{ fontFamily: '"Open Sans", sans-serif', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {text}
      </span>
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        {label('Default')}
        <DropdownInput label="Heading" placeholder="Category" options={SAMPLE_OPTIONS} layout="vertical" />
        {label('Hover')}
        <DropdownInput label="Heading" placeholder="Category" options={SAMPLE_OPTIONS} layout="vertical" forceHover />
        {label('Active')}
        <DropdownInput label="Heading" placeholder="Category" options={SAMPLE_OPTIONS} value="Option 1" layout="vertical" />
        {label('Disabled')}
        <DropdownInput label="Heading" placeholder="Category" options={SAMPLE_OPTIONS} disabled layout="vertical" />
      </div>
    );
  },
};
