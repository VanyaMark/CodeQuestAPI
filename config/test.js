const jsonFile = {
    "openapi": "3.0.2",
    "info": {
        "title": "CodeQuestAPI",
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
    // "tags": [
    //     {
    //         "name": "question",
    //         "description": "Questions about programming",
    //     },

    // ],
    "paths": {
        "/questions/random": {
            "get": {
                "tags": [
                    "question"
                ],
                "summary": "Get a random question",
                "description": "",
                "operationId": "random",
                "parameters": [
                    {
                        "name": "amount",
                        "in": "query",
                        "description": "Amount is the number of queried questions",
                        "required": false,
                        "explode": true,
                        "schema": {
                            "type": "number",
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
                                        "$ref": "#/components/schemas/Question"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                }
            }
        },
        "/questions/ai": {
            "get": {
                "tags": [
                    "question"
                ],
                "summary": "Get a random question generated by AI",
                "description": "",
                "operationId": "randomAi",
                "parameters": [
                    {
                        "name": "topic",
                        "in": "query",
                        "description": "Topic for the new question generated",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "description": "Amount is the number of queried questions",
                        "required": false,
                        "explode": true,
                        "schema": {
                            "type": "number",
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
                                        "$ref": "#/components/schemas/Question"
                                    }
                                }
                            }
                        }   
                    },
                    "400": {
                        "description": "Invalidad status value"
                    }
                },
            }
        }
    },
    "components": {
        "schemas": {
            "Question": {
                "question": {
                    "type": "string",
                    "required": "true"
                },
                "explanation": {
                    "type": "string",
                    "maxlength": 4000
                },
                "status": {
                    "type": "string",
                    "enum": ["approved", "pending"],
                    "default": "approved"
                },
                "urlSource": {
                    "type": "string"
                },
                "type": "object",
                "properties": {
                    "question": {
                        "type": "string",
                        // "format": "int64",
                        "example": "What is JSON?"
                    },
                    "codeExamples": {
                        "type": ["string"],
                        "description": "a code snippet related to the question",
                        "example": "{'product': 'Laptop', 'price': 999.99, 'color': 'Silver'}" 
                    },
                    "answerOptions": {
                        "type": ["object"],
                        "description": "4 possible answers",
                        "enum": [{
                            "answer": {
                                "type": "String",
                                "example": "A data format that uses key-value pairs.",
                                "required": true
                            },
                            "isCorrect":{
                                "type": "Boolean",
                                "required": true,
                            },
                        }],
                    },
                    "urlSource": {
                        "type": "string",
                        "example": "https://www.atatus.com/blog/parsing-php-data-with-json-encode-and-decode-functions/"
                    }
                },
            },
        },
    },
};


module.exports = jsonFile