
import { ProjectsManager, IProjectsManager } from "./ProjectsManager"
export type DocStatus = "pending" | "received" | "rejected" | "approved"
export type DocFrom = "CC" | "Lab" | "City council" | "DO" | "DEO" | "Structural Engineer"

export interface IDoc {

    code: string
    name: string
    description: string
    docStatus: DocStatus
    inDate: Date
    changeDate: Date
    docFrom: DocFrom
}

export class Doc implements IDoc {
    // To satisfy Interface
    code: string
    name: string
    description: string
    docStatus: "pending" | "received" | "rejected" | "approved"
    inDate: Date
    changeDate: Date
    docFrom: DocFrom

    // Class internals
    ui: HTMLDivElement

    constructor(data: IDoc) {
        // Project data definition
        this.code = data.code
        this.name = data.name
        this.description = data.description
        this.docStatus = data.docStatus
        this.inDate = data.inDate
        this.changeDate = data.changeDate
        this.docFrom = data.docFrom
        // this.newProject(data)
        this.setUI()

        // Project card UI
    }

    // newProject(data: IProject) {
    //     const project = new Project(data)
    //     ProjectsManager.ui.append(project.ui)
    //     const projectsList = ProjectsManager
    //     ProjectsManager.arguments.push(Project)

    //     console.warn("New Project is created")
    //     console.log(ProjectsManager.arguments)
    //     return project
    // }


    setUI() {
        if (this.ui) {return}
        this.ui = document.createElement("div")
        this.ui.className = "bento-btn doc-btn dos-dos"
        this.ui.id = this.name
        this.ui.innerHTML = `
        <header>
            <span class="material-icons-round">
                architecture
                </span>
            <h5>${this.code}</h5>
            <h5>${this.name}</h5>
        </header>
        <div class="doc-data-container">
            <div class="project-data-field">
                <h5 class="key">Description</h5>
                <h5 class="value">${this.description}</h5>
            </div>
            <div class="doc-data-field">
                <h5 class="key">Doc Status</h5>
                <h5 class="value">${this.docStatus}</h5>
            </div>
            <div class="doc-data-field">
                <h5 class="key">In Date</h5>
                <h5 class="value">${this.inDate}</h5>
            </div>
            <div class="doc-data-field">
                <h5 class="key">Status change date</h5>
                <h5 class="value">${this.changeDate}</h5>
            </div>
        </div>`
    }
}