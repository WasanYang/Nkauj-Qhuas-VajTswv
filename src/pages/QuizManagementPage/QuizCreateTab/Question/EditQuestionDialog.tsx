import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import WYSIWYGEditor from "../../../../components/WYSIWYGEditor/WYSIWYG";

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
}
const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

export const EditQuestionDialog: FC<ConfirmationDialogRawProps> = ({
  onClose,
  value: valueProp,
  open,
  ...other
}) => {
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "720px", maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Add question</DialogTitle>
      <DialogContent dividers>
        <Grid container>
          <Grid item xs={12}>
            <Typography>Question name</Typography>
            <TextField
              label=""
              variant="outlined"
              placeholder="Question name"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <WYSIWYGEditor
              style={{
                margin: "0px",
                marginTop: "10px",
              }}
              id="election-description-input"
              data-testid="election-description-input"
              name="election-description-input"
              // defaultValue={form.description}
              onChange={(e:any) => {}}
            />
          </Grid>
        </Grid>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};
