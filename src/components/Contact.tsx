import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Alert from "@mui/material/Alert";

import { useState } from "react";
const Contact = () => {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend or display a success message)
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setState((prev) => ({ ...prev, open: true }));
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        alignItems: "center",
        pb: 3,
      }}
    >
      <Box
        component="img"
        sx={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          zIndex: -1,

        }}
        alt="The house from the offer."
        src="/background_image_2400.jpg"
      />
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ maxWidth: 500 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              // onClick={() => setState((prev) => ({ ...prev, open: true }))}
              color="primary"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={state.open}
        onClose={() =>
          setState({
            ...state,
            open: false,
          })
        }
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={state.Transition}
        // message="I love snacks"
        key={state.Transition.name}
        autoHideDuration={1200}
      >
        <Alert
          // onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Form submitted successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
