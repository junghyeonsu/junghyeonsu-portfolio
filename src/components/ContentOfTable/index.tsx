/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from '@material-ui/core';
import * as Styled from './styled';
import { useLayoutContext } from '#/contexts/LayoutContext';

interface NestedHeadingType {
  nodeName: string;
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
      const getIndexFromId = (id: string) => headingElements.findIndex(heading => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort((a: any, b: any) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id));
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -100px 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));
    headingElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const ContentOfTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentScrollTop, experienceOffsetTop }: any = useLayoutContext();
  const isOver1600px = useMediaQuery('(min-width:1600px)');
  const isUnder1200px = useMediaQuery('(max-width:1200px)');
  const isOver600px = useMediaQuery('(min-width:600px)');
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
        return { nodeName, id, text: childNodes[1].textContent };
      }
      return { nodeName, id, text: childNodes[0].textContent };
    });
    setNestedHeadings(headingElementsTexts);
  }, []);

  const onClickAnchor = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return isOver600px ? (
    <Styled.Container isOver1600px={isOver1600px} visible={visible}>
      {nestedHeadings.map(heading => {
        const { nodeName, text, id } = heading;
        const active = id === activeId;

        switch (nodeName) {
          case 'H1':
            return (
              <Styled.AnchorContainer key={text}>
                <Styled.H1 active={active}>{isUnder1200px ? text?.split('')[0] : text}</Styled.H1>
              </Styled.AnchorContainer>
            );
          case 'H2':
            return (
              <Styled.AnchorContainer key={text}>
                <Styled.H2Circle active={active} />
                {isOver1600px && (
                  <Styled.Anchor href={`#${text}`} onClick={e => onClickAnchor(e, id)}>
                    <Styled.H2 active={active}>{text}</Styled.H2>
                  </Styled.Anchor>
                )}
              </Styled.AnchorContainer>
            );
          case 'H3':
            return (
              <Styled.AnchorContainer key={text}>
                <Styled.H3Circle isOver1600px={isOver1600px} active={active} />
                {isOver1600px && (
                  <Styled.Anchor href={`#${text}`} onClick={e => onClickAnchor(e, id)}>
                    <Styled.H3 active={active}>{text}</Styled.H3>
                  </Styled.Anchor>
                )}
              </Styled.AnchorContainer>
            );
          default:
            return '';
        }
      })}
    </Styled.Container>
  ) : (
    <></>
  );
};

export default ContentOfTable;
