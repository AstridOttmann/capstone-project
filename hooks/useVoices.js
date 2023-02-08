import { useState, useEffect } from "react";

export default function useVoices() {
  const [availableVoices, setAvailableVoices] = useState([]);

  useEffect(() => {
    function handleVoicesChanged() {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);
    }
    speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, []);

  return availableVoices;
}
