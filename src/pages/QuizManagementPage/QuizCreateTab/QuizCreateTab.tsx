import {
  Box,
  Button,
  Checkbox,
  Fade,
  Grid,
  IconButton,
  TextareaAutosize,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { EditQuestionDialog } from "./Question/EditQuestionDialog";
export default function QuizCreateTab() {
  const { handleSubmit } = useForm();
  const [answerList, setAnswerList] = useState([
    { answer: "answer1", id: "answer-1", isAnswer: false },
  ]);
  // const addAnswer = () => {
  //   console.log("addAnswer");

  //   const ansObj = {
  //     answer: "",
  //     id: `answer-${answerList.length + 1}`,
  //     isAnswer: false,
  //   };
  //   setAnswerList([...answerList, ansObj]);
  // };
  const onSubmit = () => {
    console.log(answerList);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Dione");

  const addAnswer = () => {
    setOpen(true);
  };

  const handleClose = (newValue?: string) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };
  return (
    <Fragment>
      <Grid container item xs={12}>
        Quiz name
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          {/* <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom component="div">
              Question
            </Typography>
          </Grid> */}
          <Grid item xs={12}>
            <TextField id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom component="div">
              Description
            </Typography>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 500 }}
              cols={5}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom component="div">
              Add answer
            </Typography>
            <Box>
              <AddIcon style={{ cursor: "pointer" }} onClick={addAnswer} />
            </Box>
          </Grid>
          {answerList.map((item, index) => {
            return (
              <Grid item xs={12}>
                <TextField
                  id={item.id}
                  label=""
                  variant="outlined"
                  defaultValue={item.answer}
                />
                <Tooltip
                  title="Delete"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 3000 }}
                >
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Currect answer"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 3000 }}
                >
                  <IconButton>
                    <Checkbox
                      defaultChecked={item.isAnswer}
                      value={item.isAnswer}
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Create
            </Button>
            <Button variant="contained" type="reset">
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
      <EditQuestionDialog
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
    </Fragment>
  );
}
