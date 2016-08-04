sap.ui.controller("ui5assignment.Table", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5assignment.Table
*/
	onInit: function() {
		var oJSON = new sap.ui.model.json.JSONModel("model/Employees.json");
		this.getView().setModel(oJSON);
	},
	
	onAddEmployees: function(oEvent) {
		var oForm = this.byId('idEmployeeForm'), sType, sName, sEmployer, oModel = this.getView().getModel(), aExisting, aNewData = [], oEmployeeData = {};
		oEmployeeData.EmployeeType = oForm.getContent()[2].getValue();
		oEmployeeData.EmployeeName = oForm.getContent()[4].getValue();
		oEmployeeData.Employer = oForm.getContent()[6].getValue();
		
		aNewData.push(oEmployeeData);
		
		aExisting = oModel.getProperty("/employees");
		
		oModel.setProperty("/employees", aExisting.concat(aNewData));
	},
	
	onDeleteEmployees: function(oEvent) {
		var iRow = parseInt(oEvent.getSource().getBindingContext().getPath().substr(11)), oModel = this.getView().getModel(),
		aData = oModel.getData()["employees"];
		aData.splice(iRow, 1);
		
		oModel.setProperty("/employees", aData);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5assignment.Table
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5assignment.Table
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5assignment.Table
*/
//	onExit: function() {
//
//	}

});