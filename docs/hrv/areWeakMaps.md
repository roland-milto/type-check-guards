# areWeakMaps

## Opis

`areWeakMaps` provjerava je li vrijednost neprazno polje u kojem je svaki element `WeakMap`, vraćajući `true` samo u tom
slučaju, a `false` inače.

### Slučaj uporabe

Validirajte podatke u izvođenju (npr. parsirani JSON, ulazi dodataka ili labavo tipizirana konfiguracija) kako biste
osigurali da je riječ o nepraznom polju instanci `WeakMap` prije iteriranja i pozivanja metoda `WeakMap`; vraća `false`
kada bilo koji element nije `WeakMap` ili kada je polje prazno.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areWeakMaps` za provjeru nepoznatog ulaza prije nego što ga tretirate kao neprazni `WeakMap[]`; vraća
`false` za prazna polja.

### Prednosti

- Osigurava da je svaki element u danom polju instanca `WeakMap`.
- Vraća `false` za prazna polja, sprječavajući slučajno prihvaćanje “bez podataka” kao valjanog ulaza.
- Korisno kao zaštitna provjera prije izvođenja operacija specifičnih za `WeakMap` nad svim stavkama.

## Uporaba

### Sintaksa

Funkcija:

- `areWeakMaps(array)`

Parametri:

- `array`: Polje koje treba provjeriti za instance `WeakMap`.

### Lokalni uvoz funkcije

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list je neprazan niz instanci WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nije neprazan WeakMap[]
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areWeakMaps(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:37:27 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>