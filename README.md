# React Hook Form V.7 | Pre-made Tools
- Version 1.0.0
- by Supratouch Suwtano
- Working demo [Here](https://gus-flexible-form-dev.netlify.app/)
<br>

***

#### **Dependencies**
- React
- React DOM
- React Hook Form V.7.X.X

<br>

## Contains 14 pre-made input React components


**Single field input form**

- Date
- Email
- Number
- Number with the value of String
- Password
- Submit
- Telephone Number
- Text
- Text with only alphabetical characters\
and Time

which only needs to take {r} as props, r is the output of invoking register function

> r = register( 'key_name', { ...extra_options } )

<br>

**Array of choice object**

- Checkboxes
- Datalist
- Radioboxes
- Select

which takes {r, givenOptions} as props, r is the output of invoking register function \
and givenOptions as array of choice object

<br>

> givenOptions = [choice, choice, choice, choice . . . ]

> choice = { display : 'display name' , value : choice_value }

<br>

*All of Custom Components takes essential props as written ealier except for Datalist which takes givenOptions as array of strings, the strings are used as both displays and values.*

<br>

**Error reports**
- Error

Takes children as optional prop. Error component displays error message, if children prop is passed the placeholder error message will be overwritten.
