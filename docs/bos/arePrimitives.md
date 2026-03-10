# arePrimitives

## Opis

`arePrimitives` procjenjuje da li su svi elementi u dostavljenom, nepraznom nizu primitivni tipovi.

### Slučaj upotrebe

Validirajte da dolazni podaci (npr. parametri upita, vrijednosti redova CSV-a ili lista ID-ova/oznaka) sadrže samo
primitivne vrijednosti prije serijalizacije, heširanja, logovanja ili prosljeđivanja API-jima koji ne smiju primati
objekte.

> **Napomena za TypeScript korisnike:**
>
> Koristite `arePrimitives` kada trebate osigurati da `unknown[]` sadrži samo primitivne vrijednosti (string, number,
> bigint, boolean, symbol, undefined ili null) prije daljnje obrade.

### Prednosti

- Vraća `true` samo kada je svaki element primitivna vrijednost, što ga čini strogom provjerom za nizove bez
  “objekata/funkcija”.
- Brzo prekida: vraća `false` čim se pronađe ne-primitivni element.
- Također vraća `false` za nenizove i prazne nizove (putem provjere popunjenog niza), sprječavajući slučajno prihvatanje
  nevažećeg ulaza.

## Upotreba

### Sintaksa

Funkcija:

- `arePrimitives(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži elemente primitivnog tipa.

### Lokalni uvoz funkcije

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // tačno
const r2 = arePrimitives(b); // tačno
const r3 = arePrimitives(c); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.arePrimitives(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:00:23 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>