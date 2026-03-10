# areValidDates

## Kuvaus

Määrittää, onko taulukko ei-tyhjä ja koostuuko se kokonaan kelvollisista `Date`-olioista.

### Käyttötapaus

Käytä `areValidDates`-funktiota käyttäjän tai API:n toimittamien taulukoiden validointiin ennen päivämääräpohjaisia
toimintoja (lajittelu, alue-/välikokeet, muotoilu), jotta kaikki merkinnät ovat oikeita, kelvollisia `Date`-olioita ja
lista ei ole tyhjä.

> **Huomautus TypeScript-käyttäjille:**
>
> `areValidDates` palauttaa `false` tyhjälle taulukolle; varmista, että taulukon on tarkoitus olla ei-tyhjä ennen kuin
> luotat siihen validointivaiheena.

### Edut

- Palauttaa `true` vain silloin, kun jokainen alkio on kelvollinen `Date`-instanssi (ei virheellisiä päivämääriä kuten
  `new Date('invalid')`).
- Hylkää tyhjän syötteen palauttamalla `false`, mikä varmistaa, että hyväksyt vain merkitykselliset, ei-tyhjät
  päivämäärälistat.
- Tarjoaa yksinkertaisen boolean-tyylisen guard-tarkistuksen, joka on helppo yhdistää muihin validointeihin.

## Käyttö

### Syntaksi

Funktio:

- `areValidDates(array)`

Parametrit:

- `array`: Tarkistettava taulukko, joka voi sisältää `Date`-olioita.

### Funktion paikallinen tuonti

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // tosi
console.log(areValidDates(b)); // epätosi
console.log(areValidDates(c)); // epätosi
console.log(areValidDates(d)); // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areValidDates(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:31:39 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>