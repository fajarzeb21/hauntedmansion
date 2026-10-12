
import { useState } from "react";
import invitationData from "../data/InvitationData";

function InvitationCard({ expanded = false }) {
  return (
    <div
      className={`parchment-border ${
        expanded ? "parchment-expanded" : ""
      }`}
    >
      <div className="parchment-ornament">✦ ❧ ✦</div>

      <p className="parchment-eyebrow">
        YOU ARE CORDIALLY INVITED TO
      </p>

      <h2 className="parchment-title">
        <span>The</span>
        <span>Haunted</span>
        <span>Manor</span>
      </h2>

      <div className="parchment-divider">✦</div>

      <p className="parchment-host">
        {invitationData.eventTitle}
      </p>

      <p className="parchment-description">
        {invitationData.description}
      </p>

      <p className="parchment-label">
        HOSTED BY
      </p>

      <p className="parchment-host">
        {invitationData.hostNames}
      </p>

      <p className="parchment-label">
        YOU ARE SUMMONED ON
      </p>

      <p className="parchment-event">
        {invitationData.date}
      </p>

      <div className="parchment-date">
        <span>{invitationData.time}</span>
        <span>{invitationData.location}</span>
      </div>

      <p className="parchment-label">
        DRESS CODE
      </p>

      <p className="parchment-host">
        {invitationData.dressCode}
      </p>

      <div className="parchment-bottom-ornament">
        ✦ ❧ ✦
      </div>
    </div>
  );
}

function SecretInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  return (
    <section className="secret-invitation" id="invitation">
      <div className="invitation-glow"></div>

      <div className="invitation-container">
        <p className="invitation-eyebrow">
          ✦ A MESSAGE FROM BEYOND ✦
        </p>

        <h2 className="envelope-heading">
          An Invitation
          <span>Awaits You</span>
        </h2>

        <p className="envelope-intro">
          {isOpen
            ? "The seal is broken. Your invitation awaits."
            : "A mysterious invitation lies hidden within."}
        </p>

        {/* ENVELOPE */}
        <div
          className={`haunted-envelope ${
            isOpen ? "envelope-open" : ""
          }`}
        >
          <div className="envelope-back"></div>

          {/* Keep the small card hidden inside the envelope */}
          <div className="envelope-card-hidden">
            <InvitationCard />
          </div>

          <div className="envelope-front">
            <div className="envelope-left-fold"></div>
            <div className="envelope-right-fold"></div>
            <div className="envelope-bottom-fold"></div>
          </div>

          <div className="envelope-flap"></div>

          {!isOpen && (
            <button
              type="button"
              className="skull-wax-seal"
              onClick={() => setIsOpen(true)}
              aria-label="Break the seal and open the envelope"
            >
              <span className="seal-skull">✦</span>
            </button>
          )}
        </div>

        {/* SHOW BUTTON AFTER OPENING THE ENVELOPE */}
        {isOpen && (
          <button
            type="button"
            className="envelope-action"
            onClick={() => setShowInvitation(true)}
          >
            OPEN INVITATION <span>⟶</span>
          </button>
        )}

        <p className="envelope-hint">
          {isOpen
            ? "Your mysterious invitation is waiting for you."
            : "Break the wax seal to discover what awaits."}
        </p>

        <p className="invitation-closing">
          Some nights are simply too magical to miss...
        </p>
      </div>

      {/* SEPARATE FULL-SCREEN INVITATION */}
      {showInvitation && (
        <div className="invitation-modal">
          <header className="full-invitation-header">
            <span className="full-invitation-brand">
              ✦ THE HAUNTED MANOR ✦
            </span>

            <button
  type="button"
  className="invitation-modal-close"
  onClick={() => {
    setShowInvitation(false);
    setIsOpen(false);
  }}
  aria-label="Close invitation and return to website"
>
  CLOSE ✕
</button>
          </header>

          <div className="full-invitation-body">
            <p className="full-invitation-eyebrow">
              ✦ YOUR PRESENCE IS REQUESTED ✦
            </p>

            <InvitationCard expanded />

            <p className="full-invitation-footer">
              {invitationData.tagline}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SecretInvitation;

