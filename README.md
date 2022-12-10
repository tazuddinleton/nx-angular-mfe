# NX Angular MFE with Module federation

This [guide](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular) is followed to generate this application

# How to run
### To serve 
`nx serve <host name> --defRemotes=<remote names>`

### View project graph
`nx graph`

### Generate a dynamic host application
`nx g @nrwl/angular:host <host name> --remotes=<remote names> --dynamic`

### Generate a remote application
`nx g @nrwl/angular:remote <remote name> --host=<host name>`

### Generate a service
`nx g @nrwl/angular:service <name> --project=<project name>`

### Generate a library
`nx g @nrwl/angular:lib <name>`

### Add angular material to app
`nx g @angular/material:ng-add --project=<project name>`

But before running above open the `project.json` file and make the following changes
1. Under `targets > build > ` set the `executor` to `"executor": "@angular-devkit/build-angular:browser",`.
2. Under `targets > build > options` replace the `main.ts` with `bootstrap.ts`.

After adding angular material to the project revert the changes. For reference see [this](https://github.com/nrwl/nx/issues/7621)
