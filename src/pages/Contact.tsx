import React from 'react';
import { Button , TextInput, Label} from 'flowbite-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_5yz2feh';
const TEMPLATE_ID = 'service_5yz2feh'
const USER_ID = '0KpAtZAxG_NkkT235';

const Contact = () => {

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: 'Success!',
            text: 'Email send succesfully',
            timer: 5000
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            title: 'Send failed :C',
            text: 'Oops, something went wrong(blame it on the server)',
            timer: 5000
          })
        });
      e.target.reset()
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="email2"
                    value="Your email"
                />
                </div>
                <TextInput
                id="email"
                type="email"
                name="user_email"
                placeholder="name@name.com"
                required={true}
                shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="name"
                    value="Name"
                />
                </div>
                <TextInput
                id="password"
                name="user_name"
                type="password"
                required={true}
                shadow={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                <Label
                    htmlFor="message"
                    value="Message"
                />
                </div>
                <TextInput
                id="message"
                name="user_message"
                required={true}
                shadow={true}
                />
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    );
}

export default Contact;