const form = document.forms['traduttore'].addEventListener('submit', searchCodice);

function searchCodice(event)
{
  const library = document.querySelector('#album');
  if (library.children.length > 1)
  {
    library.removeChild('#a');
    library.removeChild('#r');
  }

 const form = event.currentTarget;
 const voli = form.querySelector('#sistema');
 const partenza_input = voli.querySelector('#part');
 const partenza_value = encodeURIComponent(partenza_input.value);

 const destinazione_v_input = voli.querySelector('#dest');
 const destinazione_v_value = encodeURIComponent(destinazione_v_input.value);
  
  
  if(partenza_value.length === 0 || destinazione_v_value.length === 0 ){
    form.reset();

    voli.classList.add('errorj');
    const c = document.querySelector('#struct #album');
    c.querySelector('#album #err3').classList.remove('hidden');
    c.querySelector('#album #err3').classList.add('errorj');
  }else{
  fetch("search_codIATA.php?Location=" + partenza_value).then(searchResponse).then(jsonAndata);
  fetch("search_codIATA.php?Location=" + destinazione_v_value).then(searchResponse).then(jsonRitorno);
  form.querySelector('#sistema').classList.remove('errorj');
  const c = document.querySelector('#struct #album');
  c.querySelector('#album #err3').classList.add('hidden');
  c.querySelector('#album #err3').classList.remove('errorj');
  }

  event.preventDefault();
  
 


}

function searchResponse(response){
  console.log(response);
  if(!response.ok)
  {
    console.log('Risposta non valida');
  }
  else
  return response.json();
}

function jsonAndata(json)
{
  console.log('consegnato_IATA_a');
 
  if (json.status == 400) {
    const errore = document.createElement("h3"); 
    const messaggio = document.createTextNode(json.detail); 
    errore.appendChild(messaggio); 
    library.appendChild(errore);
    return
    }


   


  const container = document.getElementById('results');
  container.innerHTML = '';

  for (let cod in json.data) {
  const card = document.createElement('div');
  card.classList.add('vol');
 

  const Info = document.createElement('div');
  Info.classList.add('voliamo_cod');
  card.appendChild(Info);

  
  const codi = document.createElement('div');

  codi.classList.add('clss');
  codi.textContent="Codice IATA-Partenza: " + json.data[cod].iata_code;
  Info.appendChild(codi);

  const nome = document.createElement('div');
  nome.classList.add('clss');
  nome.textContent="Nome aeroporto-Partenza: " + json.data[cod].name;
  Info.appendChild(nome);

  const citta = document.createElement('div');
  citta.classList.add('clss');
  citta.textContent="Città: " + json.data[cod].city;
  Info.appendChild(citta);
  
  const paese = document.createElement('div');
  paese.classList.add('clss');
  paese.textContent="Paese: " + json.data[cod].country;
  Info.appendChild(paese);

  container.appendChild(card);
  }

}

function jsonRitorno(json)
{
  console.log('consegnato_IATA_r');
  

  if (json.status == 400) {
    const errore = document.createElement("h3"); 
    const messaggio = document.createTextNode(json.detail); 
    errore.appendChild(messaggio); 
    library.appendChild(errore);
    return
    }

    const container = document.getElementById('results_2');
    container.innerHTML = '';



  for (let cod in json.data) {
  const card = document.createElement('div');
  card.classList.add('vol');
 

  const Info = document.createElement('div');
  Info.classList.add('voliamo_cod');
  card.appendChild(Info);

  
  const codi = document.createElement('div');
 
  codi.classList.add('clss');
  
  codi.textContent="Codice IATA-Destinazione: " + json.data[cod].iata_code;
  Info.appendChild(codi);

  const nome = document.createElement('div');
  nome.classList.add('clss');
  nome.textContent="Nome aeroporto-Destinazione: " + json.data[cod].name;
  Info.appendChild(nome);

  const citta = document.createElement('div');
  citta.classList.add('clss');
  citta.textContent="Città: " + json.data[cod].city;
  Info.appendChild(citta);
  
  const paese = document.createElement('div');
  paese.classList.add('clss');
  paese.textContent="Paese: " + json.data[cod].country;
  Info.appendChild(paese);


  container.appendChild(card);
 
  }

}