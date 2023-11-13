const perguntas = [
    {
      pergunta: "Quantos livros possui a bíblia?",
      opcao: [
        "1. '66 livros'",
        "2. '84 livros'",
        "3. '30 livros'",
        "4. '26 livros'"
      ],
      resposta: "1. '66 livros'",
    },
    {
      pergunta: " Qual o nome do primeiro casal criado por Deus?",
      opcao: [
        "1. João e Maria",
        "2. Abraão e Sara",
        "3. Moisés e Isabel",
        "4. Adão e Eva",
      ],
      resposta: "4. Adão e Eva",
    },
    {
      pergunta:
        "Que animal falou com Balaão",
      opcao: ["1. Camelo", "2. Jumenta", "3. Pomba", "4. Leão"],
      resposta: "2. Jumenta",
    },
    {
      pergunta:
        "Quantos discípulos Jesus escolheu para segui-lo?",
      opcao: [
        "1. 10",
        "2. 15",
        "3. 9",
        "4. 12",
      ],
      resposta: "4. 12",
    },
    {
      pergunta:
        "Em qual ilha João recebeu a revelação do Apocalipse?",
      opcao: ["1. Patmos", "2. Creta", "3. Quitim", "4. Chipre"],
      resposta: "1. Patmos",
    },
  ],
    inicio = document.getElementById("inicio"),
    fim = document.getElementById("fim"),
    caixa = document.getElementById("caixa"),
    nada = document.getElementById("caixa"),
    audio = document.
      getElementById("audio"),
    audio1 = document.
      getElementById("audio1"),
    resultado = document.getElementById("resultado"),
    h2 = document.getElementById("pergunta-caixa"),
    resultadotext = document.getElementById("resultado-text");
  document.querySelector("time").innerText = perguntas.length * 10
  function esconder() {
    inicio.setAttribute("hidden", true)
    caixa.setAttribute("hidden", true)
    fim.style.display = "none";
  }
  function esconderResul() {
    resultado.style.display = "none"
  }
  document.getElementById("bt-inicio").addEventListener("click", () => {
    audio.play()
    pt = 0
    tempo = perguntas.length * 10
    indice = 0
    inicio.setAttribute("hidden", true)
    caixa.removeAttribute("hidden")
    tabuleiro()
    tempIntervalo = setInterval(() => {
      tempo--
      escreverTemp()
      if (tempo < 1) {
        audio.pause()
        audio1.play()
        fimQuiz()
      }
    }, 1000)
    setInterval(() => {
      escreverpt()
    }, 100)
    escreverTemp()
    escreverpt()
  })
  function escreverpt() {
    document.getElementById("pt").innerText = pt
  }
  function escreverTemp() {
    document.querySelector("time").innerText = tempo
  }
  function tabuleiro() {
    let perg = perguntas[indice];
    h2.innerText = perg.pergunta
    opcao = perg.opcao
    for (let i in opcao) {
      opcoes = document.getElementById("opcao" + i).innerText = opcao[i]
    }
  
  }
  function correta(opcoes) {
    return opcoes.innerText === perguntas[indice].resposta
  }
  document.getElementById("opcoes").addEventListener("click", verificar)
  
  function verificar(d) {
    opcoes = d.target
    resultado.style.display = "block"
  
    if (correta(opcoes)) {
      resultadotext.innerText = "correto"
      pt = pt + 10
      setTimeout(esconderResul, 1000)
    }
    else {
      resultadotext.innerText = "Incorreto"
      setTimeout(esconderResul, 1000)
      pt = (pt >= 10) ? pt - 10 : 0
      if (tempo >= 10) {
        tempo = tempo - 10;
        escreverTemp();
      } else {
        tempo = 0
        escreverTemp()
        fimQuiz()
      }
    }
    indice++
    if (indice < perguntas.length) {
      tabuleiro()
    }
    else {
      fimQuiz()
    }
  }
  function fimQuiz() {
    clearInterval(tempIntervalo)
    esconder()
    fim.style.display = "grid";
    audio.pause()
  
  }