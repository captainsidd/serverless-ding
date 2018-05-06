# serverless-ding
A serverless plugin that outputs a [bell character](https://en.wikipedia.org/wiki/Bell_character) to Terminal after `sls deploy`.

# Why
Because running `sls deploy` takes just long enough to go do something else and forget that you ran `sls deploy`. Figured a notification would be nice.

# Getting Started

## Prerequisites
Make sure you have the following installed before starting:
* [nodejs](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)
* [serverless](https://serverless.com/framework/docs/providers/aws/guide/installation/)


## Installing

### From npm (recommended)
```
npm install serverless-ding --save-dev
```

Then make the following edits to your serverless.yaml file:

Add the plugin.

```yaml
plugins:
  - serverless-ding
```
