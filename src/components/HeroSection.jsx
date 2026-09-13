import React from 'react';

export default function HeroSection() {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Hall+Complex';

  return (
    <section id="home" className="hero-section" aria-label="Wedding invitation hero">
      <div className="hero-garland-wrap">
        <img
          src="/7b0e75d5-7e29-4aab-9bf5-53d1be4600e3_herotopdecoration.svg"
          alt="Wedding garland"
          className="hero-garland"
        />
      </div>

      <div className="hero-content">
        <p className="invitation-line">Inviting you to the celebration of</p>

        <h1 className="hero-title">
          Alia Nair <span>weds</span> Aryan Kapoor
        </h1>

        <p className="event-meta">Oct 30 &amp; 31, 2026 | Hall Complex</p>

        <a className="map-button" href={mapUrl} target="_blank" rel="noreferrer">
          View in Map
        </a>
      </div>

      <div className="hero-visuals" aria-hidden="true">
        <div className="pot left-pot">
          <img
            src="https://cdn-admin.invitationnation.in/media/wed010/assets/pot.webp"
            alt="Flower vase"
            onError={(event) => {
              event.target.src = 'https://cdn-admin.invitationnation.in/media/wed010/assets/pot.png';
            }}
          />
        </div>

        <div className="mandap-scene">
          <div className="garland-side left-side" >
            <img
              src="/1dc97afe-a26e-4a90-82ad-d24a68a0c56d_herobottomdesign.svg"
              alt="Decorative garland"
            />
          </div>
          <div className="mandap-wrap">
            <img
              src="/6f720a34-59ca-4796-860a-260ff7a8f557_image.webp"
              alt="Mandap celebration"
            />
          </div>
          <div className="garland-side right-side">
            <img
              src="/1dc97afe-a26e-4a90-82ad-d24a68a0c56d_herobottomdesign.svg"
              alt="Decorative garland"
            />
          </div>
        </div>

        <div className="pot right-pot">
          <img
            src="https://cdn-admin.invitationnation.in/media/wed010/assets/pot.webp"
            alt="Flower vase"
            onError={(event) => {
              event.target.src = 'https://cdn-admin.invitationnation.in/media/wed010/assets/pot.png';
            }}
          />
        </div>
      </div>
    </section>
  );
}