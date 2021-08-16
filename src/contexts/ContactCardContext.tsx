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
    card: '#fff020',
    background: '#fff020',
    text: '#fff020',
    point: '#fff020',
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
