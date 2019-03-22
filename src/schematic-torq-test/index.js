"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");

//Adds the HTML and CSS files specified in your schematic to your project and makes them into a component
function schematicTorqTest(options) {
    return schematics_1.chain([
        schematics_2.buildComponent(Object.assign({}, options), {
            template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html',
            stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__styleext__',
        }),
        options.skipImport ? schematics_1.noop() : addFormModulesToModule(options)
    ]);
}
exports.schematicTorqTest = schematicTorqTest;
/**
 * Adds the required modules to the relative module.
 */
function addFormModulesToModule(options) {
    return (host) => {
        const modulePath = schematics_2.findModuleFromOptions(host, options);
        schematics_2.addModuleImportToModule(host, modulePath, 'MatButtonModule', '@angular/material');
        return host;
    };
}
