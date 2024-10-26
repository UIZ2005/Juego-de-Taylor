const stages = [
    { song: "the lakes", album: "folklore", successMessage: "BUUENAAAAA imposible era que no adivinaras esta,ana escuchando the lakes:", image: "img01.jpeg", errorMessage: "IMPOSIBLE QUE NO LE ATINASTE", errorImage: "error01.jpeg" },
    { song: "you belong with me", album: "fearless", successMessage: "En efecto ¨you belong with me¨ <3 (para nada tuve que usar el traductor para saber que significaba)", image: "img02.jpeg", errorMessage: "Nooooo, hasta yo me se esta jsjsjsjs", errorImage: "error02.jpeg" },
    { song: "daylight", album: "speak-now", successMessage: "Te la dedico", image: "img03.jpeg", errorMessage: "naaa esta a mi tambien me sonaba", errorImage: "error03.jpeg" },
    { song: "love story", album: "fearless", successMessage: "No la habia oido pero la letra me parecio linda jsjsjs", image: "img04.jpeg", errorMessage: "Esta la verdad no la habia oido", errorImage: "error04.jpeg" },
    { song: "lover", album: "lover", successMessage: "No tiene que ver mucho con la cancion pero me gusta como sales en la foto :3", image: "img05.jpeg", errorMessage: "Sin comentarios", errorImage: "error05.jpeg" }
];

function handleStage(stageIndex) {
    const stage = stages[stageIndex];
    const stageContainer = document.getElementById(`stage-${stageIndex + 1}`);
    const form = document.getElementById(`form-stage-${stageIndex + 1}`);
    const message = document.getElementById(`message-stage-${stageIndex + 1}`);
    const image = document.getElementById(`image-stage-${stageIndex + 1}`);
    const continueButton = document.getElementById(`continue-${stageIndex + 1}`);
    const nextSection = document.getElementById(`next-${stageIndex + 1}`);

    if (!form || !message || !image || !continueButton || !nextSection) {
        console.error(`No se encontró uno de los elementos necesarios para la etapa ${stageIndex + 1}`);
        return;
    }


    document.body.className = `album-${stage.album}`;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        image.style.display = "block";
        const userInput = document.getElementById(`input-stage-${stageIndex + 1}`).value.toLowerCase();

        if (userInput === stage.song) {
            message.textContent = stage.successMessage;
            message.style.color = "green";
            image.src = stage.image;
            image.classList.remove("hidden");
            nextSection.classList.remove("hidden");
            form.classList.add("hidden");
        } else {
            message.textContent = stage.errorMessage;
            message.style.color = "red";
            image.src = stage.errorImage; // Muestra la imagen de error
            image.classList.remove("hidden");
            nextSection.classList.add("hidden");
        }
    });

    continueButton.addEventListener("click", function () {
        stageContainer.classList.add("hidden");

        if (stageIndex + 1 < stages.length) {
            document.getElementById(`stage-${stageIndex + 2}`).classList.remove("hidden");
        } else {
            document.getElementById("game-container").classList.add("hidden");
            document.getElementById("final-message").classList.remove("hidden");
        }
    });
}

stages.forEach((_, index) => handleStage(index));
