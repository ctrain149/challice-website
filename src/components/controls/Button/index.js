import { useRef, useState } from 'react';

import styles from './index.module.scss';

export default function Button({
  disabled = false,
  flipped = false,
  icon = null,
  label = '',
  onClick = () => {},
}) {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);
  const rippleRef = useRef(null);

  function click(e) {
    e.preventDefault();
    onClick(e);
    e.stopPropagation();
  }

  function mousedown(e) {
    if (disabled) {
      return;
    }

    const { clientHeight, clientWidth } = buttonRef.current;

    const componentStyles = window.getComputedStyle(buttonRef.current);
    const leftOffset = parseInt(componentStyles.getPropertyValue('padding-left'), 10);
    const topOffset = parseInt(componentStyles.getPropertyValue('padding-top'), 10);

    const largerWidth = clientWidth > clientHeight;
    const dimension = largerWidth ? clientWidth : clientHeight;
    const radius = dimension * 2;
    const rect = buttonRef.current.getBoundingClientRect();
    const el = document.createElement('div');

    el.className = styles.layerRipple;
    el.style.left = `${e.clientX - rect.x - leftOffset}px`;
    el.style.top = `${e.clientY - rect.y - topOffset}px`;
    el.style.width = `${radius}px`;
    el.style.height = `${radius}px`;
    el.addEventListener('animationend', removeRipple);

    rippleRef.current.appendChild(el);
    setActive(true);
  }

  function mouseup() {
    if (!disabled) {
      setActive(false);
    }
  }

  function removeRipple(e) {
    rippleRef.current.removeChild(e.currentTarget);
  }

  return (
    <div className={styles.Button} ref={buttonRef}>
      <button
        className={styles.button}
        disabled={disabled}
        onClick={click}
        onMouseDown={mousedown}
        onMouseUp={mouseup}
      >
        <div className={styles.layerFade} data-active={active} />

        <div id="container-ripples" ref={rippleRef} />

        <div className={styles.layerOutline} />

        <span className={styles.label} data-flipped={flipped}>
          {icon} {label}
        </span>
      </button>
    </div>
  );
}
