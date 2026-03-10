# areFilledArrays

## Opis

`areFilledArrays` provjerava da li je dvodimenzionalni niz neprazan i da su svi njegovi podnizovi neprazni.

### Slučaj upotrebe

Koristite `areFilledArrays` za validaciju tabelarnog ili matričnog unosa (npr. CSV redovi, podaci mreže, grupisani
rezultati) kako biste mogli sigurno pretpostaviti da postoji barem jedan podniz i da nijedan od podnizova nije prazan.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFilledArrays` kada trebate osigurati da 2D niz ima barem jedan red i da svaki red ima barem jedan
> element prije iteriranja ili indeksiranja u njemu.

### Prednosti

- Provjerava da vanjski niz nije prazan i da je svaki unutrašnji niz također neprazan, vraćajući `true` samo kada su oba
  uslova ispunjena.
- Radi s bilo kojim tipovima elemenata unutar podnizova (npr. brojevi, stringovi, objekti, ugniježđeni nizovi) jer
  provjerava samo da li su nizovi „popunjeni“, a ne sadržaj elemenata.
- Pruža jednostavan booleanski rezultat (`true`/`false`) pogodan za provjere prije obrade dvodimenzionalnih podataka.

## Upotreba

### Sintaksa

Funkcija:

- `areFilledArrays(array)`

Parametri:

- `array`: Dvodimenzionalni niz koji treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // tačno
console.log(areFilledArrays(b)); // tačno
console.log(areFilledArrays(c)); // tačno
console.log(areFilledArrays(d)); // netačno
console.log(areFilledArrays(e)); // netačno
console.log(areFilledArrays(f)); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areFilledArrays(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 11:55:44 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>