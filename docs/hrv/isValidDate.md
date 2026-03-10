# isValidDate

## Opis

`isValidDate` provjerava je li zadana vrijednost valjani objekt `Date` i vraća `true` samo za stvarne, ne-nevažeće
datume.

### Slučaj uporabe

Validirajte korisnički unos ili API podatke koji mogu sadržavati datume, osiguravajući da je vrijednost stvarna instanca
`Date`, a ne nevažeći datum, prije izvođenja izračuna datuma, formatiranja ili usporedbi.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isValidDate` prije pozivanja metoda `Date` (npr. `toISOString`, `getTime`) nad vrijednostima tipa `unknown`
> kako biste osigurali da su valjani objekti `Date`.

### Prednosti

- Osigurava da je vrijednost instanca `Date`, a ne samo niz ili broj koji nalikuje datumu.
- Odbacuje nevažeće datume (npr. `new Date("invalid")`) provjerom `NaN` vremenskih vrijednosti.
- Jednostavan booleovski čuvar koji je lako koristiti u uvjetima i validacijskim cjevovodima.
- Pomaže spriječiti pogreške u izvođenju pri pozivanju metoda datuma tako što prvo provjerava ulaz.

## Uporaba

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
  // input je valjana instanca Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // netočno
console.log(isValidDate("2025-12-22")); // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isValidDate(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 16:40:22 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>