import React, { useEffect } from 'react';

const CustomerCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursorMove'); // Use the correct selector here

    const handleMouseMove = (event) => {
      cursor.style.top = event.pageY + 'px';
      cursor.style.left = event.pageX + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className='cursorMove'></div>;
};

export default CustomerCursor;
