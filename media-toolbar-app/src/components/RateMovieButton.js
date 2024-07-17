//U46368100
import { useState } from "react";

export default function RateMovieButton({ movies }) {

    const [rating, setRating] = useState(0);
    const [movie, setMovie] = useState(movies[0]);
    const [comment, setComment] = useState('');

    const ratingChangeEvent = (e) => {
        setRating(e.target.value)
    };

    const buttonClickEvent = () => {
        alert(`We value your feedback, ${comment}.  Thanks for taking the time to rate the movie, ${movie} 
            ${rating}`)
            setRating(0);
            setComment('');
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    };

    return (
        <div>
            <h2>Movie Rating Toolbar</h2>
            <div>
                <label>
                    
                    Select Movie:
                    <select value={movie} onChange={(e) => setMovie(e.target.value)}>
                        {movies.map((movie) => (
                            <option key={movie} value={movie}>{movie}</option>
                            
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <br></br>
                
                <label>
                    Select Rating:
                    <select value={rating} onChange={ratingChangeEvent}>
                        {["1 out of 5" , " 2 out of 5","3 out of 5", "4 out of 5", "5 out of 5"].map((rating) => (
                            <option key={rating} value={rating}>{rating}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <br></br>
                <center><label>Please enter your comments: </label></center>
                <textarea rows="5" cols="30" value={comment} onChange={handleCommentChange}/>
            </div>
            <br></br>
            <button onClick={buttonClickEvent}>Submit Feedback</button>
            </div>
            
    )
}
