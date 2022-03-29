import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export function CreateTab() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const submit = async (form: any) => {
    console.log(form);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(submit)}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box>Name</Box>
            <Box>
              <input type="text" {...register("name")} />
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box>Lyrics</Box>
            <Box>
              {/* <Editor /> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <button type="submit">Save</button>
            <button type="reset">Clear</button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
}
