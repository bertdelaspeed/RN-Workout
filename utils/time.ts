export function secToMin(sec: number) {
  return (sec / 60).toFixed(2);
}

export function formatSec(sec: number) {
  const _min = Math.floor(sec / 60);
  const _sec = sec % 60;

  return `${_min > 0 ? _min + " min" : ""} ${_sec && _min > 0 ? "and" : ""} ${
    _sec > 0 ? _sec + " sec" : ""
  } 
  `;
}
