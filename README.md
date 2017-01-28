# ChurchDesk-Style

A sane default eslint config based on Airbnbs eslint rules.

* Install:
```npm install git+ssh://git@github.com/ChurchDesk/churchdesk-style.git --save-dev```

* Copy `.eslintrc-example` to your repo.


* Add the following to your package.json:
```
"engines": {
    "node": ">=4.0.0 <5.0"
}, 
"scripts": {
  "lint": "eslint --ignore-pattern=developers --quiet ."
}
```

## CircleCI
Add:
```
test:
  pre:
    - npm run lint
```