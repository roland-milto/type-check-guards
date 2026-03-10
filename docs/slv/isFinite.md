# isFinite

## Opis

Ugotovi, ali je podani `value` končno `number`.

### Primer uporabe

Uporabite `isFinite` za validacijo neznanega vnosa (npr. iz JSON, obrazcev ali API-jev) pred izvajanjem numeričnih
izračunov, s čimer zagotovite, da je vrednost resnično, končno število.

> **Opomba za uporabnike TypeScripta:**
>
> `isFinite` vrne `true` samo za končna števila; vrne `false` za `NaN`, `Infinity` in katerokoli vrednost, ki ni
> število.

### Prednosti

- Uporablja vgrajeni `Number.isFinite` za zanesljivo preverjanje končnosti.
- Vrne `true` samo za končna števila; vrne `false` za `NaN`, `Infinity` in vnose, ki niso števila.
- Preprost predikat brez stranskih učinkov, primeren za validacijo in varovalno logiko.

## Uporaba

### Skladnja

Funkcija:

- `isFinite(value)`

Parametri:

- `value`: Vrednost, pri kateri preverimo končnost.

### Lokalni uvoz funkcije

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers je: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value je tukaj končno število
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isFinite(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 16:31:36 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>