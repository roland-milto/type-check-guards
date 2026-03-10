# isMap

## Opis

Provjerava je li zadani `value` `Map`, vraćajući `true` ako jest i `false` u suprotnom.

### Slučaj uporabe

Koristite `isMap` kada primite vrijednost tipa `unknown` (npr. iz parsiranja JSON-a, vanjskih API-ja ili korisničkog
unosa) i trebate osigurati da je to `Map` prije izvođenja `Map` operacija.

> **Napomena za TypeScript korisnike:**
>
> `isMap` je zaštita u izvođenju koja vraća `true` kada je vrijednost `Map` i `false` u suprotnom; koristite je za
> sužavanje tipa `unknown` prije pozivanja `Map` API-ja.

### Prednosti

- Omogućuje brzu provjeru u izvođenju je li vrijednost `Map`.
- Pomaže spriječiti pogreške tipova tako što štiti putanje koda koje zahtijevaju metode `Map` poput `get`, `set` i
  `has`.
- Dobro funkcionira kao lagan korak validacije pri rukovanju unosima tipa `unknown`.

## Uporaba

### Sintaksa

Funkcija:

- `isMap(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isMap(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isMap](../_analysis/isMap.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 16:04:45 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>