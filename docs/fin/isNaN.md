# isNaN

## Kuvaus

Määrittää, onko annettu `value` tyyppiä `number` oleva `NaN` muuntamatta merkkijonoja.

### Käyttötapaus

Validoi epäluotettava tai löyhästi tyypitetty syöte (esim. API-payloadit, lomakearvot, jäsennetty JSON) havaitaksesi
erityisen `NaN`-arvon ja käsitelläksesi sen eksplisiittisesti, samalla kun ei-numeeriset syötteet käsitellään ei-`NaN`:
na.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isNaN`-funktiota, kun sinun täytyy havaita erityinen numeerinen arvo `NaN` ja samalla varmistaa, että syöte on
> oikeasti `number` (ei merkkijonosta numeroksi -muunnosta).

### Edut

- Tarkistaa, onko arvo `NaN` pakottamatta ei-numeerisia arvoja (esim. merkkijonoja) numeroiksi.
- Palauttaa `true` vain arvoille, jotka ovat sekä tyyppiä `number` että `NaN`.
- Turvallinen `unknown`-syötteille ja välttää implisiittisistä muunnoksista johtuvat väärät positiiviset tulokset.

## Käyttö

### Syntaksi

Funktio:

- `isNaN(value)`

Parametrit:

- `value`: Arvo, josta tarkistetaan, onko se tyyppiä `number` oleva `NaN`.

### Funktion paikallinen tuonti

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // tosi
console.log(isNaN(b)); // epätosi
console.log(isNaN(c)); // epätosi

if (isNaN(a)) {
  // a on luku ja nimenomaan NaN
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isNaN(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 15:45:58 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>