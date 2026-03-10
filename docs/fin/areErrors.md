# areErrors

## Kuvaus

Tarkistaa, onko taulukko ei-tyhjä ja sisältää vain `Error`-olioita, palauttaen `true` tai `false`.

### Käyttötapaus

Varmista, että ajonaikaisesti saatu `unknown[]` (esim. koottuja epäonnistumisia, validointituloksia tai deserialisoitua
dataa) on ei-tyhjä `Error`-olioiden lista ennen iterointia, lokitusta tai uudelleenheittoa.

> **Huomautus TypeScript-käyttäjille:**
>
> `areErrors` palauttaa `true` vain täytetylle taulukolle, jossa jokainen alkio on `Error`; se palauttaa `false`
> tyhjälle taulukolle tai jos jokin alkio ei ole `Error`.

### Edut

- Varmistaa, että jokainen alkio on `Error`-instanssi, mikä mahdollistaa turvallisen virheenkäsittelyn ja lokituksen.
- Hylkää tyhjät taulukot, mikä estää vahingossa syntyvät “ei virheitä” -tilat tulemasta käsitellyiksi kelvollisina
  virheluetteloina.
- Toimii hyvin ajonaikaisena vartijana käsiteltäessä `unknown[]`-syötteitä (esim. API:sta tai `catch`-lohkoista).

## Käyttö

### Syntaksi

Funktio:

- `areErrors(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan `Error`-oliot.

### Funktion paikallinen tuonti

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value on ei-tyhjä Error-olioiden taulukko
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areErrors(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 12:33:30 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>