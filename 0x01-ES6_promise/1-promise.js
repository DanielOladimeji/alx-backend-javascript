// Don't make a promise...if you know you can't keep it
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
