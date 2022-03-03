import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FC, useState} from 'react';
import {ITodo} from '../store/todos/types';
import {useDispatch} from 'react-redux';
import {deleteTodo, patchTodo} from '../store/todos/actions';
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IBasicModalProps {
  type: string,
  todo: ITodo,
}

const BasicModal: FC<IBasicModalProps> = (props) => {
  const {type, todo} = props;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [completed, setCompleted] = useState<boolean>(todo.completed);
  const [userId, setUserId] = useState<number>(todo.userId);
  const [title, setTitle] = useState<string>(todo.title);

  const handleOk = (type: string) => {
    handleClose();
    switch (type) {
      case 'Delete': {
        return dispatch(deleteTodo(todo.id));
      }
      case 'Edit': {
        const newTodo = {
          userId,
          id: todo.id,
          title,
          completed
        }
        return dispatch(patchTodo(newTodo));
      }
      default: {
        return
      }
    }
  }

  return (
    <div>
      <Button
        variant='contained' color={type === 'Edit' ? 'success' : 'Delete' ? 'error' : 'primary'}
        onClick={handleOpen}
      >
        {type}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {type} todo {todo.id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {type === 'Edit'
              ?
              <FormGroup>
                <FormControl>
                  <Input
                    id="userId"
                    aria-describedby="my-helper-text"
                    required
                    defaultValue={userId}
                    value={userId}
                    onChange={(e) => setUserId(+e.currentTarget.value)}
                  />
                  <FormHelperText id="my-helper-text">Enter user id</FormHelperText>
                </FormControl>
                <FormControl sx={{mt:2}}>
                  <Input
                    id="title"
                    aria-describedby="my-helper-text"
                    required
                    defaultValue={title}
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                  />
                  <FormHelperText id="my-helper-text">Enter title</FormHelperText>
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={completed}
                      value={completed}
                      onChange={(e) => setCompleted(!!e.currentTarget.value)}
                    />
                  } label="completed" sx={{mt:2}} />
              </FormGroup>
              : 'Delete'
                ? 'Dou you want delete todo?'
                : null}
          </Typography>
          <Button
            variant='contained' color='success'
            onClick={() => handleOk(type)}
            sx={{mt: 3}}
          >
            OK
          </Button>
          <Button
            variant='contained' color='error'
            onClick={handleClose}
            sx={{mt: 3, ml: 2}}
          >
            CANCEL
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;