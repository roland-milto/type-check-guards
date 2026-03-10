# areObjects

## Opis

`areObjects` preveri, ali podano zapolnjeno polje vsebuje samo objekte.

### Primer uporabe

Uporabite `areObjects`, ko prejmete neznano polje (npr. iz razčlenjevanja JSON ali zunanjih API-jev) in morate
zagotoviti, da ni prazno ter da je vsak element objekt, preden iterirate in dostopate do lastnosti objektov.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areObjects` za validacijo `unknown[]`, preden elemente obravnavate kot objekte; za prazna polja vrne
`false`.

### Prednosti

- Vrne `true` samo, ko je vhod zapolnjeno polje in je vsak element objekt.
- Se ustavi zgodaj in vrne `false` takoj, ko najde element, ki ni objekt.
- Pomaga validirati neznan vhod, preden izvedete operacije, specifične za objekte.

## Uporaba

### Skladnja

Funkcija:

- `areObjects(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov tipa objekt.

### Lokalni uvoz funkcije

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value je zapolnjeno polje objektov
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areObjects(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:10:18 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>