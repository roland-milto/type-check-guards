# isObject

## Opis

Ugotovi, ali je podana `value` objekt (brez `null`).

### Primer uporabe

Uporabite `isObject` za validacijo neznanih vhodov (npr. razčlenjen JSON, odzivi API-ja, vsebine dogodkov) pred dostopom
do lastnosti, s čimer zagotovite, da je vrednost objekt in ne `null`.

> **Opomba za uporabnike TypeScripta:**
>
> `isObject` je varovalo med izvajanjem, ki vrne logično vrednost; ne zoži tipa na določeno obliko objekta. Kombinirajte
> ga z dodatnimi preverjanji (npr. obstoj lastnosti), ko potrebujete strožje tipiziranje.

### Prednosti

- Vrne `true` samo za ne-`null` vrednosti, katerih `typeof` je `"object"`.
- Prepreči pogost JavaScriptov spodrsljaj, kjer bi bil `null` sicer obravnavan kot objekt.
- Deluje za navadne objekte in vgrajene primerke objektov (npr. `Date`, `RegExp`).
- Preprosto, hitro preverjanje med izvajanjem, primerno za obrambno programiranje in validacijo vhodnih podatkov.

## Uporaba

### Skladnja

Funkcija:

- `isObject(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti, ali je `object`.

### Lokalni uvoz funkcije

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input je neničelni objekt med izvajanjem
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isObject(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isObject](../_analysis/isObject.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:20:16 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>