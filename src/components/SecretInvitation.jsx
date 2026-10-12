
import invitationData from "../data/InvitationData";

function SecretInvitation() {
  return (
    <section className="secret-invitation" id="invitation">
      {/* Background decorations */}
      <div className="invitation-glow"></div>

      <div className="invitation-container">
        {/* Decorative top label */}
        <p className="invitation-eyebrow">
          A MOST PECULIAR INVITATION
        </p>

        {/* Main invitation card */}
        <div className="invitation-card">
          {/* Ornamental corners */}
          <span className="corner corner-tl">❧</span>
          <span className="corner corner-tr">❧</span>
          <span className="corner corner-bl">❧</span>
          <span className="corner corner-br">❧</span>

          {/* Top decoration */}
          <div className="invitation-ornament">
            <span></span>
            <b>✦</b>
            <span></span>
          </div>

          <p className="invitation-small-text">
            BY THE LIGHT OF THE MIDNIGHT MOON
          </p>

          <h2 className="invitation-title">
            You Are
            <span>Summoned</span>
          </h2>

          <p className="invitation-description">
            {invitationData.description}
          </p>

          {/* Decorative divider */}
          <div className="invitation-divider">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>

          <p className="masquerade-label">
            YOU ARE CORDIALLY INVITED TO
          </p>

          <h3 className="masquerade-title">
            {invitationData.eventTitle}
          </h3>

          <p className="invitation-bottom-text">
            {invitationData.date} · {invitationData.time}
          </p>

          {/* Wax seal */}
          <div className="wax-seal">
            <span>H</span>
          </div>
        </div>

        {/* Invitation closing text */}
        <p className="invitation-closing">
          {invitationData.tagline}
        </p>

        <div className="invitation-star">✦</div>
      </div>
    </section>
  );
}

export default SecretInvitation;

