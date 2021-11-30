import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { send } from "emailjs-com";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/system";

const Contact = () => {
  const [successResponse, setSuccessResponse] = useState();
  const [responseMessage, setResponseMessage] = useState("");
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [nameErrorStatus, setNameErrorStatus] = useState(false);
  const [messageErrorStatus, setMessageErrorStatus] = useState(false);

  let theme = createTheme({
    palette: {
      primary: {
        main: '#0D21A1',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });
  
  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main,
      },
    },
  });

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Phil",
    message: "",
    reply_to: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      emailErrorStatus === false &&
      nameErrorStatus === false &&
      messageErrorStatus === false
    ) {
      send(
        //service_ID
        "service_6bn2w3v",
        //template_ID
        "template_tohs74z",
        toSend,
        //user_id
        "user_774HKCBA6tEPAX5QvuQL2"
      )
        .then((response) => {
          setSuccessResponse(true);
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          setSuccessResponse(false);
          console.log("FAILED...", err);
        });
    } else if (
      emailErrorStatus === false ||
      nameErrorStatus === false ||
      messageErrorStatus === false
    )
      setResponseMessage(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Sorry, there was a problem with your message, please check input
            fields.
          </Alert>
        </Stack>
      );
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
    setResponseMessage(null);
    setNameErrorStatus(!toSend.from_name.length > 0);
    setEmailErrorStatus(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(toSend.reply_to));
    setMessageErrorStatus(!toSend.message.length > 0);
  };

  useEffect(() => {
    if (successResponse === true) {
      setResponseMessage(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">Thank you for your message</Alert>
        </Stack>
      );
    } else if (successResponse === false) {
      setResponseMessage(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Sorry, there was a problem with your message, please try again.
          </Alert>
        </Stack>
      );
    }
  }, [successResponse]);

  return (
    <ThemeProvider theme={theme}>
    <section id="contact">
      <div className="contact_class">
        <div class="contact-page-container">
          <div class="contact-items">
            <h1>Contact</h1>
            <div class="contact_form">
              {/* <form onSubmit={handleSubmit}> */}
              
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div class="contact_inputs">
                  <TextField
                    required
                    error={nameErrorStatus}
                    id="name"
                    label="name"
                    defaultValue=""
                    name="from_name"
                    variant="filled"
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    error={emailErrorStatus}
                    id="email"
                    label="email"
                    defaultValue=""
                    name="reply_to"
                    // helperText="Not a valid email"
                    variant="filled"
                    onChange={handleChange}
                  />
                  <div>
                    <TextField
                      required
                      error={messageErrorStatus}
                      id="message"
                      label="Message"
                      multiline
                      rows={4}
                      defaultValue=""
                      name="message"
                      variant="filled"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="contact_button">
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </div>
              </Box>
              {/* </form> */}
              {responseMessage}
            </div>
          </div>
          <div class='contact-page-side-column'></div>
        </div>
      </div>
    </section>
    </ThemeProvider>
  );
};

export default Contact;
