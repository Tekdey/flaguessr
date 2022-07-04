import * as React from "react";
import * as api from "../../api/country.api";
import * as helper from "../../helper/helper";
import QuizButton from "../../components/guessTheFlag/QuizButton";
import QuizFlag from "../../components/guessTheFlag/QuizFlag";
import Score from "../../components/guessTheFlag/Score";

import {useLocation} from "react-router-dom"
import AnswerBadge from "../../components/guessTheFlag/AnswerBadge";

const Game = () => {

  const [data, setData] = React.useState([]);
  const [parameter, setParameter] = React.useState()
  const [response, setResponse] = React.useState([]);
  const [goodResponse, setGoodReponse] = React.useState();
  const [userResponse, setUserResponse] = React.useState('');
  const [score, setScore] = React.useState(0)
  const [notif, setNotif] = React.useState('')

  const location = useLocation()

  React.useEffect(() => {
    setParameter(location.state)
  }, [location])

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

  if (!Array.isArray(data) || !data.length) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src="/assets/gif/loading.gif" alt="" style={{ width: "500px" }} />
      </div>
    );
  }
  return (
    <>

      <div className="flex flex-col items-center justify-evenly h-3/6 w-full xs:px-12 px-2 ">
          {/* {!parameter && <Score>{score}</Score>} */}
        <div className="flex items-center justify-center w-full h-20">
          {notif && (<AnswerBadge notif={notif} />)}
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
    </>
  );
};

export default Game;
