import { useEffect, useState } from "react";
import { ButtonGroup } from "./components/ButtonGroup";
import { Chart } from "./components/Chart";
import { Spinner } from "./components/Loading";
import { getCoinHistory } from "./services/getMarketChart";

function App() {
  const [price, setPrice] = useState([{ timestamp: 1, price: 1 }]);
  const [timeFrame, setTimeFrame] = useState(1);
  const [state, setState] = useState("init");

  useEffect(
    function () {
      setState("init");
      (async function () {
        const price = await getCoinHistory(timeFrame);
        if (price) {
          setPrice(price);
          setState("done");
        }
      })();
    },
    [timeFrame]
  );
  return (
    <div className="App">
      <ButtonGroup
        buttons={[1, 7, 30]}
        current={timeFrame}
        action={setTimeFrame}
      />
      {state === "init" ? <Spinner /> : <Chart data={price} />}
    </div>
  );
}

export default App;
