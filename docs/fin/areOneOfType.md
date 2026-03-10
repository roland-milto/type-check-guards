# areOneOfType

## Kuvaus

`areOneOfType` tarkistaa, ovatko kaikki ei-tyhjän taulukon alkiot jotakin määritetyistä ajonaikaisista tyypeistä.

### Käyttötapaus

Validoi saapuva data (esim. jäsennetty JSON), jossa kentän on oltava ei-tyhjä taulukko ja jonka alkiot on rajoitettu
tunnettuun primitiivityyppien joukkoon; palauta `false`, kun taulukko on tyhjä tai sisältää jonkin kielletyn tyypin.

> **Huomautus TypeScript-käyttäjille:**
>
> Tämä funktio palauttaa boolean-arvon eikä kavennna taulukon alkioiden tyyppejä käännösaikana; käytä sitä ajonaikaisena
> validointivaiheena ennen jatkokäsittelyä.

### Edut

- Varmistaa, että jokainen taulukon alkio vastaa vähintään yhtä sallittua ajonaikaista tyyppiä, ja palauttaa `true`
  vain, kun koko taulukko läpäisee tarkistuksen.
- Hylkää virheelliset syötteet aikaisin: palauttaa `false`, kun `array` tai `types` on tyhjä tai ei ole täytetty
  taulukko.
- Hyödyllinen sekatyyppisten kokoelmien (esim. numerot ja merkkijonot) validointiin yhdellä `areOneOfType`-kutsulla.

## Käyttö

### Syntaksi

Funktio:

- `areOneOfType(array, types)`

Parametrit:

- `array`: Taulukko alkioita, jotka tarkistetaan annettuja tyyppejä vasten.
- `types`: Merkkijonotaulukko, joka kuvaa tarkistettavat tietotyypit.

### Funktion paikallinen tuonti

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areOneOfType(array, types)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:36:46 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>