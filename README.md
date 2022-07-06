# Amber-Eats-Group25

## Getting Started

### Cloning the Project

To have a local copy of the project to work on clone the repository using the command `git clone https://github.com/aldaineclarke/Amber-Eats-Group25.git` in the terminal.

This will create a folder called `Amber-Eats-Group25` in the directory specified in the terminal. Use the command ` cd Amber-Eats-Group25` to change the directory into the project folder.

### Installing the Dependencies.

node_modules which contains all the modules for this project is selected to be ignored to reduce project size. Therefore to retrieve all the dependencies of this project run the command `npm install` which will install the dependencies defined in the package.json file.

### Starting the Server.

We are using a dummy server to behave as the database. In order to start the server, run the command `npm run server`. This will call the npm script described in the package.json file and starts the server.

### Run the Application.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Making Changes.

### Creating branch

To make changes to the application you must first create a branch which will house the changes you will make.
From the terminal run the command `git checkout -b <branch name>` to create a branch with the name you specify then swith from the main branch to that branch.

### Commiting Changes

Before you make a change ensure that you the most updated version of the project run the command `git pull`.
After you make the necessary changes to the project, run the command `git add .` which adds all the changes to the staging area to signal that its ready to be committed. After which run the command `git commit -m "<message that describes the changes>"` to make changes to that branch.

### Publishing the change for review.

Before you propose a change, run the command `git pull` to check for change again. After you have confirmed that you have the most latest version, run the command `git push origin --set-upstream <your branch name>` to push the branch with the changes to the project repository.

### Viewing the complete project.

Since we are using the main branch to house the complete project. You can view this by simply going to the main branch using the command `git checkout main`. After which do a git pull which will get all the updated information from the remote repository, <em>Github</em>, to your local main repository.

### Seeing all the changes in the project from your branch.

This is done by doing a merge to your local branch. This can be done by either using `git merge main`, or using `git merge origin main` from your branch.

## Being Assigned Issues
Throughout the lifecycle of this application you may be assigned issues to have complete. These issues may or may not be assigned to individuals. If an issue is assigned to you. You would simply follow the regular procedures of making the necessary updates as per described by the issues. Then commit those changes. For each commit towards the completion of the issue, it is recommended that you specify the issue number/ID in the commit message. An example video demonstrating this can be found here **[Working with Issues](https://youtu.be/TKJ4RdhyB5Y)**
