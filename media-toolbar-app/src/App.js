//U46368100
import './App.css';
import RateMovieButton from './components/RateMovieButton';
import UploadButton from './components/UploadButton';


const movies = ['The Godfather', 'The Shawshank Redemption', 'The Godfather: Part II', 'The Dark Knight', '12 Angry Men', 'Schindler\'s List', 'Pulp Fiction', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Fellowship of the Ring', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King'];

function App() {
  return (
    <div className="App">
      <RateMovieButton movies={movies}/> <br/>
      <UploadButton/>    
    </div>
  );
}

export default App;
