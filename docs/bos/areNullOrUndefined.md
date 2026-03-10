# areNullOrUndefined

## Opis

Provjerava da li su svi elementi u datom nizu `null` ili `undefined`.

### Slučaj upotrebe

Validirajte da lista opcionalnih polja ne sadrži stvarne vrijednosti (samo `null`/`undefined`) prije nego što odlučite
preskočiti obradu ili prikazati stanje „nisu navedene vrijednosti”.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNullOrUndefined` kada trebate provjeriti da niz sadrži samo nedostajuće vrijednosti (`null`/
`undefined`). Imajte na umu da vraća `false` za prazan niz.

### Prednosti

- Vraća `true` samo kada je svaki element `null` ili `undefined`.
- Vraća `false` za prazne nizove, pomažući razlikovati „nema podataka” od „sve vrijednosti nedostaju”.
- Radi s `unknown[]`, što ga čini sigurnim za upotrebu prije sužavanja tipova.

## Upotreba

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

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areNullOrUndefined(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:29:11 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>