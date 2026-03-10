# areFalse

## Opis

`areFalse` provjerava jesu li svi elementi u zadanom nizu strogo booleanska vrijednost `false`.

### Slučaj uporabe

Provjerite da su svi feature flagovi, provjere ili rezultati guardova `false` prije nastavka (npr. potvrdite da ne
postoje blokirajući uvjeti).

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFalse` kada trebate strogu provjeru da niz nije prazan i da sadrži isključivo booleansku vrijednost
`false`.

### Prednosti

- Osigurava da je svaki element strogo `false` (bez prisilne pretvorbe truthy/falsey vrijednosti).
- Vraća `false` za ne-nizove ili prazne nizove tako što zahtijeva popunjeni niz putem `isFilledArray`.
- Za učinkovitost prekida rano na prvom elementu koji nije `false`.

## Uporaba

### Sintaksa

Funkcija:

- `areFalse(array)`

Parametri:

- `array`: Niz za provjeru, koji sadrži elemente bilo kojeg tipa.

### Lokalni uvoz funkcije

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // istina
const b = areFalse([false, true, false]);  // laž
const c = areFalse([false, "false", false]); // laž
const d = areFalse([]); // laž
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areFalse(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 16:17:11 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>