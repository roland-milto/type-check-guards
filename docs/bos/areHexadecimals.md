# areHexadecimals

## Opis

Provjerava jesu li svi elementi u nizu heksadecimalni stringovi, vraćajući `true` samo za neprazne nizove u kojima je
svaki element ispravan.

### Slučaj upotrebe

Koristite `areHexadecimals` za validaciju korisničkog unosa ili eksternih podataka (npr. ID-ova, kontrolnih suma, kodova
boja bez vodećeg '#') prije heksadecimalnog parsiranja ili daljnje obrade.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areHexadecimals` za validaciju nepoznatog ulaza prije parsiranja ili konverzije vrijednosti (na primjer,
> prije `parseInt(value, 16)` ili BigInt konverzija).

### Prednosti

- Provjerava da je svaki element heksadecimalni niz znakova i vraća `true` samo kada se svi elementi podudaraju.
- Namjerno odbija prazne nizove, vraćajući `false` kada nedostaju ulazni podaci.
- Pruža jednostavan booleanski rezultat (`true`/`false`) pogodan za guardove i validaciju s ranim povratkom.

## Upotreba

### Sintaksa

Funkcija:

- `areHexadecimals(array)`

Parametri:

- `array`: Niz koji se provjerava na heksadecimalne elemente tipa string.

### Lokalni uvoz funkcije

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areHexadecimals(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 23:05:31 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>