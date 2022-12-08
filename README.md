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
