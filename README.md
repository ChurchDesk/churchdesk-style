# ChurchDesk-Style

A sane eslint configuration based on Airbnbs javascript eslint rules.

* Install:
```npm install git+ssh://git@github.com/ChurchDesk/churchdesk-style.git --save-dev```

* Copy `.eslintrc-example` to your repo.


* Add the following to your package.json:
```
"engines": {
    "node": ">=4.0.0 <5.0"
}, 
"scripts": {
  "lint": "eslint --quiet ."
}
```

## CircleCI
Add:
```
test:
  pre:
    - npm run lint
```
