var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    //carregar o mar
    this.load.image('mar', 'imagens/bg_azul-escuro.png');
    //carregar o logo
    this.load.image('logo', 'imagens/logo-inteli_branco.png');
    //carregar o peixe na tela
    this.load.image('peixe', 'peixes/peixe_turquesa.png');
    //carregar uma matinho
    this.load.image('matinho', 'imagens/planta-fundo_demar.png');
}

function create () {
    //adicionar o mar
    this.add.image(400,300, 'mar');
    //adicionar a logo
    this.add.image(400, 525, 'logo').setScale(0.5);
    //adicionar matinho
    this.add.image(100, 525, 'matinho');
    //adiciona peixe e guardar em uma variável
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true,false);

    //transformando a variável
    peixinho.setFlip(true,false);
}

function update(){
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}