import { Filters } from './components/filters'
import { Header } from './components/header'
import { Search } from './components/search'

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
        <div className={styles.scoreLeft}>
        <div
          className={styles.animeScore}
          style={{ backgroundColor: getScoreColor(averageScore) }}
        >
          {averageScore}%
        </div>
        </div>
      </div>
    </div>
  );
};


export function App() {

  const animes = [
    {
      title: 'Zom 100: Zombie ni Naru Made ni Shitai 100 no Koto',
      genres: ['Action', 'Comedy'],
      averageScore: 80,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159831-cJUNqCqzuApc.png',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 83,
      imageUrl: 'https://www.infoanime.com.br/poster/2023/10279.jpg',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 87,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 70,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146953-80YtZNkpbhIA.jpg',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 87,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159322-Sp1GflRhE6Po.jpg',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 48,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146836-UWMpVYgMcvwk.jpg',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 86,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 81,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163132-C220CO5UrTxY.jpg',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 81,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 83,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111322-2jQMDQva4YD7.png',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 78,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
      genres: ['Adventure', 'Drama'],
      averageScore: 79,
      imageUrl: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162314-ocaEhYmvznFO.jpg',
    },
  ];

  return (
        <div>
        <Header/>
        <Filters/>
        <Search/>

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
        </div>
       </div>
     


        

  )
}

