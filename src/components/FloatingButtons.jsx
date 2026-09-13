import React, { useRef, useState } from 'react';
import { Music, Phone } from 'lucide-react';

export default function FloatingButtons() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    const nextMutedState = !isMuted;
    audioRef.current.muted = nextMutedState;

    if (nextMutedState) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
      return;
    }

    try {
      audioRef.current.volume = 0.7;
      await audioRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    } catch (error) {
      console.error('Audio play error', error);
      setIsPlaying(false);
      setIsMuted(true);
    }
  };

  return (
    <div className="floating-actions">
      <audio
        ref={audioRef}
        src="https://cdn-admin.invitationnation.in/categories/69ccd87e626e9478f9090410/music/d87546a2-31ca-4729-95ee-178750962bd7_Wedding.mp3"
        loop
        muted={isMuted}
      />

      <button type="button" className="action-button" onClick={() => window.location.href = 'tel:+919876543210'} aria-label="Call us">
        <Phone size={20} />
      </button>

      <button
        type="button"
        className={`action-button ${isMuted ? 'muted-button' : ''}`}
        onClick={toggleAudio}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        title={isMuted ? 'Unmute music' : 'Mute music'}
      >
        <Music size={20} className={isPlaying && !isMuted ? 'music-on' : ''} />
      </button>
    </div>
  );
}