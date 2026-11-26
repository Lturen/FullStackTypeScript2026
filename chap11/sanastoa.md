Salasanoja ei ikinä tallenneta tietokantaan,
sen sijaan salasanasta muodostetaan hashattu koodi mikä tallennetaan tietokantaan.
Käytetään tarkoitukseen suunniteltua salasanahashia, kuten Argon2idia.

JWT tokeniin ei tallenneta salasanan tietoja,
tokeni pitää sisällään dataa roolista, ja oikeuksista.

access token säilytetään java scriptin muistissa,
reffresh token säilytetään http-only cookiessa.
Cookie estää java scripti lukemasta tokenia, tietoturvallisuuteen liittyvä ominaisuus, jossa pyritään minimoimaan tietoturva riskit.
Vuotanut tokenin data mahdollistaisi käyttäjän esiintymisen toisena käyttäjänä, ja on validi riski.

(http oli suojaamaton)
https yhteys, tällä salataan seuraavat:

kirjautumistiedot,
JWT-tokenit,
cookiet,
api-liikenteen.

Käyttäjän syötteen validointi:

Frontendissä tehdään käyttäjäystävällinen validointi, onko sähköpostissa vaikka miukumauku.
Todellinen validointi tehdään aina backendissä, jossa tarkastetaan salasanan pituus, käyttäjänimen pituus && sama kuin hashattu tietokannan salasana yms.
Validointi suoritetaan myös apipyynnön rakenteeseen.

Rate-liming:
Tällä rajoitetaan salasanan arvaaminen esim. viiteen kertaan tietyn aikarajan sisään.
Pyritään välttämään brute force hyökkäystä, jossa salasana koitetaan arvata väkisin.

HELMET:
express sovellukseen voidaan lisätä helmet kirjasto, mikä parantaa (res) eli responsen turvallisuutta.
Responsessa on header dataa, ja helmet on juuri se kirjasto jolla parannetaan vastauksen turvallisuutta, lisäämällä siihen kirjaston suomia http headereita.

Vähimmät oikeudet:
käyttäjälle annetaan juuri minimin mukaiset oikeudet.
Kirjautunut käyttäjä ei voi muokata toisen käyttäjän tietoja, ja tähän pureudutaan seuraavilla keinoilla:

-rooleilla
-authorize-middlewarella