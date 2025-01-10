import { changeRandomFact } from "./functions.js"

async function getRandomFact() {
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
  
      let randomFact = json.text;
      changeRandomFact(randomFact);
  
    } catch (error) {
        console.error(error.message);
    }
  }

  export { getRandomFact }