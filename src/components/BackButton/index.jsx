import React from 'react';
import useGoBack from '../../hooks/useGoBack';

// Import styles
import '../../scss/main.scss';

const BackButton = () => {
  const goBack = useGoBack();

  return (
    <div>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default BackButton;
