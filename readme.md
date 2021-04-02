## Graphql Scaffolding

### How to use

Run following commands

```
docker-compose pull
docker-compose build
docker-compose up
```

### How to use pgadmin

- in browser navigate to `localhost:5050`
- pgadmin login screen will be loaded
- use `pgadmin@fourm.dev` and password is `P@ssw0rd` for pgadmin
- Get ip of postgres container and copy it. or use `postgres-db` instead of ip
  `docker inspect postgres-container | grep IPAddress`
- username of postgres is `fourm`
- password of postgres is `P@ssw0rd`
- database is `test_db`

All this can be changed in docker-compose environment file.

### Setup Postgres database

- to setup postgres database with tables and other inital data
  > Under scripts folder, add the startup scripts in postgres.js

### Run graphql playground

##### Visit http://localhost:4000/graphql/

- Sample Query

```
{
  books {
  	id
    name
    author
    extraData
    contextData
	}
}
```

- Sample query with params

```
query {
  book(bookId: "1") {
    id
    name
    author
    extraData
    contextData
  }
}
```

- Sample Mutation

```
mutation {
  createBook(book: {id: 8, name: "book 4", author: "author 4"}) {
    id
    name
    author
    extraData
  }
}
```
