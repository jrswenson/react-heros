# react-heroes
A repository to practice React

## Using Prop Drilling

--- 
### Key concepts: 

---
#### Project layout/organization

#### Environment Variables for different environments (Prod, Dev)
#### Prettier/js-linter 
#### Basic React/JSX
#### Routing
#### Basic Testing
#### Prop Drilling for State

---

### Do the following

---
- Create project
	- npx create-react-app {project_name}
	- npx create-react-app . (This will create the React project in the current directory. This is helpful if you've already created the directory and initialized it as a Git repo)
- Create and configure API and Service to call API (Use json-server or actual REST server)
	- Heros (GET, POST/PUT, DELETE)
		- Heros have an ID, Name, and Description 
	- Villains (GET, POST/PUT, DELETE)
		- Villians have an ID, Name, and Description 
- Update App component
	- Add simple list of Heros and Villains
    	- Compare to **Simple_Home_Page** branch
- Create HerosPage
	- Add simple list of Heros
- Create VillainsPage 
	- Add simple list of Villains
- Add Routing to App
	- Make Heros the default route
	- Add a PageNotFound component and display it if a route is not found
	- Verify routes work by manually entering routes
- Create Header Component 
	- Add links to use routing
	- Change link color when active
	- Compare to **Routing_Heroes_Villains** branch
- Update HeroesPage
	- Components to:
		- List Heroes (Include delete from list)
		- Add, Edit
- Update VillainsPage 
	- Components to:
		- List Villains (Include delete from list)
		- Add, Edit
	- Compare to **CRUD_Heroes_Villains** branch
- Testing...
