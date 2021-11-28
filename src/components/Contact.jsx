import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  {useRef, useState} from 'react'
import { send } from 'emailjs-com';


const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Phil',
    message: '',
    reply_to: '',
  })
  const onSubmit = (event) => {
    event.preventDefault();
    send(
      //service_ID
      'service_6bn2w3v',
      //template_ID
      'template_tohs74z',
      toSend,
      //user_id
      'user_774HKCBA6tEPAX5QvuQL2'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

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
          id="name"
          label="Name"
          defaultValue=""
          name='from_name'
          onChange={handleChange}
        />
         <TextField
          required
          id="email"
          label="email"
          defaultValue=""
          name='reply_to'
          onChange={handleChange}
          
        />
        <div>
          <TextField
          
          required
          id="message"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          name='message'
          onChange={handleChange}
          
        />
        </div>

      </div>
      <div class='contact_button'>
      <Button variant="outlined" onClick={onSubmit}>Submit</Button>
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
