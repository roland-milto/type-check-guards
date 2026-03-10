# areDates

## Opis

`areDates` određuje je li zadano polje popunjeno i sadrži li isključivo objekte `Date`, vraćajući `true` samo kada su
svi elementi valjani datumi.

### Slučaj uporabe

Koristite `areDates` za provjeru nepoznatog ulaza (npr. parsirani JSON, podaci iz obrasca, API payloadovi) prije
pokretanja logike specifične za datume poput sortiranja po vremenu, formatiranja ili izračuna raspona.

> **Napomena za TypeScript korisnike:**
>
> Vraća `true` samo za neprazna polja u kojima je svaki element `Date`; prazna polja daju `false`.

### Prednosti

- Osigurava da polje nije prazno prije provjere njegova sadržaja, sprječavajući `true` za prazne ulaze.
- Provjerava je li svaki element instanca `Date`, vraćajući `false` odmah pri prvom nepodudaranju.
- Korisno kao provjera u stilu guarda prije izvođenja operacija specifičnih za datume nad stavkama polja.

## Uporaba

### Sintaksa

Funkcija:

- `areDates(array)`

Parametri:

- `array`: Polje koje treba provjeriti sadrži li objekte `Date`.

### Lokalni uvoz funkcije

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // istina
console.log(areDates(b)); // laž
console.log(areDates(c)); // laž

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areDates(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areDates](../_analysis/areDates.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 15:30:33 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>