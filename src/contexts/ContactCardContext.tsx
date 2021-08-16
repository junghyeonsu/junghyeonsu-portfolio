import React, {
  useContext,
  createContext,
  useState,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';

export interface ColorProps {
  card: string;
  background: string;
  text: string;
  point: string;
}

const ContactCardContext = createContext<Record<string, unknown>>({});

const ContactCardProvider = ({
  children,
}: {
  children?: ReactChild | ReactChildren | ReactChildren[] | ReactChild[];
}): ReactElement => {
  '#fff020';

  const [color, setColor] = useState<ColorProps>({
    card: '#2d282a',
    background: '#ffc6c6',
    text: '#ffffff',
    point: '#ff3a4a',
  });

  return (
    <ContactCardContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ContactCardContext.Provider>
  );
};

export const useContactCardContext = () => useContext(ContactCardContext);

export default ContactCardProvider;
