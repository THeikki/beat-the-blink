# ⚡ Beat the Blink – AI-Powered Quiz Game

Beat the Blink on dynaaminen ja nopeatempoinen tietokilpailupeli, joka yhdistää generatiivisen tekoälyn ja optimoidun frontend-arkkitehtuurin. Peli on suunniteltu osoittamaan kykyä rakentaa vikasietoisia (resilient) ja tietoturvallisia sovelluksia, jotka hallitsevat AI-rajapintojen rajoituksia älykkäästi.

**Live Demo:** [https://beat-the-blink.vercel.app](https://beat-the-blink.vercel.app)

## 🚀 Keskeiset ominaisuudet
*   **Hybrid Content Generation:** Peli luo dynaamisesti 10 uniikkia kysymys-vastausparia LLM-mallin avulla jokaisen uuden session alussa.
*   **Intelligent Fallback System:** API-kiintiöiden ylittyessä tai verkkohäiriöiden sattuessa sovellus siirtyy saumattomasti hyödyntämään paikallista, n. 400 kysymyksen JSON-tietovarastoa.
*   **Server-Side Proxy:** Kaikki tekoälykutsut suoritetaan palvelinpuolella (Serverless Functions), mikä estää API-avaimien näkymisen selaimen verkko-liikenteessä.
*   **Real-time Interaction:** Nopea ja responsiivinen pelilogiikka, joka on optimoitu matalalle viiveelle.
*   **Modern UI/UX:** Tailwind CSS:llä toteutettu visuaalisesti houkutteleva ja pelillistetty käyttöliittymä.

## 🛠️ Teknologiapino
*   **Frontend:** [React 18](https://react.dev) & [TypeScript](https://www.typescriptlang.org)
*   **Backend:** [Vercel Serverless Functions](https://vercel.com) (Node.js API-proxy)
*   **AI-integraatio:** [Google Gemini API](https://ai.google.dev) hyödyntäen [Vercel AI SDK](https://sdk.vercel.ai) -kirjastoa.
*   **Tyylittely:** [Tailwind CSS](https://tailwindcss.com)
*   **Julkaisu:** [Vercel](https://vercel.com) (Automated CI/CD)
*   **Tietovarasto:** Paikallinen JSON-pohjainen tietokanta fallback-tilanteita varten.

## 📝 Arkkitehtoninen ratkaisu: Resilienssi ja tietoturva
Projektissa on ratkaistu yleinen AI-sovellusten haaste: API-avaimien suojaaminen sekä ilmaisten rajapintojen (Free Tier) rajoitukset.

1.  **Backend Proxy:** AI-rajapintakutsut on eristetty palvelinfunktioihin (`/api`). Tämä arkkitehtuuri varmistaa, ettei kriittinen API-avain päädy käyttäjän selaimeen tai verkkolokeihin.
2.  **Primary Source:** Sovellus yrittää ensisijaisesti generoida tuoretta sisältöä tekoälyllä Gemini-mallia hyödyntäen.
3.  **Secondary Source:** Jos AI-pyyntö epäonnistuu tai pelaaja jatkaa peliä nopeasti, järjestelmä poimii kysymykset sovelluksen sisäisestä JSON-rakenteesta.

Tämä varmistaa, ettei pelaaja kohtaa koskaan virheilmoituksia tai tyhjiä ruutuja, vaikka taustajärjestelmä saavuttaisi kapasiteettinsa.

## 🚥 Paikallinen kehitys
1.  **Kloonaa repo:** `git clone [url]`
2.  **Asenna riippuvuudet:** `npm install`
3.  **Aseta ympäristömuuttujat:** Luo `.env`-tiedosto juureen ja lisää:
    `GOOGLE_API_KEY=sinun_api_avaimesi_tähän`
4.  **Käynnistä peli:** `npx vercel dev`
    *(Huom: `vercel dev` tarvitaan, jotta palvelinfunktiot toimivat paikallisesti.)*

---
Tekijä: Heikki Törmänen