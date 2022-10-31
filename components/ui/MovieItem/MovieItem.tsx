import Image from 'next/image'
// import { faBookmark } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MovieItem.module.scss'

const MovieItem = () => {
  return (
    <main className={styles.movieWrapper}>
      <div className={styles.posterWrapper}>
        <Image
          className={styles.poster}
          src="/the-great-lands/regular/medium.jpg"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.bookmarkWrapper}>
          {/* <FontAwesomeIcon className={styles.bookmarkIcon} icon={faBookmark} /> */}
        </div>
      </div>
      <div className={styles.movieInfoWrapper}>
        <div className={styles.movieDetailsWrapper}>
          <p className={styles.productionYear}>2019</p>
          <span className={styles.dot}>&#183;</span>
          <div className={styles.iconWrapper}>
            <Image
              className={styles.iconCategory}
              src="/icon-category-movie.svg"
              alt="category of movie"
              layout="fill"
            />
          </div>
          <p className={styles.type}>Movie</p>
          <span className={styles.dot}>&#183;</span>
          <p className={styles.pgRating}>E</p>
        </div>
        <h1 className={styles.movieTitle}>The Great Lands</h1>
      </div>
    </main>
  )
}

export default MovieItem
