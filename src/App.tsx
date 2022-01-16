import { useEffect, useState } from "react";
import { Chart } from "./components/Chart";
import { getCoinHistory } from "./services/getMarketChart";

function App() {
  const [price, setPrice] = useState([{ timestamp: 1, price: 1 }]);
  useEffect(
    function () {
      (async function () {
        const price = await getCoinHistory(timeFrame);
        if (price) {
          setPrice(price);
        }
      })();
    },
  );
  return (
    <div className="App">
      {state === "init" ? <Spinner /> : <Chart data={price} />}
    </div>
  );
}

export default App;
