# getTypeOf

## Opis

`getTypeOf` vraća detaljnu, ljudima čitljivu oznaku tipa za zadanu vrijednost, uključujući preciznije numeričke tipove i
specifične vrste objekata.

### Slučaj uporabe

Koristite `getTypeOf` za ujednačavanje detekcije tipova u validaciji ulaza i dijagnostici—na primjer, za odbijanje
`nan`, prihvaćanje samo `integer` ID-ova, drugačije tretiranje numeričkih nizova poput `decimal` u odnosu na običan
`string`, ili za zapisivanje preciznih vrsta objekata kao što su `date` i `regexp`.

> **Napomena za TypeScript korisnike:**
>
> Povratni tip je `DataTypeAsString | string`. Tretirajte ga kao opisnu oznaku; pri grananju uspoređujte s poznatim
> literalima poput `integer`, `float`, `nan`, `array`, `null` i `undefined`.

### Prednosti

- Vraća detaljniji niz koji opisuje tip nego JavaScriptov `typeof`, uključujući numeričke podtipove poput `integer`,
  `float` i `nan`.
- Jasno razlikuje `null` i `undefined` te ih eksplicitno prikazuje kao `null` i `undefined`.
- Prepoznaje uobičajene formate numeričkih nizova i prijavljuje ih kao `binary`, `octal`, `decimal` ili `hexadecimal`
  umjesto kao običan `string`.
- Prepoznaje polja kao `array` i koristi `Object.prototype.toString` kako bi pružio specifične nazive tipova objekata (
  npr. `date`, `regexp`, `map`, `set`).
- Korisno za validaciju, zapisivanje (logging) i otklanjanje pogrešaka (debugging) kada su potrebne dosljedne, ljudima
  čitljive oznake tipova.

## Uporaba

### Sintaksa

Funkcija:

- `getTypeOf(value)`

Parametri:

- `value`: Vrijednost za koju treba odrediti tip podataka.

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

// Primjeri provjera
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.getTypeOf(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 13:06:47 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>