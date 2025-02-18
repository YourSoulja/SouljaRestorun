import { useEffect, useRef } from 'react';
import './Sap.css'

function Sap() {
  const text2Ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text2Ref.current) {
        text2Ref.current.classList.add('slide-in');
      }
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container">
        <span className="text1">Welcome to the "Chaihana"</span>
        <span className="text2" ref={text2Ref}>this is the Souja restaurant.</span>
      </div>
    </>
  );
}

export default Sap;
