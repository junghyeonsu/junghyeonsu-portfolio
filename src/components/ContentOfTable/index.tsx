import React, { useRef, useEffect, useState } from 'react';
import * as Styled from './styled';
import { useLayoutContext } from '#/contexts/LayoutContext';

interface NestedHeadingType {
  heading: string;
  text: string | null;
  id: string;
}

// TODO: any 없애기
// TODO: 코드 이해하기
const useIntersectionObserver = (setActiveId: any) => {
  const headingElementsRef = useRef<any>({});

  useEffect(() => {
    const callback = (headings: any) => {
      headingElementsRef.current = headings.reduce((map: any, headingElement: any) => {
        // eslint-disable-next-line no-param-reassign
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: any = [];
      Object.keys(headingElementsRef.current).forEach(key => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const getIndexFromId = (id: any) => headingElements.findIndex(heading => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort((a: any, b: any) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id));
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-110px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));
    headingElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const ContentOfTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentScrollTop, experienceOffsetTop }: any = useLayoutContext();
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeadingType[]>([]);
  const [activeId, setActiveId] = useState();
  const [visible, setVisible] = useState(false);

  useIntersectionObserver(setActiveId);

  useEffect(() => {
    if (currentScrollTop > experienceOffsetTop) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentScrollTop, experienceOffsetTop]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));
    const headingElementsTexts = headingElements.map(heading => {
      const { nodeName, childNodes, id } = heading;
      if (childNodes[0].nodeName === 'IMG') {
        // Open Source Section
        return { heading: nodeName, id, text: childNodes[1].textContent };
      }
      return { heading: nodeName, id, text: childNodes[0].textContent };
    });
    setNestedHeadings(headingElementsTexts);
  }, []);

  return (
    <Styled.Container visible={visible}>
      {nestedHeadings.map(heading => {
        return (
          <div key={heading.text}>
            {heading.id === activeId ? 'active' : ''}
            <a
              href={`#${heading.text}`}
              onClick={e => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {heading.text}
            </a>
          </div>
        );
      })}
    </Styled.Container>
  );
};

export default ContentOfTable;
