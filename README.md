

Install:
```npm install git+ssh://git@github.com/ChurchDesk/churchdesk-style.git --save-dev```


Copy `.eslintrc-example` to your repo.


Add the following to package.json:
```
"scripts": {
  "lint": "eslint --ignore-pattern=developers --quiet ."
}
```

# CircleCI
Add:
```
test:
  pre:
    - npm run lint
```