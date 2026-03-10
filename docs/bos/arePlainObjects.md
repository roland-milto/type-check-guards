# arePlainObjects

## Opis

Provjerava da li su svi elementi niza obični objekti, vraćajući `true` samo ako svaki element ispunjava uslov.

### Slučaj upotrebe

Validirajte eksterne ili netipizirane podatke (npr. parsirani JSON, API payloadovi, slanja iz formi) kako biste
osigurali da ste dobili neprazan niz u kojem je svaki unos običan objekt prije iteriranja i čitanja svojstava.

> **Napomena za TypeScript korisnike:**
>
> Koristite `arePlainObjects` za validaciju nepoznatog ulaza prije nego što ga u TypeScriptu tretirate kao
`Record<string, unknown>[]` (ili strožiji oblik objekta).

### Prednosti

- Osigurava da je svaki element u ulaznom nizu običan objekt, vraćajući `true` samo kada se svi elementi podudaraju.
- Rano odbacuje nevažeće ulaze (one koji nisu nizovi ili su prazni nizovi) vraćanjem `false`.
- Tretira i objekte kreirane literalom objekta i objekte kreirane pomoću `Object.create(null)` kao važeće obične
  objekte.

## Upotreba

### Sintaksa

Funkcija:

- `arePlainObjects(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži elemente koji su obični objekti.

### Lokalni uvoz funkcije

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // tačno
const b = arePlainObjects([{}, Object.create(null)]); // tačno
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // netačno
const d = arePlainObjects([] as unknown[]); // netačno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.arePlainObjects(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 16:24:29 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>