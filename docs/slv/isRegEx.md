# isRegEx

## Opis

Ugotovi, ali je podana vrednost instanca `RegExp`.

### Primer uporabe

Validirajte vrednosti, ki jih posreduje uporabnik ali so dinamične (npr. konfiguracija, API payloadi, vnosi vtičnikov),
preden jih obravnavate kot regularni izraz.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isRegEx` za zoženje vrednosti tipa `unknown` (ali unije) pred uporabo lastnosti ali metod, specifičnih za
> RegExp; vrne `true` samo za vrednosti, ki so instance `RegExp`.

### Prednosti

- Zagotavlja preprost izvajalni varovalni mehanizem tipa za preverjanje, ali je vrednost `RegExp`.
- Pomaga preprečiti napake, ko koda pričakuje regularni izraz (npr. pred klicem `test`, `exec` ali branjem `source`).
- Deluje tako z literali regularnih izrazov kot z instancami, ustvarjenimi prek `new RegExp(...)`.
- Vrne jasen logični rezultat (`true`/`false`) brez sprožitve izjeme za vnose, ki niso regularni izrazi.

## Uporaba

### Skladnja

Funkcija:

- `isRegEx(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input je tukaj RegExp
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isRegEx(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:30:58 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>