sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/table/Table",
    "sap/ui/table/Column",
    "sap/ui/model/odata/v2/ODataModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Table, Column, ODataModel) {
        "use strict";

        return Controller.extend("javastable.controller.JavascriptTable", {
            onInit: function () {

            //1.Stanzio i campi della tabella
            var oData = [
                    { Nome: "Mattias", Anni: 25 },
                    { Nome: "Carlo", Anni: 29 },
                    { Nome: "Francesco", Anni: 22 },
                    { Nome: "Matteo", Anni: 23 },
                    { Nome: "Beatrice", Anni: 21 },
                    { Nome: "Manuela", Anni: 27 }
            ];
            
            //2.Creazione Tabella
            var oModel = new JSONModel();
            oModel.setData({
                tableData: oData
            });
            //2.Creazione Tabella
            var oTable = new Table({
            //3. N righe nella tabella
                visibleRowCount: 5
            });
            //4.Definizione colonne della tabella
            var oColumn1 = new Column({
                //Campo di dati per la colonna
                label: new sap.m.Label({ text: "Nome"}),
                template: new sap.m.Text({ text: "{Nome}"})
            });
            oTable.addColumn(oColumn1);

            var oColumn2 = new Column({
                //Campo dati per la colonna
                label: new sap.m.Label({ text: "Anni"}),
                template: new sap.m.Text({ text: "{Anni}"})
            });oTable.addColumn(oColumn2);
            //5.Impostazione del modello dati per la tabella
            oTable.setModel(oModel);
            oTable.bindRows("/tableData");

            //6.Aggiunta della tabella alla vista XML
            this.getView().byId("tableContainer").addItem(oTable)
            }
            // onShowHello: function(){
            //     var text="Hello";
            //     this.text.getView().byId("Text");
            //     return text+"GRAND SON ARE IN CITY, WIRHE";

            // }

        });
    });