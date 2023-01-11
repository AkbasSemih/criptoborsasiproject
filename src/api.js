export const fetchData = () => {
  return fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "06c48931-7060-496b-8b6b-cb16cca65f78",
      },
    }
  );
};
