# isPlainObject

## Opis

Preveri, ali je podana `value` navaden objekt, in vrne `true`, če je, sicer `false`.

### Primer uporabe

Preverite, da je `unknown` vhod (npr. razčlenjen JSON, zunanji podatki ali argumenti funkcije) navaden objekt, preden
berete ključe ali ga preslikate v tipiziran konfiguracijski objekt.

> **Opomba za uporabnike TypeScripta:**
>
> `isPlainObject` je uporaben za zoženje `unknown`, preden ga obravnavamo kot objekt v slogu zapisa (record); vrne
`true` samo za vrednosti, katerih notranja oznaka je `[object Object]`.

### Prednosti

- Omogoča preprosto in zanesljivo preverjanje, ali je vrednost navaden objekt (tj. `Object` / `{}`), ter vrne `true` ali
  `false`.
- Pomaga razlikovati navadne objekte od polj, funkcij, `null` in drugih tipov, ki niso navadni objekti.
- Uporabno kot varovalo tipa (type guard) v TypeScriptu za zoženje vrednosti tipa `unknown` pred dostopanjem do
  lastnosti objekta.

## Uporaba

### Skladnja

Funkcija:

- `isPlainObject(value)`

Parametri:

- `value`: Vrednost, pri kateri preverimo, ali je navaden objekt.

### Lokalni uvoz funkcije

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input je tukaj navaden objekt
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isPlainObject(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 12:19:38 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>