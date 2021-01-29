# react-heros
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
- Create HomePage
	- Add simple list of Heros and Villains
	- Compare to Simple_Home_Page branch
- Create HerosPage
	- Components to:
		- List Heros (Include delete from list)
		- Add, Edit
- Create VillainsPage 
	- Components to:
		- List Heros (Include delete from list)
		- Add, Edit
- Add Routing to App
	- Verify routes work by manually entering routes
- Create Header Component 
	- Add links to use routing
	- Change link color when active
- Testing...
