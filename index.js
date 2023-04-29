//privatekey = '18a31a21c5a8fa8102747d1157484c9a6bb7e267'
//publickey = '688586fe9df74c840b11d70e519f0230'

const apikey = '688586fe9df74c840b11d70e519f0230';
const ts = '1';
const hash = '7793376c1a0647ffdc35306bca5c53ee';
const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=688586fe9df74c840b11d70e519f0230&hash=7793376c1a0647ffdc35306bca5c53ee';
const main =  document.getElementById("main");


fetch(url)
 .then(response => response.json())
 .then(response => printData(response.data.results)) 
 .catch( err => console.log('Tem algo de errado', err))

const printData = ( personagens) => {
    //console.log(personagens.length);
  let str = '<div class="row">';
  let i = 0;
  let name = [];
  let img = [];
  let bio = [];

  for( i = 0; i < personagens.length; i++){

    name[i]= personagens[i].name;
    img[i]= (personagens[i].thumbnail.path) + '.' +(personagens[i].thumbnail.extension);
    bio[i]= personagens[i].description;

    if(!name[i]){
        name[i]="Sinto muito mas esse heroi não existe";
    }
    if(!img[i]){
        img[i]="Sinto muito mas esse heroi não existe";
    }
    if(!bio[i]){
        bio[i]="Sinto muito mas esse heroi não tem biografia";
    }

    str = str + ` 
                <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img src="${img[i]}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${name[i]}</h5>
                        <p class="card-text">${bio[i]}</p>
                    </div>
                    </div>
                </div>
    
    `

  }
  str = str + '</div>'
  main.innerHTML = str;
}