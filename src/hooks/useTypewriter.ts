import { useState, useEffect } from 'react';

// This hook simulates an infinite looping typewriter for an array of text lines.
export const useTypewriter = (
  textLines: string[],
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseDuration = 2000
) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentLine = textLines[lineIndex];
      
      // If we are in the DELETING phase
      if (isDeleting) {
        if (displayedText.length > 0) {
          // Remove the last character
          setDisplayedText(currentLine.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to the next line and switch to TYPING phase
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % textLines.length);
        }
      } 
      // If we are in the TYPING phase
      else {
        if (displayedText.length < currentLine.length) {
          // Add the next character
          setDisplayedText(currentLine.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, pause for a moment, then switch to DELETING phase
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(handleTyping, speed);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, lineIndex, textLines, typingSpeed, deletingSpeed, pauseDuration]);

  // Return the text to display and the index of the current line for styling
  return { displayedText, lineIndex };
};