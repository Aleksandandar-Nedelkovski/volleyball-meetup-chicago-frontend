# volleyball-meetup-chicago-frontend

### Mac/Linux Users
Install Node & NPM

```bash
brew install node 
```
or 
```
npm install -g npm
```

When the installation finishes, confirm that you successfully installed Node.js & NPM by checking its version

```bash
node -v
npm -v
```

## Getting Started With The App
1. install dependencies
```bash
npm i
```
2. When you first clone the repo, you will need to create and populate `.env` file in the root directory to make the applications work correctly.

Here are the variables you will need to run the application. Copy this

```
REACT_APP_API=<SECRET_KEY>
REACT_APP_GOOGLE_CLIENT_ID=<SECRET_KEY>
```

3. start the server
```bash
npm start
```

You should be able to Visit the Frontend by going to [http://localhost:3000/](http://localhost:3000/). If you see the Home Page, you have won!

- Note: React will automatically launch this page for you if you are using Chrome and you may get a message asking you to allow this!