# arePrimitives

## Opis

`arePrimitives` procjenjuje jesu li svi elementi u zadanom, nepraznom nizu primitivni tipovi.

### Slučaj uporabe

Provjerite da dolazni podaci (npr. parametri upita, vrijednosti redaka CSV-a ili popis ID-jeva/oznaka) sadrže samo
primitivne vrijednosti prije serijalizacije, sažimanja (hashiranja), zapisivanja u log ili prosljeđivanja API-jima koji
ne smiju primati objekte.

> **Napomena za TypeScript korisnike:**
>
> Koristite `arePrimitives` kada trebate osigurati da `unknown[]` sadrži samo primitivne vrijednosti (string, number,
> bigint, boolean, symbol, undefined ili null) prije daljnje obrade.

### Prednosti

- Vraća `true` samo kada je svaki element primitivna vrijednost, što ga čini strogom provjerom za nizove bez
  “objekata/funkcija”.
- Brzo prekida: vraća `false` čim se pronađe ne-primitivni element.
- Također vraća `false` za nenizove i prazne nizove (putem provjere popunjenog niza), sprječavajući slučajno prihvaćanje
  nevaljanog unosa.

## Uporaba

### Sintaksa

Funkcija:

- `arePrimitives(array)`

Parametri:

- `array`: Niz koji se provjerava s obzirom na elemente primitivnog tipa.

### Lokalni uvoz funkcije

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // istina
const r2 = arePrimitives(b); // istina
const r3 = arePrimitives(c); // netočno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.arePrimitives(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:04:48 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>