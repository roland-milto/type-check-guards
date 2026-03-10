# areDates

## Kuvaus

`areDates` määrittää, onko annettu taulukko täytetty ja sisältääkö se vain `Date`-olioita, palauttaen `true` vain
silloin, kun kaikki alkiot ovat kelvollisia päivämääriä.

### Käyttötapaus

Käytä `areDates`-funktiota tuntemattoman syötteen (esim. jäsennetty JSON, lomaketiedot, API-payloadit) validoimiseen
ennen päivämääräkohtaista logiikkaa, kuten ajan mukaan lajittelua, muotoilua tai aikavälien laskemista.

> **Huomautus TypeScript-käyttäjille:**
>
> Palauttaa `true` vain ei-tyhjille taulukoille, joissa jokainen alkio on `Date`; tyhjät taulukot tuottavat `false`.

### Edut

- Varmistaa, että taulukko ei ole tyhjä ennen sen sisällön validointia, mikä estää `true`-tuloksen tyhjille syötteille.
- Varmistaa, että jokainen alkio on `Date`-instanssi, ja palauttaa `false` välittömästi ensimmäisestä poikkeamasta.
- Hyödyllinen vartijatyylisenä tarkistuksena ennen taulukon alkioihin kohdistettavia päivämääräkohtaisia operaatioita.

## Käyttö

### Syntaksi

Funktio:

- `areDates(array)`

Parametrit:

- `array`: Tarkistettava taulukko `Date`-olioiden varalta.

### Funktion paikallinen tuonti

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // tosi
console.log(areDates(b)); // epätosi
console.log(areDates(c)); // epätosi

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areDates(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areDates](../_analysis/areDates.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 15:30:18 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>