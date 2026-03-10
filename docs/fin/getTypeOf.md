# getTypeOf

## Kuvaus

`getTypeOf` palauttaa annetulle arvolle yksityiskohtaisen, ihmisluettavan tyyppitunnisteen, mukaan lukien tarkennetut
numeeriset tyypit ja tietyt objektien lajit.

### Käyttötapaus

Käytä `getTypeOf`-funktiota tyyppitunnistuksen normalisointiin syötteiden validoinnissa ja diagnostiikassa—esimerkiksi
hylätäksesi `nan`, hyväksyäksesi vain `integer`-tunnisteet, käsitelläksesi numeerisia merkkijonoja kuten `decimal` eri
tavoin kuin pelkkää `string`-tyyppiä, tai lokittaaksesi tarkat objektien lajit kuten `date` ja `regexp`.

> **Huomautus TypeScript-käyttäjille:**
>
> Palautustyyppi on `DataTypeAsString | string`. Käsittele sitä kuvailevana tunnisteena; vertaa haarautumisessa
> tunnettuihin literaaleihin kuten `integer`, `float`, `nan`, `array`, `null` ja `undefined`.

### Edut

- Palauttaa tarkemman tyyppimerkkijonon kuin JavaScriptin `typeof`, mukaan lukien numeeriset alatyypit kuten `integer`,
  `float` ja `nan`.
- Erottaa `null`- ja `undefined`-arvot eksplisiittisesti tyypeiksi `null` ja `undefined`.
- Tunnistaa yleiset numeeristen merkkijonojen muodot ja raportoi ne tyyppeinä `binary`, `octal`, `decimal` tai
  `hexadecimal` pelkän `string`-tyypin sijaan.
- Tunnistaa taulukot tyypiksi `array` ja käyttää `Object.prototype.toString`-menetelmää tarjotakseen tarkat
  objektityyppien nimet (esim. `date`, `regexp`, `map`, `set`).
- Hyödyllinen validoinnissa, lokituksessa ja virheenkorjauksessa, kun tarvitaan johdonmukaisia, ihmisluettavia
  tyyppitunnisteita.

## Käyttö

### Syntaksi

Funktio:

- `getTypeOf(value)`

Parametrit:

- `value`: Arvo, jonka tietotyyppi määritetään.

### Funktion paikallinen tuonti

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Esimerkkitarkistukset
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Objektin globaali tuonti

Tuodaksesi funktiot globaaleina objektimetodeina, käytä:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Seuraava metodi on tällöin käytettävissä globaalisti:

- `Type.getTypeOf(value)`

## Funktioanalyysi

Tässä on dokumentoitu taulukkomuotoinen analyysi siitä tulosteesta, joka syntyy, kun funktioille annetaan erilaisia
parametreja: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Tiedosto luotiin 6 February 2026 at 13:06:18 (UTC) käyttäen *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-työkalua, tekijä
**[Roland Milto](https://roland-milto.de/)**.</small>