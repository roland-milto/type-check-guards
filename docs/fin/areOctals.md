# areOctals

## Kuvaus

`areOctals` määrittää, onko annettu arvo ei-tyhjä taulukko kelvollisia oktaalimerkkijonoja.

### Käyttötapaus

Käytä `areOctals`-funktiota, kun validoit käyttäjän syötettä, konfiguraatioarvoja tai API-payloadia, joiden on
sisällettävä oktaalilitteraaleja (esim. tiedosto-oikeusmoodit kuten `0o755`), ja haluat hylätä tyhjät taulukot tai mitkä
tahansa virheelliset alkiot palauttamalla `false`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areOctals`-funktiota varmistaaksesi, että sinulla on ei-tyhjä `unknown[]`, jossa jokainen alkio on kelvollinen
> oktaalimerkkijono, ennen muuntamista (esim. `Number(...)`-funktion tai oman jäsentämisen kautta).

### Edut

- Varmistaa, että arvo on ei-tyhjä taulukko, jossa jokainen alkio on oktaalimerkkijono, ja palauttaa `true` vain, kun
  kaikki alkiot läpäisevät tarkistuksen.
- Epäonnistuu nopeasti: palauttaa `false` heti, kun ei-oktaalinen alkio löytyy.
- Hyödyllinen suojatarkistuksena ennen oktaalimerkkijonojen jäsentämistä tai muuntamista, jotta vältetään ajonaikaiset
  virheet ja epäjohdonmukainen syötteen käsittely.

## Käyttö

### Syntaksi

Funktio:

- `areOctals(array)`

Parametrit:

- `array`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value on ei-tyhjä oktaalimerkkijonojen taulukko
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areOctals(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:45:03 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>