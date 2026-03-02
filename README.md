# ⚡ Beat the Blink – AI-Powered Quiz Game

Beat the Blink on dynaaminen ja nopeatempoinen tietokilpailupeli, joka yhdistää generatiivisen tekoälyn ja optimoidun frontend-arkkitehtuurin. Peli on suunniteltu osoittamaan kykyä rakentaa vikasietoisia (resilient) sovelluksia, jotka hallitsevat AI-rajapintojen rajoituksia älykkäästi.

**Live Demo:** [https://beat-the-blink.vercel.app](https://beat-the-blink.vercel.app)

## 🚀 Keskeiset ominaisuudet
*   **Hybrid Content Generation:** Peli luo dynaamisesti 10 uniikkia kysymys-vastausparia LLM-mallin avulla jokaisen uuden session alussa.
*   **Intelligent Fallback System:** API-kiintiöiden ylittyessä tai verkkohäiriöiden sattuessa sovellus siirtyy saumattomasti hyödyntämään paikallista, n. 400 kysymyksen JSON-tietovarastoa.
*   **Real-time Interaction:** Nopea ja responsiivinen pelilogiikka, joka on optimoitu matalalle viiveelle.
*   **Modern UI/UX:** Tailwind CSS:llä toteutettu visuaalisesti houkutteleva ja pelillistetty käyttöliittymä.

## 🛠️ Teknologiapino
*   **Frontend:** [React 18](https://react.dev) & [TypeScript](https://www.typescriptlang.org)
*   **AI-integraatio:** [Google Gemini API](https://ai.google.dev) (tai vastaava LLM-rajapinta)
*   **Tyylittely:** [Tailwind CSS](https://tailwindcss.com)
*   **Julkaisu:** [Vercel](https://vercel.com) (Automated CI/CD)
*   **Tietovarasto:** Paikallinen JSON-pohjainen tietokanta fallback-tilanteita varten.

## 📝 Arkkitehtoninen ratkaisu: API-resilienssi
Projektissa on ratkaistu yleinen AI-sovellusten haaste: ilmaisien rajapintojen (Free Tier) hitaus ja pyyntörajoitukset. 
1. **Primary Source:** Sovellus yrittää ensisijaisesti generoida tuoretta sisältöä tekoälyllä.
2. **Secondary Source:** Jos AI-pyyntö epäonnistuu tai pelaaja jatkaa peliä nopeasti, järjestelmä poimii kysymykset sovelluksen sisäisestä JSON-rakenteesta.
Tämä varmistaa, ettei pelaaja kohtaa koskaan virheilmoituksia tai tyhjiä ruutuja, vaikka taustajärjestelmä saavuttaisi kapasiteettinsa.

## 🚥 Paikallinen kehitys
1. Kloonaa repo: `git clone [url]`
2. Asenna riippuvuudet: `npm install`
3. Aseta ympäristömuuttujat: Luo `.env` ja lisää `VITE_AI_API_KEY`
4. Käynnistä peli: `npm run dev`

---
Tekijä: Heikki Törmänen