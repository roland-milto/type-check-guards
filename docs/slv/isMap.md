# isMap

## Opis

Preveri, ali je podana `value` tipa `Map`, in vrne `true`, če je, sicer pa `false`.

### Primer uporabe

Uporabite `isMap`, ko prejmete vrednost tipa `unknown` (npr. iz razčlenjevanja JSON, zunanjih API-jev ali uporabniškega
vnosa) in morate zagotoviti, da je `Map`, preden izvedete operacije `Map`.

> **Opomba za uporabnike TypeScripta:**
>
> `isMap` je varovalo med izvajanjem, ki vrne `true`, ko je vrednost `Map`, in `false` sicer; uporabite ga za zoženje
> tipa `unknown` pred klicanjem API-jev `Map`.

### Prednosti

- Omogoča hitro preverjanje med izvajanjem, ali je vrednost `Map`.
- Pomaga preprečiti napake tipov z varovanjem poti kode, ki zahtevajo metode `Map`, kot so `get`, `set` in `has`.
- Dobro deluje kot lahek korak validacije pri obravnavi vhodov tipa `unknown`.

## Uporaba

### Skladnja

Funkcija:

- `isMap(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isMap(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isMap](../_analysis/isMap.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 16:29:39 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>