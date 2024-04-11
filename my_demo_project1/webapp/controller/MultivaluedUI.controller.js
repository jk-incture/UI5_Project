sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Sorter) {
        "use strict";
        return Controller.extend("com.incture.mydemoproject1.controller.MultivaluedUI", {
            onInit: function () {

            },

            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteDemoView");
            },

            onSelectRln: function (oEvent) {
                // change event has an oEvent associated with it, which contains all the data related to the value that we selected.
                // getParameter(selectedItem) gives the item that we selected.

                var relation = oEvent.getParameter("selectedItem").getText();
                console.log("From select - ", relation);
            },

            onSelectRelCB: function (oEvent) {
                var relation = oEvent.getParameter("selectedItem").getText();
                console.log("From ComboBox - ", relation);
            },

            onSelectLanguages: function (oEvent) {
                // The multicombo box can have multiple values, so we have selectedItems parameter, that stores all the values in an array, and then we need to run a loop for getting all the values.

                var arrayLanguages = oEvent.getParameter("selectedItems");
                for (var i = 0; i < arrayLanguages.length; i++) {
                    console.log(arrayLanguages[i].getText());
                }
            },

            onSelectGender(oEvent) {
                // In radio buttons, we can't get text, instead we can get index of the selected parameter.
                var index = oEvent.getParameter("selectedIndex");
                // console.log(index);
                if (index == 0) {
                    console.log("Male");
                }
                else if (index == 1) {
                    console.log("Female");
                }
                else {
                    console.log("Others");
                }
            },

            onSelectChBox: function (oEvent) {
                var isSelected = oEvent.getParameter("selected");
                if (isSelected) {
                    console.log("You are married");
                }
                else {
                    console.log("You are not married.");
                }
            },

            onSelectEmployee: function (oEvent) {
                // Printing the details in console based on the item selected.
                var empId = oEvent.getParameter("listItem").getBindingContext().getProperty("empid");
                var empName = oEvent.getParameter("listItem").getBindingContext().getProperty("empname");
                var empDesig = oEvent.getParameter("listItem").getBindingContext().getProperty("empdesig");
                var empSkill = oEvent.getParameter("listItem").getBindingContext().getProperty("empskill");
                var empEmail = oEvent.getParameter("listItem").getBindingContext().getProperty("empemail");
                var empLocation = oEvent.getParameter("listItem").getBindingContext().getProperty("emploc");
                
                console.log("Employee ID : ", empId, "\nEmployee Name : ", empName, "\nEmployee Designation : ", empDesig, "\nEmployee Skill : ", empSkill, "\nEmployee Email : ", empEmail, "\nEmployee Location : ", empLocation);

                // Sending the selected item index to ListPreview view to show the items on the UI.
                var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                console.log("Binding path : ", sPath);

                /* It will print the binding path of the selected item.
                    /aEmployees/0 -> Abhinay
                    /aEmployees/1 -> Lalit
                    /aEmployees/2 -> Gourav
                    ... and so on
                */

                /* Binding context is an object that points to the data of the selected item from the source, and not from the screen.

                For e.g in the aEmployees array, the binding context for abhinay is :
                {
                    "empid": 101,
                    "empname": "Abhinay",
                    "empdesig": "Manager",
                    "empskill": "ABAP",
                    "empemail": "abhinay@gmail.com",
                    "emploc": "Hyderabad"
                }

                The binding context for lalit is : 
                {
                    "empid": 102,
                    "empname": "Lalit",
                    "empdesig": "Team Lead",
                    "empskill": "Java",
                    "empemail": "lalit@gmail.com",
                    "emploc": "Vijaywada"
                }

                ... and so on.
                */

                var index = sPath.split("/")[2];   
                // It will split the binding context path by / and the second index will give the index of the path after the second slash; so that we can show that data of that particular list item.

                // We don't need to send the whole path as /aEmployees/1, /aEmployees/2 .. etc. The starting part is common for all, so we send only the index of the path, so show that particular part in the UI.

                // Router can carry one or two arguments with it while routing one page to another. So, here we give one argument, i.e, index of the bindingContext path, to the pass to the ListPreview view.

                this.getOwnerComponent().getRouter().navTo("RouteListPreview", {
                    Index: index
                });

                // Whenever we pass any argument with any route, we need to specify that pattern in the route section of that particular route in the manifest.json.

                // Here, we passing Index to the RouteListPreview route, so in the pattern property of this route, we should specify this pattern as : "listpreview/{Index}"
            },

            onSearchEmp: function(oEvent){
                // value -> the value that is entered by the user on every keystroke.
                var value = oEvent.getParameter("newValue");
                var aFilters = [];

                // If value is not null, then we apply filter.
                // The Filter object will take 3 arguments, 1st one in column name, here we want to filter the list based on employee name, so we give empname. 
                // The 2nd argument is the logic based on which list should be filtered. Here, we provided contains, i.e, if the name contatins those characters that are entered by user, those names will be filtered out. 
                // The 3rd argument is the value that is entered by the user.

                if(value !== ""){
                    var oFilter = new Filter("empname", FilterOperator.Contains, value);
                    aFilters.push(oFilter);
                }

                // We take the list and getBinding gives all the items of the list, and then we apply filter. The filter functions only takes an array, so we pushed all our oFilter values into the array.
                this.getView().byId("idListEmp").getBinding("items").filter(aFilters);
            },

            sortAsc: function(){
                // The sorter object (oSorter) takes 2 arguments.
                // First one is the column name on which you want to sort.
                // Second one is the order. false for ascending, and true for descending.
                // After that, apply the sort function to the list of items as previous one.

                var oSorter = new Sorter("empname", false);
                this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
            },

            sortDesc: function(){
                var oSorter = new Sorter("empname", true);
                this.getView().byId("idListEmp").getBinding("items").sort(oSorter);
            }, 

            // The filter and sorting functionalities of list and table are exactly same.
            onSearchEmpTable: function(oEvent){
                var value = oEvent.getParameter("newValue");
                var aFilters = [];

                if(value !== ""){
                    var oFilter = new Filter("empname", FilterOperator.Contains, value);
                    aFilters.push(oFilter);
                }

                this.getView().byId("idTableEmp").getBinding("items").filter(aFilters);
            },

            sortAscTable: function(){
                var oSorter = new Sorter("empname", false);
                this.getView().byId("idTableEmp").getBinding("items").sort(oSorter);
            },

            sortDescTable: function(){
                var oSorter = new Sorter("empname", true);
                this.getView().byId("idTableEmp").getBinding("items").sort(oSorter);
            }
        });
    });