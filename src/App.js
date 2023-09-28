import logo from './logo.svg';
import './App.css';

function App() {


    return (
    <html>
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="stylesheet" href="styles.css"></link>
      <title>Card</title>
      
      <div class="wrapper">
        <div class="container" data-card="1">
          <div class="card">
            <div class="card-content">
              <h2 class="card-title">HAX PSU</h2>
              <img src="https://hax.camp/assets/haxBanner-01.png" alt="Card Image"></img>
              <div class="description-toggle">
                <div class="description">Hax Camp 2022</div>
                <div class="toggle-button">Toggle Description</div>
              </div>
              <a class="details-link" href="https://hax.psu.edu">Details</a>
            </div>
          </div>
        </div>
      </div>
      <button class="duplicateButton">Duplicate Card</button>
<button class="toggleColorButton">Toggle Color</button>
<button class="changeTitleButton">Change Title</button>
<button class="deleteCardButton">Delete Last Card</button>
    </html>
    

    );
  }

export default App;
