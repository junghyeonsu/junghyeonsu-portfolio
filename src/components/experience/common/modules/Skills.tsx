import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { CommonArticleContainer, CommonArticleContainerTitle } from '../../styled';

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <CommonArticleContainer>
      <CommonArticleContainerTitle>
        <BorderColorOutlinedIcon />
        사용기술들
      </CommonArticleContainerTitle>
      {skills.map((skill, index) => (
        <Accordion key={`${index + 1}-${skill}`}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="content" id="header">
            <Typography>{skill}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{skill}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </CommonArticleContainer>
  );
};

export default Skills;
