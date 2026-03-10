# isFinite

## Kuvaus

Määrittää, onko annettu `value` äärellinen `number`.

### Käyttötapaus

Käytä `isFinite`-funktiota tuntemattoman syötteen (esim. JSONista, lomakkeista tai API-rajapinnoista) validointiin ennen
numeeristen laskutoimitusten tekemistä, jotta varmistat arvon olevan todellinen, äärellinen luku.

> **Huomautus TypeScript-käyttäjille:**
>
> `isFinite` palauttaa `true` vain äärellisille luvuille; se palauttaa `false` arvoille `NaN`, `Infinity` sekä mille
> tahansa ei-numeeriselle arvolle.

### Edut

- Käyttää sisäänrakennettua `Number.isFinite`-toimintoa luotettavaan äärellisyyden tarkistukseen.
- Palauttaa `true` vain äärellisille luvuille; palauttaa `false` arvoille `NaN`, `Infinity` sekä ei-numeerisille
  syötteille.
- Yksinkertainen, sivuvaikutukseton predikaatti, joka sopii validointiin sekä suojaavaan logiikkaan.

## Käyttö

### Syntaksi

Funktio:

- `isFinite(value)`

Parametrit:

- `value`: Arvo, jonka äärellisyys tarkistetaan.

### Funktion paikallinen tuonti

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers on: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value on tässä äärellinen luku
  const doubled = value * 2;
  console.log(doubled);
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.isFinite(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Tiedosto luotiin 30 January 2026 at 16:29:46 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>