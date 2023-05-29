
function showAlloggi(event)
{
  const alloggi = event.currentTarget;
  const alloggio = document.querySelector('#alloggi');

  const bl = document.querySelector('#list #bl');
  if(bl.className === 'list-si')
    {
    bl.classList.remove('list-si'); 
    bl.classList.add('bord');
    }
    if(document.querySelector('#list #cll').className === 'list-si'){
      document.querySelector('#list #cll').classList.remove('list-si');
      document.querySelector('#list #cll').classList.add('bord');
      }
  if(alloggio.className === 'hidden')
  {
    alloggi.classList.add('list-si');

    if(bl.className === 'list-si')
    {
    bl.classList.add('bord');
    }
    if(document.querySelector('#list #cll').className === 'list-si'){
      document.querySelector('#list #cll').classList.remove('list-si');
      document.querySelector('#list #cll').classList.add('bord');
      }
    alloggio.classList.remove('hidden');
    alloggi.classList.remove('bord');

    document.querySelector('h1').classList.remove('hidden');
    document.querySelector('#sub.subtitle').classList.remove('hidden');
    
    
  }

  alloggio.querySelector('.submit input').classList.remove('hidden');
  const a = document.querySelector('#aerei form');
  a.querySelector('.submit input').classList.add('hidden');

  document.querySelector('#todo form').classList.add('hidden');
  document.querySelector('#aerei').classList.add('hidden');
  document.querySelector('#todo input').classList.add('hidden');
  document.querySelector('#todo img').classList.add('hidden');

  document.querySelector('h1').classList.remove('hidden');
  document.querySelector('#sub.subtitle').classList.remove('hidden');

  const voli = document.querySelector("#aerei form");

  voli.querySelector('#voli #err1').classList.add('hidden');
  voli.querySelector('#voli #err1').classList.remove('errorj');
  voli.reset();

  const todo = document.querySelector("#todo form");
  todo.querySelector('.todoo').classList.remove('errorj');  
  todo.querySelector('#err2').classList.add('hidden');
  todo.querySelector('#err2').classList.remove('errorj');
  todo.reset();

  document.getElementById('results').innerHTML='';

}
const a = document.querySelector('#aerei');
const f= a.querySelector('#aiuto')
f.querySelector("#s1").addEventListener('click', changeS1);
f.querySelector("#s2").addEventListener('click', changeS2);


 function changeS1(event){
  const s1 = event.currentTarget;
  if(s1.className === 'scegli'){ 
   const v= document.querySelector('#aerei');
   const f=v.querySelector('#aiuto');
   const g=f.querySelector('#s2');
   g.classList.remove('scegli-si');
   g.classList.add('scegli');
   s1.classList.add('scegli-si');
   s1.classList.remove('scegli');

   const a = document.querySelector('#aerei');
   const h = a.querySelector('#voli');

  
    const genitore = a.querySelector('#voli #voli-a');
    const el_1 =  h.querySelector('#voli-a #destinazione_f');
    const el_2 =  h.querySelector('#voli-a #destinazione_fl');
    genitore.removeChild(el_1);
    genitore.removeChild(el_2);
    h.querySelector('#voli-b').classList.remove('hidden');
   
    document.querySelector('h1').classList.add('hidden');
    document.querySelector('#sub.subtitle').classList.add('hidden');

    document.querySelector('#aerei form').reset();

    
  }



 }
 
 function changeS2(event){
  const s2 = event.currentTarget;
  if(s2.className === 'scegli'){
    const v= document.querySelector('#aerei');
    const f=v.querySelector('#aiuto');
    const g=f.querySelector('#s1');
    g.classList.remove('scegli-si');
    g.classList.add('scegli');
    s2.classList.add('scegli-si');
    s2.classList.remove('scegli');

    const a = document.querySelector('#aerei');
    const h = a.querySelector('#voli');
    const label = document.createElement('div'); 
    label.textContent= 'Aeroporto di destinazione :';
    label.id = 'destinazione_fl';
    const dest= document.createElement('input');
    dest.classList.add('searchBar');
    dest.name = 'destinazione_f';
    dest.id = 'destinazione_f';
    dest.placeholder = 'Destinazione';
   
    h.querySelector('#voli-a').appendChild(label);
    h.querySelector('#voli-a').appendChild(dest);
    h.querySelector('#voli-b').classList.add('hidden');

    document.querySelector('h1').classList.add('hidden');
    document.querySelector('#sub.subtitle').classList.add('hidden');

    document.querySelector('#aerei form').reset();


    
  }

 }

function showVoli(event)
{
  const voli = event.currentTarget;
  const volo = document.querySelector('#aerei');

  voli.classList.remove('bord');
  voli.classList.add('list-si');
  if(document.querySelector('#list #alg').className === 'list-si'){
  document.querySelector('#list #alg').classList.remove('list-si');
  document.querySelector('#list #alg').classList.add('bord');
  }
  if(document.querySelector('#list #cll').className === 'list-si'){
  document.querySelector('#list #cll').classList.remove('list-si');
  document.querySelector('#list #cll').classList.add('bord');
  }

  volo.classList.remove('hidden');
  document.querySelector('h1').classList.remove('hidden');
  document.querySelector('#sub.subtitle').classList.remove('hidden');
 
  const alloggio = document.querySelector('#alloggi');
  alloggio.classList.add('hidden');
  document.querySelector('#todo input').classList.add('hidden');
  document.querySelector('#todo img').classList.add('hidden');
  document.querySelector('#todo form').classList.add('hidden');
  alloggio.querySelector('form .submit').classList.add('hidden');

  const a = document.querySelector('#aerei form');
  a.querySelector('.submit input').classList.remove('hidden');

  const hotel = document.querySelector("#alloggi form");
  hotel.querySelector('.dest').classList.remove('errorj');
  hotel.querySelector('#err').classList.add('hidden');
  hotel.querySelector('#err').classList.remove('errorj');
  hotel.reset();

  const todo = document.querySelector("#todo form");
  todo.querySelector('.todoo').classList.remove('errorj');  
  todo.querySelector('#err2').classList.add('hidden');
  todo.querySelector('#err2').classList.remove('errorj');
  todo.reset();

  document.querySelector('h1').classList.add('hidden');
  document.querySelector('#sub.subtitle').classList.add('hidden');

  event.preventDefault();
  
  document.getElementById('results').innerHTML='';

}

function showTodo(event)
{
  const td = event.currentTarget;
  td.classList.remove('bord');
  td.classList.add('list-si');

  if(document.querySelector('#list #alg').className === 'list-si'){
    document.querySelector('#list #alg').classList.remove('list-si');
    document.querySelector('#list #alg').classList.add('bord');
    }
    if(document.querySelector('#list #bl').className === 'list-si'){
    document.querySelector('#list #bl').classList.remove('list-si');
    document.querySelector('#list #bl').classList.add('bord');
    }
    document.querySelector('#todo form').classList.remove('hidden');
    const todo = document.querySelector('#todo');
    todo.querySelector('form img').classList.remove('hidden');
    todo.querySelector('form #cdf').classList.remove('hidden');
    todo.querySelector('form #cdf').classList.add('searchBar-todo');
    

    const alloggio = document.querySelector('#alloggi');
    alloggio.classList.add('hidden');

    const volo = document.querySelector('#aerei');
    volo.classList.add('hidden');

    
    document.querySelector('#aerei').classList.add('hidden');
    alloggio.querySelector('form .submit').classList.add('hidden');
  
    const a = document.querySelector('#aerei form');
    a.querySelector('.submit input').classList.add('hidden');

    document.querySelector('h1').classList.remove('hidden');
    document.querySelector('#sub.subtitle').classList.remove('hidden');

    const hotel = document.querySelector("#alloggi form");
    hotel.querySelector('.dest').classList.remove('errorj');
    hotel.querySelector('#err').classList.add('hidden');
    hotel.querySelector('#err').classList.remove('errorj');
    hotel.reset();

    const voli = document.querySelector("#aerei form");
    
    voli.querySelector('#voli #err1').classList.add('hidden');
    voli.querySelector('#voli #err1').classList.remove('errorj');
    voli.reset();

    document.querySelector('h1').classList.remove('hidden');
    document.querySelector('#sub.subtitle').classList.remove('hidden');

    document.getElementById('results').innerHTML='';
    
}



const alloggi = document.querySelector('#list #alg');
alloggi.addEventListener('click', showAlloggi);

const voli = document.querySelector('#list #bl');
voli.addEventListener('click', showVoli);

const farel = document.querySelector('#list #cll');
farel.addEventListener('click', showTodo);

//---------------------VOLI---------------------------//


const form_voli = document.querySelector('#aerei form');
form_voli.addEventListener('submit', searchCodice);

function searchCodice(event)
{
  const form = event.currentTarget;
  const s1 = form.querySelector('#aiuto #s1');
  const s2 = form.querySelector('#aiuto #s2');
  const voli = form.querySelector('#voli');
  const partenza_v_input = voli.querySelector('#voli-a #partenza-v');
  const partenza_v_value = encodeURIComponent(partenza_v_input.value);
  const andata_input = voli.querySelector('#voli-a #Andata');
  const andata_value = encodeURIComponent(andata_input.value);
  const destinazione_v_input = voli.querySelector('#voli-b #destinazione-v');
  const destinazione_v_value = encodeURIComponent(destinazione_v_input.value);
  const ritorno_input = voli.querySelector('#voli-b #Ritorno');
  const ritorno_value = encodeURIComponent(ritorno_input.value);

  const formData = new FormData(form);
  const date1 = new Date(andata_value);
  const data_odierna = new Date();
  const date2 = new Date(ritorno_value);

  if(s1.className === 'scegli-si'){

  
  if(partenza_v_value.length === 0 || destinazione_v_value.length === 0  || (date1 > date2 || (date1.getTime() === date2.getTime()))|| (date1 < data_odierna || date2 <= data_odierna)){
    form.reset();
    
    form.querySelector('#err1').classList.remove('hidden');
    form.querySelector('#voli #err1').classList.add('errorj');
   }else{

    fetch('search_voli.php?', {method:'post', body: formData}).then(searchResponse).then(jsonAeR);
    
    form.querySelector('#err1').classList.add('hidden');
    form.querySelector('#voli #err1').classList.remove('errorj');
   }
  }
  if(s2.className === 'scegli-si'){
 
    const data_odierna = new Date();
    const date2 = new Date(andata_value);
    const destinazione_f_input = voli.querySelector('#voli-a #destinazione_f');
    const destinazione_f_value = encodeURIComponent(destinazione_f_input.value);
    if(partenza_v_value.length === 0 || destinazione_f_value.length === 0 ||  date2 <= data_odierna ){
    form.reset();
   
    form.querySelector('#err1').classList.remove('hidden');
    form.querySelector('#voli #err1').classList.add('errorj');

    }else{
    fetch('search_voli_andata.php?',{method:'post', body: formData} ).then(searchResponse).then(jsonA);
    
    form.querySelector('#err1').classList.add('hidden');
    form.querySelector('#voli #err1').classList.remove('errorj');
    }
  }
  event.preventDefault();
  
  


}

function searchResponse(response){
  console.log(response.url);
  if(!response.ok)
  {
    console.log('Risposta non valida');
  }
  else
  return response.json();
}


function jsonAeR(json)
{
  console.log('ok');
  console.log(json);

  
  const container = document.getElementById('results');
  container.innerHTML = '';
  var i=0;

  if (json.success === false) {noResults(); return;}
  
  for(let volo in json.data.buckets) {
          
    if(i<3){
          const card = document.createElement('div');
          
           if(json.data.buckets[volo].items.length === 1)
           i=0;

           card.dataset.id = json.data.buckets[volo].items[i].id;
           card.dataset.origin = json.data.buckets[volo].items[i].legs[0].origin.city;
          card.dataset.destination = json.data.buckets[volo].items[i].legs[0].destination.city;
          card.dataset.origin_aeroport = json.data.buckets[volo].items[i].legs[0].origin.name;
          card.dataset.destination_aeroport = json.data.buckets[volo].items[i].legs[0].destination.name;
          card.dataset.compagnia = json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name;
          card.dataset.prezzo = json.data.buckets[volo].items[i].price.formatted;
          card.dataset.scali =json.data.buckets[volo].items[i].legs[0].stopCount;
          card.dataset.durataminuti = json.data.buckets[volo].items[i].legs[0].durationInMinutes;
          card.dataset.codvolo = json.data.buckets[volo].items[i].legs[0].segments[0].flightNumber;
          card.dataset.orario_partenza = json.data.buckets[volo].items[i].legs[0].departure;
          card.dataset.orario_arrivo = json.data.buckets[volo].items[i].legs[0].arrival;
          card.dataset.deltaTime = json.data.buckets[volo].items[i].legs[0].timeDeltaInDays;
          card.dataset.tipo = json.data.buckets[volo].name;
          card.dataset.durataminuti_2 = json.data.buckets[volo].items[i].legs[1].durationInMinutes;
          card.dataset.codvolo_2 = json.data.buckets[volo].items[i].legs[1].segments[0].flightNumber;
          card.dataset.orario_partenza_2 = json.data.buckets[volo].items[i].legs[1].departure;
          card.dataset.orario_arrivo_2 = json.data.buckets[volo].items[i].legs[1].arrival;
          card.dataset.deltaTime_2 = json.data.buckets[volo].items[i].legs[1].timeDeltaInDays;
       
          const p = document.querySelector('#aerei form');
          const d= p.querySelector('#voli #voli-a');
          const data_partenza = d.querySelector('#Andata').value;
          card.dataset.data_partenza = data_partenza;
          card.classList.add('vol');
           
           
           const trackInfo = document.createElement('div');
           trackInfo.classList.add('trackInfo');
           card.appendChild(trackInfo);
         
           const title = document.createElement('div');
           title.textContent = json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name;
           if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'ITA Airways')
           title.classList.add('ita');
           else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name=== 'Ryanair')
           title.classList.add('rayan');
           else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'Norse Atlantic Airways')
           title.classList.add('na');
           else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'British Airways')
           title.classList.add('bb');
           else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'Air France')
           title.classList.add('fr');
           else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'easyJet')
           title.classList.add('ej');
           else
           title.classList.add('oth');
           trackInfo.appendChild(title);
         
           const infoContainer = document.createElement('div');
           infoContainer.classList.add("info_voli");
           trackInfo.appendChild(infoContainer);
         
         
           const info = document.createElement('div');
           info.classList.add("prezzo_");
           info.textContent = json.data.buckets[volo].items[i].price.formatted;
           infoContainer.appendChild(info);
         
           const info_1 = document.createElement('div');
           info_1.classList.add("voliamo");
           infoContainer.appendChild(info_1);
         
           const info_2 = document.createElement('div');
           info_2.classList.add("voliamo");
           infoContainer.appendChild(info_2);
         
           const info_3 = document.createElement('div');
           info_3.classList.add("voliamo");
           infoContainer.appendChild(info_3);

           const info_4 = document.createElement('div');
           info_4.classList.add("voliamo");
           infoContainer.appendChild(info_4);

           const tipo = document.createElement('strong');
          
          
           tipo.classList.add('green')
           tipo.innerHTML = "The " + json.data.buckets[volo].name;
           info_4.appendChild(tipo);
         
         
           const partenza = document.createElement('strong');
           partenza.classList.add('importante')
           partenza.innerHTML = "PARTENZA";
           info_1.appendChild(partenza);
         
           const partenza_v = document.createElement('div');
           partenza_v.innerHTML = json.data.buckets[volo].items[i].legs[0].origin.name + " (" + json.data.buckets[volo].items[i].legs[0].origin.city + ")";
           info_1.appendChild(partenza_v);
         
         
           const destinazione = document.createElement('strong');
           destinazione.classList.add('importante')
           destinazione.innerHTML = "DESTINAZIONE";
           info_2.appendChild(destinazione);
         
           const destinazione_v = document.createElement('div');
           destinazione_v.innerHTML = json.data.buckets[volo].items[i].legs[0].destination.name + " (" + json.data.buckets[volo].items[i].legs[0].destination.city + ") ";
           info_2.appendChild(destinazione_v);
         
           const scalo = document.createElement('strong');
           scalo.classList.add('importante')
           scalo.innerHTML = "SCALI: " + json.data.buckets[volo].items[i].legs[0].stopCount;
           info_3.appendChild(scalo);
         
         
           const saveForm = document.createElement('div');
           saveForm.classList.add("saveForm1");
           card.appendChild(saveForm);
           const save = document.createElement('div');
           save.value='';
           save.classList.add("save_");
           saveForm.appendChild(save);

        
            saveForm.addEventListener('click',saveVoli_AR );

            const saveForm1 = document.createElement('div');
            saveForm1.classList.add("saveForm");
            card.appendChild(saveForm1);
            const save1 = document.createElement('div');
            save1.value='';
            save1.classList.add("delete_");
            saveForm1.appendChild(save1);
 
         
             saveForm1.addEventListener('click', deleteVoli_A);

           
              const qInfo= document.createElement('div');
              qInfo.classList.add("qInfo");

              const Cntt= document.createElement('div');
              Cntt.classList.add('info_voli');
              qInfo.appendChild(Cntt);

              const Cntt2= document.createElement('div');
              Cntt2.classList.add('info_voli');
              qInfo.appendChild(Cntt2);

              //ANDATA
              const C_1= document.createElement('div');
              C_1.classList.add('voliamo');
              Cntt.appendChild(C_1);

              

             
           

              const TC_3 = document.createElement('p');
              TC_3.classList.add('importante_');
              TC_3.textContent = "ORARIO PARTENZA: "+ json.data.buckets[volo].items[i].legs[0].departure;
              C_1.appendChild(TC_3);


              const TC_1 = document.createElement('p');
              TC_1.classList.add('importante_');
              TC_1.textContent = "ORARIO ARRIVO: " + json.data.buckets[volo].items[i].legs[0].arrival;
              C_1.appendChild(TC_1);


           

              const C_3 = document.createElement('div');
              C_3.classList.add('voliamo');
              Cntt.appendChild(C_3);

              const totalMinutes = json.data.buckets[volo].items[i].legs[0].durationInMinutes;
              const hours = Math.floor(totalMinutes / 60);
              const minutes = totalMinutes % 60;

              const durata = document.createElement('strong');
              durata.classList.add('classic');
              durata.innerHTML = 'Durata volo:  '+ hours +"h " + minutes +"min";
              C_3.appendChild(durata);

              const cd = document.createElement('strong');
              cd.classList.add('classic');
              cd.innerHTML = 'N° volo:  '+ json.data.buckets[volo].items[i].legs[0].segments[0].flightNumber;
              C_3.appendChild(cd);

              const delta = document.createElement('strong');
              delta.classList.add('classic');
              delta.innerHTML = "Time Delta in giorni:  +" + json.data.buckets[volo].items[i].legs[0].timeDeltaInDays +" D";
              C_3.appendChild(delta);


              //RITORNO

              const C_4= document.createElement('div');
              C_4.classList.add('voliamo');
              Cntt2.appendChild(C_4);

              

             
           

              const TC_4 = document.createElement('p');
              TC_4.classList.add('importante_');
              TC_4.textContent = "ORARIO PARTENZA: "+ json.data.buckets[volo].items[i].legs[1].departure;
              C_4.appendChild(TC_4);


              const TC_5 = document.createElement('p');
              TC_5.classList.add('importante_');
              TC_5.textContent = "ORARIO ARRIVO: " + json.data.buckets[volo].items[i].legs[1].arrival;
              C_4.appendChild(TC_5);


           

              const C_5 = document.createElement('div');
              C_5.classList.add('voliamo');
              Cntt2.appendChild(C_5);

              const totalMinutes_r = json.data.buckets[volo].items[i].legs[1].durationInMinutes;
              const hours_r = Math.floor(totalMinutes_r / 60);
              const minutes_r = totalMinutes % 60;

              const durata_r = document.createElement('strong');
              durata_r.classList.add('classic');
              durata_r.innerHTML = 'Durata volo:  '+ hours_r +"h " + minutes_r +"min";
              C_5.appendChild(durata_r);

              const cd_r = document.createElement('strong');
              cd_r.classList.add('classic');
              cd_r.innerHTML = 'N° volo:  '+ json.data.buckets[volo].items[i].legs[1].segments[0].flightNumber;
              C_5.appendChild(cd_r);

              const delta_r = document.createElement('strong');
              delta_r.classList.add('classic');
              delta_r.innerHTML = "Time Delta in giorni:  +" + json.data.buckets[volo].items[i].legs[1].timeDeltaInDays +" D";
              C_5.appendChild(delta_r);

             

           
              card.appendChild(qInfo);

             
              card.classList.add("unselected");
               card.addEventListener('click', resizeCard2);
               container.appendChild(card);
              // aggiungiamo l'event listener per il resize
              i++;
             
           
           
    }      
  }

}

 //----------------------SALVA--VOLI -A E R ---------------------------------//
  function saveVoli_AR(event){
    console.log("Salvataggio")
    
  
    const card = event.currentTarget.parentNode;
    if(card.className !== 'sel_'){
    const previousSelection = mySelection[0];
    if (previousSelection) {
      previousSelection.classList.remove('sel_');
      mySelection.splice(0);
    }
    
    card.classList.add('sel_');
    mySelection.push(card);
  }
  
    
    const formData = new FormData();
    formData.append('id', card.dataset.id);
    formData.append('partenza', card.dataset.origin);
    formData.append('destinazione', card.dataset.destination);
    formData.append('origin_aeroport', card.dataset.origin_aeroport);
    formData.append('prezzo', card.dataset.prezzo);
    formData.append('destination_aeroport', card.dataset.destination_aeroport);
    formData.append('compagnia', card.dataset.compagnia);
    formData.append('scali', card.dataset.scali);
    formData.append('codvolo', card.dataset.codvolo);
    formData.append('durata_minuti', card.dataset.durataminuti);
    formData.append('orario_partenza', card.dataset.orario_partenza);
    formData.append('orario_arrivo', card.dataset.orario_arrivo);
    formData.append('delta', card.dataset.deltaTime);
    formData.append('codvolo2', card.dataset.codvolo2);
    formData.append('durata_minuti2', card.dataset.durataminuti2);
    formData.append('orario_partenza2', card.dataset.orario_partenza2);
    formData.append('orario_arrivo2', card.dataset.orario_arrivo2);
    formData.append('delta2', card.dataset.deltaTime2);

    formData.append('tipo', card.dataset.tipo);
    formData.append('data_partenza', card.dataset.data_partenza);
    
    fetch("save_volo_ar.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
    event.stopPropagation();
  
  
  
  }
  
  //---------------------DELETE VOLI ANDATA r RITORNO------------------------------//

  function deleteVoli_A(event)
{
  console.log("Eliminazione")
  

  
  const card = event.currentTarget.parentNode;
  card.classList.remove('sel_');
  
  
  
  
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('city', card.dataset.destination);
  formData.append('data_partenza', card.dataset.data_partenza);
 
  fetch("delete_voli_a.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();

}


//----------------------------------------------------------------------------//
function jsonA(json)
{
  console.log('ok_a');
  console.log(json);

  const container = document.getElementById('results');
  container.innerHTML = '';
  var i=0;

  if (json.success === false) {noResults(); return;}
  
  for(let volo in json.data.buckets) {

    if(i< 3){

          
             const card = document.createElement('div');
             card.dataset.id = json.data.buckets[volo].items[i].id;
             card.dataset.origin = json.data.buckets[volo].items[i].legs[0].origin.city;
             card.dataset.destination = json.data.buckets[volo].items[i].legs[0].destination.city;
             card.dataset.origin_aeroport = json.data.buckets[volo].items[i].legs[0].origin.name;
             card.dataset.destination_aeroport = json.data.buckets[volo].items[i].legs[0].destination.name;
             card.dataset.compagnia = json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name;
             card.dataset.prezzo = json.data.buckets[volo].items[i].price.formatted;
             card.dataset.scali =json.data.buckets[volo].items[i].legs[0].stopCount;
             card.dataset.durataminuti = json.data.buckets[volo].items[i].legs[0].durationInMinutes;
             card.dataset.codvolo = json.data.buckets[volo].items[i].legs[0].segments[0].flightNumber;
             card.dataset.orario_partenza = json.data.buckets[volo].items[i].legs[0].departure;
             card.dataset.orario_arrivo = json.data.buckets[volo].items[i].legs[0].arrival;
             card.dataset.deltaTime = json.data.buckets[volo].items[i].legs[0].timeDeltaInDays;
             card.dataset.tipo = json.data.buckets[volo].name;
             const p = document.querySelector('#aerei form');
             const d= p.querySelector('#voli #voli-a');
             const data_partenza = d.querySelector('#Andata').value;
             card.dataset.data_partenza = data_partenza;

             card.classList.add('vol');
             
           
             const trackInfo = document.createElement('div');
             trackInfo.classList.add('trackInfo');
             card.appendChild(trackInfo);
           
             const title = document.createElement('div');
             title.textContent = json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name;
             if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'ITA Airways')
             title.classList.add('ita');
             else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name=== 'Ryanair')
             title.classList.add('rayan');
             else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'Norse Atlantic Airways')
             title.classList.add('na');
             else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'British Airways')
             title.classList.add('bb');
             else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'Air France')
             title.classList.add('fr');
             else if(json.data.buckets[volo].items[i].legs[0].segments[0].operatingCarrier.name === 'easyJet')
             title.classList.add('ej');
             else
             title.classList.add('oth');
             trackInfo.appendChild(title);
           
             const infoContainer = document.createElement('div');
             infoContainer.classList.add("info_voli");
             trackInfo.appendChild(infoContainer);
           
           
             const info = document.createElement('div');
             info.classList.add("prezzo_");
             info.textContent = json.data.buckets[volo].items[i].price.formatted;
             infoContainer.appendChild(info);
           
             const info_1 = document.createElement('div');
             info_1.classList.add("voliamo");
             infoContainer.appendChild(info_1);
           
             const info_2 = document.createElement('div');
             info_2.classList.add("voliamo");
             infoContainer.appendChild(info_2);
           
             const info_3 = document.createElement('div');
             info_3.classList.add("voliamo");
             infoContainer.appendChild(info_3);
  
             const info_4 = document.createElement('div');
             info_4.classList.add("voliamo");
             infoContainer.appendChild(info_4);
  
             const tipo = document.createElement('strong');
            
            
             tipo.classList.add('green')
             tipo.innerHTML = "The " + json.data.buckets[volo].name;
             info_4.appendChild(tipo);
           
           
             const partenza = document.createElement('strong');
             partenza.classList.add('importante')
             partenza.innerHTML = "PARTENZA";
             info_1.appendChild(partenza);
           
             const partenza_v = document.createElement('div');
             partenza_v.innerHTML = json.data.buckets[volo].items[i].legs[0].origin.name + " (" + json.data.buckets[volo].items[i].legs[0].origin.city + ")";
             info_1.appendChild(partenza_v);
           
           
             const destinazione = document.createElement('strong');
             destinazione.classList.add('importante')
             destinazione.innerHTML = "DESTINAZIONE";
             info_2.appendChild(destinazione);
           
             const destinazione_v = document.createElement('div');
             destinazione_v.innerHTML = json.data.buckets[volo].items[i].legs[0].destination.name + " (" + json.data.buckets[volo].items[i].legs[0].destination.city + ") ";
             info_2.appendChild(destinazione_v);
           
             const scalo = document.createElement('strong');
             scalo.classList.add('importante')
             scalo.innerHTML = "SCALI: " + json.data.buckets[volo].items[i].legs[0].stopCount;
             info_3.appendChild(scalo);
           
           
             const saveForm = document.createElement('div');
             saveForm.classList.add("saveForm");
             card.appendChild(saveForm);
             const save = document.createElement('div');
             save.value='';
             save.classList.add("save_");
             saveForm.appendChild(save);
             saveForm.addEventListener('click',saveVoli_A );


             const saveForm1 = document.createElement('div');
             saveForm1.classList.add("saveForm1");
             card.appendChild(saveForm1);
             const save1 = document.createElement('div');
             save1.value='';
             save1.classList.add("delete_");
             saveForm1.appendChild(save1);
             saveForm1.addEventListener('click',deleteVoli_A);
  
           
                const qInfo= document.createElement('div');
                qInfo.classList.add("qInfo");
  
                const Cntt= document.createElement('div');
                Cntt.classList.add('info_voli');
                qInfo.appendChild(Cntt);
  
                const C_1= document.createElement('div');
                C_1.classList.add('voliamo');
                Cntt.appendChild(C_1);
  
                
  
               
             
  
                const TC_3 = document.createElement('p');
                TC_3.classList.add('importante_');
                TC_3.textContent = "ORARIO PARTENZA: "+ json.data.buckets[volo].items[i].legs[0].departure;
                C_1.appendChild(TC_3);
  
  
                const TC_1 = document.createElement('p');
                TC_1.classList.add('importante_');
                TC_1.textContent = "ORARIO ARRIVO: " + json.data.buckets[volo].items[i].legs[0].arrival;
                C_1.appendChild(TC_1);
  
  
             
  
                const C_3 = document.createElement('div');
                C_3.classList.add('voliamo');
                Cntt.appendChild(C_3);
  
                const totalMinutes = json.data.buckets[volo].items[i].legs[0].durationInMinutes;
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
  
                const durata = document.createElement('strong');
                durata.classList.add('classic');
                durata.innerHTML = 'Durata volo:  '+ hours +"h " + minutes +"min";
                C_3.appendChild(durata);
  
                const cd = document.createElement('strong');
                cd.classList.add('classic');
                cd.innerHTML = 'N° volo:  '+ json.data.buckets[volo].items[i].legs[0].segments[0].flightNumber;
                C_3.appendChild(cd);
  
                const delta = document.createElement('strong');
                delta.classList.add('classic');
                delta.innerHTML = "Time Delta in giorni:  +" + json.data.buckets[volo].items[i].legs[0].timeDeltaInDays +" D";
                C_3.appendChild(delta);
  
               
  
             
                card.appendChild(qInfo);
  
                
                card.classList.add("unselected");
                 card.addEventListener('click', resizeCard1);
                 container.appendChild(card);
                // aggiungiamo l'event listener per il resize
               i++;
              
            }     
  }      
}


//-------------------------SALVA--VOLI--ANDATA----------------------//

function saveVoli_A(event){
  console.log("Salvataggio")
  

  const card = event.currentTarget.parentNode;
  if(card.className !== 'sel_'){
  const previousSelection = mySelection[0];
  if (previousSelection) {
    previousSelection.classList.remove('sel_');
    mySelection.splice(0);
  }
  
  card.classList.add('sel_');
  mySelection.push(card);
}

  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('partenza', card.dataset.origin);
  formData.append('destinazione', card.dataset.destination);
  formData.append('origin_aeroport', card.dataset.origin_aeroport);
  formData.append('prezzo', card.dataset.prezzo);
  formData.append('destination_aeroport', card.dataset.destination_aeroport);
  formData.append('compagnia', card.dataset.compagnia);
  formData.append('scali', card.dataset.scali);
  formData.append('codvolo', card.dataset.codvolo);
  formData.append('durata_minuti', card.dataset.durataminuti);
  formData.append('orario_partenza', card.dataset.orario_partenza);
  formData.append('orario_arrivo', card.dataset.orario_arrivo);
  formData.append('delta', card.dataset.deltaTime);
  formData.append('tipo', card.dataset.tipo);
  formData.append('data_partenza', card.dataset.data_partenza);
  
  fetch("save_volo_a.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();



}

//---------------------DELETE VOLI ANDATA------------------------------//
function deleteVoli_A(event)
{
  console.log("Eliminazione")
  
  const card = event.currentTarget.parentNode;
  card.classList.remove('sel_');
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('city', card.dataset.destination);
  formData.append('data_partenza', card.dataset.data_partenza);
 
  fetch("delete_voli_a.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();
}


//-------------------COSE DA FARE--------------------------------------//

const form_todo = document.querySelector("#todo form");
form_todo.addEventListener("submit", searchDafare);


function searchDafare(event)
{
  const form = event.currentTarget;
  const f_c = form.querySelector('.todoo #cdf');
  const todo_value = encodeURIComponent(f_c.value);

  if(todo_value.length === 0 ){
    form.reset();
    form.querySelector('.todoo').classList.add('errorj');
    form.querySelector('#err2').classList.remove('hidden');
    form.querySelector('#err2').classList.add('errorj');
  }else{
  fetch("search_locationId.php?Location=" + todo_value).then(searchResponse).then(jsonTodo);
  form.querySelector('.todoo').classList.remove('errorj');
  form.querySelector('#err2').classList.add('hidden');
  form.querySelector('#err2').classList.remove('errorj');
  }
  event.preventDefault();

}

function jsonTodo(json)
{

  
  console.log('consegnato_todo');
  if (json.status == 400) {
    const errore = document.createElement("h3"); 
    const messaggio = document.createTextNode(json.detail); 
    errore.appendChild(messaggio); 
    library.appendChild(errore);
    return
    }

  const results = json.data[1].location;

  split_results = results.split(', ');
  const latitude = split_results[0];
  const longitude = split_results[1];
  console.log(latitude);
  console.log(longitude);
 
  if(results.length == 0)
  {
  const errore = document.createElement("h3"); 
  const messaggio = document.createTextNode("Nessun LocationId trovato !"); 
  errore.appendChild(messaggio); 
  library.appendChild(errore);

  }
  const formDta = new FormData();
  formDta.append('latitude', latitude);
  formDta.append('longitude', longitude);

  fetch('search_todo.php?',{method:'post', body:formDta}).then(searchResponse).then(jsonDaFare);
}

function jsonDaFare(json)
{
  console.log('Ho da fare');
  console.log(json);
  const container = document.getElementById('results');
  container.innerHTML = '';
  const form_todo = document.querySelector("#todo form");
  const city = form_todo.querySelector('.todoo #cdf').value;

  if (!json.data.length) {noResults(); return;}
  let num_results = json.data.length;
  // Mostro al massimo 10
  if(num_results > 40)
    num_results = 40;
  for (let i=0; i<num_results; i++) {
    
  if(json.data[i].pictures[0] !== undefined){ 
  const card = document.createElement('div');
  card.dataset.id = json.data[i].id;
  card.dataset.name = json.data[i].name;
  card.dataset.image = json.data[i].pictures[0];
  card.dataset.city = city;
  
  if(json.data[i].shortDescription !== undefined)
  card.dataset.description = json.data[i].shortDescription; 
  else card.dataset.description = null;
   if(json.data[i].price.amount !== undefined)
  card.dataset.prezzo = json.data[i].price.amount;
  else card.dataset.prezzo = null;
  if(json.data[i].rating !== undefined)
  card.dataset.rating = json.data[i].rating;
  else card.dataset.rating = null;

  card.classList.add('track');
  
  
  const trackInfo = document.createElement('div');
  trackInfo.classList.add('trackInfo');
  card.appendChild(trackInfo);
  
    const img = document.createElement('img');
    img.src = json.data[i].pictures[0];
    img.classList.add('img_list');
    trackInfo.appendChild(img);
 

  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  trackInfo.appendChild(infoContainer);

  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);

  const name = document.createElement('strong');
  name.innerHTML = json.data[i].name;
  info.appendChild(name);

  const rating = document.createElement('a');
  rating.innerHTML = "Rating: " + json.data[i].rating;
  if(json.data[i].rating === undefined)
  rating.innerHTML = "Rating: -";
  info.appendChild(rating);

  const saveForm = document.createElement('div');
  saveForm.classList.add("saveForm");
  card.appendChild(saveForm);
  const save = document.createElement('div');
  save.value='';
  save.classList.add("save");
  saveForm.appendChild(save);

  saveForm.addEventListener('click',saveToDo);

  const saveForm1 = document.createElement('div');
  saveForm1.classList.add("saveForm1");
  card.appendChild(saveForm1);
  const save1 = document.createElement('div');
  save1.value='';
  save1.classList.add("delete");
  saveForm1.appendChild(save1);
  saveForm1.addEventListener('click',deleteToDo);

  const qInfo= document.createElement('div');
  qInfo.classList.add("qInfo");
  const Titolo = document.createElement('strong');
  Titolo.innerHTML = json.data[i].name;
  qInfo.appendChild(Titolo);
  const popularity = document.createElement('p');
 
  
  if(json.data[i].shortDescription === undefined){
  popularity.innerHTML = 'Descrizione: (non trovata) ';}
  else {

    popularity.innerHTML = 'Descrizione: '+json.data[i].shortDescription;}

  qInfo.appendChild(popularity);

  const duration = document.createElement('p');
  const durationMs = json.data[i].price.amount;
  const durationMin  = json.data[i].price.currencyCode;
  if( json.data[i].price.amount === '0.0' || json.data[i].price.amount === undefined || json.data[i].price.currencyCode === undefined ){
    duration.innerHTML = "Prezzo: --";
  }
  else 
  duration.innerHTML = "Prezzo: "+ durationMs+" "+ durationMin;
  duration.classList.add("duration");


  qInfo.appendChild(duration);
  card.appendChild(qInfo);

 
  card.classList.add("unselected");
  // aggiungiamo l'event listener per il resize
  card.addEventListener('click', resizeCard);

  container.appendChild(card);
  }
  }

}
//-------------SALVA COSE DA FARE --------------//
function saveToDo(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  console.log("Salvataggio")
 
  const card = event.currentTarget.parentNode;
  card.classList.add('sel');
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('nome', card.dataset.name);
  formData.append('image', card.dataset.image);
  formData.append('description', card.dataset.description);
  formData.append('prezzo', card.dataset.prezzo);
  formData.append('rating', card.dataset.rating);
  formData.append('city', card.dataset.city);
  fetch("save_ToDo.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();
}

//-------------ELIMINA COSE DA FARE --------------//
function deleteToDo(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  console.log("Eliminazione")
  
  const card = event.currentTarget.parentNode;
  card.classList.remove('sel');
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
 
  fetch("delete_ToDo.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();
}

function dispatchResponse(response){

  console.log(response);
  return response.json().then(databaseResponse); 
}



function dispatchError(error) { 
  console.log("Errore");
}

function databaseResponse(json) {
  if (!json.ok) {
      dispatchError();
      return null;
  }
  
}



  

//---------------------------------------------//
function resizeCard(event){  
  console.log("Resize song");
  const track = event.currentTarget;
  
  if (!event.currentTarget.classList.contains("selected")){
  overlay.classList.remove("hidden");

  event.currentTarget.classList.remove("unselected");
  event.currentTarget.classList.add("selected");
 
  event.currentTarget.querySelector('img').classList.add("img-selected"); 
  event.currentTarget.querySelector('.qInfo').classList.add("show");
  event.currentTarget.querySelector('.infoContainer').classList.add("infoSelected");

  
  const form = event.currentTarget.querySelector('.saveForm');
  form.classList.add("hidden");
  const form1 = event.currentTarget.querySelector('.saveForm1');
  form1.classList.add("hidden");

} else {
  console.log('already selected');
}
}

function resizeCard1(event){  
  console.log("Resize song");
  const track = event.currentTarget;
  
  if (!event.currentTarget.classList.contains("selected")){
  overlay.classList.remove("hidden");

  event.currentTarget.classList.remove("unselected");
  event.currentTarget.classList.add("selected");
  event.currentTarget.querySelector('.prezzo_').classList.add("show2");
  event.currentTarget.querySelector('.green').classList.add("hidden");
  event.currentTarget.querySelector('.qInfo').classList.add("show1");
  event.currentTarget.querySelector('.info_voli').classList.add("infoSelected");

  
  const form = event.currentTarget.querySelector('.saveForm');
  form.classList.add("hidden");
  const form1 = event.currentTarget.querySelector('.saveForm1');
  form1.classList.add("hidden");

} else {
  console.log('already selected');
}
}

function resizeCard2(event){  
  console.log("Resize song");
  const track = event.currentTarget;
 
  if (!event.currentTarget.classList.contains("selected")){
  overlay.classList.remove("hidden");

  event.currentTarget.classList.remove("unselected");
  event.currentTarget.classList.add("selected");
  event.currentTarget.querySelector('.prezzo_').classList.add("show2");
  event.currentTarget.querySelector('.green').classList.add("hidden");
  event.currentTarget.querySelector('.qInfo').classList.add("show3");
  event.currentTarget.querySelector('.info_voli').classList.add("infoSelected");

  
  const form = event.currentTarget.querySelector('.saveForm');
  form.classList.add("hidden");
  const form1 = event.currentTarget.querySelector('.saveForm1');
  form1.classList.add("hidden");

} else {
  console.log('already selected');
}
}



const overlay = document.getElementById("overlay");
overlay.addEventListener('click', closeModal);




function closeModal(event){
  console.log("Close modal");
  event.currentTarget.classList.add("hidden");
  const card = document.querySelector('.selected');
  card.classList.remove("selected");
  card.classList.remove("unselected");
  const imageNode = card.querySelector("img");
  if (imageNode)
  card.querySelector('img').classList.remove("img-selected");

  const ffNode = card.querySelector(".green");
  if (ffNode)
  card.querySelector('.green').classList.remove("hidden");

  const cNode = card.querySelector(".show1");
  if (cNode)
  card.querySelector('.qInfo').classList.remove("show1");

  const ccNode = card.querySelector(".show3");
  if (ccNode)
  card.querySelector('.qInfo').classList.remove("show3");

  const fNode = card.querySelector(".show2");
  if (fNode)
  card.querySelector('.prezzo_').classList.remove("show2");

  const pNode = card.querySelector(".info_voli");
  if (pNode)
  card.querySelector('.info_voli').classList.remove("infoSelected");

  const lNode = card.querySelector(".infoContainer");
  if (lNode)
  card.querySelector('.infoContainer').classList.remove("infoSelected");

  card.querySelector('.qInfo').classList.remove("show");

  const form = card.querySelector('.saveForm');
  form.classList.remove("hidden");
  const form1 = card.querySelector('.saveForm1');
  form1.classList.remove("hidden");

}

function noResults() {
  // Definisce il comportamento nel caso in cui non ci siano contenuti da mostrare
  const container = document.getElementById('results');
  container.innerHTML = '';
  const nores = document.createElement('div');
  nores.className = "loading";
  nores.textContent = "Nessun risultato.";
  container.appendChild(nores);
}

//--------------------------ALLOGGI----------------------------//

const form_hotel = document.querySelector("#alloggi form");
form_hotel.addEventListener("submit", searchlocationId);


function searchlocationId(event)
{
  const form = document.querySelector("#alloggi form");
  const destinazione_input = form.querySelector('.dest #destinazione_');
  const destinazione_value = encodeURIComponent(destinazione_input.value);

  const chin = form.querySelector('.dest #Check-in_');
  const chin_value = (chin.value);
  const chout = form.querySelector('.dest #Check-out_');
  const chout_value = (chout.value);

  const date1 = new Date(chin_value);
  const data_odierna =  new Date();
  const date2 = new Date(chout_value);


  if(destinazione_value.length === 0 || (date1 > date2 || (date1.getTime() === date2.getTime())) || (date1 < data_odierna || date2 <= data_odierna)){
    form.reset();
    form.querySelector('.dest').classList.add('errorj');
    form.querySelector('#err').classList.remove('hidden');
    form.querySelector('#err').classList.add('errorj');
   }else{
  fetch("search_locationId.php?Location=" + destinazione_value).then(searchResponse).then(jsonlocationId);
  form.querySelector('.dest').classList.remove('errorj');
  form.querySelector('#err').classList.add('hidden');
  form.querySelector('#err').classList.remove('errorj');
   }

  event.preventDefault();

}

function jsonlocationId(json)
{

  


  console.log('consegnato_locationId');
  if (json.status == 400) {
    const errore = document.createElement("h3"); 
    const messaggio = document.createTextNode(json.detail); 
    errore.appendChild(messaggio); 
    library.appendChild(errore);
    return
    }


  for(let id in json.data){
    if(json.data[id].class === 'City'){
       location_id = json.data[id].location_id;
      break;
    }
  }
  const results = location_id;
  console.log(results);
  if(results.length == 0)
  {
  const errore = document.createElement("h3"); 
  const messaggio = document.createTextNode("Nessun LocationId trovato !"); 
  errore.appendChild(messaggio); 
  library.appendChild(errore);
  }

  const form = document.querySelector("#alloggi form");
  const chin = form.querySelector('.dest #Check-in_');
  const chin_value = encodeURIComponent(chin.value);
  const chout = form.querySelector('.dest #Check-out_');
  const chout_value = encodeURIComponent(chout.value);

  const adulti_input = form.querySelector('#adulti #adulti_');
  const adulti_value = encodeURIComponent(adulti_input.options[adulti_input.selectedIndex].value);

  fetch("search_alloggi.php?LocationId="+results+"&adults="+adulti_value+"&check-in="+chin_value+"&check-out="+chout_value).then(searchResponse).then(jsonHotel);
   
  
  


}



function jsonHotel(json) {
  console.log('consegnato_hotel');
  console.log(json);

  const container = document.getElementById('results');
  container.innerHTML = '';
 

  if (!json.data.hotels.length) {noResults(); return;}
  for (let hotel in json.data.hotels) {
  const form_hotel = document.querySelector("#alloggi form");
  const partenza = form_hotel.querySelector('.dest #Check-in_').value;
  const ritorno = form_hotel.querySelector('.dest #Check-out_').value;
  const city = form_hotel.querySelector('.dest #destinazione_').value;
  const card = document.createElement('div');
  card.dataset.id = json.data.hotels[hotel].hotelId;
  card.dataset.name = json.data.hotels[hotel].name;
  card.dataset.image = json.data.hotels[hotel].heroImage;
  card.dataset.price = json.data.hotels[hotel].price;
  card.dataset.rating = json.data.hotels[hotel].rating.value;
  card.dataset.tripadvisor =json.data.hotels[hotel].reviewSummary.taImage;
  card.dataset.distance = json.data.hotels[hotel].distance;
  card.dataset.p_interest = json.data.hotels[hotel].relevantPoiDistance;
  card.dataset.rewiews = json.data.hotels[hotel].rating.description;
  card.dataset.city = city;
  card.dataset.partenza = partenza;
  card.dataset.ritorno = ritorno;
  card.classList.add('track');

  
  

  const trackInfo = document.createElement('div');
  trackInfo.classList.add('trackInfo');
  card.appendChild(trackInfo);
  
 
  if(json.data.hotels[hotel].heroImage !== undefined ){ 
    const img = document.createElement('img');
    img.src = json.data.hotels[hotel].heroImage;
    img.classList.add('img_list');
    trackInfo.appendChild(img);
    
  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  trackInfo.appendChild(infoContainer);

  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);

  const name = document.createElement('strong');
  name.innerHTML = json.data.hotels[hotel].name;
  info.appendChild(name);

  const price = document.createElement('a');
  price.innerHTML = "Price: " + json.data.hotels[hotel].price;
  if(json.data.hotels[hotel].price === undefined)
  price.innerHTML = "Price: --";
  info.appendChild(price);
    
  const valore = document.createElement('a');
  valore.innerHTML = "Rating: " + json.data.hotels[hotel].rating.value;
  if(json.data.hotels[hotel].rating.value === undefined)
  valore.innerHTML = "Rating: --";
  info.appendChild(valore);

  const saveForm = document.createElement('div');
  saveForm.classList.add("saveForm");
  card.appendChild(saveForm);
  const save = document.createElement('div');
  save.value='';
  save.classList.add("save_h");
  saveForm.appendChild(save);
  saveForm.addEventListener('click',  saveHotel);

 

  const saveForm1 = document.createElement('div');
  saveForm1.classList.add("saveForm1");
  card.appendChild(saveForm1);
  const save1 = document.createElement('div');
  save1.value='';
  save1.classList.add("delete");
  saveForm1.appendChild(save1);
  saveForm1.addEventListener('click',  deleteHotel);



  
  const qInfo= document.createElement('div');
  qInfo.classList.add("qInfo");
  const Titolo = document.createElement('strong');
  Titolo.innerHTML = json.data.hotels[hotel].name;
  qInfo.appendChild(Titolo);
 
  
  if(json.data.hotels[hotel].reviewSummary.taImage !== undefined){
  const Trip = document.createElement('img');
  Trip.src= json.data.hotels[hotel].reviewSummary.taImage;
  Trip.classList.add('img_trip');
  qInfo.appendChild(Trip);
}

  const popularity = document.createElement('p');
  popularity.innerHTML = 'Distance: '+ json.data.hotels[hotel].distance;
  qInfo.appendChild(popularity);
  const pp = document.createElement('p');
  if(json.data.hotels[hotel].relevantPoiDistance !== null)
  pp.innerHTML = 'Distance from  point of interest : '+ json.data.hotels[hotel].relevantPoiDistance;
  else  pp.innerHTML = 'Distance from  point of interest : -- ';
  qInfo.appendChild(pp);

  const duration = document.createElement('p');
  const durationMs = json.data.hotels[hotel].rating.description;
  
  duration.innerHTML = "Reviews from other travelers: "+durationMs
  duration.classList.add("duration");


  qInfo.appendChild(duration);
  card.appendChild(qInfo);


  card.classList.add("unselected");
  // aggiungiamo l'event listener per il resize
  card.addEventListener('click', resizeCard);

  container.appendChild(card);


  }
  }
}
const mySelection=[];
//-------------SALVA Alloggi --------------//
function saveHotel(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  console.log("Salvataggio")
 

  const card = event.currentTarget.parentNode; 

  if (card.className !== 'sel') {
    const previousSelection = mySelection[0];
  if (previousSelection) {
    previousSelection.classList.remove('sel');
    mySelection.splice(0);
  }
  
  card.classList.add('sel');
  mySelection.push(card);
}

 

  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('nome', card.dataset.name);
  formData.append('image', card.dataset.image);
  formData.append('description', card.dataset.description);
  formData.append('prezzo', card.dataset.price);
  formData.append('rating', card.dataset.rating);
  formData.append('city', card.dataset.city);
  formData.append('partenza', card.dataset.partenza);
  formData.append('ritorno', card.dataset.ritorno);
  formData.append('tripadvisor', card.dataset.tripadvisor);
  formData.append('punti_interesse', card.dataset.p_interest);
  formData.append('recensioni', card.dataset.rewiews);

  
  fetch("save_hotel.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();
  
}

//-------------ELIMINA ALLOGGI --------------//

function deleteHotel(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  console.log("Eliminazione")
  
  const card = event.currentTarget.parentNode;
  card.classList.remove('sel');
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('city', card.dataset.city);
  formData.append('partenza', card.dataset.partenza);
 
  fetch("delete_hotel.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();
  
}



//-------------------------------------------------//
