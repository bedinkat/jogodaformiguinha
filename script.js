var score = "";
var sound = new Howl({
    src: ['tiro1.mp3']
  });
function addbola(){
    var bola = document.createElement("div");
    bola.setAttribute( "class","bola");
    var p1 = Math.floor(Math.random() *500);
    var p2 = Math.floor(Math.random() *500);
    console.log(p2);
    bola.setAttribute( "style","left:" +p1+ "px; top:" +p2+ "px;");
    bola.setAttribute( "onclick","estourar(this)");
    document.body.appendChild(bola);
    //alert ('teste');
}
function iniciar(){
    setInterval(addbola, 800);
    //alert ('teste');
    
}
function estourar(el){
    var del = document.body.removeChild(el);
    if (del){
        score++;
        sound.play();
        document.getElementById("score").innerHTML = "<h2>Pontos:" +score+ "</h2>";
    }
    
}