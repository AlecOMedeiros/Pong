// VARIANTES DA BOLINHA //
let xBolinha = 300;
let yBolinha = 200;
let diametro = 14;
let raio = 7;
// VARIANTES DE VELOCIDADE DA BOLINHA //
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

// VARIANTES DA RAQUETE //
let xRaquete = 15;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 60;
let colisao = false;

// variáveis do oponente
let xRaqueteOponente = 465;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//placar do jogo

let meusPontos = 0;

let pontosDoOponente = 0;

//sons do jogo

let raquetada;

let ponto;

let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");

  ponto = loadSound("ponto.mp3");

  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(480, 400);
  trilha.loop();
}

