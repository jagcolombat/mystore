# MyStore

MyStore is an ecommerce app build with Angular 9, NestJS, TypeORM and MySQL. Based in a architecture monorepo using Narwhal Nx.
Initially this app is compose by a products section, cart page, admin products page and security module.
The security module use JWT and LocalStorage for storage session on client side.

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="250"></p>

## Frontend
The frontend part use Angular Material, Sass and Flexbox CSS for styles. 
This part is composed for a Angular app and specific and generic libs.

## Backend
The backend part use Controllers for manage API, Services for bussines logic,
Entities for mapping object on database, DTOs for definition common objects between apps or specific feature.

## Install

1. Clone repsitory

	`git clone [repository]`

2. Install dependecies
	
	`npm i -d`
	
3. Build both apps fronted and backend

	`nx build --prod shop`
	`nx build --prod shop-backend`
	
4. Serve apps

	`npm run start`
	
5. Open browser with URL 
	
	http://localhost:33333/
