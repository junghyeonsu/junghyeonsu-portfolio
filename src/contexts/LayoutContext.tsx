import React, {
  useContext,
  createContext,
  useState,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';

const LayoutContext = createContext<Record<string, unknown>>({});

const LayoutProvider = ({
  children,
}: {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}): ReactElement => {
  const [introductionOffsetTop, setIntroductionOffsetTop] = useState(0); // 1
  const [skillOffsetTop, setSkillOffsetTop] = useState(0); // 2
  const [experienceOffsetTop, setExperienceOffsetTop] = useState(0); // 3
  const [contactOffsetTop, setContactOffsetTop] = useState(0); // 4

  return (
    <LayoutContext.Provider
      value={{
        introductionOffsetTop,
        skillOffsetTop,
        experienceOffsetTop,
        contactOffsetTop,
        setIntroductionOffsetTop,
        setSkillOffsetTop,
        setExperienceOffsetTop,
        setContactOffsetTop,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutProvider;
