# isObject

## Opis

Određuje da li je data `value` vrijednost `object` (isključujući `null`).

### Slučaj upotrebe

Koristite `isObject` za validaciju nepoznatih ulaza (npr. parsirani JSON, API odgovori, payload-i događaja) prije
pristupa svojstvima, osiguravajući da je vrijednost objekt, a ne `null`.

> **Napomena za TypeScript korisnike:**
>
> `isObject` je runtime guard koji vraća boolean; ne sužava tip na specifičan oblik objekta. Kombinujte ga s dodatnim
> provjerama (npr. postojanje svojstava) kada vam je potrebno jače tipiziranje.

### Prednosti

- Vraća `true` samo za vrijednosti koje nisu `null` i čiji je `typeof` `"object"`.
- Sprječava čestu JavaScript zamku gdje bi se `null` inače tretirao kao objekt.
- Radi za obične objekte i ugrađene instance objekata (npr. `Date`, `RegExp`).
- Jednostavna, brza provjera u runtime-u pogodna za defanzivno programiranje i validaciju ulaza.

## Upotreba

### Sintaksa

Funkcija:

- `isObject(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti da li je `object`.

### Lokalni uvoz funkcije

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input je objekat koji nije null tokom izvršavanja
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isObject(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isObject](../_analysis/isObject.md)

<br>

---

<small>Datoteka je generisana 31 January 2026 at 00:17:46 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>