# isTrue

## Opis

`isTrue` određuje da li je data vrijednost strogo jednaka `true`.

### Slučaj upotrebe

Koristite `isTrue` za validaciju flagova, feature toggle-ova ili konfiguracijskih vrijednosti gdje treba prihvatiti samo
literal `true`, a sve ostalo se mora tretirati kao `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isTrue` kada trebate prihvatiti samo booleanski literal `true`, a ne samo istinite (truthy) vrijednosti.

### Prednosti

- Pruža strogu provjeru za booleanski literal `true` (bez prisilne konverzije).
- Pomaže razlikovati `true` od istinitih (truthy) vrijednosti kao što su `1`, `"true"` ili `{}`.
- Jednostavno, predvidljivo ponašanje pogodno za guardove i validacijske tokove.

## Upotreba

### Sintaksa

Funkcija:

- `isTrue(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // tačno
const b = isTrue(1);         // netačno
const c = isTrue("true");   // netačno

if (isTrue(a)) {
  // a je ovdje tačno
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isTrue(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:41:45 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>