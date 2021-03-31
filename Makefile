# remove docker volume of postgres database
create_network:
	docker network create graphql-scaffolding-api
remove_postgres:
	docker volume rm graphql-scaffolding_postgres-database-data
