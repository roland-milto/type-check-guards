# areJson

## Opis

Provjerava jesu li svi elementi niza JSON nizovi, vraćajući `true` samo ako je niz popunjen i svaka stavka je valjan
JSON; u suprotnom vraća `false`.

### Slučaj uporabe

Validirajte dolazne podatke (npr. iz parametara upita, varijabli okruženja ili vanjskih API-ja) kada očekujete niz
JSON-kodiranih nizova i želite odbiti prazne nizove ili bilo koje unose koji nisu JSON.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areJson` kada trebate provjeriti da `unknown[]` sadrži samo JSON nizove prije nego što ih parsirate (npr. s
`JSON.parse`).

### Prednosti

- Vraća `true` samo kada je svaki element valjan JSON niz; u suprotnom vraća `false`.
- Brzo prekida: prestaje provjeravati čim se pronađe element koji nije JSON.
- Namjerno odbija prazne nizove, vraćajući `false` za nepopunjen unos.

## Uporaba

### Sintaksa

Funkcija:

- `areJson(array)`

Parametri:

- `array`: Niz koji treba provjeriti sadrži li elemente koji su JSON nizovi.

### Lokalni uvoz funkcije

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // točno
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // netočno
const empty = areJson([]); // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areJson(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areJson](../_analysis/areJson.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 16:16:04 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>