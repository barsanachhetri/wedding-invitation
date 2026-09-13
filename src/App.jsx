import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import BrideGroomSection from './components/BrideGroomSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

const sampleWishes = [
  {
    name: 'Rahul',
    message:
      'May your marriage be filled with endless love, shared dreams, warm laughter, and beautiful adventures. Wishing you both a wonderful life together, surrounded by happiness, peace, and love.'
  },
  {
    name: 'Aisha',
    message:
      'Here’s to a lifetime of togetherness, trust, and joy. May every chapter of your life be beautifully written together.'
  },
  {
    name: 'Karan',
    message:
      'Wishing you both a love story that grows stronger with every passing day and a home full of laughter, kindness, and gratitude.'
  }
];

const eventSchedule = [
  {
    day: 'Day 1',
    date: '30 October 2026',
    highlights: [
      { label: 'Haldi', time: '7:30 pm' },
      { label: 'Dinner', time: '9:00 pm' }
    ],
    location: 'Hall Complex',
    mapUrl: 'https://maps.google.com/?cid=3260281787863214776&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=apiv3'
  }
];

export default function App() {
  const [wishes, setWishes] = useState(sampleWishes);
  const [wishIndex, setWishIndex] = useState(0);
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const message = form.message.trim();

    if (!name || !message) return;

    setWishes((current) => [{ name, message }, ...current]);
    setForm({ name: '', message: '' });
    setWishIndex(0);
  };

  const activeWish = wishes[wishIndex % wishes.length];

  return (
    <div className="page-shell">
      <Header />

      <main className="site-main">
        <HeroSection />
        <CountdownSection />
        <BrideGroomSection />

        <section className="wishes-section-container" aria-labelledby="wishes-title">
          <h2 id="wishes-title">Wishes for the couple</h2>
          <div className="wish-card">
            <h3>{activeWish.name}</h3>
            <p>{activeWish.message}</p>
            <div className="wish-nav" aria-label="Wish navigation">
              <button
                type="button"
                onClick={() => setWishIndex((current) => (current - 1 + wishes.length) % wishes.length)}
                aria-label="Previous wish"
              >
                {'<'}
              </button>
              <span>
                {wishIndex + 1} of {wishes.length}
              </span>
              <button
                type="button"
                onClick={() => setWishIndex((current) => (current + 1) % wishes.length)}
                aria-label="Next wish"
              >
                {'>'}
              </button>
            </div>
          </div>
        </section>

        <section className="send-wishes-section" aria-labelledby="send-wishes-title">
          <h2 id="send-wishes-title">Send your Wishes</h2>
          <form className="wish-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Your Name"
              aria-label="Your Name"
            />

            <div className="wish-compose">
              <textarea
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Your Wishes"
                aria-label="Your Wishes"
                rows="4"
              />
              <button type="button" className="ai-button" aria-label="Generate AI wishes">
                <span className="sparkle">✦</span>
                Generate AI wishes
              </button>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>

        <section className="celebration-section" aria-labelledby="celebration-title">
          <h2 id="celebration-title">The wedding celebrations begins!</h2>
          <div className="celebration-grid">
            {eventSchedule.map((event) => (
              <article key={event.day} className="celebration-card">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80"
                  alt={event.day}
                />
                <div className="celebration-info">
                  <h3>{event.day}</h3>
                  <p className="date-text">{event.date}</p>
                  <div className="schedule-list">
                    {event.highlights.map((item) => (
                      <div key={item.label} className="schedule-item">
                        <span>{item.label}</span>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="address-line">{event.location}</p>
                  <a href={event.mapUrl} target="_blank" rel="noreferrer">
                    View in Map
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
