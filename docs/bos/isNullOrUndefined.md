# isNullOrUndefined

## Opis

Provjerava da li je data vrijednost `null` ili `undefined`.

### Slučaj upotrebe

Koristite `isNullOrUndefined` kada trebate tretirati i `null` i `undefined` kao „nema vrijednosti“, npr. pri validaciji
opcionalnih unosa, normalizaciji API payloadova ili zaštiti putanja koda prije dereferenciranja potencijalno nedostajuće
vrijednosti.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isNullOrUndefined` kao zaštitu od nedostajućih vrijednosti prije pristupanja svojstvima ili pozivanja
> metoda; vraća `true` samo za `null` i `undefined`.

### Prednosti

- Pruža jasnu, ponovo upotrebljivu zaštitu za otkrivanje `null` i `undefined` na jednom mjestu.
- Vraća jednostavan boolean (`true`/`false`) koji je lako kombinovati u uslovima i validacijama.
- Pomaže izbjeći uobičajene greške u izvršavanju provjerom nedostajućih vrijednosti prije pristupanja svojstvima ili
  pozivanja metoda.

## Upotreba

### Sintaksa

Funkcija:

- `isNullOrUndefined(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti na `null` ili `undefined`.

### Lokalni uvoz funkcije

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // obradi nedostajuću vrijednost
}

console.log(isNullOrUndefined(b)); // tačno
console.log(isNullOrUndefined(c)); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isNullOrUndefined(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:33:06 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>