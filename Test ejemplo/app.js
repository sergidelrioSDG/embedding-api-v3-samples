
console.log('Entering Script');

const containerDiv = document.getElementById("vizContainer");

const url = "https://public.tableau.com/views/THanksMovies/THanksMovies?:language=es-ES&:display_count=n&:origin=viz_share_link";

const options = {
    hideTabs: true,
    onFirstInteractive: function(){
        console.log("Opciones cargadas")
    }
};

function initViz() {
    let viz = new tableau.Viz(containerDiv, url,options);
}

initViz();