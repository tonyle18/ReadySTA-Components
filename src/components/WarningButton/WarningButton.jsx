import React, { useState } from 'react';

export function WarningButton({
  label = 'Confirm',
  state = 'Default',
  onClick,
}) {
  const [interactionState, setInteractionState] = useState('Default');

  const activeState = interactionState === 'Default' ? state : interactionState;
  const isPressed = activeState === 'Pressed/Hover';
  const isHovered = activeState === 'Hover' || isPressed;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setInteractionState('Hover')}
      onMouseLeave={() => setInteractionState('Default')}
      onMouseDown={() => setInteractionState('Pressed/Hover')}
      onMouseUp={() => setInteractionState('Hover')}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '8px',
        borderRadius: '4px',
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        color: '#ffffff',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: '19px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #FBB450 0%, #F89406 100%)',
        border: '0.25px solid rgba(0,0,0,0.25)',
        boxShadow: isPressed
          ? '0 1px 1px rgba(0,0,0,0.25), inset 0 4px 4px rgba(0,0,0,0.25)'
          : '0 1px 1px rgba(0,0,0,0.25)',
        transition: 'box-shadow 150ms ease-out',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: '#F89406',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 150ms ease-out',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
      />
      <span style={{ position: 'relative' }}>{label}</span>
    </button>
  );
}
