import { useState } from "react";

function HauntedEntrance({ onEnter }) {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const enterManor = () => {
    if (doorsOpen) return;

    setDoorsOpen(true);

    setTimeout(() => {
      onEnter();
    }, 1600);
  };

  return (
    <section className="haunted-entrance">

      {/* Atmospheric overlay */}
      <div className="entrance-overlay"></div>

      {/* Flying bats */}
      <div className="bat bat-one">🦇</div>
      <div className="bat bat-two">🦇</div>

      {/* Main entrance content */}
      <div
        className={`entrance-content ${
          doorsOpen ? "fade-out" : ""
        }`}
      >
        <p className="entrance-eyebrow">
          ✦ YOU HAVE BEEN SUMMONED ✦
        </p>

        <h1 className="entrance-title">
          THE
          <span>HAUNTED</span>
          MANOR
        </h1>

        <div className="gold-divider">
          <span>✦</span>
        </div>

        <p className="entrance-subtitle">
          An Invitation From Beyond
        </p>

        <p className="entrance-description">
          Beyond these ancient walls lies a night
          of mystery, magic, and unforgettable secrets.
        </p>

        <button
          className="enter-button"
          onClick={enterManor}
          disabled={doorsOpen}
        >
          <span>ENTER THE MANOR</span>
          <span className="button-arrow">⟶</span>
        </button>

        <p className="entrance-note">
          OCTOBER 31 · AFTER DARK
        </p>
      </div>

      {/* Animated gothic doors */}
      <div
        className={`manor-doors ${
          doorsOpen ? "open" : ""
        }`}
      >
        <div className="door door-left">
          <div className="door-inner">
            <span className="door-symbol">✦</span>
            <span className="door-handle"></span>
          </div>
        </div>

        <div className="door door-right">
          <div className="door-inner">
            <span className="door-symbol">✦</span>
            <span className="door-handle"></span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HauntedEntrance;