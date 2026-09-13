import React, { useEffect, useRef, useState } from 'react';

export default function BrideGroomSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`bride-groom-section ${isVisible ? 'is-visible' : ''}`}
      aria-label="Couple introduction"
    >
      <div className="couple-row relative">
        <img src="/aboutdesign_2.jpg" alt="" className="couple-floral-left bride-floral" />

        <div className="couple-copy">
          <h2>Alia Nair</h2>
          <p className="parents-line">D/o Mr. Suresh Nair &amp; Mrs. Lakshmi Nair</p>
          <p>
            A free spirit wrapped in grace, Alia moves through life with quiet confidence, an infectious laugh,
            and a kindness that makes everyone around her feel at home.
          </p>
        </div>

        <div className="portrait-frame">
          <img
            src="/1926afce-4860-4ce8-9225-53627cd253b6_image.jpg"
            alt="Bride Alia Nair"
          />
        </div>
      </div>

      <div className="couple-row reverse relative">
        <div className="portrait-frame">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
            alt="Groom Aryan Kapoor"
          />
        </div>

        <div className="couple-copy">
          <h2>Aryan Kapoor</h2>
          <p className="parents-line">S/o Mr. Rajesh Kapoor &amp; Mrs. Meena Kapoor</p>
          <p>
            A gentle soul with a poet&apos;s heart and an architect&apos;s mind, Aryan finds beauty in the details,
            whether in the curve of a building or the warmth of a quiet afternoon.
          </p>
        </div>

        <img src="/aboutdesign_2.jpg" alt="" className="couple-floral-right" />
      </div>
    </section>
  );
}