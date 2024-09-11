import { Filters } from './components/filters';
import { Header } from './components/header';
import { Search } from './components/search';
import { Footer } from './components/footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './App.module.css';
import './global.css';

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
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const handleSpacePress = (event) => {
      const activeElement = document.activeElement;
      const isInputField = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
      
      if (!isInputField && event.code === 'Space') {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleSpacePress);

    return () => {
      window.removeEventListener('keydown', handleSpacePress);
    };
  }, []);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.post('https://graphql.anilist.co', {
          query: `
            query ($search: String) {
              Page(perPage: 10) {
                media(search: $search, type: ANIME) {
                  title {
                    romaji
                  }
                  genres
                  averageScore
                  coverImage {
                    large
                  }
                }
              }
            }
          `,
          variables: {
            search: searchQuery,
          },
        });
        const fetchedAnimes = response.data.data.Page.media.map(anime => ({
          title: anime.title.romaji,
          genres: anime.genres,
          averageScore: anime.averageScore,
          imageUrl: anime.coverImage.large,
        }));
        setAnimes(fetchedAnimes);
      } catch (error) {
        console.error('Error fetching data from AniList API', error);
      }
    };

    fetchAnimes();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(searchText);
  };

  return (
    <div>
      <Header />
      <Filters />
      <Search onSearchChange={handleSearchChange} onSearchClick={handleSearchClick} />
      <div className={styles.backGround}>
        <div className={styles.fundo}>
          <div className={styles.animeGrid}>
            {animes.map((anime, index) => (
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
  );
}
