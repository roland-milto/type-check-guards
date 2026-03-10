# isPlainObject

## Opis

Provjerava je li zadani `value` običan objekt i vraća `true` ako jest, inače `false`.

### Slučaj uporabe

Validirajte da je `unknown` ulaz (npr. parsirani JSON, vanjski podaci ili argumenti funkcije) običan objekt prije
čitanja ključeva ili mapiranja u tipizirani konfiguracijski objekt.

> **Napomena za TypeScript korisnike:**
>
> `isPlainObject` je koristan za sužavanje `unknown` prije nego što ga tretirate kao objekt nalik zapisu (record); vraća
`true` samo za vrijednosti čija je interna oznaka `[object Object]`.

### Prednosti

- Pruža jednostavnu i pouzdanu provjeru je li vrijednost običan objekt (tj. `Object` / `{}`), vraćajući `true` ili
  `false`.
- Pomaže razlikovati obične objekte od nizova, funkcija, `null` i drugih tipova koji nisu obični objekti.
- Korisno kao čuvar tipa (type guard) u TypeScriptu za sužavanje vrijednosti tipa `unknown` prije pristupa svojstvima
  objekta.

## Uporaba

### Sintaksa

Funkcija:

- `isPlainObject(value)`

Parametri:

- `value`: Vrijednost koju treba testirati radi utvrđivanja je li običan objekt.

### Lokalni uvoz funkcije

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input je ovdje običan objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // istina
console.log(isPlainObject([])); // netočno
console.log(isPlainObject(null)); // netočno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isPlainObject(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 12:17:53 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>