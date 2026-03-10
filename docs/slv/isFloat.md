# isFloat

## Opis

`isFloat` določi, ali je podana `value` končno število s plavajočo vejico (tj. `number`, ki ni celo število).

### Primer uporabe

Validirajte uporabniško podan numerični vnos, kjer so potrebne ulomljene vrednosti (npr. cene, meritve, stopnje), ter
zavrnite cela števila, `NaN` in neskončnosti.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isFloat`, ko morate sprejeti samo končne, necelostne numerične vnose; zavrne cela števila in nekončna
> števila.

### Prednosti

- Vrne `true` samo za končna, necelostna števila (izključi cela števila, `NaN`, `Infinity` in `-Infinity`).
- Deluje s katero koli vrsto vnosa (`unknown`) in varno zoži tip s preverjanjem `typeof value === "number"`.
- Uporablja vgrajene numerične varovalke (`Number.isInteger`, `Number.isFinite`) za predvidljivo vedenje.

## Uporaba

### Skladnja

Funkcija:

- `isFloat(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti, ali je število s plavajočo vejico.

### Lokalni uvoz funkcije

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // vrednost je med izvajanjem število; je končna in ni celo število
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isFloat(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 16:09:39 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>