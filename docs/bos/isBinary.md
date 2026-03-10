# isBinary

## Opis

`isBinary` određuje da li je vrijednost binarni string (opcionalno s prefiksom `0b`/`0B`) i vraća `true` ili `false`.

### Slučaj upotrebe

Validirajte stringove koje korisnik unosi (npr. polja formulara, CLI argumenti, konfiguracijske vrijednosti) kako biste
osigurali da predstavljaju isključivo binarne cifre, opcionalno s prefiksom `0b`/`0B`, prije daljnje obrade.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isBinary` kao čuvar tipa prije parsiranja ili konverzije stringa u `BigInt`/`Number` kako biste izbjegli
> nevažeći unos.

### Prednosti

- Prihvata binarne stringove sa ili bez prefiksa `0b`/`0B`.
- Odbacuje prazne stringove i stringove s vodećim/završnim razmacima (ASCII ≤ 32).
- Vraća `true`/`false` bez bacanja izuzetka, što ga čini sigurnim za nepoznate ulaze.

## Upotreba

### Sintaksa

Funkcija:

- `isBinary(value)`

Parametri:

- `value`: Vrijednost koja se provjerava.

### Lokalni uvoz funkcije

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // tačno
const b = isBinary("1010");   // tačno
const c = isBinary("0b1020"); // netačno
const d = isBinary(0b1010);     // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isBinary(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:09:17 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>