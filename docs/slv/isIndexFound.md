# isIndexFound

## Opis

`isIndexFound` določi, ali je dana vrednost nenegativno celo število, kar pomeni, da je indeks najden.

### Primer uporabe

Preverite, da rezultat iskanja predstavlja uporaben indeks (celo število `>= 0`) pred indeksiranjem v polje ali niz, s
čimer preprečite nenamerno uporabo `-1` ali nenumeričnih vrednosti.

> **Opomba za uporabnike TypeScripta:**
>
> `isIndexFound` uporabite po operacijah, kot so `indexOf`, `findIndex` ali iskanja po meri, kjer lahko `-1` (ali druge
> neveljavne vrednosti) pomeni »ni najdeno«. Ko vrne `true`, je vrednost število in jo je varno uporabiti kot indeks v
> polju/nizu.

### Prednosti

- Zagotavlja preprost varovalni tip (type guard) za zaznavanje, ali je bil indeks najden, tako da preveri nenegativno
  celo število.
- Vrne `true` samo za veljavne vrednosti, podobne indeksu (cela števila `>= 0`), ter zavrne negativne vrednosti, necela
  števila in nenumerične vrednosti.
- Pomaga preprečiti napake tipa off-by-one in napake s sentinelnimi vrednostmi pri delu z API-ji, ki za »ni najdeno«
  vrnejo `-1`.

## Uporaba

### Skladnja

Funkcija:

- `isIndexFound(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti, ali je nenegativno celo število.

### Lokalni uvoz funkcije

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx je tukaj število in je >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipična uporaba z indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isIndexFound(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:47:45 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>