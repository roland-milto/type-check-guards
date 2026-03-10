# isOfType

## Opis

Določi, ali se dani `value` ujema z določenim nizom tipa, pri čemer za primitivne tipe uporabi `typeof`, za kompleksne
tipe pa nadomestni mehanizem.

### Primer uporabe

Validirajte in zožite (narrow) vnose tipa `unknown` (npr. odzive API, uporabniški vnos, razčlenjen JSON) tako, da
preverite, ali je vrednost pričakovanega niza tipa, preden izvedete operacije, specifične za tip.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isOfType` za razvejanje glede na tipe med izvajanjem pri delu z vrednostmi `unknown`; vrne `true`/`false`
> ter `null` in `undefined` obravnava izrecno.

### Prednosti

- Preverja primitivne tipe z neposrednim `typeof` za hitrost in jasnost.
- Pravilno obravnava `null` in `undefined`, česar `typeof` sam ne more razlikovati na želeni način.
- Podpira kompleksne ali prilagojene nize tipov prek nadomestne primerjave z uporabo `getTypeOf`.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovala (guards) in razvejanje.

## Uporaba

### Skladnja

Funkcija:

- `isOfType(value, type)`

Parametri:

- `value`: Vrednost, ki jo je treba preizkusiti glede na `type`.
- `type`: Nizovna predstavitev tipa, glede na katerega se preverja.

### Lokalni uvoz funkcije

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input je tukaj število
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input je tukaj niz
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isOfType(value, type)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 17:06:19 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>