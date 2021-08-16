import React from 'react';
import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PublicIcon from '@material-ui/icons/Public';

import { BOLD_TEXT, LIGHT_TEXT } from '#/constants';
import { useContactCardContext } from '#/contexts/ContactCardContext';

interface Color {
  color: string;
}

const Back = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: Color) => props.color};
  color: white;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const CenterLine = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50% -50%);
  height: 50%;
  width: 0.5%;
  background-color: ${(props: Color) => props.color};
`;

const SNSList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 60%;
  row-gap: 1.5vw;
`;

const Name = styled.div`
  position: absolute;
  color: ${(props: Color) => props.color};
  font-size: 40px;
  font-family: ${BOLD_TEXT};
  letter-spacing: 5px;
  top: 50%;
  left: 27%;
  transform: translate(-50%, -50%);
`;

const School = styled.div`
  position: absolute;
  color: ${(props: Color) => props.color};
  font-size: 16px;
  font-family: ${LIGHT_TEXT};
  letter-spacing: 5px;
  top: 60%;
  left: 27%;
  transform: translate(-50%, -50%);
`;

const SNSItem = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  color: ${(props: Color) => props.color};
`;

const SNSText = styled.span`
  font-size: 12px;
  font-family: ${LIGHT_TEXT};
  :hover {
    color: ${(props: Color) => props.color};
    cursor: pointer;
  }
`;

const Point = styled.span`
  font-family: ${BOLD_TEXT};
  color: ${(props: Color) => props.color};
`;

const ContactCardBack = () => {
  const { color }: any = useContactCardContext(); // eslint-disable-line
  return (
    <Back color={color.card}>
      <Name color={color.text}>
        정현수<Point color={color.point}>.</Point>
      </Name>
      <School color={color.text}>
        Senior<Point color={color.point}>,</Point> CNU
        <Point color={color.point}>.</Point>
      </School>
      <SNSList>
        <SNSItem color={color.text}>
          <GitHubIcon />
          <SNSText color={color.point}>
            <a
              href="https://github.com/junghyeonsu"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </SNSText>
        </SNSItem>
        <SNSItem color={color.text}>
          <PublicIcon />
          <SNSText color={color.point}>
            <a
              href="https://junghyeonsu.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              Tistory blog
            </a>
          </SNSText>
        </SNSItem>
        <SNSItem color={color.text}>
          <PublicIcon />

          <SNSText color={color.point}>
            <a
              href="https://velog.io/@junghyeonsu"
              target="_blank"
              rel="noreferrer"
            >
              Velog
            </a>
          </SNSText>
        </SNSItem>
        <SNSItem color={color.text}>
          <MailOutlineIcon />

          <SNSText color={color.point}>jung660317@naver.com</SNSText>
        </SNSItem>
      </SNSList>
      <CenterLine color={color.point} />
    </Back>
  );
};

export default ContactCardBack;