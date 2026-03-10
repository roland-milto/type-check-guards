# areValidDates

## Opis

Utvrđuje da li je niz neprazan i sastoji se isključivo od važećih objekata `Date`.

### Slučaj upotrebe

Koristite `areValidDates` za validaciju nizova koje dostavlja korisnik ili API prije izvođenja operacija zasnovanih na
datumima (sortiranje, provjere raspona, formatiranje), osiguravajući da su svi unosi stvarni, važeći objekti `Date` i da
lista nije prazna.

> **Napomena za TypeScript korisnike:**
>
> `areValidDates` vraća `false` za prazan niz; osigurajte da je niz namijenjen da bude neprazan prije nego što se
> oslonite na to kao korak validacije.

### Prednosti

- Vraća `true` samo kada je svaki element važeća instanca `Date` (bez nevažećih datuma poput `new Date('invalid')`).
- Odbija prazan unos vraćanjem `false`, osiguravajući da prihvatate samo smislenе, neprazne liste datuma.
- Pruža jednostavnu provjeru u stilu booleovog čuvara koju je lako kombinovati s drugim validacijama.

## Upotreba

### Sintaksa

Funkcija:

- `areValidDates(array)`

Parametri:

- `array`: Niz koji se provjerava, potencijalno sadrži objekte tipa `Date`.

### Lokalni uvoz funkcije

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // tačno
console.log(areValidDates(b)); // netačno
console.log(areValidDates(c)); // netačno
console.log(areValidDates(d)); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areValidDates(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 14:30:56 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>