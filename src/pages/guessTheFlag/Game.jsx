import * as React from "react";
import * as api from "../../api/country.api";
import * as helper from "../../helper/helper";
import QuizButton from "../../components/guessTheFlag/QuizButton";
import QuizFlag from "../../components/guessTheFlag/QuizFlag";
import Score from "../../components/guessTheFlag/Score";
import Timer from "../../components/guessTheFlag/Timer";
import Loader from "../../components/guessTheFlag/Loader";

import {useLocation, useNavigate} from "react-router-dom"
import AnswerBadge from "../../components/guessTheFlag/AnswerBadge";
import EndingCard from "../../components/guessTheFlag/EndingCard";

const Game = () => {

  const [data, setData] = React.useState([]);
  const [response, setResponse] = React.useState([]);
  const [goodResponse, setGoodReponse] = React.useState();
  const [userResponse, setUserResponse] = React.useState('');
  const [score, setScore] = React.useState(0)
  const [notif, setNotif] = React.useState('')
  const [gameMode, setGameMode] = React.useState('')
  const [endGame, setEndGame] = React.useState(false)
  const [timer, setTimer] = React.useState(false)

  const location = useLocation()
  const navigate = useNavigate()


/* It's checking if the location state is empty, if it is, it will navigate to the guesstheflag page. */
  React.useEffect(() => {
    if(!location.state) return navigate('/guesstheflag')
    setGameMode(location.state.mode)
  }, [location])

  React.useEffect(() => {
    if(gameMode === "time"){
      const time = new Date()
      time.setMilliseconds(location.state.time)
      setTimer(time)
    }
  }, [gameMode, location.state.time, data])


  React.useEffect(() => {
    if (Array.isArray(data) && !data.length) {
      setTimeout(() => {
        api.getAllCountries().then((countries) => {
          setData(countries);
        });
      }, 1000);
    } else {
      gameLogicRoot();
    }
  }, [data]);

  React.useEffect(() => {
    if (goodResponse?.name.common === userResponse) {
      setScore((prevState) => prevState + 1)
      gameLogicRoot();
      setNotif('success')
      setTimeout(() => {
        setNotif(null)
      }, 1000)
    }else{
      setNotif('error')
      setTimeout(() => {
        setNotif(null)
      }, 1000)
    }
  }, [userResponse]);

  function gameLogicRoot() {
    const randomGoodResponse = helper.getGoodResponse(data);
    setGoodReponse(randomGoodResponse);
    const buildReponse = helper.getRandomReponse(
      data,
      4,
      randomGoodResponse.name.common
    );
    setResponse(buildReponse);
  }


  return (
    <>
      {!Array.isArray(data) || !data.length ? (<Loader />) : endGame ? (<EndingCard score={score} />) : (
      <>
      <div className="flex flex-col items-center justify-evenly h-3/6 w-full xs:px-12 px-2 ">
        <div className={gameMode === "time" ? "flex items-center justify-around w-full h-20" : "flex items-center justify-center w-full h-20"}>
          {gameMode === "time" && <Score>{score}</Score>}
          {gameMode === "time" && notif ? <AnswerBadge notif={notif} /> : <span className="mr-2 p-5 rounded-full ">&nbsp;</span>}
          {gameMode === "time" && <Timer expiryTimestamp={timer} setEndGame={setEndGame} />}

          {gameMode === "free" && notif && <AnswerBadge notif={notif} />}
        </div>
        
        <h2 className=" text-xl">What is this flag ?</h2>
          <QuizFlag flag={goodResponse?.flags.png} />
          
      </div>
      <div className="w-full h-3/6 flex flex-col sm:flex-wrap sm:flex-row">
        {response.map((item, index) => (
          <QuizButton key={index} index={index} setUserResponse={setUserResponse}>
            {item}
          </QuizButton>
        ))}
      </div>
      </>)}
    </>
  );
};

export default Game;
