import React, { useState } from 'react';
import { PinDropIcon } from '../OutlineButton/PinDropIcon';
import { ChevronDownIcon } from '../OutlineButton/ChevronDownIcon';

const defaultStyle = {
  background: 'linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%)',
  color: '#1c1b1f',
};
const hoverStyle = {
  background: '#e6e6e6',
  color: '#1c1b1f',
};
const pressStyle = {
  background: '#e6e6e6',
  color: '#1c1b1f',
};

function Segment({ label, showIcon, showChevron, showText, position, onClick }) {
  const [state, setState] = useState('Default');

  const isPressed = state === 'Press/Click';
  const isHovered = state === 'Hover' || isPressed;

  const borderRadius =
    position === 'left'  ? '4px 0 0 4px' :
    position === 'right' ? '0 4px 4px 0'  : '0';

  const borderLeft = position === 'left' ? '1px solid #cccccc' : 'none';

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setState('Hover')}
      onMouseLeave={() => setState('Default')}
      onMouseDown={() => setState('Press/Click')}
      onMouseUp={() => setState('Hover')}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '12px',
        paddingRight: '12px',
        borderRadius,
        fontFamily: '"Open Sans", sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        color: '#1c1b1f',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: '19px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        background: defaultStyle.background,
        borderTop: '1px solid #cccccc',
        borderBottom: '1px solid #cccccc',
        borderRight: '1px solid #cccccc',
        borderLeft,
        boxShadow: isPressed
          ? '0 4px 4px rgba(0,0,0,0.10), inset 0 4px 4px rgba(0,0,0,0.15)'
          : '0 1px 1px rgba(120, 116, 116, 0.25)',
        transition: 'box-shadow 150ms ease-out',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: '#e6e6e6',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 150ms ease-out',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
      />
      {showIcon && <span style={{ position: 'relative', display: 'inline-flex' }}><PinDropIcon /></span>}
      {showText && <span style={{ position: 'relative' }}>{label}</span>}
      {showChevron && <span style={{ position: 'relative', display: 'inline-flex' }}><ChevronDownIcon /></span>}
    </button>
  );
}

export function SegmentedButtons({
  segments = [
    { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
    { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
    { label: 'Edit Details', showIcon: true, showText: true, showChevron: true },
  ],
  onSegmentClick,
}) {
  return (
    <div style={{ display: 'inline-flex' }}>
      {segments.map((seg, i) => {
        const position = i === 0 ? 'left' : i === segments.length - 1 ? 'right' : 'middle';
        return (
          <Segment
            key={i}
            label={seg.label}
            showIcon={seg.showIcon ?? true}
            showText={seg.showText ?? true}
            showChevron={seg.showChevron ?? true}
            position={position}
            onClick={() => onSegmentClick?.(i)}
          />
        );
      })}
    </div>
  );
}
