const overlay = document.getElementById("overlay");
overlay.classList.add("hidden");



fetchViaggi();


function fetchViaggi(){
    fetch("fetch_viaggi.php").then(fetchResponse).then(fetchHotelJson);
}

fetchToDo();


function fetchToDo(){
    fetch("fetch_todo.php").then(fetchResponse).then(fetchtoDoJson);
}



function fetchResponse(response) {
    if (!response.ok) {return null};
    return response.json();
}

function fetchHotelJson(json) {
  console.log("Fetching...");
  console.log(json);
  if (!json.length) {
    noResults_();
    return;
  }

  const container = document.getElementById('results');
  container.innerHTML = '';

  for (let item of json) {

   

    if (item.volo_content && item.hotel_content) {
      const viaggioContainer = document.createElement('div');
      viaggioContainer.classList.add('super');
      viaggioContainer.classList.add('display-viaggio');
      container.appendChild(viaggioContainer);

      const viaggioElement = document.createElement('div');
      viaggioElement.classList.add('mio');
      viaggioElement.textContent = "My trip to " + item.hotel_content.city + ", Departure date: " + item.hotel_content.partenza;
      viaggioContainer.appendChild(viaggioElement);

      const cardHotel = createHotelCard(item.hotel_content);
      viaggioContainer.appendChild(cardHotel);

      const cardVolo = createVoloCard(item.volo_content);
      cardVolo.dataset.partenza=item.data_partenza;
      viaggioContainer.appendChild(cardVolo);

    }else{

      if (item.volo_content) {
        const viaggioContainer = document.createElement('div');
        viaggioContainer.classList.add('super');
        viaggioContainer.classList.add('display-viaggio');
        container.appendChild(viaggioContainer);

        const voloElement = document.createElement('div');
        voloElement.classList.add('mio');
        voloElement.textContent = "My trip to " + item.volo_content.destinazione + ", Departure date: " + item.data_partenza;
        viaggioContainer.appendChild(voloElement);

        const cardVolo = createVoloCard(item.volo_content);
        cardVolo.dataset.partenza = item.data_partenza;
        viaggioContainer.appendChild(cardVolo);
      }

      // Display hotel
      if (item.hotel_content) {
        const viaggioContainer = document.createElement('div');
        viaggioContainer.classList.add('super');
        viaggioContainer.classList.add('display-viaggio');
        container.appendChild(viaggioContainer);

        const hotelElement = document.createElement('div');
        hotelElement.classList.add('mio');
        hotelElement.textContent = "My trip to " + item.hotel_content.city + ", Departure date: " + item.hotel_content.partenza;
        viaggioContainer.appendChild(hotelElement);

        const cardHotel = createHotelCard(item.hotel_content);
        viaggioContainer.appendChild(cardHotel);
      }


    }


  }  


}

function createHotelCard(hotelContent) {
  const cardHotel = document.createElement('div');
  cardHotel.dataset.id = hotelContent.id;
  cardHotel.dataset.citta = hotelContent.city;
  cardHotel.dataset.partenza = hotelContent.partenza;
  cardHotel.classList.add('track');

  const trackInfo = document.createElement('div');
  trackInfo.classList.add('trackInfo');
  cardHotel.appendChild(trackInfo);

  const img = document.createElement('img');
  img.src = hotelContent.image;
  img.classList.add('img_list');
  trackInfo.appendChild(img);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add("infoContainer");
  trackInfo.appendChild(infoContainer);

  const info = document.createElement('div');
  info.classList.add("info");
  infoContainer.appendChild(info);

  const name = document.createElement('strong');
  name.innerHTML = hotelContent.name_hotel;
  info.appendChild(name);

  const price = document.createElement('a');
  price.innerHTML = "Price: " + hotelContent.prezzo;
  if (hotelContent.prezzo === undefined)
    price.innerHTML = "Price: --";
  info.appendChild(price);

  const valore = document.createElement('a');
  valore.innerHTML = "Rating: " + hotelContent.rating;
  if (hotelContent.rating === undefined)
    valore.innerHTML = "Rating: --";
  info.appendChild(valore);

  
  const saveForm1 = document.createElement('div');
  saveForm1.classList.add("saveForm");
  cardHotel.appendChild(saveForm1);
  const save1 = document.createElement('div');
  save1.value='';
  save1.classList.add("delete");
  saveForm1.appendChild(save1);
  saveForm1.addEventListener('click',deleteHotel);

  return cardHotel;
}

function createVoloCard(voloContent) {
  const cardVolo = document.createElement('div');
  cardVolo.dataset.id = voloContent.id;
  cardVolo.dataset.citta = voloContent.destinazione;

  cardVolo.classList.add('vol');

  const trackInfo = document.createElement('div');
  trackInfo.classList.add('trackInfo');
  cardVolo.appendChild(trackInfo);

  const title = document.createElement('div');
  title.textContent = voloContent.compagnia;
 
  if (voloContent.compagnia === 'ITA Airways')
    title.classList.add('ita');
  else if (voloContent.compagnia === 'Ryanair')
    title.classList.add('rayan');
  else if (voloContent.compagnia === 'Norse Atlantic Airways')
    title.classList.add('na');
  else if (voloContent.compagnia === 'British Airways')
    title.classList.add('bb');
  else if (voloContent.compagnia === 'Air France')
    title.classList.add('fr');
  else if (voloContent.compagnia === 'easyJet')
    title.classList.add('ej');
  else
    title.classList.add('oth');
  trackInfo.appendChild(title);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add("info_voli");
  trackInfo.appendChild(infoContainer);

  const info1 = document.createElement('div');
  info1.classList.add("prezzo_");
  info1.textContent = voloContent.prezzo;
  infoContainer.appendChild(info1);

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
  tipo.innerHTML = "The " + voloContent.tipo;
  info_4.appendChild(tipo);

  const partenza = document.createElement('strong');
  partenza.classList.add('importante')
  partenza.innerHTML = "PARTENZA";
  info_1.appendChild(partenza);

  const partenza_v = document.createElement('div');
  partenza_v.innerHTML = voloContent.origin_aeroport + " (" + voloContent.partenza + ")";
  info_1.appendChild(partenza_v);

  const destinazione = document.createElement('strong');
  destinazione.classList.add('importante')
  destinazione.innerHTML = "DESTINAZIONE";
  info_2.appendChild(destinazione);

  const destinazione_v = document.createElement('div');
  destinazione_v.innerHTML = voloContent.destination_aeroport + " (" + voloContent.destinazione + ") ";
  info_2.appendChild(destinazione_v);

  const scalo = document.createElement('strong');
  scalo.classList.add('importante')
  scalo.innerHTML = "SCALI: " + voloContent.scali;
  info_3.appendChild(scalo);

  const saveForm1 = document.createElement('div');
  saveForm1.classList.add("saveForm");
  cardVolo.appendChild(saveForm1);
  const save1 = document.createElement('div');
  save1.value='';
  save1.classList.add("delete_");
  saveForm1.appendChild(save1);
  saveForm1.addEventListener('click',deleteVoli_A);

  return cardVolo;
}

function noResults_() {
  const container = document.getElementById('results');
  container.innerHTML = '';
  const nores = document.createElement('div');
  nores.className = "nores";
  nores.textContent = "Nessun risultato.";
  container.appendChild(nores);
}



function noResults() {
  const container = document.getElementById('results-todo');
  container.innerHTML = '';
  const nores = document.createElement('div');
  nores.className = "nores";
  nores.textContent = "Nessun risultato.";
  container.appendChild(nores);
}


function fetchtoDoJson(json) {
  console.log("Fetching...");
  console.log(json);
  if (!json.length) {
    noResults();
    return;
  }

  const activitiesByCity = {};
const container = document.getElementById('results-todo');
      container.innerHTML = '';
  for (let activity of json) {
    const cityName = activity.nome_citta;
    const content = activity.content;
  
    if (!activitiesByCity[cityName]) {
      activitiesByCity[cityName] = [];
    }
    activitiesByCity[cityName].push(content);
  }

  for (const cityName in activitiesByCity) {
    const cityActivities = activitiesByCity[cityName];
    const cityElement = document.createElement('div');
    cityElement.classList.add('city');

    const cityNameElement = document.createElement('h2');
    cityNameElement.textContent = cityName;
    cityElement.appendChild(cityNameElement);

    const activitiesList = document.createElement('div');
    activitiesList.classList.add('disp');

    for (let i = 0; i < cityActivities.length; i++) {
      const content = cityActivities[i];

      const activityItem = document.createElement('div');
      activityItem.dataset.id = content.id;
      activityItem.classList.add('track_');

      const activityInfo = document.createElement('div');
      activityInfo.classList.add('trackInfo');
      activityItem.appendChild(activityInfo);

      const imageElement = document.createElement('img');
      imageElement.src = content.image;
      imageElement.classList.add('img_list');
      activityInfo.appendChild(imageElement);

      const nameElement = document.createElement('h3');
      nameElement.textContent = content.name_attività;
      activityInfo.appendChild(nameElement);

      const priceElement = document.createElement('p');
      if( content.prezzo !== undefined || content.prezzo !== null)
      priceElement.textContent = 'Prezzo: ' + content.prezzo +' €' ;
      else priceElement.textContent = 'Prezzo: gratis';
      activityInfo.appendChild(priceElement);

      
      const ratingElement = document.createElement('p');
      if( content.rating !== undefined || content.rating !== null)
      ratingElement.textContent = 'Rating: ' + content.rating ;
      else if(content.rating === null) ratingElement.textContent = 'Rating: --';
      activityInfo.appendChild(ratingElement);

      const saveForm1 = document.createElement('div');
      saveForm1.classList.add("saveForm");
      activityItem.appendChild(saveForm1);
      const save1 = document.createElement('div');
      save1.value='';
      save1.classList.add("delete");
      saveForm1.appendChild(save1);
      saveForm1.addEventListener('click',deleteToDo);

      activitiesList.appendChild(activityItem);
    }

    cityElement.appendChild(activitiesList);
    container.appendChild(cityElement);
  }
}


function deleteHotel(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  console.log("Eliminazione")
  

  
  const card = event.currentTarget.parentNode;
  
  
 
  
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('city', card.dataset.citta);
  formData.append('partenza', card.dataset.partenza);
 
  fetch("delete_hotel.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation(); 
   if (card) {

    card.remove();
 }

  
  
}

function deleteToDo(event){
  // Preparo i dati da mandare al server e invio la richiesta con POST
  console.log("Eliminazione")
  

  

  
  
  const card = event.currentTarget.parentNode;
  card.classList.remove('sel');
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
 
  fetch("delete_ToDo.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  event.stopPropagation();
  if (card) {

    card.remove();
 }

}



function deleteVoli_A(event)
{
  console.log("Eliminazione")
  

  
  const card = event.currentTarget.parentNode;
  
  
 

 
 
  
  
  const formData = new FormData();
  formData.append('id', card.dataset.id);
  formData.append('city', card.dataset.citta);
  formData.append('data_partenza', card.dataset.partenza);
 
  fetch("delete_voli_a.php", {method: 'post', body: formData}).then(dispatchResponse, dispatchError);
  if (card) {

     card.remove();
  }


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
