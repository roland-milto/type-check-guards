# isObject

## Opis

Određuje je li zadana `value` `object` (isključujući `null`).

### Slučaj uporabe

Koristite `isObject` za validaciju nepoznatih ulaza (npr. parsirani JSON, API odgovori, payloadovi događaja) prije
pristupanja svojstvima, osiguravajući da je vrijednost objekt, a ne `null`.

> **Napomena za TypeScript korisnike:**
>
> `isObject` je zaštitna provjera u izvođenju koja vraća boolean; ne sužava na određeni oblik objekta. Kombinirajte je s
> dodatnim provjerama (npr. postojanje svojstava) kada trebate jače tipiziranje.

### Prednosti

- Vraća `true` samo za vrijednosti koje nisu `null` i čiji je `typeof` `"object"`.
- Sprječava čestu JavaScript zamku u kojoj bi se `null` inače tretirao kao objekt.
- Radi za obične objekte i ugrađene instance objekata (npr. `Date`, `RegExp`).
- Jednostavna, brza provjera u izvođenju prikladna za obrambeno programiranje i validaciju ulaza.

## Uporaba

### Sintaksa

Funkcija:

- `isObject(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti je li `object`.

### Lokalni uvoz funkcije

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input je objekt koji nije null u vrijeme izvođenja
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isObject(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isObject](../_analysis/isObject.md)

<br>

---

<small>Datoteka je generirana 31 January 2026 at 00:18:39 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>