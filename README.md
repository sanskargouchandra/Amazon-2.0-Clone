# Amazon-Clone

<img style="text-align:center" src="https://cdn.dribbble.com/users/4140926/screenshots/15574944/media/1cfd887c86c0aa5d5ca4c0198e670ae3.gif" width="600" height="400"  alt="logo"/>

#

### About the Project

A web app which is fully responsive that tries to imitate the desktop version of Amazon website, in this you can add, remove an item to cart,
It has payment integration and also it has user authentication feature thanks to Firebase.
We basically use (ReactJS, Webhooks, complete Stripe Payments Checkout, Cloud Firestore database, NextAuth, Redux, Google Authentication, Add to Basket Functionality, Tailwind CSS)
### Features

- Add and remove products from the basket
- User authentication
- Stripe checkout
- Data persistency with Firebase
- Firebase Cloud Functions
- Users purchase history with Cloud Firestore
- Responsive Design
- Store orders for logged in user
- Use Webhooks as they have a message or payload, and are sent to a unique URL
- Use Tailwind CSS which rapidly build modern websites without ever leaving your HTML.
- Use Next.js with all the features you need for production: hybrid static & server rendering.
- Use fakeStoreApi which is a free online REST API that you can use whenever you need Pseudo-real data for your e-commerce
  or shopping website without running any server-side code.

#

#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

### Installation Steps

You need to install the dependencies:

```
npm install
```

### Available Scripts

In the project directory, you can run:

```
npm run dev
```

### To start the webhook

You need to install the [Stripe-CLI](https://github.com/stripe/stripe-cli/releases/latest) :

```
stripe login
```

After login and enter in the browser then run this command in the terminal

```
stripe listen --forward-to localhost:3000/api/webhook
```


### If you want to install dependences individually: 


Installing Npm:
```
npm install
```

Installing Yarn:
```
npm install --global yarn
```

Installing react-dom:
```
yarn add next react react-dom
```

Installation of Redux:
```
yarn add @reduxjs/toolkit
yarn add react-redux
```

Installation of TailWindCSS:
```
npm install -D tailwindcss
npx tailwindcss init
```

Installation of Next:
```
yarn global add next
```

Instalation of Heroicons
```
npm install @heroicons/react
yarn add @heroicons/react
```

Instalation of carousel:
```
yarn add react-responsive-carousel
```

Installaion of react currency format:
```
yarn add react-currency-formatter
```

Installation of next auth:
```
yarn add next-auth
```

Installaion of Firebase:
```
yarn add firebase
```

Installation of Stripe:
```
yarn add stripe
yarn add @stripe/stripe-js
```

Installation of axios:
```
yarn add axios
```
