# areNull

## Opis

Provjerava jesu li svi elementi u zadanom `array` jednaki `null`.

### Slučaj uporabe

Provjerite sadrži li stupac skupa podataka, popis polja API-ja ili niz rezerviranih mjesta samo vrijednosti `null` prije
primjene logike koja pretpostavlja da su svi unosi namjerno prazni.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNull` kada trebate strogu provjeru da je ulaz neprazan niz i da je svaki element točno `null` (ne
`undefined`, ne lažne vrijednosti).

### Prednosti

- Vraća `true` samo kada je svaki element `null`, što ga čini strogom provjerom tipa “svi se podudaraju”.
- Odbacuje vrijednosti koje nisu nizovi i prazne nizove vraćanjem `false`, čime sprječava slučajne istinite rezultate na
  nevažećem ulazu.
- Dobro funkcionira kao provjera preduvjeta prije obrade podataka koji moraju u potpunosti biti `null`.

## Uporaba

### Sintaksa

Funkcija:

- `areNull(array)`

Parametri:

- `array`: Ulazni niz koji se provjerava na elemente `null`.

### Lokalni uvoz funkcije

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // istina
const allNullB = areNull(b); // laž

const notAnArray = areNull(123 as unknown as unknown[]); // laž
const empty = areNull([]); // laž

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.areNull(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNull](../_analysis/areNull.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 15:43:29 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>