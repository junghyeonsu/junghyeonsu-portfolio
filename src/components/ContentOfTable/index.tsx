import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useLayoutContext } from '#/contexts/LayoutContext';

interface NestedHeadingType {
  heading: string;
  text: string | null;
  id: string;
}

const ContentOfTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentScrollTop, experienceOffsetTop }: any = useLayoutContext();
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeadingType[]>([]);
  const [visible, setVisible] = useState(false);

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
