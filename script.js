/* ==========================================
   MODO CLARO / ESCURO
========================================== */

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        temaBtn.textContent = "☀️";

        localStorage.setItem("tema", "light");

    } else {

        temaBtn.textContent = "🌙";

        localStorage.setItem("tema", "dark");
    }

});


if (localStorage.getItem("tema") === "light") {

    document.body.classList.add("light");

    temaBtn.textContent = "☀️";
}


/* ==========================================
   CURIOSIDADES
========================================== */

const curiosidades = [

    {
        icone: "☀️",
        titulo: "O Rei Sol",
        texto:
            "Luís XIV ficou conhecido como Rei Sol. O Sol era um dos símbolos associados à sua imagem e ao seu poder."
    },

    {
        icone: "🏰",
        titulo: "Versalhes",
        texto:
            "O Palácio de Versalhes tornou-se um importante símbolo da monarquia francesa e da centralização do poder de Luís XIV."
    },

    {
        icone: "👑",
        titulo: "Longo reinado",
        texto:
            "Luís XIV governou a França por mais de 70 anos, sendo um dos monarcas de reinado mais longo da história europeia."
    },

    {
        icone: "💰",
        titulo: "Mercantilismo",
        texto:
            "As monarquias absolutistas frequentemente adotavam políticas mercantilistas para fortalecer a economia e aumentar os recursos do Estado."
    },

    {
        icone: "📚",
        titulo: "Iluminismo",
        texto:
            "Pensadores iluministas passaram a criticar o poder absoluto e defender ideias como liberdade, direitos individuais e divisão dos poderes."
    },

    {
        icone: "⚜️",
        titulo: "Símbolos reais",
        texto:
            "Coroas, cetros, palácios e cerimônias eram utilizados para demonstrar a autoridade e o prestígio dos monarcas."
    }

];

let curiosidadeAtual = 0;

const curiosidadeNumero =
    document.getElementById("curiosidadeNumero");

const curiosidadeIcone =
    document.getElementById("curiosidadeIcone");

const curiosidadeTitulo =
    document.getElementById("curiosidadeTitulo");

const curiosidadeTexto =
    document.getElementById("curiosidadeTexto");

const proximaCuriosidade =
    document.getElementById("proximaCuriosidade");


function mostrarCuriosidade() {

    const curiosidade = curiosidades[curiosidadeAtual];

    curiosidadeNumero.textContent =
        String(curiosidadeAtual + 1).padStart(2, "0");

    curiosidadeIcone.textContent =
        curiosidade.icone;

    curiosidadeTitulo.textContent =
        curiosidade.titulo;

    curiosidadeTexto.textContent =
        curiosidade.texto;
}


proximaCuriosidade.addEventListener("click", () => {

    curiosidadeAtual++;

    if (curiosidadeAtual >= curiosidades.length) {
        curiosidadeAtual = 0;
    }

    mostrarCuriosidade();
});


/* ==========================================
   FLASHCARDS
========================================== */

const flashcards = [

    {
        pergunta: "O que foi o Absolutismo?",
        resposta:
            "Sistema político caracterizado pela forte concentração de poder nas mãos do monarca."
    },

    {
        pergunta: "O que era o Direito Divino dos Reis?",
        resposta:
            "Era a ideia de que a autoridade do monarca possuía origem divina."
    },

    {
        pergunta: "Quem foi Luís XIV?",
        resposta:
            "Rei da França e um dos maiores símbolos do absolutismo europeu. Ficou conhecido como Rei Sol."
    },

    {
        pergunta: "O que era o Mercantilismo?",
        resposta:
            "Conjunto de práticas econômicas adotadas por vários Estados europeus para fortalecer suas economias e aumentar os recursos do Estado."
    },

    {
        pergunta: "Qual movimento criticou o Absolutismo?",
        resposta:
            "O Iluminismo criticou o poder absoluto e defendeu novas ideias políticas, como liberdade e divisão dos poderes."
    },

    {
        pergunta: "Qual acontecimento marcou a crise do Absolutismo francês?",
        resposta:
            "A Revolução Francesa de 1789 foi um acontecimento decisivo na queda do Antigo Regime francês."
    }

];

let flashAtual = 0;

const flashcard =
    document.getElementById("flashcard");

const flashNumero =
    document.getElementById("flashNumero");

const flashPergunta =
    document.getElementById("flashPergunta");

const flashResposta =
    document.getElementById("flashResposta");

const flashAnterior =
    document.getElementById("flashAnterior");

const flashProximo =
    document.getElementById("flashProximo");


function mostrarFlashcard() {

    const flash = flashcards[flashAtual];

    flashNumero.textContent =
        `${flashAtual + 1} / ${flashcards.length}`;

    flashPergunta.textContent =
        flash.pergunta;

    flashResposta.textContent =
        flash.resposta;

    flashcard.classList.remove("flipped");
}


flashcard.addEventListener("click", () => {

    flashcard.classList.toggle("flipped");

});


flashProximo.addEventListener("click", () => {

    flashAtual++;

    if (flashAtual >= flashcards.length) {
        flashAtual = 0;
    }

    mostrarFlashcard();

});


flashAnterior.addEventListener("click", () => {

    flashAtual--;

    if (flashAtual < 0) {
        flashAtual = flashcards.length - 1;
    }

    mostrarFlashcard();

});


/* ==========================================
   QUIZ
========================================== */

const perguntas = [

    {
        pergunta:
            "Qual era uma característica importante do Absolutismo?",

        alternativas: [
            "Divisão total do poder entre os cidadãos",
            "Concentração de poder nas mãos do rei",
            "Fim das monarquias",
            "Ausência de exército"
        ],

        correta: 1
    },

    {
        pergunta:
            "Qual monarca francês ficou conhecido como Rei Sol?",

        alternativas: [
            "Henrique VIII",
            "Carlos Magno",
            "Luís XIV",
            "Filipe II"
        ],

        correta: 2
    },

    {
        pergunta:
            "Qual ideia era utilizada para justificar a autoridade de alguns monarcas?",

        alternativas: [
            "Direito Divino dos Reis",
            "Socialismo",
            "Democracia direta",
            "Anarquismo"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual movimento intelectual criticou o poder absoluto dos reis?",

        alternativas: [
            "Renascimento",
            "Feudalismo",
            "Iluminismo",
            "Cruzadas"
        ],

        correta: 2
    },

    {
        pergunta:
            "Em qual ano começou a Revolução Francesa?",

        alternativas: [
            "1492",
            "1643",
            "1750",
            "1789"
        ],

        correta: 3
    }

];


let questaoAtual = 0;

let pontos = 0;

let respondeu = false;


const pergunta =
    document.getElementById("pergunta");

const alternativas =
    document.getElementById("alternativas");

const questaoNumero =
    document.getElementById("questaoNumero");

const pontuacao =
    document.getElementById("pontuacao");

const progresso =
    document.getElementById("progresso");

const proximaQuestao =
    document.getElementById("proximaQuestao");

const quizContainer =
    document.getElementById("quiz-container");

const resultado =
    document.getElementById("resultado");

const resultadoTexto =
    document.getElementById("resultadoTexto");

const pontuacaoFinal =
    document.getElementById("pontuacaoFinal");

const reiniciarQuiz =
    document.getElementById("reiniciarQuiz");


function carregarQuestao() {

    respondeu = false;

    const questao = perguntas[questaoAtual];

    pergunta.textContent =
        questao.pergunta;

    questaoNumero.textContent =
        `Questão ${questaoAtual + 1} de ${perguntas.length}`;

    pontuacao.textContent =
        `Pontos: ${pontos}`;

    progresso.style.width =
        `${((questaoAtual + 1) / perguntas.length) * 100}%`;

    alternativas.innerHTML = "";

    questao.alternativas.forEach(
        (alternativa, index) => {

            const botao =
                document.createElement("button");

            botao.classList.add("alternativa");

            botao.textContent =
                alternativa;

            botao.addEventListener(
                "click",
                () => selecionarResposta(
                    index,
                    botao
                )
            );

            alternativas.appendChild(botao);
        }
    );
}


function selecionarResposta(index, botao) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const correta =
        perguntas[questaoAtual].correta;

    const botoes =
        document.querySelectorAll(".alternativa");

    if (index === correta) {

        botao.classList.add("correta");

        pontos++;

        pontuacao.textContent =
            `Pontos: ${pontos}`;

    } else {

        botao.classList.add("errada");

        botoes[correta].classList.add("correta");
    }
}


proximaQuestao.addEventListener("click", () => {

    if (!respondeu) {

        alert(
            "Escolha uma alternativa antes de continuar!"
        );

        return;
    }

    questaoAtual++;

    if (questaoAtual >= perguntas.length) {

        finalizarQuiz();

        return;
    }

    carregarQuestao();

});


function finalizarQuiz() {

    quizContainer.classList.add("hidden");

    resultado.classList.remove("hidden");

    resultadoTexto.textContent =
        `Você acertou ${pontos} de ${perguntas.length} questões.`;

    const porcentagem =
        Math.round(
            (pontos / perguntas.length) * 100
        );

    pontuacaoFinal.textContent =
        `${porcentagem}%`;
}


reiniciarQuiz.addEventListener("click", () => {

    questaoAtual = 0;

    pontos = 0;

    respondeu = false;

    resultado.classList.add("hidden");

    quizContainer.classList.remove("hidden");

    carregarQuestao();

});


/* ==========================================
   ANIMAÇÕES AO ROLAR A PÁGINA
========================================== */

const elementosAnimados =
    document.querySelectorAll(
        ".card, .monarca, .timeline-item, .info-box, .curiosidade-container"
    );


const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add(
                        "aparecer"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


elementosAnimados.forEach(
    (elemento) => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(30px)";

        elemento.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observador.observe(elemento);

    }
);


/* Adiciona a classe visualmente */

const estiloAnimacao =
    document.createElement("style");

estiloAnimacao.textContent = `
    .aparecer {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(estiloAnimacao);


/* ==========================================
   INICIALIZAÇÃO
========================================== */

mostrarCuriosidade();

mostrarFlashcard();

carregarQuestao();
