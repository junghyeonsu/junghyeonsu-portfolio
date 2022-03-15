import React from 'react';
import styled from 'styled-components';

export const TodoListContainer = styled.article`
  background-color: #fff7d1;
  padding: 15px;
  border-radius: 7px;

  @media ${props => props.theme.desktop} {
    width: 75vw;
  }

  @media ${props => props.theme.tablet} {
    width: 90vw;
  }

  @media ${props => props.theme.mobile} {
    width: 80vw;
  }
`;

export const TodoListItem = styled.div``;

const TodoLists = ({ todos }: { todos: string[] }) => {
  return (
    <TodoListContainer>
      개선사항
      {todos.map((todo, index) => (
        <TodoListItem key={`${index + 1}-${todo}`}>{todo}</TodoListItem>
      ))}
    </TodoListContainer>
  );
};

export default TodoLists;
