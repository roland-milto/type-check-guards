# isMap

## Opis

Provjerava da li je dati `value` `Map`, vraćajući `true` ako jeste i `false` u suprotnom.

### Slučaj upotrebe

Koristite `isMap` kada primite `unknown` vrijednost (npr. iz parsiranja JSON-a, eksternih API-ja ili korisničkog unosa)
i trebate osigurati da je to `Map` prije izvođenja `Map` operacija.

> **Napomena za TypeScript korisnike:**
>
> `isMap` je runtime guard koji vraća `true` kada je vrijednost `Map` i `false` u suprotnom; koristite ga da suzite
`unknown` prije pozivanja `Map` API-ja.

### Prednosti

- Pruža brzu provjeru u runtime-u da li je vrijednost `Map`.
- Pomaže u sprječavanju grešaka tipa tako što štiti putanje koda koje zahtijevaju `Map` metode kao što su `get`, `set` i
  `has`.
- Dobro funkcioniše kao lagan korak validacije pri rukovanju `unknown` ulazima.

## Upotreba

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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isMap(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isMap](../_analysis/isMap.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 16:03:44 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>