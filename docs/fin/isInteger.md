# isInteger

## Kuvaus

Määrittää, onko annettu `value` turvallinen kokonaisluku.

### Käyttötapaus

Validoi epäluotettava syöte (esim. kyselyparametrit, JSON-payloadit, ympäristömuuttujat) ennen kuin käytät sitä
kokonaislukuna taulukkoindekseihin, sivutukseen, laskureihin tai tietokannan tunnisteisiin.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isInteger`-funktiota tuntemattoman syötteen validoimiseen ennen kuin käsittelet sitä numeerisena
> kokonaislukuna; se palauttaa `true` vain arvoille, joille `typeof value === "number"` ja
`Number.isSafeInteger(value)`.

### Edut

- Tarkistaa sekä tyypin että numeerisen turvallisuuden: palauttaa `true` vain, kun syöte on numero ja turvallinen
  kokonaisluku.
- Ehkäisee yleisiä sudenkuoppia numeerisessa pakottamisessa: merkkijonot kuten "5" palauttavat oikein `false`.
- Hylkää ei-kokonaisluvut ja turvattomat kokonaisluvut, joten se sopii tunnisteisiin, laskureihin ja
  taulukkoindeksointiin.

## Käyttö

### Syntaksi

Funktio:

- `isInteger(value)`

Parametrit:

- `value`: Arvo, josta tarkistetaan kokonaislukustatus.

### Funktion paikallinen tuonti

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // tosi
const b = isInteger(-100);   // tosi
const c = isInteger("5");    // epätosi
const d = isInteger(5.5);    // epätosi
const e = isInteger(null);   // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isInteger(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 00:49:46 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>