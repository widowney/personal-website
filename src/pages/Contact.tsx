import React from 'react';
import { Button , TextInput, Label, Textarea} from 'flowbite-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_5yz2feh';
const TEMPLATE_ID = 'template_1tov9xw'
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
        <form className="flex flex-col gap-4 h-1/2 mb-5 m-4 xl:mr-64 xl:ml-64" onSubmit={handleOnSubmit} id="Contact">
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
                id="UserName"
                name="user_name"
                required={true}
                shadow={true}
                />
            </div>
            <div id="textarea">
                <div className="mb-2 block">
                <Label
                    htmlFor="message"
                    value="Message"
                />
                </div>
                <Textarea
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