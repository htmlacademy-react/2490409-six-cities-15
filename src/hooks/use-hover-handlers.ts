import { useState } from 'react';
import { Nullable } from 'vitest';

function useHoverHandlers(): [Nullable<string>, (id?: string) => void, () => void] {
  const [ hoveredCardId, setHoveredCardId] = useState<Nullable<string>>(null);

  const handleHoverOnCard = (id?: string) => {
    setHoveredCardId(id);
  };

  const handleCardLeave = () => {
    setHoveredCardId(null);
  };

  return [hoveredCardId, handleHoverOnCard, handleCardLeave];
}

export default useHoverHandlers;
