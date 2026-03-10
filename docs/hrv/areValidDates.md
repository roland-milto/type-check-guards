# areValidDates

## Opis

Određuje je li polje neprazno i sastoji li se u potpunosti od valjanih objekata `Date`.

### Slučaj uporabe

Koristite `areValidDates` za validaciju polja koja su dali korisnici ili API prije izvođenja operacija temeljenih na
datumima (sortiranje, provjere raspona, formatiranje), osiguravajući da su svi unosi stvarni, valjani objekti `Date` i
da popis nije prazan.

> **Napomena za TypeScript korisnike:**
>
> `areValidDates` vraća `false` za prazno polje; provjerite je li polje namjerno neprazno prije nego što se na to
> oslonite kao na korak validacije.

### Prednosti

- Vraća `true` samo kada je svaki element valjana instanca `Date` (bez nevaljanih datuma poput `new Date('invalid')`).
- Odbacuje prazan unos vraćanjem `false`, osiguravajući da prihvaćate samo smislenе, neprazne popise datuma.
- Pruža jednostavnu provjeru u stilu booleovskog čuvara koju je lako kombinirati s drugim validacijama.

## Uporaba

### Sintaksa

Funkcija:

- `areValidDates(array)`

Parametri:

- `array`: Polje za provjeru, koje potencijalno sadrži objekte `Date`.

### Lokalni uvoz funkcije

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // točno
console.log(areValidDates(b)); // netočno
console.log(areValidDates(c)); // netočno
console.log(areValidDates(d)); // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areValidDates(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 14:32:00 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>