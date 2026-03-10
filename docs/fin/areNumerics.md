# areNumerics

## Kuvaus

`areNumerics` tarkistaa, onko arvo ei-tyhjä taulukko, jossa kaikki alkiot ovat numeerisia.

### Käyttötapaus

Käytä `areNumerics`-funktiota validoimaan ulkoista tai tyypittämätöntä dataa (esim. JSON-payloadit, kyselyparametrit,
lomakesyöte) ennen summien, keskiarvojen tai muiden numeeristen operaatioiden laskemista. Näin varmistat, että syöte on
ei-tyhjä numeerinen taulukko, ja muussa tapauksessa palautetaan `false`.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `areNumerics`-funktiota suojaamaan `unknown`-syöte ennen kuin käsittelet sitä numeerisena taulukkona; se
> palauttaa `false` ei-taulukoille ja tyhjille taulukoille.

### Edut

- Palauttaa `true` vain silloin, kun syöte on ei-tyhjä taulukko ja jokainen alkio on numeerinen.
- Epäonnistuu nopeasti: lopettaa tarkistamisen heti, kun löytyy ei-numeerinen alkio, ja palauttaa `false`.
- Auttaa validoimaan tuntemattoman syötteen turvallisesti ennen numeeristen operaatioiden suorittamista.

## Käyttö

### Syntaksi

Funktio:

- `areNumerics(array)`

Parametrit:

- `array`: Taulukko, josta tarkistetaan numeeriset alkiot.

### Funktion paikallinen tuonti

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // tosi
console.log(areNumerics(b)); // tosi
console.log(areNumerics(c)); // epätosi
console.log(areNumerics(d)); // epätosi
console.log(areNumerics(e)); // epätosi

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.areNumerics(array)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 16:05:01 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>