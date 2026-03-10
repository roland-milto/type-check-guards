# areMaps

## Opis

`areMaps` određuje je li zadani niz neprazan i jesu li svi njegovi elementi instance `Map`.

### Slučaj uporabe

Validirajte nepoznati unos (npr. iz parsiranja JSON-a, vanjskih API-ja ili dinamičkih izvora) prije nego što ga
tretirate kao neprazan popis objekata `Map`.

> **Napomena za TypeScript korisnike:**
>
> Vraća `false` za prazan niz; `true` vraća samo kada je niz popunjen i svaki element je `Map`.

### Prednosti

- Osigurava da je svaki element instanca `Map`, vraćajući `true` samo kada cijeli niz prođe provjeru.
- Namjerno odbacuje prazne nizove, sprječavajući slučajno prihvaćanje “nema podataka” kao valjanog unosa.
- Korisno kao zaštita prije izvođenja operacija specifičnih za `Map` (npr. `.get()`, `.set()`, iteracija) nad
  kolekcijom.

## Uporaba

### Sintaksa

Funkcija:

- `areMaps(array)`

Parametri:

- `array`: Niz koji treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items je zajamčeno neprazan niz instanci Map u vrijeme izvođenja
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false za: prazne nizove ili nizove koji sadrže bilo koju vrijednost koja nije Map
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areMaps(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 16:12:44 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>