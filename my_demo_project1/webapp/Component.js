/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/incture/mydemoproject1/model/models",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("com.incture.mydemoproject1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // creating a setting a json model globally
                var oModel = new JSONModel("model/data.json");
                this.setModel(oModel);

                // Another method to set a global model is : 
                /*
                In manifest.json, set the datasources are follows :

                "dataSources": {
                    "globalModel": {
                      "uri": "model/data.json",
                      "type": "JSON"
                    }
                }

                And add the datasource to the model as follows :
                "models": {
                    "oGlobalModel": {
                        "type": "sap.ui.model.json.JSONModel",
                        "dataSource": "globalModel"
                    }
                }

                After that we can use directly /someArrayName in data binding, or modelName>/property
                */

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);