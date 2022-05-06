import { Characters } from 'Screens/Characters/Characters'
import { Episodes } from 'Screens/Episodes/Episodes'
import { EpisodeState } from 'Context/EpidodeContext/EpisodeState'
import './App.css';

function App() {
  return (
    <div className="App">
      <EpisodeState>
        <Characters />
        <Episodes />
      </EpisodeState>
    </div>
  );
}

export default App;
