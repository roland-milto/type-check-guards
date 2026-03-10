# areFinite

## Kuvaus

`areFinite` tarkistaa, onko arvo ei-tyhjä taulukko, jonka alkiot ovat kaikki äärellisiä lukuja, ja palauttaa `true` jos
näin on, ja muuten `false`.

### Käyttötapaus

Validoi numeeriset syötetaulukot (esim. kaaviosarjat, koordinaattilistat, mittausnäytteet) ennen laskentaa varmistaen,
että tulos on `true` vain silloin, kun kaikki arvot ovat äärellisiä lukuja.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areFinite`-funktiota, kun sinun täytyy varmistaa, että taulukko ei ole tyhjä ja sisältää vain äärellisiä
> lukuja; se palauttaa `false` tyhjille taulukoille sekä taulukoille, jotka sisältävät `NaN`-arvoja tai äärettömyyksiä.

### Edut

- Palauttaa `true` vain silloin, kun syöte on ei-tyhjä taulukko ja jokainen alkio on äärellinen luku.
- Hylkää `Infinity`, `-Infinity` ja `NaN` tukeutumalla `isFinite`-tarkistuksiin jokaiselle alkiolle.
- Tarjoaa yksinkertaisen totuusarvotuloksen (`true`/`false`), joka sopii suojauksiin ja validointipolkuihin.

## Käyttö

### Syntaksi

Funktio:

- `areFinite(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan, että kaikki sen alkiot ovat äärellisiä.

### Funktion paikallinen tuonti

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // tosi
console.log(areFinite(b)); // epätosi
console.log(areFinite(c)); // epätosi

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areFinite(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:34:29 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>