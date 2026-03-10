# isFalse

## Opis

`isFalse` provjerava da li je data vrijednost strogo jednaka booleanskom literalu `false`.

### Slučaj upotrebe

Validirajte nepoznate podatke (npr. iz JSON-a, parametara upita ili korisničkog unosa) gdje samo eksplicitna booleanska
vrijednost `false` treba biti tretirana kao važeća oznaka (flag), a sve ostalo treba biti odbijeno.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isFalse` kada trebate prihvatiti samo literal `false` i odbiti sve ostale lažne (falsy) vrijednosti; vraća
`true` samo za `value === false`.

### Prednosti

- Pruža strogu provjeru za booleanski literal `false` bez prisilne konverzije.
- Pomaže razlikovati `false` od drugih lažnih (falsy) vrijednosti kao što su `0`, `""`, `null` i `undefined`.
- Poboljšava čitljivost tako što eksplicitno navodi namjeru pri validaciji nepoznatog unosa.

## Upotreba

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
  // input je ovdje tačno false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isFalse(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 16:21:00 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>