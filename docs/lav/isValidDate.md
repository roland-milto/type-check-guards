# isValidDate

## Apraksts

`isValidDate` pārbauda, vai dotā vērtība ir derīgs `Date` objekts, un atgriež `true` tikai īstiem, nederīgiem neesošiem
datumiem.

### Lietošanas gadījums

Validēt lietotāja ievadi vai API datus, kuros var būt datumi, nodrošinot, ka vērtība ir īsta `Date` instance un nav
nederīgs datums, pirms veikt datumu aprēķinus, formatēšanu vai salīdzināšanu.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isValidDate` pirms `Date` metožu (piem., `toISOString`, `getTime`) izsaukšanas vērtībām ar tipu
`unknown`, lai pārliecinātos, ka tās ir derīgi `Date` objekti.

### Priekšrocības

- Nodrošina, ka vērtība ir `Date` instances, nevis tikai datumam līdzīga virkne vai skaitlis.
- Noraida nederīgus datumus (piem., `new Date("invalid")`), pārbaudot `NaN` laika vērtības.
- Vienkāršs loģiskais sargs, ko ir viegli izmantot nosacījumos un validācijas cauruļvados.
- Palīdz novērst izpildlaika kļūdas, izsaucot datuma metodes, vispirms pārbaudot ievadi.

## Lietošana

### Sintakse

Funkcija:

- `isValidDate(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ir derīgs Date instances
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // aplams
console.log(isValidDate("2025-12-22")); // aplams

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isValidDate(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 16:51:40 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>