# areHexadecimals

## Opis

Provjerava jesu li svi elementi u nizu heksadecimalni nizovi znakova te vraća `true` samo za neprazne nizove u kojima je
svaki element valjan.

### Slučaj uporabe

Koristite `areHexadecimals` za provjeru korisničkog unosa ili vanjskih podataka (npr. ID-ova, kontrolnih zbrojeva,
kodova boja bez početnog '#') prije heksadecimalnog parsiranja ili daljnje obrade.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areHexadecimals` za provjeru nepoznatog ulaza prije parsiranja ili pretvaranja vrijednosti (na primjer,
> prije `parseInt(value, 16)` ili BigInt pretvorbi).

### Prednosti

- Provjerava je li svaki element heksadecimalni niz znakova i vraća `true` samo kada se svi elementi podudaraju.
- Namjerno odbacuje prazne nizove, vraćajući `false` kada nedostaju ulazni podaci.
- Pruža jednostavan booleovski rezultat (`true`/`false`) prikladan za guardove i validaciju s ranim povratkom.

## Uporaba

### Sintaksa

Funkcija:

- `areHexadecimals(array)`

Parametri:

- `array`: Niz koji se provjerava sadrži li heksadecimalne nizove znakova.

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areHexadecimals(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 23:06:23 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>