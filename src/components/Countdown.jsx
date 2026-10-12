import { useEffect, useState } from "react";
import invitationData from "../data/InvitationData";

function Countdown() {
const getTimeLeft = () => {
const targetDate = new Date(
invitationData.countdownDate || "2026-10-31T20:00:00"
).getTime();


const difference = targetDate - Date.now();

if (difference <= 0) {
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
}

return {
  days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  minutes: Math.floor((difference / (1000 * 60)) % 60),
  seconds: Math.floor((difference / 1000) % 60),
};


};

const [timeLeft, setTimeLeft] = useState(getTimeLeft);

useEffect(() => {
const timer = window.setInterval(() => {
setTimeLeft(getTimeLeft());
}, 1000);


return () => {
  window.clearInterval(timer);
};


}, []);

return ( <section className="haunted-countdown" id="countdown"> <span className="countdown-eyebrow">
✦ THE HOURS GROW NEAR ✦ </span>


  <h2>Until the Witching Hour</h2>

  <p className="countdown-description">
    The moon is rising. The manor is waiting.
    The night of mysteries draws closer.
  </p>

  <div className="countdown-grid">
    {[
      { label: "DAYS", value: timeLeft.days },
      { label: "HOURS", value: timeLeft.hours },
      { label: "MINUTES", value: timeLeft.minutes },
      { label: "SECONDS", value: timeLeft.seconds },
    ].map((item) => (
      <div className="countdown-unit" key={item.label}>
        <span className="countdown-number">
          {String(item.value).padStart(2, "0")}
        </span>

        <span className="countdown-label">
          {item.label}
        </span>
      </div>
    ))}
  </div>

  <div className="countdown-divider">✧ ☾ ✧</div>

  <p className="countdown-footer">
    One night. Endless mysteries.
  </p>
</section>


);
}

export default Countdown ;
