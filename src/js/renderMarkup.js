import { loadData } from './loaderData';
import { refs } from './refs';

const getGenreList = array => {
  let genre = [];
  for (const iterator of array) {
    if (genre.length > 3) return genre.join(', ');
    loadData.genreList.map(element => {
      if (element.id === iterator) {
        genre.push(element.name);
      }
    });
  }
  return genre.join(', ');
};

const templates = {
  galleryCard(data) {
    return data
      .map(({ id, title, poster_path, release_date, genre_ids }) => {
        const date = release_date.slice(0, 4);
        const genre = getGenreList(genre_ids);
        return `<div class="gallery__card" >
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" >
                <div class="gallery__card-info">
                <p class="gallery__card-title">${title}</p>
                <p class="gallery__card-subtitle">${genre} | ${date}</p>
                <div class="target" data-movie-id="${id}"></div>
                </div>
            </div>`;
      })
      .join('');
  },

  trailerPopup(key) {
    return `<div class="popup__trailer-wrapper"><iframe width="840" height="472" src="https://www.youtube.com/embed/${key}" 
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe></div>`;
  },

  popup(data) {
    const {
      id,
      title,
      poster_path,
      overview,
      original_title,
      popularity,
      vote_average,
      vote_count,
      genres,
      production_countries,
    } = data;
    const country = production_countries[0].name;
    const genre = genres.map(({ name }) => name);
    return ` 
      <div class="popup__image-wrapper">
      <img class="popup__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" >
      </div>
        <div class="popup__info-wrapper" >
          <h1 class="popup__info-title">${title}</h1>
          <div class="popup__info-list-wrapper">
            <ul class="popup__info-list">
              <li class="li__count" >Country</li>
              <li class="li__count">${country}</li>
              <li class="popup__info-list-vote">Vote / Votes</li>
               <li><span class="popup__info-rate">${vote_average.toFixed(
                 1
               )}</span> / ${vote_count}</li>
              <li>Popularity</li>
                 <li>${popularity}</li>
              <li>Original Title</li>
                   <li>${original_title}</li>
              <li>Genre</li>
                <li>${genre.join(', ')}</li>
            </ul>
            </div>
            <p class="popup__info-title-about">About</p>
            <p class="popup__info-about"><q>${overview}</q></p>
            <div class="popup__info-buttons">
              <button class="popup__addWatchedBtn" data-serialize-id="${id}" data-type="watched">ADD TO WATCHED</button>
              <button class="popup__addQueueBtn" data-serialize-id="${id}" data-type="queue">ADD TO QUEUE</button>
              <button class="popup__watchTrailer" data-serialize-id="${id}" data-type="trailer">Watch trailer</button>
            </div>
          </div>`;
  },

  popupLib(data) {
    const {
      id,
      title,
      poster_path,
      overview,
      original_title,
      popularity,
      vote_average,
      vote_count,
      genres,
      production_countries,
      runtime,
      release_date,
      homepage,
    } = data;
    console.log(data);
    const country = production_countries[0].name;
    const genre = genres.map(({ name }) => name);
    const formatRuntime = timeConverter(runtime);
    const year = release_date.slice(0, 4);
    return ` 
      <div class="popup__image-wrapper">
      <img class="popup__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" >
      </div>
        <div class="popup__info-wrapper" >
          <h1 class="popup__info-title">${title}</h1>
          <div class="popup__info-list-wrapper">
            <ul class="popup__info-list">
              <li class="li__count" >Country</li>
              <li class="li__count">${country}</li>
               <li>Release date</li>
                <li>${year}</li>
              <li class="popup__info-list-vote">Vote / Votes</li>
               <li><span class="popup__info-rate">${vote_average.toFixed(
                 1
               )}</span> / ${vote_count}</li>
              <li>Popularity</li>
                 <li>${popularity}</li>
              <li>Original Title</li>
                   <li>${original_title}</li>
              <li>Genre</li>
                <li>${genre.join(', ')}</li>
              <li>Runtime</li>
                <li>${formatRuntime}</li>    
            </ul>
            </div>
            <p class="popup__info-title-about">About</p>
            <p class="popup__info-about"><q>${overview}</q></p>
            <div class="popup__info-buttons">
              <button class="popup__removeFrLib" data-serialize-id="${id}" data-type="remove">Remove</button>
              <button class="popup__watchTrailer" data-serialize-id="${id}" data-type="trailer">Watch trailer</button>
            </div>
          </div>`;
  },

  defaulIframe: `<iframe id="player" class="popup__body popup__body-trailer"  src="https://www.youtube.com/embed/"
              title="YouTube video player" frameborder="0" allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>`,

  libaryCard(data) {
    const { id, poster_path, tagline } = data;
    return `<div class="gallery__card-libary" data-movie-id="${id}">
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="">
      <div class="gallery__card-info">
       <p><q>${tagline}</q></p>
       </div>
    <div class="target-libary" data-movie-id="${id}"></div>
  </div>`;
  },

  loadMoreBtn: `<button class="load-more__card" >
      <img data-movie-id="loadMore" src="http://cdn.onlinewebfonts.com/svg/img_260976.png">
      <div class="target target__load-more" data-movie-id="loadMore"></div>
    </button>`,
};

export const render = {
  // Render gallery markup

  galleryMarkup(data, save) {
    if (save) {
      templates.trend = templates.galleryCard(data);
    }
    refs.galleryEl.insertAdjacentHTML(`beforeend`, templates.galleryCard(data));
  },

  // Render popup markup

  popupMarkup(data) {
    refs.popupContent.innerHTML = templates.popup(data);
  },

  popupMarkupLib(data) {
    refs.popupContent.innerHTML = templates.popupLib(data);
  },

  // Render trend-list

  trend() {
    refs.galleryEl.innerHTML = templates.trend;
  },

  defaultIfraim() {
    refs.popupTrailerEl.insertAdjacentHTML(`beforeend`, templates.defaulIframe);
  },
  // Render markup for Libary

  libaryCard(data) {
    refs.libaryGalleryEl.insertAdjacentHTML(
      `beforeend`,
      templates.libaryCard(data)
    );
  },

  moreTrendingFilms(data) {
    refs.galleryEl.insertAdjacentHTML(`beforeend`, templates.galleryCard(data));
  },

  loadMoreBtn() {
    refs.galleryEl.insertAdjacentHTML(`beforeend`, templates.loadMoreBtn);
  },
};

const timeConverter = minutes => {
  const hours = Math.floor(minutes / 60);
  const minute = minutes % 60;

  if (hours > 0) {
    return `${hours} hours, ${minute} minutes`;
  } else {
    return `${minute} minutes`;
  }
};
