# isFalse

## Opis

`isFalse` provjerava je li zadana vrijednost strogo jednaka booleovskom literalu `false`.

### Slučaj uporabe

Validirajte nepoznate podatke (npr. iz JSON-a, parametara upita ili korisničkog unosa) gdje se samo eksplicitna
booleovska vrijednost `false` treba smatrati valjanom zastavicom, a sve ostalo treba odbiti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isFalse` kada trebate prihvatiti samo literal `false` i odbiti sve ostale lažne (falsy) vrijednosti; vraća
`true` samo za `value === false`.

### Prednosti

- Pruža strogu provjeru booleovskog literala `false` bez prisilne konverzije.
- Pomaže razlikovati `false` od drugih lažnih (falsy) vrijednosti poput `0`, `""`, `null` i `undefined`.
- Poboljšava čitljivost tako što čini namjeru eksplicitnom pri validaciji nepoznatog unosa.

## Uporaba

### Sintaksa

Funkcija:

- `isFalse(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input je ovdje točno false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isFalse(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 16:21:45 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>