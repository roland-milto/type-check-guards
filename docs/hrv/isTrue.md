# isTrue

## Opis

`isTrue` određuje je li zadana vrijednost strogo jednaka `true`.

### Slučaj uporabe

Koristite `isTrue` za provjeru zastavica, preklopnika značajki ili konfiguracijskih vrijednosti gdje treba prihvatiti
samo literal `true`, a sve ostalo mora se tretirati kao `false`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isTrue` kada trebate prihvatiti samo booleovski literal `true`, a ne samo istinite (truthy) vrijednosti.

### Prednosti

- Pruža strogu provjeru booleovskog literala `true` (bez prisilne pretvorbe).
- Pomaže razlikovati `true` od istinitih (truthy) vrijednosti poput `1`, `"true"` ili `{}`.
- Jednostavno, predvidljivo ponašanje prikladno za čuvare (guards) i validacijske tokove.

## Uporaba

### Sintaksa

Funkcija:

- `isTrue(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // istina
const b = isTrue(1);         // netočno
const c = isTrue("true");   // netočno

if (isTrue(a)) {
  // a je ovdje istina
}
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isTrue(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 13:42:32 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>