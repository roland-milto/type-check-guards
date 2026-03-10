# isString

## Opis

`isString` određuje da li je data vrijednost string.

### Slučaj upotrebe

Validirajte korisnički unos, polja API payload-a ili konfiguracijske vrijednosti u runtime-u kako biste osigurali da je
vrijednost string prije primjene string operacija (npr. trimanje, dijeljenje, promjena veličine slova).

> **Napomena za TypeScript korisnike:**
>
> Koristite `isString` za validaciju vrijednosti tipa `unknown` ili labavo tipiziranih vrijednosti prije pozivanja
> string metoda; vraća `true` samo kada je `typeof value === "string"`.

### Prednosti

- Jednostavna i brza provjera pomoću `typeof`.
- Vraća predvidljiv booleanski rezultat: `true` za stringove, inače `false`.
- Radi i za prazne i za neprazne stringove.
- Korisno kao lagana runtime zaštita prije izvođenja operacija specifičnih za string.

## Upotreba

### Sintaksa

Funkcija:

- `isString(value)`

Parametri:

- `value`: Vrijednost koju treba testirati da li je tipa string.

### Lokalni uvoz funkcije

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input je ovdje string
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isString(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isString](../_analysis/isString.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:13:23 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>