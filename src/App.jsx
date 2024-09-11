import { Filters } from './components/filters'
import { Header } from './components/header'
import { Search } from './components/search'
import { Footer } from './components/footer'
import React, { useState, useEffect } from 'react';


import styles from './App.module.css'
import './global.css'


const AnimeCard = ({ title, genres, averageScore, imageUrl }) => {
  const getScoreColor = (score) => {
    if (score < 50) return 'red';
    if (score >= 50 && score < 80) return '#FFB800';
    return '#01ADA6';

  };

  return (
    <div className={styles.animeCard}>
      <img src={imageUrl} alt={title} className={styles.animeImage} />
      <div className={styles.animeOverlay}></div>
      <div className={styles.animeInfo}>
        <h3 className={styles.animeTitle}>{title}</h3>
        <div className={styles.animeGenres}>
          {genres.map((genre, index) => (
            <span key={index} className={styles.animeGenre}>{genre}</span>
          ))}
        </div>
        <div
          className={styles.animeScore}
          style={{ backgroundColor: getScoreColor(averageScore) }}
        >
          {averageScore}%
        </div>
        </div>
      </div>
  );
};

export function App() {

  const [searchText, setSearchText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleSpacePress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
      }
    };
    window.addEventListener('keydown', handleSpacePress);
    return () => {
      window.removeEventListener('keydown', handleSpacePress);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(searchText);
  };


  const animes = [
    {
      title: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
      genres: ['Action', 'Comedy', 'Horror'],
      averageScore: 80,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-cJUNqCqzuApc.png',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama', 'Ecchi'],
      averageScore: 83,
      imageUrl: 'https://www.infoanime.com.br/poster/2023/10279.jpg',
    },
    {
      title: 'One Piece',
      genres: ['Action', 'Comedy', 'Adventure'],
      averageScore: 87,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg',
    },
    {
      title: 'Masamune-jun no Revenge R',
      genres: ['Romance', 'Comedy'],
      averageScore: 70,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146953-80YtZNkpbhIA.jpg',
    },
    {
      title: 'Bleach: Sennen Kessen-hen - ketsubetsu-tan',
      genres: ['Action', 'Adventure'],
      averageScore: 87,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg',
    },
    {
      title: 'Lv1 Maou to One Room Yuusha',
      genres: ['Action', 'Comedy', 'Adventure'],
      averageScore: 48,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146836-UWMpVYgMcvwk.jpg',
    },
    {
      title: 'Jujutsu kaisen 2nd Season',
      genres: ['Action', 'Drama'],
      averageScore: 86,
      imageUrl: 'https://awsimages.detik.net.id/community/media/visual/2023/08/25/anime-jujutsu-kaisen-musim-kedua.webp?w=700&q=90',
    },
    {
      title: 'Horimiya: piece',
      genres: ['Comedy', 'Romance'],
      averageScore: 81,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg',
    },
    {
      title: 'Watashi no Shiawase na Kekkon',
      genres: ['Drama', 'Romance'],
      averageScore: 81,
      imageUrl: 'https://www.animeunited.com.br/oomtumtu/2023/03/WS_haruV-725x1024.jpg',
    },
    {
      title: 'Tate no Yuusha no Nariagari',
      genres: ['Action', 'Adventure', 'Fantasy'],
      averageScore: 83,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111322-2jQMDQva4YD7.png',
    },
    {
      title: 'Goblin Slayer II',
      genres: ['Action', 'Adventure', 'Fantasy'],
      averageScore: 78,
      imageUrl: 'https://a.storyblok.com/f/178900/1280x1811/9857eac35b/393d158f0b72594ea436c5035f9feaaf1679731892_main.jpg/m/filters:quality(95)format(webp)',
    },
    {
      title: 'Shingeki no Kyojin: The Final Season - Kanketsu... ',
      genres: ['Action', 'Drama', 'Fantasy'],
      averageScore: 79,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162314-ocaEhYmvznFO.jpg',
    },
  ];

 const filteredAnimes = animes.filter(anime =>
    anime.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className={styles.wrapper}>
    <Header />
    <Filters />
    <Search onSearchChange={handleSearchChange} onSearchClick={handleSearchClick}  />
    <div className={styles.backGround}>
      <div className={styles.fundo}>
        <div className={styles.animeGrid}>
          {filteredAnimes.map((anime, index) => (
            <AnimeCard
              key={index}
              title={anime.title}
              genres={anime.genres}
              averageScore={anime.averageScore}
              imageUrl={anime.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className={styles.buttonMais}>
        <button> + Ver mais </button>
      </div>
    </div>
    <Footer />
  </div>
    
  )
}

