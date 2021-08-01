GET - get all
localhost:8080/api/tutorials

POST - create
localhost:8080/api/tutorials
POSTMAN => Body => RAW => JSON
{
    "title": "Title1",
    "description": "Description1"
}

GET - getOne with ID
localhost:8080/api/tutorials/60ffec2ce5e6086ba72db1ad

PUT - change
localhost:8080/api/tutorials/60ffec2ce5e6086ba72db1ad
POSTMAN => Body => RAW => JSON
{
    "title": "Title1",
    "description": "Description1"
}

Find all Tutorials which title contains ‘1’: 
GET /tutorials?title=1
localhost:8080/api/tutorials?title=1

Find all published Tutorials using GET /tutorials/published
GET /tutorials?title=1
localhost:8080/api/tutorials/published

Delete a Tutorial using DELETE /tutorials/:id
localhost:8080/api/tutorials/60ffec2ce5e6086ba72db1ad

Delete all Tutorials using DELETE /tutorials
localhost:8080/api/tutorials

https://www.bezkoder.com/node-express-mongodb-crud-rest-api/