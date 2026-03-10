# isBinary

## Kuvaus

`isBinary` määrittää, onko arvo binaarimerkkijono (valinnaisesti `0b`/`0B`-etuliitteellä) ja palauttaa `true` tai
`false`.

### Käyttötapaus

Validoi käyttäjän antamat merkkijonot (esim. lomakekentät, CLI-argumentit, konfiguraatioarvot) varmistaaksesi, että ne
sisältävät vain binaarinumeroita, valinnaisesti `0b`/`0B`-etuliitteellä, ennen jatkokäsittelyä.

> **Huomautus TypeScript-käyttäjille:**
>
> Käytä `isBinary`-funktiota tyyppivartijana ennen merkkijonon jäsentämistä tai muuntamista `BigInt`/`Number`-tyyppiin,
> jotta vältät virheellisen syötteen.

### Edut

- Hyväksyy binaarimerkkijonot joko `0b`/`0B`-etuliitteellä tai ilman.
- Hylkää tyhjät merkkijonot sekä merkkijonot, joissa on alussa tai lopussa välilyöntejä (ASCII ≤ 32).
- Palauttaa `true`/`false` heittämättä poikkeusta, mikä tekee siitä turvallisen tuntemattomille syötteille.

## Käyttö

### Syntaksi

Funktio:

- `isBinary(value)`

Parametrit:

- `value`: Tarkistettava arvo.

### Funktion paikallinen tuonti

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // tosi
const b = isBinary("1010");   // tosi
const c = isBinary("0b1020"); // epätosi
const d = isBinary(0b1010);     // epätosi

```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isBinary(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Tiedosto luotiin 31 January 2026 at 23:09:47 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>