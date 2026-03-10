# isPrimitive

## Opis

`isPrimitive` določi, ali je dana vrednost primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Primer uporabe

Preverjajte vnose med izvajanjem (npr. polja v API payloadu, konfiguracijske vrednosti ali podatke, ki jih posreduje
uporabnik), da zagotovite, da je vrednost primitiv, preden jo serializirate, beležite ali uporabite operacije, ki
veljajo samo za primitive.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isPrimitive` za varovanje vhodov tipa `unknown`, preden jih obravnavate kot objekte ali funkcije; vrne
`true` za primitive in `false` za objekte in funkcije.

### Prednosti

- Hiter preverjanje brez alokacij, ali je vrednost JavaScript primitiv.
- Pravilno obravnava `null` kot primitiv (čeprav je `typeof null` `"object"`).
- Pomaga zožiti vrednosti tipa `unknown` pred izvajanjem operacij, ki veljajo samo za objekte.

## Uporaba

### Skladnja

Funkcija:

- `isPrimitive(value)`

Parametri:

- `value`: Vrednost, pri kateri preverimo, ali je primitivnega tipa.

### Lokalni uvoz funkcije

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isPrimitive(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:57:39 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>