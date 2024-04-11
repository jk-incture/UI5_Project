sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.SplitContainer", {
            onInit: function () {

            },

            onListItemPress(oEvent) {
                var routePath = oEvent.getParameter("listItem").getCustomData()[0].getValue();
                this.byId("MySplitContainer").toDetail(this.createId(routePath));
            },

            onOpenLogout() {
                this.pDialog ??= this.loadFragment({
                    name: "com.incture.mydemoproject1.fragment.Logout"
                });

                this.pDialog.then((oDialog) => oDialog.open());
            },

            onLogout() {
                this.pDialog.then((oDialog) => oDialog.close());
                this.getOwnerComponent().getRouter().navTo("RouteLogin");
            }
        });
    });
