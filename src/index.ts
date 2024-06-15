import { Project, IProject, ProjectStatus, UserRole} from "./classes/Project"
import { ProjectsManager, IProjectsManager } from "./classes/ProjectsManager"
import { Doc, IDoc, DocStatus, DocFrom } from "./classes/Doc"

console.warn("Hola");

//-------------------------------------------------------------------------------------------------
// Toggle Function //

function toggleModal(id: string, showclose: "show" | "close") {
    const modal = document.getElementById(id)
    if (modal && modal instanceof HTMLDialogElement) {
        if (showclose == "show") {
            modal.showModal()
            console.warn("Toggle shows")
        } else if (showclose == "close") {
            modal.close()
            console.warn("Toggle closes")
          } else {
            console.warn("Not finding nor show or close argument")
          }
    } else {
    console.warn("The provided modal wasn't found. ID: ", id)
    }
}

//-------------------------------------------------------------------------------------------------
const projectsCardsUI = document.getElementById("bento-projects") as HTMLElement
const projectsListUI = document.getElementById("bento-list-projects") as HTMLElement
const projectsManager = new ProjectsManager(projectsCardsUI)
projectsManager.setDefaultProjectUI()
console.log("está creado el default?")
console.log(projectsManager.list)
console.log("default project is created")

const docsListUI = document.getElementById("bento-btn-docs-list") as HTMLElement
console.log(docsListUI)

//-------------------------------------------------------------------------------------------------
// Bento Button PROJECTS //

const projectsBtn = document.getElementById("bento-btn-projects");
console.log("projects Btn value: ", projectsBtn);
if (projectsBtn) {
    console.warn("Projects Btn element exists");
    projectsBtn.addEventListener("click", () => {toggleModal("projects-modal", "show")});
} else {
    console.warn("Projects Button was not found")
}

//-------------------------------------------------------------------------------------------------
// Bento Button USERS //

const usersBtn = document.getElementById("bento-btn-users");
console.log("users Btn value: ", usersBtn);
if (usersBtn) {
    console.warn("Users Btn element exists");
    usersBtn.addEventListener("click", () => {toggleModal("users-modal", "show")});
} else {
    console.warn("Projects Button was not found")
}

//-------------------------------------------------------------------------------------------------
// Bento Button CQDocs //

const cqdocsBtn = document.getElementById("bento-btn-cqdocs");
console.log("users Btn value: ", cqdocsBtn);
if (cqdocsBtn) {
    console.warn("CQDocs Btn element exists");
    cqdocsBtn.addEventListener("click", () => {toggleModal("cqdocs-modal", "show")});
} else {
    console.warn("CQDocs Button was not found")
}

// ------------------------------------------------------------------------------------------------
// Bento Button New Project //

const newProjectBtn = document.getElementById("bento-btn-new-project");
console.log("new project Btn value: ", newProjectBtn);
if (newProjectBtn) {
    console.warn("New Project Button element exists");
    newProjectBtn.addEventListener("click", () => {toggleModal("new-project-modal", "show")});
} else {
    console.warn("New Project Button was not found")
}

// ------------------------------------------------------------------------------------------------
// Bento Button New Doc //

const newDocBtn = document.getElementById("bento-btn-new-doc");
console.log("new Doc Btn value: ", newDocBtn);
if (newDocBtn) {
    console.warn("New Doc Button element exists");
    newDocBtn.addEventListener("click", () => {toggleModal("new-doc-modal", "show")});
} else {
    console.warn("New Doc Button was not found")
}

// ------------------------------------------------------------------------------------------------
// Bento Button GIS //

const gisBtn = document.getElementById("bento-btn-gis");
console.log("gisBtn value: ", gisBtn);
if (gisBtn) {
    console.warn("gis Button element exists");
    gisBtn.addEventListener("click", () => {toggleModal("gis-modal", "show")});
} else {
    console.warn("gis Button was not found")
}

// ------------------------------------------------------------------------------------------------
// Bento Button Home //

const homeBtn = document.getElementById("bento-btn-home");
console.log("home Btn value: ", homeBtn);
if (homeBtn) {
    console.warn("Home Button element exists");
    homeBtn.addEventListener("click", () => {
        toggleModal("new-project-modal", "close")
        toggleModal("projects-modal", "close")
        toggleModal("users-modal", "close")
    });
} else {
    console.warn("New Project Button was not found")
}

// ------------------------------------------------------------------------------------------------
// PROJECT FORM BUTTONS

const projectForm = document.getElementById("bento-form-new-project")
console.log(projectForm) // Tomo el HTMLElement lo llamo projectForm
if((projectForm) && projectForm instanceof HTMLFormElement) { // si exsite y es del tipo Form
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("oigo un submit") //si oye un submit lanza el evento
        const formData = new FormData(projectForm) // Creamos un new FormData del projetcform tomado y lo almacenamos en formData
        const projectData: IProject = { // Definimos projectData como IProject tomando de formData los valores como los queremos
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            status: formData.get("status") as ProjectStatus,
            userRole: formData.get("userRole") as UserRole,
            finishDate: new Date (formData.get("finishDate") as string) // el tipo date tiene más miga.
        }
        const project = new Project(projectData);
        console.warn(projectData)
        projectForm.reset()
        toggleModal("new-project-modal", "close")
        console.warn("submit is fired!")
        console.log("lista de projectsManager antes: ", projectsManager.list)
        projectsManager.list.push(project)
        console.log("lista de projectsManager después: ", projectsManager.list)
        // if(project.ui) { 
        //     console.warn("Veo el project.ui y hago return")
        //     return
        // } else {
        projectsCardsUI.append(project.ui)
        console.warn("Hago append en projectsCardsUI")
        
        // if(project.ui2) {
        //     console.warn("Veo el project.ui2 y hago return")
        //     return
        // } else {
        projectsListUI.append(project.ui2)
        console.warn("Hago append en projectsListUI")
        console.log(projectsManager.list)
        const child = document.getElementById("default-project") as HTMLElement
        if(child) {
            projectsManager.list.shift()
            child.remove()
        }
    })
    
    projectForm.addEventListener("click", (e) => {
        e.preventDefault()
        projectForm.reset()
        toggleModal("new-project-modal", "close")
        console.log("oigo un click, no es submit") //si oye un click que no es submit cierra y toggle    }
        }
    )
}


// ------------------------------------------------------------------------------------------------
// DOC FORM BUTTONS

const docForm = document.getElementById("bento-form-new-doc")
console.log(docForm) // Tomo el HTMLElement lo llamo projectForm
if((docForm) && docForm instanceof HTMLFormElement) { // si existe y es del tipo Form
    docForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("oigo un submit") //si oye un submit lanza el evento
        const formData = new FormData(docForm) // Creamos un new FormData del projetcform tomado y lo almacenamos en formData
        const docData: IDoc = { // Definimos docData como IDoc tomando de formData los valores como los queremos
            code: formData.get("code") as string,
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            docStatus: formData.get("docStatus") as DocStatus,
            inDate: new Date (formData.get("changeDate") as string),
            changeDate: new Date (formData.get("changeDate") as string), // el tipo date tiene más miga.
            docFrom: formData.get("docFrom") as DocFrom,
        }
        const doc = new Doc(docData);
        console.warn(docData);
        docForm.reset()
        toggleModal("new-doc-modal", "close")
        console.warn("submit is fired!")
        // console.log(projectsManager.list)
        // projectsManager.list.push(project)
        // projectListUI.append(project.ui)
        // console.log(projectsManager.list)
        // projectsManager.ui.append(project)
    }
    )
}


// const projectForm = document.getElementById("bento-form-new-project")
// console.log(projectForm) // Tomo el HTMLElement lo llamo projectForm
// if((projectForm) && projectForm instanceof HTMLFormElement) { // si exsite y es del tipo Form
//     projectForm.addEventListener("submit", (e) => { 
//         console.log("oigo un submit") //si oye un submit lanza el evento
//         let submitter = e.submitter as HTMLElement // define submitter
//         let handler = submitter.id // define handler

//         if(submitter && handler == "new-project-form-submit-btn") { // si existe y el handler se llama ...
//             e.preventDefault() // preven default
//             const formData = new FormData(projectForm) // Creamos un new FormData del projetcform tomado y lo almacenamos en formData
//             const projectData: IProject = { // Definimos projectData como IProject tomando de formData los valores como los queremos
//                 name: formData.get("name") as string,
//                 description: formData.get("description") as string,
//                 status: formData.get("status") as ProjectStatus,
//                 userRole: formData.get("userRole") as UserRole,
//                 finishDate: new Date (formData.get("finishDate") as string) // el tipo date tiene más miga.
//             };
//             new Project(projectData);
//             console.warn(projectData)
            

//             projectForm.reset()
//             toggleModal("new-project-modal", "close")
//             console.warn("submit is fired!")
//             console.log(projectData)
//             console.log(ProjectsManager)

//         } if(submitter && handler == "new-project-form-cancel-btn") {
//                 e.preventDefault()
//                 projectForm.reset()
//                 console.warn("cancel is fired!")
//                 toggleModal("new-project-modal", "close")
//                 console.log(ProjectsManager)
//         }
//     })
// }

