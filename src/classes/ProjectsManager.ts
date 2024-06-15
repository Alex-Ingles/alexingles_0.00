
import { Project ,IProject, UserRole, ProjectStatus } from  "./Project"

export interface IProjectsManager  {
	list : Project[]
	ui : HTMLElement
	ui2 : HTMLElement
}

export class ProjectsManager implements IProjectsManager {
	list: Project [] = [];
	ui: HTMLElement;
	ui2: HTMLElement;
	static ui: any;
	static list: Project []


	constructor (container: HTMLElement) {
		// To satisfy interface
		this.ui = container
		this.ui2 = container

		// Class internals
		// this.deleteDefaultProjectUI()
		// this.newProject(Project)
	}

appendProject(data: IProject) {
	const project = new Project(data)
	this.ui.append(project.ui)
	this.ui2.append(project.ui2)
	this.list.push(project)
	console.warn("New Project is created")
	console.log(this.list)
}

getProject() {

	}

setDefaultProjectUI() {
	const defaultData: IProject = {
		name: "default-project" as string,
		description: "Default description" as string,
		status: "Default status" as ProjectStatus,
		userRole: "Default userRole" as UserRole,
		finishDate: new Date("finishDate" as string)
	}
	const defaultProject = new Project(defaultData)
	this.ui.append(defaultProject.ui)
	this.ui2.append(defaultProject.ui2)
	this.list.push(defaultProject)
	console.warn("Default Project is created")
	return defaultProject
}



// setDefaultProjectUI() {
//     const defaultData: IProject = {
//         name: "default-project" as string,
//         description: "Default description" as string,
//         status: "Default status" as ProjectStatus,
//         userRole: "Default userRole" as UserRole,
//         finishDate: new Date ("finishDate" as string)
//     }
//     const defaultProject = new Project(defaultData)
//     this.ui.append(defaultProject.ui)
//     this.list.push(defaultProject)
//     console.warn("Deault Project is created")
//     return defaultProject
// }

// deleteDefaultProjectUI() {
//     const child = document.getElementById("default-project")
//     const parent = document.getElementById("project-list")
//     if((parent) && (child)) {
//         this.list.shift()
//         document.removeChild(child)

//         console.log("default project removed")
//         return(document)
//	}
}
