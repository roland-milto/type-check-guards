# areDecimals

## Opis

Provjerava jesu li svi elementi u polju decimalni brojevi i je li polje popunjeno, vraćajući `true` ili `false`.

### Slučaj uporabe

Validirajte popise koje su unijeli korisnici (npr. CSV stupce ili unose u obrascima) kako biste osigurali da polje nije
prazno i da je svaki unos decimalna vrijednost prije parsiranja ili izračuna.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areDecimals` kada trebate brzu booleovsku provjeru da je `unknown[]` neprazan i da je svaki element
> decimalni zapis.

### Prednosti

- Osigurava da je ulaz popunjeno polje prije provjere stavki, sprječavajući slučajno prihvaćanje praznih popisa.
- Provjerava svaki element pomoću `isDecimal`, pa miješane ili nevaljane vrijednosti odmah daju rezultat `false`.
- Pruža jednostavan booleovski ishod (`true`/`false`) prikladan za guardove i tokove validacije s ranim povratom.

## Uporaba

### Sintaksa

Funkcija:

- `areDecimals(array)`

Parametri:

- `array`: Polje koje treba provjeriti.

### Lokalni uvoz funkcije

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // istina
console.log(areDecimals(b)); // netočno
console.log(areDecimals(c)); // netočno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areDecimals(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 15:57:24 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>