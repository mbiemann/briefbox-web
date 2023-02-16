# Brief Box Web Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development

First steps:

```
$ nvm use 18.12.1
$ npm install
$ ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

To install CDK:

```
$ nvm use 18.12.1
$ npm install -g aws-cdk@2.63.0
```

To create Python Virtual Environment:

```
$ pyenv install 3.10.3
$ pyenv exec python -m venv .venv
$ .venv/bin/pip install -r requirements.txt
```

Useful commands:

 * `ng build -c development` build the project in the `dist/` directory
 * `cdk diff` compare deployed stack with current state
 * `cdk deploy` deploy this stack to your default AWS account/region
