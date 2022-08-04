export const commandsEN = [
  {
    command: ['coco open *', 'coco go to *'],
    callback: (site) => { window.open(`https://${site}`) }
  },
  {
    command: 'coco youtube *',
    callback: (word) => { window.open(`https://www.youtube.com/results?search_query=${word}`) }
  },
  {
    command: 'coco search *',
    callback: (word) => { window.open(`https://www.google.com/search?q=${word}`) }
  },
  {
    command: 'coco new tab',
    callback: () => window.open()
  },
  {
    command: 'coco * background colour',
    callback: (color) => {
      document.getElementById('container').style.backgroundColor = color
    }
  },
  {
    command: "coco what's the weather like",
    callback: () => window.open('https://www.weather.com/')
  },
  {
    command: "coco what's on tv",
    callback: () => window.open('https://www.tvguide.com/listings/')
  },
  {
    command: 'coco i want to watch tv',
    callback: () => window.open('https://livetvcentral.com/country/united-states')
  },
  {
    command: 'coco movies in theaters',
    callback: () => window.open('https://www.fandango.com/movies-in-theaters')
  },
  {
    command: 'coco i want to listen *',
    callback: (name) => window.open(`https://soundcloud.com/search/sounds?q=${name}`)
  },
  {
    command: 'coco put the * album',
    callback: (albumName) => window.open(`https://soundcloud.com/search/albums?q=${albumName}`)
  },
  {
    command: 'coco * playlist',
    callback: (playlist) => window.open(`https://www.jango.com/browse_music/genre/${playlist}`)
  },
  {
    command: 'coco radio stations',
    callback: () => window.open('https://radiostationusa.fm/')
  },
  {
    command: 'coco i want to see the map',
    callback: () => window.open('https://www.waze.com/live-map/')
  },
  {
    command: 'coco breaking news',
    callback: () => window.open('https://www.foxnews.com/')
  },
  {
    command: 'coco i want to play',
    callback: () => window.open('https://poki.com/')
  },
  {
    command: 'coco i want to cook something',
    callback: () => window.open('https://www.allrecipes.com/recipes/')
  },
  {
    command: 'coco do a research on *',
    callback: (search) => window.open(`https://en.wikipedia.org/wiki/${search}`)
  }
]


export const commandsES = [
  {
    command: ['coco abre *', 'coco ve a *'],
    callback: (site) => { window.open(`https://${site}`) }
  },
  {
    command: 'coco youtube *',
    callback: (word) => { window.open(`https://www.youtube.com/results?search_query=${word}`) }
  },
  {
    command: 'coco busca *',
    callback: (word) => { window.open(`https://www.google.com/search?q=${word}`) }
  },
  {
    command: 'coco nueva página',
    callback: () => window.open()
  },
  {
    command: 'coco qué tiempo hace',
    callback: () => window.open('https://smn.conagua.gob.mx/es/observando-el-tiempo/mapa-de-seguimiento-meteorologico')
  },
  {
    command: 'coco qué hay en la tele',
    callback: () => window.open('https://mi.tv/mx/programacion')
  },
  {
    command: 'coco quiero ver la tele',
    callback: () => window.open('https://es.livetvcentral.com/country/mexico')
  },
  {
    command: 'coco películas en el cine',
    callback: () => window.open('https://cinepolis.com/')
  },
  {
    command: 'coco quiero escuchar *',
    callback: (name) => window.open(`https://soundcloud.com/search/sounds?q=${name}`)
  },
  {
    command: 'coco pon el álbum *',
    callback: (albumName) => window.open(`https://soundcloud.com/search/albums?q=${albumName}`)
  },
  {
    command: 'coco lista de reproducción *',
    callback: (playlist) => window.open(`https://www.jango.com/browse_music/genre/${playlist}`)
  },
  {
    command: 'coco estaciones de radio',
    callback: () => window.open('https://emisoras.com.mx/')
  },
  {
    command: 'coco quiero ver el mapa',
    callback: () => window.open('https://www.waze.com/live-map/')
  },
  {
    command: 'coco últimas noticias',
    callback: () => window.open('https://www.eluniversal.com.mx/')
  },
  {
    command: 'coco quiero jugar',
    callback: () => window.open('https://poki.com/es')
  },
  {
    command: 'coco quiero cocinar algo',
    callback: () => window.open('https://www.cocinafacil.com.mx/recetario/')
  },
  {
    command: 'coco investiga sobre *',
    callback: (search) => window.open(`https://es.wikipedia.org/wiki/${search}`)
  }
]


export const commandsIT = [
  {
    command: ['coco apri *', 'coco vai su *'],
    callback: (site) => { window.open(`https://${site}`) }
  },
  {
    command: 'coco youtube *',
    callback: (word) => { window.open(`https://www.youtube.com/results?search_query=${word}`) }
  },
  {
    command: 'coco cerca *',
    callback: (word) => { window.open(`https://www.google.com/search?q=${word}`) }
  },
  {
    command: 'coco nuova pagina',
    callback: () => window.open()
  },
  {
    command: 'coco che tempo fa',
    callback: () => window.open('https://www.meteo.it/')
  },
  {
    command: 'coco cosa fanno in tv',
    callback: () => window.open('https://www.sorrisi.com/guidatv/canali-tv/')
  },
  {
    command: 'coco voglio vedere la tv',
    callback: () => window.open('https://www.guardatv.it/')
  },
    {
      command: 'coco film al cinema',
      callback: () => window.open('https://www.comingsoon.it/cinema/filmalcinema/')
    },
  {
    command: 'coco voglio ascoltare *',
    callback: (name) => window.open(`https://soundcloud.com/search/sounds?q=${name}`)
  },
  {
    command: 'coco metti album *',
    callback: (albumName) => window.open(`https://soundcloud.com/search/albums?q=${albumName}`)
  },
  {
    command: 'coco playlist *',
    callback: (playlist) => window.open(`https://www.jango.com/browse_music/genre/${playlist}`)
  },
  {
    command: 'coco stazioni radio',
    callback: () => window.open('https://www.radio-italiane.it/')
  },
  {
    command: 'coco voglio vedere la mappa',
    callback: () => window.open('https://www.waze.com/it/live-map/')
  },
  {
    command: 'coco ultime notizie',
    callback: () => window.open('https://www.adnkronos.com/ultimora/')
  },
  {
    command: 'coco voglio giocare',
    callback: () => window.open('https://poki.it/')
  },
  {
    command: 'coco voglio cucinare qualcosa',
    callback: () => window.open('https://www.giallozafferano.it/')
  },
  {
    command: 'coco fai una ricerca su *',
    callback: (search) => window.open(`https://it.wikipedia.org/wiki/${search}`)
  }
]

