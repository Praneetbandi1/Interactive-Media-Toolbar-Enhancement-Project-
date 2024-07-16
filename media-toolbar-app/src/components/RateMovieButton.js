import { useState } from "react";


export default function RateMovieButton({ movies }) {

    const [rating, setRating] = useState(1);
    const [movie, setMovie] = useState(movies[0]);

    const ratingChangeEvent = (e) => {
        setRating(e.target.value)
    };

    const buttonClickEvent = () => {
        alert(`We value your feedback! Thanks for taking the time to rate the movie, ${movie} 
            ${rating} out of 5 stars.`)
    }

    return (
        <div>
            <h2>Movie Rating Toolbar</h2>
            <div>
                <label>
                    Movie:
                    <select value={movie} onChange={(e) => setMovie(e.target.value)}>
                        {movies.map((movie) => (
                            <option key={movie} value={movie}>{movie}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Rating:
                    <select value={rating} onChange={ratingChangeEvent}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <option key={rating} value={rating}>{rating}</option>
                        ))}
                    </select>
                </label>
            </div>
            <button onClick={buttonClickEvent}>Submit</button>
        </div>
    )
}