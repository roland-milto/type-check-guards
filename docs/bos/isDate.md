# isDate

## Opis

`isDate` određuje da li je proslijeđena vrijednost `Date`, vraćajući `true` za instance `Date`, a `false` u suprotnom.

### Slučaj upotrebe

Validirajte i suzite nepoznate vrijednosti (npr. podatke zahtjeva, vrijednosti konfiguracije ili parsirani JSON) prije
izvođenja `Date` operacija kao što su formatiranje, poređenja ili pozivanje `toISOString()`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isDate` da suzite `unknown` na `Date` u runtime-u; vraća `true` samo za stvarne instance `Date` (ne za
> stringove datuma).

### Prednosti

- Pruža jednostavnu runtime provjeru kako bi se potvrdilo da li je vrijednost `Date`.
- Pomaže u sprječavanju grešaka tipa tako što osigurava da validaciju prođu samo instance `Date`.
- Korisno za validaciju nepoznatih ulaza (npr. API payloadova) prije korištenja metoda specifičnih za datume.

## Upotreba

### Sintaksa

Funkcija:

- `isDate(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti za tip `Date`.

### Lokalni uvoz funkcije

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input je ovdje Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isDate(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isDate](../_analysis/isDate.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 15:36:42 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>