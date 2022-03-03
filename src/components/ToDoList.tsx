import React, {FC, useEffect} from 'react';
import useTypedSelector from '../store/selectors';
import {useDispatch} from 'react-redux';
import {fetchTodos} from '../store/todos/actions';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import BasicModal from './Modal';

const ToDoList: FC = () => {
  const {todos} = useTypedSelector(state => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchTodos());
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Completed</TableCell>
            <TableCell>User id</TableCell>
            <TableCell>Todo id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow
              key={todo.id}
            >
              <TableCell align='center'>{todo.completed ? <CheckIcon /> : <ClearIcon /> }</TableCell>
              <TableCell component="th" scope="row">
                {todo.userId}
              </TableCell>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>
                <BasicModal type='Edit' todo={todo} />
              </TableCell>
              <TableCell>
                <BasicModal type='Delete' todo={todo} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToDoList;