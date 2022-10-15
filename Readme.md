# What is this?

Validate Your Email and Phone with additional infos.

# Installation

`npm i validate-utsav --save`

Then...

Go to `https://app.abstractapi.com/` site and register your self to get email and phone validation api keys.

Finally...

import ValidationProvider from 'validate-utsav';

let emailvalidate=new ValidationProvider(email validation api key)

emailvalidate.getEmailValidation(your email id)

                    AND

let phonevalidate=new ValidationProvider(phone validation api key)

phonelvalidate.getPhoneValidation(your phone number)
