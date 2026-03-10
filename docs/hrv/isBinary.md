# isBinary

## Opis

`isBinary` određuje je li vrijednost binarni niz znakova (po želji s prefiksom `0b`/`0B`) i vraća `true` ili `false`.

### Slučaj uporabe

Validirajte nizove znakova koje pruža korisnik (npr. polja obrasca, CLI argumenti, konfiguracijske vrijednosti) kako
biste osigurali da predstavljaju isključivo binarne znamenke, po želji s prefiksom `0b`/`0B`, prije daljnje obrade.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBinary` kao čuvara tipa prije parsiranja ili pretvaranja niza znakova u `BigInt`/`Number` kako biste
> izbjegli nevaljan unos.

### Prednosti

- Prihvaća binarne nizove znakova s prefiksom `0b`/`0B` ili bez njega.
- Odbacuje prazne nizove znakova i nizove s vodećim/završnim razmacima (ASCII ≤ 32).
- Vraća `true`/`false` bez bacanja iznimke, što ga čini sigurnim za nepoznate ulaze.

## Uporaba

### Sintaksa

Funkcija:

- `isBinary(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // istina
const b = isBinary("1010");   // istina
const c = isBinary("0b1020"); // netočno
const d = isBinary(0b1010);     // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isBinary(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:10:01 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>