/* Titouan moquet 2026*/
/* Version temporaire */

/*    {
        id:"",
        title:"",
        cover:"",
        summary:"",
        description:"",
        skills:"",
        technos:"",
        status:"",
        colorStatus:"",
        links_button: ""

    }
*/

let skills = [
    {
        title: "Web",
        list: [["html", "HTML"], ["css", "CSS"], ["js", "JavaScript"], ["php", "PHP"], ["threejs", "ThreeJs"]]
    },
    {
        title: "Langages",
        list: [["py", "Python"], ["c", "C"], ["java", "Java"]]
    },
    {
        title: "Outils",
        list: [["vscode", "VSCode"], ["github", "GitHub"], ["docker", "Docker"], ["figma", "Figma"]]
    },
    {
        title: "Systèmes",
        list: [["linux", "Linux"], ["windows", "Windows 10/11"]]
    },
        {
        title: "Base de donnée",
        list: [["sqlite", "SQL"], ["postgresql", "PostgreSQL"]]
    },
    {
        title: "Autres",
        list: [["blender", "Blender"],["unreal", "Unreal Engine"]]
        
    }


]
let projects = [
    {
        id: "portfolio",
        title: "Portfolio",
        cover: "./assets/images/cover-porfolio.png",
        summary: `Création d'un Portfolio personnel et universitaire`,
        description: `comming soon`,
        skills: `comming soon`,
        technos: ["html", "css", "js"],
        status: "En cours",
        colorStatus: "#d12009",

    },
    {
        id: "sokoban",
        title: "Sokoban",
        cover: "./assets/images/sokoban-capture1.png",
        summary: `Jeu Sokoban en C jouable dans un terminal Unix`,
        description: `
        Ce projet est une implémentation complète du jeu Sokoban, codée en C et jouable directement dans un
            terminal compatible ANSI.
            Il s'agit d'un projet réalisé dans le cadre de ma formation au BUT Informatique à l’IUT de Lannion.
            Objectif du jeu : Déplacer le personnage pour pousser toutes les caisses <span class="code">$</span>
            sur les cibles <span class="code">.</span>.`,
        skills: `Gestion de project, optimisation logiciel, algorithmie .`,
        technos: ["c", "bash", "github"],
        status: "Projet étudiant",
        links_button: [["Sokoban", "https://github.com/TMoq22/Sokoban"], ["Soboban autonome", "https://github.com/TMoq22/Sokoban-autonome"]],
    },
    {
        id: "usa-website",
        title: "Site Web USA",
        cover: "./assets/images/site-usa-1.png",
        summary: "Site Web sur les USA",
        description: `Ce projet réalisé dans le cadre de la SAE1.05 du BUT Informatique à Lannion consiste en la création
            d’un site web autour des États-Unis, comprenant différentes pages illustrant villes, œuvres et
            informations culturelles.`,
        skills: `Gestion de project, implémentation besoins clients .`,
        technos: ["html", "css", "js", "github"],
        status: "Projet étudiant",

        links_button: [[`<i class="fa-brands fa-github"></i> GitHub`, "https://github.com/TMoq22/usa-tourism-website"], ["Voir le site", "https://sae1-05.onrender.com/index.html"]]

    },
    {
        id: "auto-convert",
        title: "Auto convert",
        cover: "./assets/images/auto-convert.png",
        summary: "Script bash et php pour convertir des images en webp, xlsx en pdf, ...",
        description: `Ce projet a pour objectif d’automatiser le traitement des fichiers pour le site internet du Ministère du Tourisme français. Notre but est de soulager la charge de travail de l'équipe de développeurs web en transformant de manière automatique le flux de fichiers dans les formats web demandés.`,
        skills: `Gestion de projet, automatisation de tache, optimisation logiciel`,
        technos: ["bash", "php", "docker", "github"],
        status: "Projet étudiant",

        links_button: [[`<i class="fa-brands fa-github"></i> GitHub`, "https://github.com/liam-gen/sae1.03"]]

    },
    {
        id: "partfinder",
        title: "PartFinder",
        cover: "./assets/images/cover-partfinder.png",
        summary: "Site web réalisé avec le module python Flask.",
        description: `Ce projet a été réalisé dans le cadre de la spécialité NSI. Il consiste en la création d'une application web le module Python : Flask.`,
        skills: `- - -`,
        technos: ["html", "css", "js", "py"],
        status: "Projet étudiant",
        links_button: [[`<i class="fa-brands fa-github"></i> GitHub`, "https://github.com/liam-gen/sae1.03"]]

    },
    {
        id: "pyfight-legends",
        title: "PYFIGHT LEGEND",
        cover: "./assets/images/cover-pyfightlegends.png",
        summary: "Jeu réalisé avec la librairie python Pygame.",
        description: `Jeu réalisé avec la librairie python Pygame. But du jeu Faire les quêtes disponibles en bas à droite de la map, puis battre le boss final accessible à partir du niveau 4. Pour vous aider, des items sont disponibles à l'achat dans le shop.`,
        skills: `- - -`,
        technos: ["py"],
        status: "Projet étudiant",
        links_button: [[`<i class="fa-brands fa-github"></i> GitHub`, "https://github.com/TMoq22/PYFIGHT_LEGEND/"]]

    }
]

const defaultCover = "./assets/images/No_Image_Available.jpg";

// PROJECT 

function generateLinks(links) {
    return links
        .map(
            ([label, url]) =>
                `<a href="${url}" class="btn ghost" target="_blank" rel="noopener">
           ${label}
         </a>`
        )
        .join("");
}

function generateIcons(icon) {
    return icon.map(
        (label) =>
            `<img src="https://skillicons.dev/icons?i=${label}" alt="${label}" data-tippy-content="${label}">`
    )
        .join("");
}


projects.forEach((project) => {
    // container projects
    let container = document.querySelector(".projectsGrid");

    // - childs
    let article = document.createElement("article");
    article.className = `project-card ${project.id}`;
    // -- cover img
    let cover = document.createElement("img");
    cover.src = project.cover ? project.cover : defaultCover;
    cover.className = "thumbnail";
    cover.alt = "cover " + project.title;
    // -- summary
    let summary_container = document.createElement("div");
    summary_container.className = "summary_container";

    let summary = document.createElement("div");
    summary.className = "summary";
    // --- title
    let title = document.createElement("h3");
    title.innerHTML = project.title;
    // --- texte
    let text = document.createElement("p");
    text.innerHTML = project.summary;
    // -- techno
    let techno = document.createElement("project-tech");
    techno.className = "project-tech";

    project.technos.forEach((imgName) => {
        let img = document.createElement("img");
        img.alt = imgName;
        img.src = "https://skillicons.dev/icons?i=" + imgName;
        img.setAttribute("data-tippy-content", imgName);
        techno.appendChild(img);
    })
    // -- btn

    // project.links_button.forEach((butt) => {
    //     let button = document.createElement("button");
    //     button.className= "btn ghost";
    //     button.innerHTML = butt[0];
    //     button.src = butt[1];
    //     summary_container.appendChild(button);
    // })


    if (project.status) {
        let status = document.createElement("span");
        status.className = "project-tooltips";
        status.innerHTML = project.status;
        if (project.colorStatus) {
            status.style.background = project.colorStatus ? project.colorStatus : "#0070d2";
        }
        article.appendChild(status);
    }

    let buttonModal = document.createElement("button");
    buttonModal.className = "btn ghost";
    buttonModal.innerHTML = "Détails";

    let linksHTML = "";

    if (project.links_button && project.links_button.length > 0) {
        linksHTML = `
        <div>
        <h4>Liens</h4>
        ${generateLinks(project.links_button)}
        </div>
    `;
    }

    let iconsHTML = "";
    if (project.technos && project.technos.length > 0) {
        iconsHTML = `
        <div>
            <h4>Technologie utilisé</h4>
            <div class="icons">
                    ${generateIcons(project.technos)} 
            </div>
        </div>
        `
    }


    buttonModal.addEventListener("click", () => {
        new WinBox({
            title: project.title,
            x: "center",
            y: "center",
            width: "90%",
            height: "85%",
            border: 2,
            modal: true,
            class: "winbox-portfolio",
            html: ` 
            <div class="project-modal ${project.id}"> 
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div>
                    <h4>Compétences</h4>
                    <p>${project.skills}</p>
                </div>
                ${iconsHTML}
                ${linksHTML}
                
            </div >
            `
        });
        tippy('[data-tippy-content]');

    });



    summary.appendChild(title);
    summary.appendChild(text);

    summary_container.appendChild(summary);
    summary_container.appendChild(techno);

    article.appendChild(cover);
    article.appendChild(summary_container);
    article.appendChild(buttonModal);
    container.appendChild(article);

});




skills.forEach((category) => {
    let container = document.querySelector(".competences-container");
    // - childs
    let article = document.createElement("article");
    article.className = "category";

    let title = document.createElement("h3");
    title.innerHTML = category.title;


    let icon_container = document.createElement("div");
    icon_container.className = "icon-skill";
    if (category.list && category.list.length > 0) {

        category.list.forEach(([name, lvl]) => {
            let figure = document.createElement("figure");

            let image = document.createElement("img");
            image.alt = name + " icon";
            image.src = "https://skillicons.dev/icons?i=" + name;
            image.setAttribute("data-tippy-content", name);

            let figcaption = document.createElement("figcaption");
            figcaption.innerHTML = lvl;

            figure.appendChild(image);
            figure.appendChild(figcaption);

            icon_container.appendChild(figure);
        });


    }

    article.appendChild(title);
    article.appendChild(icon_container);
    container.appendChild(article);

})


// TIPPY
tippy('[data-tippy-content]');


