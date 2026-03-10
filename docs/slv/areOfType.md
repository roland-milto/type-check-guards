# areOfType

## Opis

Preveri, ali so vsi elementi v dani `array` določenega `type`.

### Primer uporabe

Uporabite `areOfType` za preverjanje neznanega vnosa (npr. razčlenjen JSON, API payloadi, uporabniški vnos), preden
izvedete operacije, specifične za tip, na vsakem elementu tabele.

> **Opomba za uporabnike TypeScripta:**
>
> Ker je `areOfType` varovalnik tipov, TypeScript zoži tabelo znotraj bloka `if (areOfType(...)) {}` na
`Array<DataTypeOf<T>>`.

### Prednosti

- Zagotavlja TypeScriptov varovalnik tipov: ko vrne `true`, se vhod zoži na `Array<DataTypeOf<T>>`.
- Preveri vsak element glede na zahtevani izvajalni tip in prepreči, da bi šle skozi tabele z mešanimi tipi.
- Hitro odpove: vrne `false` takoj, ko najde element, ki se ne ujema.
- Po zasnovi zavrne netabele in prazne tabele (odvisno od `isFilledArray`).

## Uporaba

### Skladnja

Funkcija:

- `areOfType(array, type)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti.
- `type`: Tip, glede na katerega je treba preveriti vsak element v tabeli.

### Lokalni uvoz funkcije

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values je zdaj number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areOfType(array, type)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 17:11:19 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>