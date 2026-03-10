# areTrue

## Opis

Provjerava da li neprazan niz sadrži samo booleanske vrijednosti `true`.

### Slučaj upotrebe

Koristite `areTrue` da provjerite da li je skup preduslova ili feature flagova u potpunosti uključen (sve vrijednosti su
`true`) prije nastavka, pri čemu se prazni ili neispravni ulazi tretiraju kao nezadovoljeni (`false`).

> **Napomena za TypeScript korisnike:**
>
> `areTrue` vraća `false` za prazan niz i za nizove koji sadrže bilo koju vrijednost koja nije strogo `true`.

### Prednosti

- Vraća `true` samo kada je svaki element strogo `true` i niz nije prazan.
- Brzo prekida: vraća `false` čim se pronađe vrijednost koja nije `true`.
- Odbacuje nevažeće ulaze (koji nisu nizovi ili su prazni nizovi) vraćanjem `false`.

## Upotreba

### Sintaksa

Funkcija:

- `areTrue(array)`

Parametri:

- `array`: Niz koji se provjerava da li sadrži sve vrijednosti `true`.

### Lokalni uvoz funkcije

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.areTrue(array)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Datoteka je generisana 30 January 2026 at 13:50:31 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>