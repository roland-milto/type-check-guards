# isOfType

## Opis

Određuje odgovara li zadani `value` navedenom nizu tipa, koristeći `typeof` za primitivne tipove i rezervni mehanizam za
složene tipove.

### Slučaj uporabe

Validirajte i suzite `unknown` ulaze (npr. API odgovore, korisnički unos, parsirani JSON) provjerom odgovara li
vrijednost očekivanom nizu tipa prije izvođenja operacija specifičnih za taj tip.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isOfType` za grananje prema tipovima u izvođenju (runtime) pri radu s vrijednostima tipa `unknown`; vraća
`true`/`false` i eksplicitno tretira `null` i `undefined`.

### Prednosti

- Provjerava primitivne tipove izravno pomoću `typeof` radi brzine i jasnoće.
- Ispravno obrađuje `null` i `undefined`, koje sam `typeof` ne može razlikovati na željeni način.
- Podržava složene ili prilagođene nizove tipova putem rezervne usporedbe koristeći `getTypeOf`.
- Vraća jednostavan booleovski rezultat (`true`/`false`) prikladan za čuvare (guards) i grananje.

## Uporaba

### Sintaksa

Funkcija:

- `isOfType(value, type)`

Parametri:

- `value`: Vrijednost koju treba testirati u odnosu na `type`.
- `type`: Niz koji predstavlja tip u odnosu na koji se provjerava.

### Lokalni uvoz funkcije

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input je ovdje broj
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input je ovdje niz znakova
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isOfType(value, type)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 16:59:57 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>