# areMaps

## Opis

`areMaps` određuje da li je dati niz neprazan i da li su svi njegovi elementi instance `Map`.

### Slučaj upotrebe

Validirajte nepoznat ulaz (npr. iz parsiranja JSON-a, eksternih API-ja ili dinamičkih izvora) prije nego što ga
tretirate kao nepraznu listu objekata `Map`.

> **Napomena za TypeScript korisnike:**
>
> Vraća `false` za prazan niz; `true` vraća samo kada je niz popunjen i svaki element je `Map`.

### Prednosti

- Osigurava da je svaki element instanca `Map`, vraćajući `true` samo kada cijeli niz prođe provjeru.
- Po dizajnu odbacuje prazne nizove, sprječavajući slučajno prihvatanje “nema podataka” kao važećeg ulaza.
- Korisno kao zaštita prije izvođenja operacija specifičnih za `Map` (npr. `.get()`, `.set()`, iteracija) nad
  kolekcijom.

## Upotreba

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
  // items je garantovano da bude neprazan niz instanci Map u vrijeme izvršavanja
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false za: prazne nizove ili nizove koji sadrže bilo koju vrijednost koja nije Map
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areMaps(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 16:11:44 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>