# getTypeOf

## Opis

`getTypeOf` vrne podrobno, človeku berljivo oznako tipa za dano vrednost, vključno z natančnejšimi številskimi tipi in
specifičnimi vrstami objektov.

### Primer uporabe

Uporabite `getTypeOf` za poenotenje zaznavanja tipov pri validaciji vhodnih podatkov in diagnostiki—na primer za
zavrnitev `nan`, sprejemanje samo `integer` ID-jev, drugačno obravnavo številskih nizov, kot je `decimal`, v primerjavi
z navadnim `string`, ali za beleženje natančnih vrst objektov, kot sta `date` in `regexp`.

> **Opomba za uporabnike TypeScripta:**
>
> Vrnjeni tip je `DataTypeAsString | string`. Obravnavajte ga kot opisno oznako; pri razvejanju primerjajte z znanimi
> literali, kot so `integer`, `float`, `nan`, `array`, `null` in `undefined`.

### Prednosti

- Vrne bolj podroben niz tipa kot JavaScriptov `typeof`, vključno s številskimi podtipi, kot so `integer`, `float` in
  `nan`.
- Izrecno razlikuje `null` in `undefined` kot `null` in `undefined`.
- Zazna pogoste oblike številskih nizov in jih poroča kot `binary`, `octal`, `decimal` ali `hexadecimal` namesto kot
  navaden `string`.
- Prepozna tudi polja kot `array` in uporablja `Object.prototype.toString` za zagotavljanje specifičnih imen tipov
  objektov (npr. `date`, `regexp`, `map`, `set`).
- Zelo uporabno je za validacijo, beleženje in razhroščevanje, kjer so potrebne dosledne, človeku berljive oznake tipov.

## Uporaba

### Skladnja

Funkcija:

- `getTypeOf(value)`

Parametri:

- `value`: Vrednost, za katero je treba določiti podatkovni tip.

### Lokalni uvoz funkcije

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

// Primeri preverjanj
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.getTypeOf(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 13:14:33 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>