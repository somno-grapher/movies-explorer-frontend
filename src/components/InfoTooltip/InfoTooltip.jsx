import React from 'react';

// CSS import
import './InfoTooltip.css';

function InfoTooltip({
  infoTooltipData={},
  isOpen,
  onClose
}) {
  const stateClass = isOpen ? 'info-tooltip_opened' : '';
  return (
    <div className={`info-tooltip ${stateClass}`}>
      <div className="info-tooltip__container">
        <button
          type="button"
          className="info-tooltip__close-button"
          onClick={onClose}
        >
        </button>
        <p className="info-tooltip__message">{infoTooltipData.message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
