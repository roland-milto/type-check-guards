# areJson

## Opis

Provjerava da li su svi elementi niza JSON stringovi, vraćajući `true` samo ako je niz popunjen i svaka stavka je važeći
JSON; u suprotnom vraća `false`.

### Slučaj upotrebe

Validirajte dolazne podatke (npr. iz query parametara, varijabli okruženja ili eksternih API-ja) kada očekujete niz
JSON-kodiranih stringova i želite odbiti prazne nizove ili bilo koje unose koji nisu JSON.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areJson` kada trebate validirati da `unknown[]` sadrži samo JSON stringove prije nego što ih parsirate (
> npr. pomoću `JSON.parse`).

### Prednosti

- Vraća `true` samo kada je svaki element važeći JSON string; u suprotnom vraća `false`.
- Brzo prekida: prestaje provjeravati čim se pronađe element koji nije JSON.
- Po dizajnu odbija prazne nizove, vraćajući `false` za nepopunjen unos.

## Upotreba

### Sintaksa

Funkcija:

- `areJson(array)`

Parametri:

- `array`: Niz koji treba provjeriti da li sadrži elemente koji su JSON stringovi.

### Lokalni uvoz funkcije

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // tačno
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // netačno
const empty = areJson([]); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areJson(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areJson](../_analysis/areJson.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:15:10 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>