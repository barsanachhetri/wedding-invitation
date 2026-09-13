import React, { useEffect, useState } from 'react';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 48, hrs: 11, mins: 41, secs: 30 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current.secs > 0) {
          return { ...current, secs: current.secs - 1 };
        }

        if (current.mins > 0) {
          return { ...current, mins: current.mins - 1, secs: 59 };
        }

        if (current.hrs > 0) {
          return { ...current, hrs: current.hrs - 1, mins: 59, secs: 59 };
        }

        if (current.days > 0) {
          return { ...current, days: current.days - 1, hrs: 23, mins: 59, secs: 59 };
        }

        return current;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section" aria-label="Countdown to wedding">
      <h2>Let the Countdown begins</h2>
      <div className="countdown-grid">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <small>Days</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.hrs}</span>
          <small>Hrs</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.mins}</span>
          <small>Mins</small>
        </div>
        <div className="time-box">
          <span>{timeLeft.secs}</span>
          <small>Secs</small>
        </div>
      </div>
    </section>
  );
}