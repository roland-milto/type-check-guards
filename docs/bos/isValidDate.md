# isValidDate

## Opis

`isValidDate` provjerava da li je data vrijednost važeći `Date` objekat i vraća `true` samo za stvarne, ne-nevažeće
datume.

### Slučaj upotrebe

Validirajte korisnički unos ili API podatke koji mogu sadržavati datume, osiguravajući da je vrijednost stvarna instanca
`Date`, a ne nevažeći datum, prije izvođenja proračuna, formatiranja ili poređenja datuma.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isValidDate` prije pozivanja `Date` metoda (npr. `toISOString`, `getTime`) nad vrijednostima tipa `unknown`
> kako biste osigurali da su važeći `Date` objekti.

### Prednosti

- Osigurava da je vrijednost instanca `Date`, a ne samo string ili broj koji liči na datum.
- Odbacuje nevažeće datume (npr. `new Date("invalid")`) provjerom `NaN` vrijednosti vremena.
- Jednostavan booleanski čuvar koji je lako koristiti u uslovima i validacijskim tokovima.
- Pomaže u sprječavanju grešaka u izvođenju pri pozivanju metoda nad datumom tako što prvo provjerava ulaz.

## Upotreba

### Sintaksa

Funkcija:

- `isValidDate(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input je važeća instanca Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // netačno
console.log(isValidDate("2025-12-22")); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isValidDate(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:39:08 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>