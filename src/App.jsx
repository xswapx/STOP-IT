import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';


function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Not So Easy'  targetTime={5} />
        <TimerChallenge title='Easy'  targetTime={10} />
        <TimerChallenge title='Not So Medium'  targetTime={15} />
        <TimerChallenge title='Medium'  targetTime={20} />
        <TimerChallenge title='Not So Hard'  targetTime={25} />
        <TimerChallenge title='Hard'  targetTime={30} />
      </div>
    </>
  );
}

export default App;
