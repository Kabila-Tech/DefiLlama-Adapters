const { fetchURL } = require("../helper/utils")

async function fetch() {
  const res = await fetchURL("https://labs.kabila.app/api/general/analytics/kbl/metrics");
  return res.data.kbl_total_staked + res.data.kbl_total_Liquidity;
}

module.exports = {
  timetravel: false,
  methodology: 'Total value of the $KBL locked in Liquidity Pools and Staking smart contracts https://token.kabila.app/en/analytics',
  fetch
}