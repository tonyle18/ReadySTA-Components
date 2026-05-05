import React, { useState, useRef, useEffect } from 'react';

const COLORS = {
  border: '#CCCCCC',
  borderFocus: '#79B7ED',
  bgDefault: '#FFFFFF',
  bgDisabled: '#EEEEEE',
  placeholder: '#A4A4A4',
  text: '#000000',
  iconBg: '#D9D9D9',
  iconColor: '#A4A4A4',
  label: '#000000',
  asterisk: '#000000',
};

function ArrowIcon({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, transition: 'transform 0.15s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <polygon points="9,11.5 4.5,6.5 13.5,6.5" fill={COLORS.iconColor} />
    </svg>
  );
}

function ClearIcon({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Clear selection"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        flexShrink: 0,
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <polygon points="5,6.5 6.5,5 9,7.5 11.5,5 13,6.5 10.5,9 13,11.5 11.5,13 9,10.5 6.5,13 5,11.5 7.5,9" fill={COLORS.iconColor} />
      </svg>
    </button>
  );
}

export function DropdownInput({
  label = 'Heading',
  required = true,
  placeholder = 'Category',
  options = [],
  value,
  onChange,
  disabled = false,
  layout = 'vertical',
  forceHover = false,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ?? null);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setSelected(null);
    onChange?.(null);
  };

  const isActive = open;
  const isSelected = selected !== null && selected !== undefined;

  const showHover = !disabled && (isActive || hovered || forceHover);
  const borderColor = showHover ? COLORS.borderFocus : COLORS.border;
  const boxShadow = showHover
    ? '0 0 8px 0 rgba(121, 183, 237, 0.60), 0 1px 1px 0 rgba(0, 0, 0, 0.08) inset'
    : undefined;
  const bgColor = disabled ? COLORS.bgDisabled : COLORS.bgDefault;
  const textColor = isSelected ? COLORS.text : COLORS.placeholder;

  const outerStyle = {
    display: 'flex',
    flexDirection: layout === 'vertical' ? 'column' : 'row',
    alignItems: layout === 'vertical' ? 'flex-start' : 'center',
    gap: layout === 'vertical' ? '8px' : '16px',
    width: '247px',
    fontFamily: '"Open Sans", sans-serif',
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    lineHeight: '19px',
    color: COLORS.label,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  };

  const dropdownTriggerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '15px',
    flex: layout === 'horizontal' ? 1 : undefined,
    width: layout === 'vertical' ? '100%' : undefined,
    padding: '8px',
    borderRadius: '4px',
    border: `1px solid ${borderColor}`,
    background: bgColor,
    boxShadow,
    boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : 'pointer',
    minHeight: '35px',
    userSelect: 'none',
  };

  const displayText = isSelected ? selected : placeholder;

  return (
    <div style={outerStyle} ref={containerRef}>
      <div style={labelStyle}>
        {required && <span style={{ color: COLORS.asterisk }}>*</span>}
        <span>{label}</span>
      </div>

      <div
        style={dropdownTriggerStyle}
        onClick={() => !disabled && setOpen((o) => !o)}
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            setOpen((o) => !o);
          }
          if (e.key === 'Escape') setOpen(false);
        }}
      >
        <span
          style={{
            flex: 1,
            fontSize: '14px',
            lineHeight: '19px',
            color: textColor,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {displayText}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0px', flexShrink: 0 }}>
          {isSelected && !disabled && (
            <ClearIcon onClick={handleClear} />
          )}
          <ArrowIcon open={open} />
        </div>

        {open && options.length > 0 && (
          <ul
            role="listbox"
            style={{
              position: 'absolute',
              top: 'calc(100% + 2px)',
              left: 0,
              right: 0,
              margin: 0,
              padding: '4px 0',
              listStyle: 'none',
              background: '#FFFFFF',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              zIndex: 10,
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={selected === opt}
                onClick={(e) => { e.stopPropagation(); handleSelect(opt); }}
                style={{
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontFamily: '"Open Sans", sans-serif',
                  color: COLORS.text,
                  cursor: 'pointer',
                  background: selected === opt ? '#EDF5FC' : 'transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#F5F5F5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = selected === opt ? '#EDF5FC' : 'transparent'; }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
