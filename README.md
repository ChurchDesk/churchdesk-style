# ChurchDesk-Style

A sane eslint configuration based on Airbnbs javascript eslint rules.

* Install:
```
npm install git+ssh://git@github.com/ChurchDesk/churchdesk-style.git --save-dev

# Yarn: Add dependencies:
 yarn add eslint --dev
 yarn add eslint-plugin-import --dev
 yarn add eslint-plugin-mocha --dev
 yarn add eslint-plugin-promise --dev
 yarn add eslint-plugin-node --dev

# Npm: Add dependencies:
 npm install eslint --save-dev
 npm install eslint-plugin-import --save-dev
 npm install eslint-plugin-mocha --save-dev
 npm install eslint-plugin-promise --save-dev
 npm install eslint-plugin-node --save-dev

```

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

## Eslint ignore
Copy `.eslintignore-example` to ignore certain folders 

