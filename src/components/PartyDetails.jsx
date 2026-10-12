import invitationData from "../data/InvitationData";


function PartyDetails() {
return ( <section className="night-secrets" id="details"> <div className="secrets-heading"> <span className="secrets-eyebrow">
✦ AN INVITATION AFTER DARK ✦ </span>


    <h2>The Night's Secrets</h2>

    <p>
      As the moon rises, an unforgettable night awaits.
      Discover the details of our mysterious gathering.
    </p>
  </div>

  <div className="secrets-cards">
    <article className="secret-detail-card">
      <span className="secret-symbol">☾</span>
      <span className="secret-number">01</span>

      <h3>The Date</h3>

      <p className="secret-value">
        {invitationData.date}
      </p>

      <span className="secret-line"></span>

      <p className="secret-caption">
        A night to remember
      </p>
    </article>

    <article className="secret-detail-card">
      <span className="secret-symbol">⌛</span>
      <span className="secret-number">02</span>

      <h3>The Hour</h3>

      <p className="secret-value">
        {invitationData.time}
      </p>

      <span className="secret-line"></span>

      <p className="secret-caption">
        When darkness comes alive
      </p>
    </article>

    <article className="secret-detail-card">
      <span className="secret-symbol">♧</span>
      <span className="secret-number">03</span>

      <h3>The Location</h3>

      <p className="secret-value">
        {invitationData.location}
      </p>

      <span className="secret-line"></span>

      <p className="secret-caption">
        Follow the whispers of the night
      </p>
    </article>
  </div>

  <div className="dress-code">
    <span className="dress-code-icon">✧</span>

    <p className="dress-code-label">THE DRESS CODE</p>

    <h3>DARK ELEGANCE</h3>

    <p>
      Dress in your finest black, burgundy, and midnight shades.
    </p>
  </div>
</section>


);
}

export default PartyDetails;
