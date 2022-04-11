export function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds/3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds/60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
}