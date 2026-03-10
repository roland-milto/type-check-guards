# getTypeOf

## Opis

`getTypeOf` vraća detaljnu, ljudima čitljivu oznaku tipa za zadanu vrijednost, uključujući preciznije numeričke tipove i
specifične vrste objekata.

### Slučaj upotrebe

Koristite `getTypeOf` za ujednačavanje detekcije tipova u validaciji ulaza i dijagnostici—na primjer, da odbijete `nan`,
prihvatite samo `integer` ID-ove, tretirate numeričke stringove poput `decimal` drugačije od običnog `string`, ili da
logujete precizne vrste objekata kao što su `date` i `regexp`.

> **Napomena za TypeScript korisnike:**
>
> Povratni tip je `DataTypeAsString | string`. Tretirajte ga kao opisnu oznaku; upoređujte s poznatim literalima kao što
> su `integer`, `float`, `nan`, `array`, `null` i `undefined` kada granate logiku.

### Prednosti

- Vraća detaljniji tip kao string nego JavaScriptov `typeof`, uključujući numeričke podtipove kao što su `integer`,
  `float` i `nan`.
- Jasno razlikuje `null` i `undefined` te ih eksplicitno prikazuje kao `null` i `undefined`.
- Prepoznaje uobičajene formate numeričkih stringova i prijavljuje ih kao `binary`, `octal`, `decimal` ili `hexadecimal`
  umjesto kao obični `string`.
- Prepoznaje nizove kao `array` i koristi `Object.prototype.toString` da pruži specifična imena tipova objekata (npr.
  `date`, `regexp`, `map`, `set`).
- Korisno za validaciju, logovanje i otklanjanje grešaka kada su potrebne konzistentne, ljudima čitljive oznake tipova.

## Upotreba

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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.getTypeOf(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 13:05:25 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>