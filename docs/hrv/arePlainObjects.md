# arePlainObjects

## Opis

Provjerava jesu li svi elementi niza obični objekti, vraćajući `true` samo ako svaki element zadovoljava uvjet.

### Slučaj uporabe

Provjerite vanjske ili netipizirane podatke (npr. parsirani JSON, API payloadove, slanja obrazaca) kako biste osigurali
da ste dobili neprazan niz u kojem je svaki unos običan objekt prije iteriranja i čitanja svojstava.

> **Napomena za TypeScript korisnike:**
>
> Koristite `arePlainObjects` za provjeru nepoznatog ulaza prije nego što ga u TypeScriptu tretirate kao
`Record<string, unknown>[]` (ili stroži oblik objekta).

### Prednosti

- Osigurava da je svaki element u ulaznom nizu običan objekt, vraćajući `true` samo kada se svi elementi podudaraju.
- Rano odbacuje nevaljane ulaze (one koji nisu nizovi ili su prazni nizovi) vraćanjem `false`.
- Smatra i objekte definirane literalom objekta i objekte stvorene s `Object.create(null)` valjanim običnim objektima.

## Uporaba

### Sintaksa

Funkcija:

- `arePlainObjects(array)`

Parametri:

- `array`: Niz koji se provjerava s obzirom na elemente koji su obični objekti.

### Lokalni uvoz funkcije

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // istina
const b = arePlainObjects([{}, Object.create(null)]); // istina
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // netočno
const d = arePlainObjects([] as unknown[]); // netočno
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.arePlainObjects(array)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Datoteka je generirana 30 January 2026 at 16:25:24 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>