import { useTimer } from 'react-timer-hook';
import PlaySvg from '../img/svg/play-small.svg';
import StopSvg from '../img/svg/pause-v2.svg';
import RestartSvg from '../img/svg/restart-small.svg';

function Chrono({ MinutesCustom }) {
  
  const time = new Date();

  // Ajoute les minutes spécifiées au temps actuel
  time.setMinutes(time.getMinutes() + MinutesCustom);

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: time, autoStart: false });

  // fonction qui formate pour afficher 2 chiffres si < 10 (par exemple 9 = 09)
  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  const displayHours = hours;
  const displayMinutes = minutes % 60;
  const displaySeconds = seconds % 60;

  // si minutes >= 60 alors on affiche les heures + on augmente le width
  const showHours = MinutesCustom >= 60;

  return (
    <div className="flex justify-center items-center">
      <div className={`bg-dark-grey rounded-full p-2 flex items-center justify-center ${showHours ? 'w-52' : 'w-40'}`}>
        <div className="text-2xl text-white items-center mr-5">
          {showHours && `${formatTimeUnit(displayHours)}:`}
          {formatTimeUnit(displayMinutes)}:{formatTimeUnit(displaySeconds)}
        </div>
        <div className="flex">
          <button onClick={isRunning ? pause : resume} className="mr-5">
            <img src={isRunning ? StopSvg : PlaySvg} alt={isRunning ? "Stop" : "Play"} />
          </button>
          <button onClick={() => {
            const newTime = new Date();
            newTime.setMinutes(newTime.getMinutes() + MinutesCustom);
            restart(newTime);
          }}>
            <img src={RestartSvg} alt="Restart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chrono;
