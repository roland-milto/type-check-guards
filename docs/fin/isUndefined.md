# isUndefined

## Kuvaus

Tarkistaa, onko annettu arvo `undefined`.

### Käyttötapaus

Käytä `isUndefined`-funktiota valvomaan valinnaisia syötteitä, havaitsemaan puuttuvia ominaisuuksia tai erottamaan “ei
annettu” (`undefined`) ja “nimenomaisesti tyhjä” (`null`).

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isUndefined`-funktiota, kun sinun täytyy nimenomaisesti havaita `undefined` (ei `null`). Se on turvallinen,
> koska se perustuu ehtoon `typeof value === "undefined"`.

### Edut

- Tarjoaa selkeän ja eksplisiittisen tarkistuksen `undefined`-arvolle käyttämällä `typeof`-operaattoria, mikä välttää
  reunatapaukset julistamattomien muuttujien kanssa.
- Palauttaa yksinkertaisen totuusarvon (`true`/`false`), joka sopii suojausehtoihin, haarautumiseen ja
  validointilogiikkaan.
- Auttaa erottamaan `undefined`-arvon muista “tyhjistä” arvoista, kuten `null`, `0`, `""` tai `NaN`.

## Käyttö

### Syntaksi

Funktio:

- `isUndefined(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x on tässä undefined
} else {
  // x ei ole tässä undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isUndefined(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 14:02:38 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>