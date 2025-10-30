const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const outputDir = path.join(__dirname, 'output');

// genera storie casuali per ogni file
function generateStories(files) {
const actions = [
  'viaggia nello spazio con una mucca',
  'mangia pizza con ketchup e cioccolato',
  'gioca a scacchi contro un polipo gigante',
  'diventa superstar dei gatti',
  'scrive poesie mentre cammina sui trampoli',
  'costruisce castelli di gelato nel deserto',
  'balla il tango con un cactus',
  'dipinge quadri invisibili',
  'canta sotto la pioggia di marshmallow',
  'legge libri al contrario',
  'accompagna un piccione in tour mondiale',
  'gira film con patate animate',
  'svela segreti ai sassi',
  'corre maratone indossando tuta di gelatina',
  'gioca a nascondino con fantasmi',
  'colleziona nuvole',
  'scambia scarpe con formiche',
  'scrive messaggi segreti sulle stelle',
  'viaggia nel tempo per rubare biscotti',
  'costruisce robot da cucina che ballano',
  'fa yoga con pinguini',
  'nasconde tesori nel frigorifero',
  'interpreta opere teatrali per pesci rossi',
  'gioca a calcio con palloni di gomma piuma',
  'scrive lettere d’amore ai cactus',
  'organizza feste segrete per lumache',
  'suona il pianoforte con le dita dei piedi',
  'balla la breakdance con un armadio',
  'colleziona biglietti immaginari',
  'ruba l’arcobaleno per farne un tappeto',
  'dipinge il vento',
  'gioca a poker con fantasmi di pirati',
  'porta a spasso elefanti invisibili',
  'scambia cappelli con tartarughe',
  'canta ninna nanne ai robot',
  'viaggia sul dorso di un drago di carta',
  'costruisce ponti di spaghetti',
  'scrive un romanzo usando solo emoji',
  'fa meditazione con carote parlanti',
  'corre sulle nuvole',
  'organizza gare di lumache supersoniche',
  'suona batteria con gallette di riso',
  'dipinge quadri che cambiano colore',
  'gioca a tennis con cuscini volanti',
  'nasconde mappe del tesoro nei libri di cucina',
  'balla con lampioni stanchi',
  'scrive poesie per alberi invisibili',
  'accompagna fenicotteri in parata',
  'costruisce fortini con libri giganti',
  'viaggia tra sogni altrui',
  'ruba cioccolato dai draghi',
  'interpreta ruoli da supereroe nei supermercati',
  'gioca a nascondino con l’ombra',
  'crea pozioni per far volare formiche',
  'canta canzoni inventate ai robot',
  'organizza picnic sulla luna',
  'colleziona ombre di gatti',
  'scrive messaggi segreti in bottiglie invisibili',
  'corre maratone dentro tazze giganti',
  'balla sotto piogge di coriandoli',
  'dipinge quadri con gli occhi bendati',
  'nasconde chiavi in palloncini',
  'suona arpa con spaghetti',
  'viaggia con treni di nuvole',
  'costruisce torri di biscotti giganti',
  'scrive lettere a gatti famosi',
  'accompagna giraffe in concerti rock',
  'gioca a bowling con meloni',
  'balla con ombre che scappano',
  'canta inni alle formiche',
  'viaggia dentro libri illustrati',
  'organizza gare di salto per lumache',
  'dipinge quadri che respirano',
  'nasconde biscotti in tasche invisibili',
  'costruisce macchine volanti con carta stagnola',
  'scrive romanzi usando solo onomatopee',
  'suona campane con carote',
  'accompagna orsi in passeggiata',
  'gioca a scacchi con fantasmi di drago',
  'balla il valzer con ombre cangianti',
  'dipinge statue invisibili',
  'corre sulle ali di farfalle giganti',
  'nasconde messaggi sotto i cappelli',
  'scrive poesie per orsetti di peluche',
  'viaggia dentro specchi magici',
  'costruisce navi con fogli di quaderno',
  'gioca a calcio con mele giganti',
  'balla sotto la pioggia di fiori di carta',
  'suona strumenti fatti di spaghetti',
  'organizza concerti per piccioni',
  'canta canzoni ai lampioni',
  'dipinge arcobaleni invisibili',
  'nasconde chiavi nei libri di magia',
  'viaggia in mongolfiere di caramelle',
  'costruisce torri di cuscini',
  'scrive lettere segrete ai draghi',
  'accompagna lumache in gare di velocità',
  'gioca a tennis con palloncini giganti',
  'balla con statue animate',
  'suona strumenti di cioccolato',
  'viaggia su tappeti volanti immaginari',
  'costruisce castelli con biscotti e panna',
  'scrive poesie per robot invisibili',
  'nasconde oggetti nelle tasche del vento',
  'dipinge quadri che raccontano storie',
  'gioca a pallavolo con nuvole',
  'balla con ombre danzanti',
  'accompagna gatti in tour mondiale',
  'canta canzoni agli alberi',
  'viaggia dentro sogni colorati',
  'costruisce robot con fogli di giornale',
  'scrive lettere ai fenicotteri',
  'organizza feste per cactus',
  'gioca a bowling con zucche',
  'dipinge quadri sulle foglie',
  'nasconde cioccolato nei libri',
  'balla con statue invisibili',
  'suona tamburi di vetro',
  'viaggia tra nuvole di zucchero',
  'costruisce torri di libri magici',
  'scrive messaggi segreti sulle stelle',
  'accompagna orsi ballerini',
  'gioca a scacchi con ombre',
  'balla sotto pioggia di coriandoli',
  'dipinge arcobaleni in bottiglia',
  'nasconde chiavi in cuscini',
  'viaggia in treni di vetro',
  'costruisce fortini di cioccolato',
  'scrive poesie per gatti invisibili',
  'organizza gare di salto per lumache giganti',
  'gioca a tennis con palloni di gomma piuma',
  'balla con ombre fluttuanti',
  'suona l’arpa con spaghetti',
  'viaggia su draghi di carta',
  'costruisce ponti di spaghetti',
  'scrive romanzi con emoji',
  'nasconde biscotti nei frigoriferi',
  'dipinge quadri che cambiano colore',
  'gioca a calcio con mele giganti',
  'balla con lampioni stanchi',
  'canta inni ai robot',
  'viaggia dentro libri illustrati',
  'costruisce macchine volanti di carta stagnola',
  'scrive lettere a robot invisibili',
  'accompagna giraffe in concerti rock',
  'gioca a bowling con meloni',
  'balla con ombre che scappano',
  'dipinge statue invisibili',
  'corre sulle ali di farfalle giganti',
  'nasconde messaggi sotto i cappelli',
  'scrive poesie per orsetti di peluche',
  'viaggia dentro specchi magici',
  'costruisce navi con fogli di quaderno',
  'gioca a calcio con mele giganti',
  'balla sotto la pioggia di fiori di carta',
  'suona strumenti fatti di spaghetti',
  'organizza concerti per piccioni',
  'canta canzoni ai lampioni',
  'dipinge arcobaleni invisibili',
  'nasconde chiavi nei libri di magia',
  'viaggia in mongolfiere di caramelle',
  'costruisce torri di cuscini',
  'scrive lettere segrete ai draghi',
  'accompagna lumache in gare di velocità',
  'gioca a tennis con palloncini giganti',
  'balla con statue animate',
  'suona strumenti di cioccolato',
  'viaggia su tappeti volanti immaginari',
  'costruisce castelli con biscotti e panna',
  'scrive poesie per robot invisibili',
  'nasconde oggetti nelle tasche del vento',
  'dipinge quadri che raccontano storie',
  'gioca a pallavolo con nuvole',
  'balla con ombre danzanti',
  'accompagna gatti in tour mondiale',
  'canta canzoni agli alberi',
  'viaggia dentro sogni colorati',
  'costruisce robot con fogli di giornale',
  'scrive lettere ai fenicotteri',
  'organizza feste per cactus',
  'gioca a bowling con zucche',
  'dipinge quadri sulle foglie',
  'nasconde cioccolato nei libri',
  'balla con statue invisibili',
  'suona tamburi di vetro',
  'viaggia tra nuvole di zucchero',
  'costruisce torri di libri magici',
  'scrive messaggi segreti sulle stelle',
  'accompagna orsi ballerini',
  'gioca a scacchi con ombre',
  'balla sotto pioggia di coriandoli',
  'dipinge arcobaleni in bottiglia',
  'nasconde chiavi in cuscini',
  'viaggia in treni di vetro',
  'costruisce fortini di cioccolato',
  'scrive poesie per gatti invisibili',
  'organizza gare di salto per lumache giganti',
  'gioca a tennis con palloni di gomma piuma',
  'balla con ombre fluttuanti',
  'suona l’arpa con spaghetti',
  'viaggia su draghi di carta',
  'costruisce ponti di spaghetti',
  'scrive romanzi con emoji',
  'nasconde biscotti nei frigoriferi',
  'dipinge quadri che cambiano colore',
  'gioca a calcio con mele giganti',
  'balla con lampioni stanchi',
  'canta inni ai robot',
  'viaggia dentro libri illustrati',
  'costruisce macchine volanti di carta stagnola',
  'scrive lettere a robot invisibili',
  'accompagna giraffe in concerti rock',
  'gioca a bowling con meloni',
  'balla con ombre che scappano',
  'dipinge statue invisibili',
  'corre sulle ali di farfalle giganti',
  'nasconde messaggi sotto i cappelli',
  'scrive poesie per orsetti di peluche',
  'viaggia dentro specchi magici'
];
  return files.map((file, i) => {
    const action = actions[Math.floor(Math.random() * actions.length)];
    return { file, story: `Gino ${i + 1} oggi ${action}.` };
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const files = fs.readdirSync(outputDir)
                    .filter(f => f.endsWith('.png'))
                    .sort((a,b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

    const stories = generateStories(files);

    // HTML con loader e griglia
    let html = `
    <!DOCTYPE html>
    <html lang="it">
    <head>
      <meta charset="UTF-8">
      <title>Vetrina Gino</title>
      <style>
        body { font-family: sans-serif; background: #f0f0f0; margin:0; padding:0;}
        #loader {
          position: fixed; top:0; left:0; right:0; bottom:0;
          background: rgba(255,255,255,0.9); display:flex; align-items:center; justify-content:center;
          font-size: 24px; z-index: 9999;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .card {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 10px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .card:hover { transform: scale(1.05); }
        .card img { max-width:100%; border-radius:12px; }
        .caption { margin-top:8px; font-weight:bold; color:#333; text-shadow:0 1px 2px rgba(255,255,255,0.5);}
        .story { font-size:0.9em; margin-top:4px; color:#222; }
          header {
    position: sticky;
    top:0;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(10px);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  header h1 {
    margin:0;
    font-size: 24px;
    color: #333;
  }
  
  
      </style>
    </head>
    <body>
    
      <div id="loader">Caricamento immagini…</div>

        <header>
    <h1>Vetrina Gino NFT</h1>
    <div class="market-links">
      <a href="https://opensea.io/collection/gino-nft" target="_blank">OpenSea</a>
      <a href="https://magiceden.io/marketplace/gino-nft" target="_blank">Magic Eden</a>
    </div>
  </header>


      <div class="grid" id="grid"></div>
      <script>
        const stories = ${JSON.stringify(stories)};
        const grid = document.getElementById('grid');
        
        stories.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = \`
            <img src="/output/\${item.file}" alt="\${item.file}" loading="lazy">
            <div class="caption">\${item.file}</div>
            <div class="story">\${item.story}</div>
          \`;
          grid.appendChild(card);
        });

        window.addEventListener('load', () => {
          document.getElementById('loader').style.display = 'none';
        });
      </script>
    </body>
    </html>
    `;

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(html);

  } else if (req.url.startsWith('/output/')) {
    const imgPath = path.join(__dirname, req.url);
    fs.readFile(imgPath, (err, data) => {
      if (err) { res.writeHead(404); res.end('File non trovato'); }
      else { res.writeHead(200, {'Content-Type':'image/png'}); res.end(data); }
    });

  } else {
    res.writeHead(404); res.end('Pagina non trovata');
  }
});

server.listen(PORT, () => console.log(`Server in ascolto su http://localhost:${PORT}`));
