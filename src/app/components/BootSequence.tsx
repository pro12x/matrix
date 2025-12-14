import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  const bootMessages = [
    'INITIALIZING SYSTEM...',
    'LOADING CORE MODULES...',
    'CHECKING MEMORY... OK',
    'MOUNTING FILE SYSTEMS... OK',
    'STARTING NETWORK SERVICES... OK',
    'LOADING NEURAL INTERFACE... OK',
    'ESTABLISHING SECURE CONNECTION... OK',
    'SYSTEM READY',
    '',
    'WELCOME TO THE MATRIX',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootMessages.length) {
        setLines(prev => [...prev, bootMessages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setComplete(true);
          setTimeout(onComplete, 500);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (complete) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="max-w-2xl w-full px-4">
        <div className="space-y-2 font-mono">
          {lines.map((line, idx) => (
            <div key={idx} className="text-matrix">
              <span className="blink-fast">&gt;</span> {line}
              {idx === lines.length - 1 && <span className="blink-fast ml-2">█</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}