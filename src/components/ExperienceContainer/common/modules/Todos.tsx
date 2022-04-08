import React from 'react';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import Explain from '../Explain';
import { CommonArticleContainer, CommonArticleContainerTitle } from '../../styled';

interface TodoProps {
  text: string;
  checked: boolean;
}

const Todos = ({ todos }: { todos: TodoProps[] }) => {
  return (
    <CommonArticleContainer>
      <CommonArticleContainerTitle>
        <PlaylistAddCheckOutlinedIcon />
        유지보수내역
      </CommonArticleContainerTitle>
      {todos.map((todo, index) => (
        <Explain key={`${index + 1}-${todo.text}`}>{todo.text}</Explain>
      ))}
    </CommonArticleContainer>
  );
};

export default Todos;
