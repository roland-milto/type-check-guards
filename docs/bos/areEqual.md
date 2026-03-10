# areEqual

## Opis

`areEqual` provjerava da li su svi elementi u nizu jednaki zadatoj očekivanoj vrijednosti, vraćajući `true` samo za
neprazne nizove u kojima se svaka stavka podudara.

### Slučaj upotrebe

Validirajte da lista sadrži samo jednu dozvoljenu vrijednost (npr. sve statusne zastavice su `true`, sve uloge su
`"admin"`, ili svi numerički unosi jednaki su zahtijevanoj konstanti) uz tretiranje praznog unosa kao nevažećeg (
`false`).

> **Napomena za TypeScript korisnike:**
>
> Koristite `areEqual` kada vam je potrebna stroga provjera da su sve stavke jednake; vraća `false` za prazne nizove i
> za bilo koji unos koji nije niz ili nije popunjen.

### Prednosti

- Vraća `true` samo kada svaki element odgovara očekivanoj vrijednosti; u suprotnom vraća `false`.
- Brzo prekida: prestaje provjeravati čim se pronađe element koji se ne podudara.
- Štiti od nevažećeg unosa vraćajući `false` kada unos nije popunjen niz.

## Upotreba

### Sintaksa

Funkcija:

- `areEqual(value, expected)`

Parametri:

- `value`: Niz koji se provjerava.
- `expected`: Element s kojim se poredi svaka stavka niza.

### Lokalni uvoz funkcije

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areEqual(value, expected)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:49:48 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>