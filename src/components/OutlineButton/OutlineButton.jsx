import React, { useState } from 'react';
import { PinDropIcon } from './PinDropIcon';
import { ChevronDownIcon } from './ChevronDownIcon';

const stateStyles = {
  Default: {
    background: 'linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%)',
    border: '1px solid #cccccc',
    boxShadow: '0 1px 1px rgba(120, 116, 116, 0.25)',
  },
  Hover: {
    background: '#e6e6e6',
    border: '1px solid #cccccc',
    boxShadow: '0 1px 1px rgba(120, 116, 116, 0.25)',
  },
  'Press/Click': {
    background: '#e6e6e6',
    border: '1px solid #cccccc',
    boxShadow: '0 4px 4px rgba(0,0,0,0.10), inset 0 4px 4px rgba(0,0,0,0.15)',
  },
};

export function OutlineButton({
  label = 'Edit Details',
  showIcon = true,
  showChevron = true,
  showText = true,
  state = 'Default',
  onClick,
}) {
  const [interactionState, setInteractionState] = useState('Default');

  // state prop drives individual stories; mouse events drive live interaction
  const activeState = interactionState === 'Default' ? state : interactionState;
  const style = stateStyles[activeState] || stateStyles.Default;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setInteractionState('Hover')}
      onMouseLeave={() => setInteractionState('Default')}
      onMouseDown={() => setInteractionState('Press/Click')}
      onMouseUp={() => setInteractionState('Hover')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '12px',
        paddingRight: '12px',
        borderRadius: '4px',
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        color: '#1c1b1f',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: '19px',
        whiteSpace: 'nowrap',
        transition: 'background 150ms ease-out, box-shadow 150ms ease-out',
        ...style,
      }}
    >
      {showIcon && <PinDropIcon />}
      {showText && <span>{label}</span>}
      {showChevron && <ChevronDownIcon />}
    </button>
  );
}
