import React, { useState, useEffect } from "react";
interface Props {}
const FadeOnScroll: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const intersectingPoint = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver);
    if (intersectingPoint.current) {
      observer.observe(intersectingPoint.current);
    }
  }, []);

  if (visible) {
    return (
      <>
        <div ref={intersectingPoint} className="effect-fade effect-scroll">
          {props.children}
        </div>
      </>
    );
  }
  return (
    <>
      <div ref={intersectingPoint} className="effect-fade">
        {props.children}
      </div>
    </>
  );
};
export default FadeOnScroll;
