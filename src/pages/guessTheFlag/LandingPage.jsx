import * as React from "react";
import * as helper from "../../helper/helper";
import {useNavigate} from "react-router-dom"
import ParameterToggle from "../../components/guessTheFlag/ParameterToggle";
import ParameterSlider from "../../components/guessTheFlag/ParameterSlider";
import ParameterDefaultToggle from "../../components/guessTheFlag/ParameterDefaultToggle";

const LandingPage = () => {
  const navigate = useNavigate()
  
  const [isTime, setIsTime] = React.useState(false)
  const [isFreeMode, setIsFreeMode] = React.useState(true)
  const [time, setTime] = React.useState({
    timeProp: 1,
    timeUI: '1m'
  })

  const handleSubmit = () => {
    if(isFreeMode && !isTime){
      return navigate('/guesstheflag/game', {state: {mode: 'free', time: null }})
    }
    navigate('/guesstheflag/game', isTime && !isFreeMode && {state: {mode: 'time', time: helper.refactorRangeTimeProp(time.timeProp)}})
  }

  return (
  <>
  <header className="flex flex-col items-center justify-center gap-1 p-5">
    <h1 className="text-3xl sm:text-4xl text-center">Guess The Flag</h1>
    <h3 className="text-lg sm:text-xl text-center">The game is simple... guess the flag !</h3>
  </header>
  <section className="flex flex-col justify-center w-full h-full gap-10 p-10">
    <p className="text-center">There are two game modes one with a time limit to challenge yourself, and the other is a free mode, good for learning</p>
  <div className="flex flex-col items-center  w-full">
    <form action="" className="flex flex-col md:flex-row justify-center border-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl">
      
      <fieldset className="flex flex-col items-center  justify-center  w-[300px] h-[200px] border-b-2 md:border-r-2">
       <ParameterDefaultToggle setIsFreeMode={setIsFreeMode} init={setIsTime}>Free Mode</ParameterDefaultToggle>
       {!isFreeMode && <ParameterToggle setIsTime={setIsTime}>Challenge</ParameterToggle>}
      </fieldset>
      
      <fieldset className="flex flex-col items-center justify-center gap-5 w-[300px] h-[200px]">
        {isFreeMode && <p>No parameters</p>}
        {!isFreeMode && isTime && <ParameterSlider setTime={setTime}>{time.timeUI}</ParameterSlider>}
     </fieldset>

    </form>

    <button onClick={handleSubmit} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white">
      <span className="text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Start
      </span>
    </button>
  </div>
  </section>
  </>
  );
};

export default LandingPage;
