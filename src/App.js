import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import * as api from "./api/country.api";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (Array.isArray(data) && !data.length) {
      api.getAllCountries().then((countries) => {
        setData(countries);
      });
    }
  }, [data]);

  return (
    <>
      <Stack>
        <Alert severity="success">Hello, world</Alert>
      </Stack>

      {JSON.stringify(data)}
    </>
  );
};

export default App;
