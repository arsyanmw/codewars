export function humanReadable (seconds) {
  const jam = String(Math.floor(seconds / 3600)).toString();
  const menit = String(Math.floor(seconds / 60 % 60)).toString();
  const detik = String(Math.floor(seconds % 60)).toString();

  return jam.padStart(2, 0) + ":" + menit.padStart(2, 0) + ":" + detik.padStart(2, 0)
}
