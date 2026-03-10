# areSymbols

## Kuvaus

Tarkistaa, onko syöte täytetty taulukko, jonka kaikki alkiot ovat symboleja, ja palauttaa `true` tai `false`.

### Käyttötapaus

Varmista, että konfiguraatiokenttä (esim. symbolien avulla esitetty yksilöllisten avainten lista) on ei-tyhjä taulukko,
joka sisältää vain symboleja, ennen kuin käytät sitä API-rajapinnoissa, jotka edellyttävät `symbol[]`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areSymbols`-funktiota tuntemattoman syötteen validoimiseen ennen kuin käsittelet sitä tyyppinä `symbol[]`; se
> palauttaa `false` ei-taulukoille ja tyhjille taulukoille.

### Edut

- Palauttaa `true` vain silloin, kun syöte on ei-tyhjä taulukko ja jokainen alkio on symboli.
- Ehkäisee virheellisiä osumia hylkäämällä ei-taulukot ja tyhjät taulukot sisäisen täytetyn taulukon tarkistuksen
  avulla.
- Hyödyllinen ajonaikaisena tyyppivartijana symboli-vain-listojen validoimiseen ennen jatkokäsittelyä.

## Käyttö

### Syntaksi

Funktio:

- `areSymbols(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan symbolialkiot.

### Funktion paikallinen tuonti

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a on ajonaikaisesti vain symboleja sisältävä taulukko
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // epätosi
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areSymbols(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:21:33 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>