# areFilledArrays

## Opis

`areFilledArrays` provjerava je li dvodimenzionalno polje neprazno i jesu li sva njegova podpolja neprazna.

### Slučaj uporabe

Koristite `areFilledArrays` za provjeru tabličnog ili matričnog unosa (npr. CSV redci, podaci mreže, grupirani
rezultati) kako biste mogli sigurno pretpostaviti da postoji barem jedno podpolje i da nijedno od podpolja nije prazno.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areFilledArrays` kada trebate osigurati da 2D polje ima barem jedan redak i da svaki redak ima barem jedan
> element prije iteriranja ili indeksiranja u njemu.

### Prednosti

- Provjerava da vanjsko polje nije prazno i da je svako unutarnje polje također neprazno, vraćajući `true` samo kada su
  oba uvjeta ispunjena.
- Radi s bilo kojim tipovima elemenata unutar podpolja (npr. brojevi, stringovi, objekti, ugniježđena polja) jer
  provjerava samo je li polje „popunjeno”, a ne sadržaj elemenata.
- Pruža jednostavan booleovski rezultat (`true`/`false`) prikladan za zaštitne provjere prije obrade dvodimenzionalnih
  podataka.

## Uporaba

### Sintaksa

Funkcija:

- `areFilledArrays(array)`

Parametri:

- `array`: Dvodimenzionalno polje koje se provjerava.

### Lokalni uvoz funkcije

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // istina
console.log(areFilledArrays(b)); // istina
console.log(areFilledArrays(c)); // istina
console.log(areFilledArrays(d)); // laž
console.log(areFilledArrays(e)); // laž
console.log(areFilledArrays(f)); // laž

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areFilledArrays(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 11:56:55 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>