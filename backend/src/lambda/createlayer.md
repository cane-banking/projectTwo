# Layers
In AWS Lambda, we can utilize layers as reusuable code modules. We are unable to `npm install` inside of a lambda, so we have to make sure all of our dependencies exist within the lambda. While the AWS SDK is pre-installed for us, node postgres (and thus our sql database access) is not.

## How to create a layer for node postgres

1. Create a folder named nodePostgres.
2. Create a folder inside there named nodejs
3. `npm init` accept all defaults
4. `npm install --save pg` 
5. Zip up the `nodejs` folder into a file called `nodejs.zip`
6. Upload your zip file as a layer in Lambda.
