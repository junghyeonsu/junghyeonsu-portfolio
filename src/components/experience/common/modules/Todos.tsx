import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CommonArticleContainer, CommonArticleContainerTitle } from '../../styled';

interface TodoProps {
  text: string;
  checked: boolean;
}

const TodoItem = styled.div``;

const TodoItemContaienr = styled.div`
  display: flex;
  align-items: center;
`;

const Todos = ({ todos }: { todos: TodoProps[] }) => {
  return (
    <CommonArticleContainer>
      <CommonArticleContainerTitle>
        <PlaylistAddCheckOutlinedIcon />
        개선할것들
      </CommonArticleContainerTitle>
      {todos.map((todo, index) => (
        <TodoItemContaienr key={`${index + 1}-${todo.text}`}>
          <Checkbox icon={<CheckCircleOutlineOutlinedIcon />} checkedIcon={<CheckCircleIcon />} checked={todo.checked} />
          <TodoItem>{todo.text}</TodoItem>
        </TodoItemContaienr>
      ))}
    </CommonArticleContainer>
  );
};

export default Todos;
