# isOfType

## Opis

Određuje da li dati `value` odgovara specificiranom stringu tipa, koristeći `typeof` za primitivne tipove i rezervni
mehanizam za složene tipove.

### Slučaj upotrebe

Validirajte i suzite `unknown` ulaze (npr. API odgovore, korisnički unos, parsirani JSON) provjerom da li je vrijednost
očekivanog stringa tipa prije izvođenja operacija specifičnih za taj tip.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isOfType` za grananje prema runtime tipovima kada radite s vrijednostima tipa `unknown`; vraća `true`/
`false` i eksplicitno tretira `null` i `undefined`.

### Prednosti

- Provjerava primitivne tipove direktno putem `typeof` radi brzine i jasnoće.
- Ispravno obrađuje `null` i `undefined`, što `typeof` samostalno ne može razlikovati na željeni način.
- Podržava složene ili prilagođene stringove tipa putem rezervnog poređenja koristeći `getTypeOf`.
- Vraća jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove i grananje.

## Upotreba

### Sintaksa

Funkcija:

- `isOfType(value, type)`

Parametri:

- `value`: Vrijednost koju treba testirati u odnosu na `type`.
- `type`: String reprezentacija tipa u odnosu na koji se provjerava.

### Lokalni uvoz funkcije

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input je ovdje broj
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input je ovdje string
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isOfType(value, type)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:58:46 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>