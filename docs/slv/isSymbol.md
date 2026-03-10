# isSymbol

## Opis

`isSymbol` določi, ali je dana vrednost tipa `symbol`, pri čemer vrne `true` za simbole in `false` sicer.

### Primer uporabe

Preverite, da je vrednost tipa `unknown` dejansko `symbol`, preden jo uporabite kot enolični identifikator, ključ
registra ali izračunan ključ lastnosti v objektih in mapah.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isSymbol` za zožitev `unknown` na `symbol` pred klicanjem funkcij, povezanih s simboli, ali pred uporabo
> kot izračunanega ključa lastnosti.

### Prednosti

- Zagotavlja preprosto in zanesljivo preverjanje v času izvajanja za primitivni tip JavaScript `symbol`.
- Pomaga zožiti vrednosti tipa `unknown` pred uporabo API-jev, specifičnih za simbole, ali pred shranjevanjem kot
  ključe.
- Preprečuje lažno pozitivne rezultate z uporabo `typeof`, ki je kanoničen način za zaznavanje vrednosti `symbol`.

## Uporaba

### Skladnja

Funkcija:

- `isSymbol(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input je tukaj simbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isSymbol(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:28:34 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>