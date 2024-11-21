'use client'
import React, { useState, useEffect } from 'react';

const ScrollSpy = ({ headings }) => {
  const [active, setActive] = useState(
    headings.length > 0 ? headings[0].id : ''
  );

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) =>
        document.getElementById(id)
      );
      const visibleHeadings = headingElements.filter((el) =>
        isElementInViewport(el)
      );
      if (visibleHeadings.length > 0) {
        setActive(visibleHeadings[0].id);
      }
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active heading
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const isElementInViewport = (el) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-base-200 rounded-lg shadow-lg max-h-[calc(100vh-6rem)]">
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 1) * 8}px` }}>
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-sm ${
                active === heading.id
                  ? 'text-primary font-bold'
                  : 'text-base-content'
              }`}
            >
              {heading.slug}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSpy;