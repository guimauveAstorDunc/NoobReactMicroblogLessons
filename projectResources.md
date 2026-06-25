# Resources

This Markdown document covers all resources currently in use,\
&emsp; and those planned for future use in the creation and development\
&emsp; of this react project, and react projects I intend to make after finishing this tutorial.

## Table of Contents
I. [Current Resources](#current-resources)\
&emsp; 1. [Miguel Grinberg's React Mega-Tutorial](#miguel-grinbergs-react-mega-tutorial)\
&emsp; 2. [JavaScript Resources](#javascript-resources)\
&emsp; 3. [Current UI Framework: Bootstrap](#current-ui-framework-bootstrap)\
II. [Future Resources](#future-resources)\
&emsp; 1. [Explanation/Guide to Using Promises in JavaScript](#explanationguide-to-using\-promises-in-javascript)\
&emsp; 2. [Migration away from Create-React-App (CRA)](#migration-away-from-create-react\-app-cra)\
&emsp; 3. [UI Libraries & Frameworks](#ui-libraries--frameworks)\
&emsp; 4. [Draggables](#draggables)

## Current Resources

### Miguel Grinberg's React Mega-Tutorial

The repository follows [this tutorial](https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial) to make a fake blog website.

### JavaScript Resources

I'm still learning JavaScript,\
&emsp; so even though these resources aren't strictly necessary for me,\
&emsp; they are indeed helpful for improving my familiarity with the language going forward.

* the [JS overview](https://blog.miguelgrinberg.com/post/the-react-mega-tutorial-chapter-1-modern-javascript) from Miguel Grinberg's mega-tutorial

### Current UI Framework: Bootstrap
[React-Bootstrap](https://react-bootstrap.github.io) is the primary UI library-of-choice in [Miguel Grinberg's mega-tutorial](https://blog.miguelgrinberg.com/post/the-react-mega-tutorial-chapter-3-working-with-components).\
Other react-compatible UI libraries are listed under the **Future Resources** Section

## Future Resources

### Explanation/Guide to Using Promises in JavaScript

I'm currently not knowledgable enough about how asynchronous operations work in web development.\
When this knowledge becomes relevant to this app's development (or that of a similar app),\
&emsp; [this MDN (Mozilla) page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) will help me understand those operations better.

### Migration away from Create-React-App (CRA)

The project, as it exists right now by May of 2026, was created using create-react-app (CRA) in accordance with the aforementioned [Miguel Grinberg mega-tutorial](https://blog.miguelgrinberg.com/post/the-react-mega-tutorial-chapter-2-hello-react).\
However, CRA has been deprecated since 2021,\
&emsp; so the current aim is to use one of the [full-stack frameworks](https://react.dev/learn/creating-a-react-app) listed on the react.dev website,\
&emsp; and potentially see how it would work either *migrate* the application to one of those frameworks, or how to simply create.

Something obvious but still important to note is that, because the project uses Node.js for backend, the framework must be Node.js-compatible.

The current top candidate for where to migrate the project to once the [mega-tutorial](https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial) is completed is [Next.js](https://nextjs.org/docs/app/getting-started/installation),\
&emsp; which uses Server-Side Rendering (SSR) to send ready-mad HTML from the backend to the user.\
If this is not preferable, and the client-side rendering default to is preferred, the runner-up option is [Vite](https://vite.dev/guide/).

### Email APIs

The project uses a gmail account for email verification, password recovery, and other related functionality that requires emails be sent to a user with an account on the website. I am currently of the understanding that, in production, the more common choices for websites to use are:
* [SendGrid](https://www.twilio.com/en-us/sendgrid), which the React mega-tutorial uses,
* [Postmark](https://postmarkapp.com/developer/api/email-api), as the one most commonly cited as "the best" online,
* [MailGun](https://www.mailgun.com/), which has similar reception online to SendGrid (generally positive from what I can tell),
* [Resend](https://resend.com/), as an alternative to Postmark as the API-of-choice for personal/smaller-scale websites,
* [Amazon Simple Email Services (SES)](https://docs.aws.amazon.com/ses/latest/dg/email-validation-api.html), as the "industrial" option.

### UI Libraries & Frameworks

* [Material UI (MUI)](https://mui.com/)
* [Ant Design](https://ant.design)

### Draggables

[React-Draggable](https://github.com/react-grid-layout/react-draggable#installation) is a library that I intend to use for future react applications.