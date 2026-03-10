# isDate

## Opis

`isDate` određuje je li zadana vrijednost `Date`, vraćajući `true` za instance `Date` i `false` u suprotnom.

### Slučaj uporabe

Validirajte i suzite nepoznate vrijednosti (npr. podatke zahtjeva, konfiguracijske vrijednosti ili parsirani JSON) prije
izvođenja `Date` operacija kao što su formatiranje, usporedbe ili pozivanje `toISOString()`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isDate` za sužavanje `unknown` na `Date` u izvođenju; vraća `true` samo za stvarne instance `Date` (ne za
> stringove datuma).

### Prednosti

- Pruža jednostavnu zaštitu u izvođenju za provjeru je li vrijednost `Date`.
- Pomaže spriječiti pogreške tipova osiguravajući da validaciju prolaze samo instance `Date`.
- Korisno za validaciju nepoznatih ulaza (npr. API payloadova) prije korištenja metoda specifičnih za datume.

## Uporaba

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isDate(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isDate](../_analysis/isDate.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 15:37:33 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>