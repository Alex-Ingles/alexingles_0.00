
import { ProjectsManager, IProjectsManager } from "./ProjectsManager"
export type ProjectStatus = "pending" | "active" | "finished"
export type UserRole = "architect" | "engineer" | "developer"

export interface IProject {

    name: string
    description: string
    status: ProjectStatus
    userRole: UserRole
    finishDate: Date
}

export class Project implements IProject {
    // To satisfy Interface
    name: string
    description: string
    status: "pending" | "active" | "finished"
    userRole: "architect" | "engineer" | "developer"
    finishDate: Date

    // Class internals
    ui: HTMLDivElement
    ui2: HTMLDivElement
    cost: number = 0
    progress: number = 0

    constructor(data: IProject) {
        // Project data definition
        this.name = data.name
        this.description = data.description
        this.status = data.status
        this.userRole = data.userRole
        this.finishDate = data.finishDate
        this.setUIcard()
        this.setUIlist()
    }

        // Project card UI

    setUIcard() {
        console.warn("Llego al setUICard de Project class")
        if (this.ui) {return}
        else {
            this.ui = document.createElement("div")
            this.ui.className = "bento-btn project-btn dos-dos"
            this.ui.id = this.name + "-card"
            this.ui.innerHTML = `
        <header>
            <span class="material-icons-round">
                architecture
                </span>
            <h5>${this.name}</h5>
            <h5>${this.description}</h5>
        </header>
        <div class="image-container">
            <img src="./Assets/IMG_0143-LD.JPG">
        </div>
        <div class="project-data-container">
            <div class="project-data-field">
                <h5 class="key">Location</h5>
                <h5 class="value">Barcelona</h5>
            </div>
            <div class="project-data-field">
                <h5 class="key">Cost</h5>
                <h5 class="value">${this.cost}</h5>
            </div>
            <div class="project-data-field">
                <h5 class="key">Use</h5>
                <h5 class="value">Apartments</h5>
            </div>
            <div class="project-data-field">
                <h5 class="key">Status</h5>
                <h5 class="value">Finished</h5>
            </div>
            <div class="project-data-field">
                <h5 class="key">Finish Date</h5>
                <h5 class="value">${this.finishDate}</h5>
            </div>
        </div>
        <div class="project-data-container">
            <div class="project-data-field">
                <h5 class="key">Role</h5>
                <h5 class="value">${this.userRole}</h5>
            </div>
            <div class="project-data-field">
                <h5 class="key">Cost</h5>
                <h5 class="value">5.000.000 €</h5>
            </div>
            <div class="project-data-field">
                <h5 class="key">Use</h5>
                <h5 class="value">Apartments</h5>
            </div>

        </div>`
        }
    }
        // Project card UI

    setUIlist() {
        if(this.ui2) {return}
        this.ui2 = document.createElement("div")
        this.ui2.className = "project-container list-line"
        this.ui2.id = this.name + "-list-line"
        this.ui2.innerHTML = 
        `
        <div class="value">${this.name}</div>
        <div class="value">${this.status}</div>
        <div class="value">${this.userRole}</div>
        <div class="value">Finished</div>
        <div class="value">2020</div>
        <div class="value">Execution Direction</div>
        <div class="value">5.000.000 €</div>
        <div class="value">Apartments</div>
        `

// <div class="card">
        //     <div class="card-header">
        //         <p style="background-color: #ca8134; padding:10px; border-radius: 8px; aspect-ratio: 1">HC</p>
        //         <div>
        //             <h5>${this.name}</h5>
        //             <h5 class="description">${this.description}</h5>
        //         </div>
        //     </div>
        //     <div class="card-content">
        //         <div class="card-property">
        //             <p style="color: #969696;">Status</p>
        //             <p>${this.status}</p>
        //         </div>
        //         <div class="card-property">
        //             <p style="color: #969696;">Role</p>
        //             <p>${this.userRole}</p>
        //         </div>
        //         <div class="card-property">
        //             <p style="color: #969696;">Cost</p>
        //             <p>$${this.cost}</p>
        //         </div>
        //         <div class="card-property">
        //             <p style="color: #969696;">Estimated Progress</p>
        //             <p>${this.progress * 100}%</p>
        //         </div>
        //     </div>`
    }
}