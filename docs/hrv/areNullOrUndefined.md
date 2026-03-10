# areNullOrUndefined

## Opis

Provjerava jesu li svi elementi u zadanom nizu `null` ili `undefined`.

### Slučaj uporabe

Provjerite da popis opcionalnih polja ne sadrži stvarne vrijednosti (samo `null`/`undefined`) prije nego što odlučite
preskočiti obradu ili prikazati stanje „nisu navedene vrijednosti”.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNullOrUndefined` kada trebate provjeriti sadrži li niz samo nedostajuće vrijednosti (`null`/
`undefined`). Imajte na umu da vraća `false` za prazan niz.

### Prednosti

- Vraća `true` samo kada je svaki element `null` ili `undefined`.
- Vraća `false` za prazne nizove, što pomaže razlikovati „nema podataka” od „sve nedostajuće vrijednosti”.
- Radi s `unknown[]`, što ga čini sigurnim za korištenje prije sužavanja tipova.

## Uporaba

### Sintaksa

Funkcija:

- `areNullOrUndefined(array)`

Parametri:

- `array`: Niz koji treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areNullOrUndefined(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:29:52 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>