import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
    

  return (
    <section id="contact">
      <div className="contact_class">
        <div class="contact-page-container">
          <div class="contact-items">
            <h1>Contact</h1>
            <div class='contact_form'>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div class="contact_inputs">
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
         <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue=""
        />
        <div>
          <TextField
          
          required
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
        />
        </div>

      </div>
      <div class='contact_button'>
      <Button variant="outlined">Submit</Button>
      </div>
    </Box>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
