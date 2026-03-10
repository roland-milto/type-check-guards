# areNull

## Opis

Provjerava da li su svi elementi u datom `array` jednaki `null`.

### Slučaj upotrebe

Validirajte da kolona skupa podataka, lista polja API-ja ili niz rezervisanih mjesta sadrži samo `null` vrijednosti
prije primjene logike koja pretpostavlja da su svi unosi namjerno prazni.

> **Napomena za TypeScript korisnike:**
>
> Koristite `areNull` kada vam je potrebna stroga provjera da je ulaz neprazan niz i da je svaki element tačno `null` (
> ne `undefined`, ne lažne vrijednosti).

### Prednosti

- Vraća `true` samo kada je svaki element `null`, što ga čini strogom zaštitom tipa „svi se podudaraju“.
- Odbacuje vrijednosti koje nisu nizovi i prazne nizove vraćanjem `false`, sprječavajući slučajne istinite rezultate na
  nevažećem ulazu.
- Dobro funkcioniše kao provjera preduslova prije obrade podataka koji moraju biti u potpunosti `null`.

## Upotreba

### Sintaksa

Funkcija:

- `areNull(array)`

Parametri:

- `array`: Ulazni niz koji se provjerava na `null` elemente.

### Lokalni uvoz funkcije

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // tačno
const allNullB = areNull(b); // netačno

const notAnArray = areNull(123 as unknown as unknown[]); // netačno
const empty = areNull([]); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areNull(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areNull](../_analysis/areNull.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 15:42:36 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>