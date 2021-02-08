# react-heroes
A repository to practice React

The **main** only has README.md and .gitignore.  Only make changes to these to files on the **main** branch and do not add new files to *main*

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
- Add a Favorites Page
	- Make this the default route
	- Create a favorites service that will get a list, add to the list, remove from the list and clear the list. (For both Heroes and Villains)
		- To better emulate an actual service, make functions async or return a promise.
	- Using the service above, create a Context that will manage favorite heroes and hated villains
	- Context should expose the features of the favorites service(s)
	- Favorites page should be able to remove a single hero or villain and be able to clear all heroes or villains
	- Heros and Villains pages should be able to mark an individual as a favorite
	- Compare to **favorites** branch
- Update state for Heroes and Villains to use Redux
	- Notice:
		- Add hero to favorites
		- From Favorites page, select hero and edit name and save
		- After save, returns to list not favorites.  After editing, the screen should return to the page the hero/villain was selected from
		- After an edit, the changes should be visible on favorites and list page
	- After editing a Hero or Villain, if the individual is a favorite, the change should be visible on the Favorites page too.
		- Update the favorites page to use the Heroes and Villains state and update the favorites list if/when either of those change.
	- Update Hero and Villain to "GoBack" to the page the edit was initiated from
	- Compare to **with-redux** branch
- Update Redux/Store to use Redux-toolkit
	- Compare to **with-redux-tool-kit** branch
	
	
- Testing...
