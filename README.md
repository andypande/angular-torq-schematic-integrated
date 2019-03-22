# SchematicTorqTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to Setup a Project with Schematics Integrated

1. Create a project with the schematics Cli - a great resource for this simple setup can be found on the angular blog at https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2. Example repository of just creating a project with schematics cli can be found at https://github.com/andypande/angular-torq-schematic

2. After creating the schematic project, you must run 'npm run build' inside the schmatics project to make sure your schematics typescript is compiled into javascript correctly

3. Create a project with any name using angular-cli 'ng new (project-name)' 

4. Once new project created, copy over the subfolder under the src folder in your schematic project where you actually created your schematic code into the src folder of the newly created cli project

5. Once copied over, you should be able to come to the root of your cli project and run the following command 'tsc p tsconfig.json' - this will tell you if you copied over your schematic project over properly or not. 

6. Few other small changes are required to ensure your schematic works in the newly created Angular CLI project 
    -Copy over the collection.json file from your schematics project and place it at the src/ folder of new project
    -In your package.json at the root of your new project, you will need to add the following as dev depenencies: 
        "@angular-devkit/core": "^7.3.6",
        "@angular-devkit/schematics": "^7.3.6",
        "@angular/cdk": "^7.3.5",
        "@schematics/angular": "^7.3.6"
    -Also in your package.json, add the configuration line "schematics": "./src/collection.json"
    -There tends to be some trouble with typescript dependencies when building your schematic in the new angular CLI project, to overcome this - open your tsconfig.json file and add this configuration option: "skipLibCheck": true

7. Now that you have copied over all required dependencies, try the 'tsc p tsconfig.json' command again and make sure no errors pop up

8. Finally, run the schematic you had copied over in the root of your new Angular CLI project, using the command : schematics .:(schematic-name from collection.json) --name=(newComponentName) 
    -If you want to run the schematic and have it actually update the file system, you should add the following option to your command line as well schematics --dry-run=false 
