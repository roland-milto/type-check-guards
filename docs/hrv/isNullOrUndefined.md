# isNullOrUndefined

## Opis

Provjerava je li zadana vrijednost `null` ili `undefined`.

### Slučaj uporabe

Koristite `isNullOrUndefined` kada trebate tretirati i `null` i `undefined` kao “nema vrijednosti”, primjerice pri
validaciji opcionalnih unosa, normalizaciji API payloadova ili zaštiti putanja koda prije dereferenciranja potencijalno
nedostajuće vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNullOrUndefined` kao zaštitu od nedostajućih vrijednosti prije pristupa svojstvima ili pozivanja metoda;
> vraća `true` samo za `null` i `undefined`.

### Prednosti

- Pruža jasnu, ponovno upotrebljivu zaštitu za otkrivanje `null` i `undefined` na jednom mjestu.
- Vraća jednostavan boolean (`true`/`false`) koji je lako kombinirati u uvjetima i validacijama.
- Pomaže izbjeći česte runtime pogreške provjerom nedostajućih vrijednosti prije pristupa svojstvima ili pozivanja
  metoda.

## Uporaba

### Sintaksa

Funkcija:

- `isNullOrUndefined(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li `null` ili `undefined`.

### Lokalni uvoz funkcije

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // obradi nedostajuću vrijednost
}

console.log(isNullOrUndefined(b)); // istina
console.log(isNullOrUndefined(c)); // laž

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isNullOrUndefined(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:33:52 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>