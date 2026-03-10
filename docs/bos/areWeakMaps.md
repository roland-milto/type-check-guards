# areWeakMaps

## Opis

`areWeakMaps` provjerava da li je vrijednost neprazan niz u kojem je svaki element `WeakMap`, vraćajući `true` samo u
tom slučaju, a `false` u suprotnom.

### Slučaj upotrebe

Validirajte podatke u runtime-u (npr. parsirani JSON, ulaze dodataka ili labavo tipiziranu konfiguraciju) kako biste
osigurali da je to neprazan niz instanci `WeakMap` prije iteriranja i pozivanja metoda `WeakMap`; vraća `false` kada
bilo koji element nije `WeakMap` ili kada je niz prazan.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areWeakMaps` za validaciju nepoznatog unosa prije nego što ga tretirate kao neprazan `WeakMap[]`; vraća
`false` za prazne nizove.

### Prednosti

- Osigurava da je svaki element u dostavljenom nizu instanca `WeakMap`.
- Vraća `false` za prazne nizove, sprječavajući slučajno prihvatanje “bez podataka” kao važećeg unosa.
- Korisno kao zaštitna provjera prije izvođenja operacija specifičnih za `WeakMap` nad svim stavkama.

## Upotreba

### Sintaksa

Funkcija:

- `areWeakMaps(array)`

Parametri:

- `array`: Niz koji se provjerava na instance `WeakMap`.

### Lokalni uvoz funkcije

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // lista je neprazan niz instanci WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nije neprazan WeakMap[]
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areWeakMaps(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:36:19 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>