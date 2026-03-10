# isPlainObject

## Opis

Provjerava da li je dati `value` običan objekt i vraća `true` ako jeste, u suprotnom `false`.

### Slučaj upotrebe

Validirajte da je `unknown` ulaz (npr. parsirani JSON, eksterni podaci ili argumenti funkcije) običan objekt prije
čitanja ključeva ili mapiranja u tipizirani konfiguracijski objekt.

> **Napomena za TypeScript korisnike:**
>
> `isPlainObject` je korisna za sužavanje `unknown` prije nego što se tretira kao objekt nalik zapisu (record-like);
> vraća `true` samo za vrijednosti čija je interna oznaka `[object Object]`.

### Prednosti

- Pruža jednostavnu, pouzdanu provjeru da li je vrijednost običan objekt (tj. `Object` / `{}`), vraćajući `true` ili
  `false`.
- Pomaže razlikovati obične objekte od nizova, funkcija, `null` i drugih tipova koji nisu obični objekti.
- Korisno kao čuvar tipa (type guard) u TypeScriptu za sužavanje `unknown` vrijednosti prije pristupa svojstvima
  objekta.

## Upotreba

### Sintaksa

Funkcija:

- `isPlainObject(value)`

Parametri:

- `value`: Vrijednost koju treba testirati da li je običan objekt.

### Lokalni uvoz funkcije

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input je ovdje običan objekat
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // tačno
console.log(isPlainObject([])); // netačno
console.log(isPlainObject(null)); // netačno

```

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isPlainObject(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 12:16:40 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>