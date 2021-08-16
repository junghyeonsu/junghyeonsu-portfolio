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
  const [color, setColor] = useState<ColorProps>({
    card: '#Ffffff',
    background: '#dadada',
    text: '#3e7fff',
    point: '#000b7e',
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
