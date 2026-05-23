# Resources

This Markdown document covers all resources currently in use,\
&emsp; those planned for future use in the creation and development of this react project,\
&emsp; and react projects I intend to make after finishing this tutorial.

## Current Resources

### Miguel Grinberg's React Mega-Tutorial

The repository follows [this tutorial](https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial) to make a fake blog website.

### JavaScript Resources

I'm still learning JavaScript,\
&emsp; so even though these resources aren't strictly necessary for me,\
&emsp; they are indeed helpful for improving my familiarity with the language going forward.

* the [JS overview](https://blog.miguelgrinberg.com/post/the-react-mega-tutorial-chapter-1-modern-javascript) from Miguel Grinberg's mega-tutorial

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
