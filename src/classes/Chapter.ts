
import { ProjectsManager, IProjectsManager } from "./ProjectsManager"
import { Subchapter } from "./Subchapter"
import { Doc } from "./Doc"
export type ProjectStatus = "pending" | "active" | "finished"
export type UserRole = "architect" | "engineer" | "developer"

export interface IChapter {

    code: string
    name: string
    description: string
}

export class Chapter implements IChapter {
    // To satisfy Interface
    code: string
    name: string
    description: string
    sublist: Subchapter []
    doclist: Doc []

    // Class internals
    ui: HTMLDivElement
    ui2: HTMLDivElement

    constructor(data: IChapter) {
        // Project data definition
        this.code = data.code
        this.name = data.name
        this.description = data.description
        this.setUIcard()
        this.setUIlist()
    }

        // Project card UI

    setUIcard() {
        console.warn("Llego al setUICard de Chapter class")
        if (this.ui) {return}
        this.ui = document.createElement("div")
        this.ui.className = "bento-btn chapter-btn dos-dos"
        this.ui.id = this.name + "-card"
        this.ui.innerHTML = 
        `
        <header>
            <span class="material-icons-round">
                architecture
                </span>
            <h5>${this.code}</h5>
            <h5>${this.name}</h5>
        </header>
        <div class="project-data-container">
            <div class="project-data-field">
                <h5 class="key">Description</h5>
                <h5 class="value">${this.description}</h5>
            </div>
        </div>
        `
    }
        // Project card UI

    setUIlist() {
        if(this.ui2) {return}
        this.ui2 = document.createElement("div")
        this.ui2.className = "chapter-container list-line"
        this.ui2.id = this.name + "-list-line"
        this.ui2.innerHTML = 
        `
        <div class="value">${this.code}</div>
        <div class="value">${this.name}</div>
        <div class="value">${this.description}</div>
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