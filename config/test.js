const jsonFile = {
    "openapi": "3.0.2",
    "info": {
        "title": "CodeQuestAPI - OpenAPI 3.0",
        "description": "This project provides a REST API for accessing a collection of programming questions.\n It allows users to retrieve questions based on various categories, difficulty levels, and tags.\n The API supports search, filtering, and sorting features to help developers find the right questions for practice or assessment.\n All data is served in JSON format, ensuring easy integration with other applications or platforms.",
        "contact": {
            "email": "codequestapi@gmail.com"
        },
        "license": {
            "name": "Aquí va nuestra licencia",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "1.0.0"
    },
    "externalDocs": {
        "description": "Aquí va cualquier external doc (FIGMA)",
        "url": "http://swagger.io"
    },
    "servers": [
        {
            "url": "/api/v1"
        }
    ],
    "tags": [
        {
            "name": "question",
            "description": "Questions about programming",
        },

    ],
    "paths": {
        "/questions/random": {
            "get": {
                "tags": [
                    "question"
                ],
                "summary": "Get a random question",
                "description": "Add a description",
                "operationId": "random",
                "parameters": [
                    {
                        "name": "value",
                        "in": "query",
                        "description": "Value is the number of queried questions",
                        "required": false,
                        "explode": true,
                        "schema": {
                            "type": "string",
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Pet"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                },
                "security": [
                    {
                        "petstore_auth": [
                            "write:pets",
                            "read:pets"
                        ]
                    }
                ]
            }
        },
    },
    "components": {
        "schemas": {
            "Order": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 10
                    },
                    "petId": {
                        "type": "integer",
                        "format": "int64",
                        "example": 198772
                    },
                    "quantity": {
                        "type": "integer",
                        "format": "int32",
                        "example": 7
                    },
                    "shipDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "status": {
                        "type": "string",
                        "description": "Order Status",
                        "example": "approved",
                        "enum": [
                            "placed",
                            "approved",
                            "delivered"
                        ]
                    },
                    "complete": {
                        "type": "boolean"
                    }
                },
                "xml": {
                    "name": "order"
                }
            },
            "Customer": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 100000
                    },
                    "username": {
                        "type": "string",
                        "example": "fehguy"
                    },
                    "address": {
                        "type": "array",
                        "xml": {
                            "name": "addresses",
                            "wrapped": true
                        },
                        "items": {
                            "$ref": "#/components/schemas/Address"
                        }
                    }
                },
                "xml": {
                    "name": "customer"
                }
            },
            "Address": {
                "type": "object",
                "properties": {
                    "street": {
                        "type": "string",
                        "example": "437 Lytton"
                    },
                    "city": {
                        "type": "string",
                        "example": "Palo Alto"
                    },
                    "state": {
                        "type": "string",
                        "example": "CA"
                    },
                    "zip": {
                        "type": "string",
                        "example": "94301"
                    }
                },
                "xml": {
                    "name": "address"
                }
            },
            "Category": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    },
                    "name": {
                        "type": "string",
                        "example": "Dogs"
                    }
                },
                "xml": {
                    "name": "category"
                }
            },
            "User": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 10
                    },
                    "username": {
                        "type": "string",
                        "example": "theUser"
                    },
                    "firstName": {
                        "type": "string",
                        "example": "John"
                    },
                    "lastName": {
                        "type": "string",
                        "example": "James"
                    },
                    "email": {
                        "type": "string",
                        "example": "john@email.com"
                    },
                    "password": {
                        "type": "string",
                        "example": "12345"
                    },
                    "phone": {
                        "type": "string",
                        "example": "12345"
                    },
                    "userStatus": {
                        "type": "integer",
                        "description": "User Status",
                        "format": "int32",
                        "example": 1
                    }
                },
                "xml": {
                    "name": "user"
                }
            },
            "Tag": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "xml": {
                    "name": "tag"
                }
            },
            "Pet": {
                "required": [
                    "name",
                    "photoUrls"
                ],
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 10
                    },
                    "name": {
                        "type": "string",
                        "example": "doggie"
                    },
                    "category": {
                        "$ref": "#/components/schemas/Category"
                    },
                    "photoUrls": {
                        "type": "array",
                        "xml": {
                            "wrapped": true
                        },
                        "items": {
                            "type": "string",
                            "xml": {
                                "name": "photoUrl"
                            }
                        }
                    },
                    "tags": {
                        "type": "array",
                        "xml": {
                            "wrapped": true
                        },
                        "items": {
                            "$ref": "#/components/schemas/Tag"
                        }
                    },
                    "status": {
                        "type": "string",
                        "description": "pet status in the store",
                        "enum": [
                            "available",
                            "pending",
                            "sold"
                        ]
                    }
                },
                "xml": {
                    "name": "pet"
                }
            },
            "ApiResponse": {
                "type": "object",
                "properties": {
                    "code": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "type": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "xml": {
                    "name": "##default"
                }
            }
        },
        "requestBodies": {
            "Pet": {
                "description": "Pet object that needs to be added to the store",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Pet"
                        }
                    },
                    "application/xml": {
                        "schema": {
                            "$ref": "#/components/schemas/Pet"
                        }
                    }
                }
            },
            "UserArray": {
                "description": "List of user object",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                }
            }
        },
        "securitySchemes": {
            "petstore_auth": {
                "type": "oauth2",
                "flows": {
                    "implicit": {
                        "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
                        "scopes": {
                            "write:pets": "modify pets in your account",
                            "read:pets": "read your pets"
                        }
                    }
                }
            },
            "api_key": {
                "type": "apiKey",
                "name": "api_key",
                "in": "header"
            }
        }
    }
};


module.exports = jsonFile