import * as React from "react";
import * as api from "./api/country.api";
import QuizButton from "./components/guessTheFlag/QuizButton";
import QuizFlag from "./components/guessTheFlag/QuizFlag";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (Array.isArray(data) && !data.length) {
      setTimeout(() => {
        api.getAllCountries().then((countries) => {
          setData(countries);
        });
      }, 1000);
    }
  }, [data]);
  const element = ["1", "2", "3", "4"];

  if (!Array.isArray(data) || !data.length) {
    return (
      <div className="w-full lg:w-8/12 lg:shadow-2xl h-screen flex flex-col items-center justify-center bg-white">
        <img src="/assets/gif/loading.gif" alt="" style={{ width: "500px" }} />
      </div>
    );
  }

  return (
    <div className="w-full lg:w-8/12 lg:shadow-2xl h-screen flex flex-col items-center bg-white">
      <div className="flex flex-col items-center justify-evenly h-3/6 w-full xs:px-12 px-2 ">
        <span className="bg-blue-500 rounded-full p-2">0/10</span>
        <h2 className=" text-xl">What is this flag ?</h2>
        <QuizFlag data={data} />
      </div>
      <div className="w-full h-3/6 flex flex-col sm:flex-wrap sm:flex-row">
        {element.map((item, index) => (
          <QuizButton key={index} data={data} index={index}>
            {item}
          </QuizButton>
        ))}
      </div>
    </div>
  );
};

export default App;
