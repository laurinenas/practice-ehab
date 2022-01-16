import * as mock1 from "../data/hedera_market_chart_1.json";
import * as mock7 from "../data/doge_market_chart_7.json";
import * as mock30 from "../data/btc_market_chart_30.json";
import { transformMapTs } from "./getMarketChart";

function latency(ms?: number) {
  if (!ms) {
    ms = 700 * Math.random() + 500;
    console.log(ms);
  }
  return new Promise((resolve) =>
    setTimeout(function () {
      resolve(true);
    }, ms)
  );
}

async function mockData(days: number) {
  await latency();
  let data;
  switch (days) {
    case 1:
      data = mock1 as any;
      break;
    case 7:
      data = mock7 as any;
      break;
    case 30:
      data = mock30 as any;
      break;
    default:
      break;
  }
  const { prices } = data;
  return transformMapTs(prices);
}

export { mockData };
