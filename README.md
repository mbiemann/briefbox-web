# Brief Box Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

### Prerequeriments

* Node version v18.14.2 (use nvm to handle many versions)
* Python version 3.10.3 (use pyenv to handle many versions)

### First steps

```
$ nvm install v18.14.2
$ nvm use v18.14.2
$ npm install
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### To create Python Virtual Environment

```
$ pyenv install -s 3.10.3
$ pyenv local 3.10.3
$ pyenv exec python -m venv .venv
$ .venv/bin/pip install -r requirements.txt
```

### Useful commands

 * `npm run build` build the project in the `build/` directory
 * `node_modules/aws-cdk/bin/cdk diff` compare deployed stack with current state
 * `node_modules/aws-cdk/bin/cdk deploy` deploy this stack to your default AWS account/region
