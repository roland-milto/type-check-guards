# areTrue

## Opis

Provjerava sadrži li neprazno polje samo booleanske vrijednosti `true`.

### Slučaj uporabe

Koristite `areTrue` za provjeru da su svi preduvjeti ili feature flagovi omogućeni (sve vrijednosti su `true`) prije
nastavka, pri čemu se prazni ili neispravno oblikovani ulazi tretiraju kao nezadovoljeni (`false`).

> **Napomena za TypeScript korisnike:**
>
> `areTrue` vraća `false` za prazno polje i za polja koja sadrže bilo koju vrijednost koja nije strogo `true`.

### Prednosti

- Vraća `true` samo kada je svaki element strogo `true` i polje nije prazno.
- Brzo prekida: vraća `false` čim se pronađe vrijednost koja nije `true`.
- Odbacuje neispravne ulaze (nisu polja ili su prazna polja) vraćanjem `false`.

## Uporaba

### Sintaksa

Funkcija:

- `areTrue(array)`

Parametri:

- `array`: Polje koje treba provjeriti sadrži li sve vrijednosti `true`.

### Lokalni uvoz funkcije

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areTrue(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:51:22 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>