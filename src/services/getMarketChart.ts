const TARGET_CURRENCY = "usd";
const COIN_OF_CHOICE = "1doge";

export async function getCoinHistory(
  days: number,
  id = COIN_OF_CHOICE,
  vs_currency = TARGET_CURRENCY
) {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currency}&days=${days}`; // TODO use new URLSearchParams constructor
  try {
    const result = await fetch(url);
    if (result.ok) {
      const { prices } = await result.json();
      return transformMapTs(prices);
    }
    const { status, statusText } = result;
    throw new Error(`Not ok response from server: ${status} ${statusText}`);
  } catch (error) {
    console.error("Fetching market info failed", error);
  }
}
