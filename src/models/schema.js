export const schema = {
    "models": {
        "PlanTree": {
            "name": "PlanTree",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "tree": {
                    "name": "tree",
                    "isArray": false,
                    "type": {
                        "model": "PlanElement"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "planTreeTreeId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "PlanTrees",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "PlanElement": {
            "name": "PlanElement",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentID": {
                    "name": "parentID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "children": {
                    "name": "children",
                    "isArray": false,
                    "type": {
                        "model": "PlanElement"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "planElementChildrenId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "PlanElements",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "4c31a8649eadce7b546783323701f682"
};