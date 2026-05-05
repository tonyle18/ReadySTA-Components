import React, { useState } from 'react';

const stateStyles = {
  Default: { background: '#EFEFEF' },
  Hover:   { background: '#E5E5E5' },
  Pressed: { background: '#F5F5F5' },
};

export function UploadButton({
  label = 'Choose File',
  state = 'Default',
  onClick,
}) {
  const [interactionState, setInteractionState] = useState('Default');

  const activeState = interactionState === 'Default' ? state : interactionState;
  const { background } = stateStyles[activeState] || stateStyles.Default;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setInteractionState('Hover')}
      onMouseLeave={() => setInteractionState('Default')}
      onMouseDown={() => setInteractionState('Pressed')}
      onMouseUp={() => setInteractionState('Hover')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '8px',
        borderRadius: '2px',
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        color: '#000000',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: '19px',
        whiteSpace: 'nowrap',
        background,
        border: '1px solid #595959',
        transition: 'background 150ms ease-out',
      }}
    >
      {label}
    </button>
  );
}
