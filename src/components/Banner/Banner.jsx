import React, { useState } from 'react';

const typeConfig = {
  Success: {
    background: '#DEF0D9',
    border: '#CAE0CA',
    color: '#326232',
    fontWeight: 400,
    textAlign: 'left',
    showClose: true,
  },
  Information: {
    background: '#D9ECF6',
    border: '#CACBE0',
    color: '#145590',
    fontWeight: 400,
    textAlign: 'left',
    showClose: true,
  },
  Warning: {
    background: '#FBF8E4',
    border: '#E0E0CA',
    color: '#8B560D',
    fontWeight: 400,
    textAlign: 'left',
    showClose: true,
  },
  Error: {
    background: '#F2DEDE',
    border: '#E0CACA',
    color: '#B94A48',
    fontWeight: 400,
    textAlign: 'left',
    showClose: true,
  },
  Grey: {
    background: '#EEEEEE',
    border: '#C4C4C4',
    color: '#595959',
    fontWeight: 700,
    textAlign: 'center',
    showClose: false,
  },
};

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="#595959"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Banner({
  type = 'Success',
  message = 'Hi, Welcome to AVETARS',
  showClose = true,
  onClose,
}) {
  const [dismissed, setDismissed] = useState(false);
  const config = typeConfig[type] || typeConfig.Success;

  if (dismissed) return null;

  const handleClose = () => {
    setDismissed(true);
    onClose?.();
  };

  // Grey variant never shows close button per Figma spec
  const canShowClose = showClose && config.showClose;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        background: config.background,
        border: `1px solid ${config.border}`,
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          flex: 1,
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '14px',
          fontWeight: config.fontWeight,
          color: config.color,
          lineHeight: '19px',
          textAlign: config.textAlign,
        }}
      >
        {message}
      </span>
      {canShowClose && (
        <button
          type="button"
          onClick={handleClose}
          aria-label="Dismiss"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            flexShrink: 0,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
