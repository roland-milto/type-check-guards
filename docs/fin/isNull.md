# isNull

## Kuvaus

Määrittää, onko annettu `value` `null`.

### Käyttötapaus

Käytä `isNull`-funktiota syötteiden tai API-payloadin kenttien validointiin, kun `null` on merkityksellinen
sentinel-arvo ja se täytyy käsitellä eri tavalla kuin `undefined` tai muut arvot.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isNull`-funktiota, kun sinun täytyy erottaa `null` `undefined`-arvosta ja muista epätosista arvoista; se
> palauttaa `true` vain `null`-arvolle.

### Edut

- Tarjoaa tarkan tarkistuksen `null`-arvolle sekoittamatta sitä `undefined`-arvoon.
- Toimii luotettavasti kaikille syötetyypeille, koska se hyväksyy `unknown`-tyypin.
- Yksinkertainen, nopea ja sivuvaikutukseton; palauttaa vain `true` tai `false`.

## Käyttö

### Syntaksi

Funktio:

- `isNull(value)`

Parametrit:

- `value`: Arvo, josta tarkistetaan, onko se `null`.

### Funktion paikallinen tuonti

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // tosi
console.log(isNull(b)); // epätosi

if (isNull(a)) {
  // a on tässä null
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isNull(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isNull](../_analysis/isNull.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 15:39:10 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>