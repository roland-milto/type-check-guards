# isNumber

## Opis

`isNumber` preveri, ali je vrednost končno število, ki ni `NaN`.

### Primer uporabe

Validirajte številski vnos iz nezaupanja vrednih virov (obrazci, parametri poizvedbe, JSON payloadi) pred izračuni,
shranjevanjem ali preverjanjem obsega, da zagotovite, da prestanejo (`true`) samo končna števila, vse ostalo pa vrne
`false`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isNumber` za validacijo vrednosti tipa `unknown` pred izvajanjem aritmetike; zavrne `NaN`, `Infinity` in
`-Infinity`.

### Prednosti

- Vrne `true` samo za prave JavaScript številke (preverjanje tipa ter zavrnitev `NaN` in neskončnosti).
- Preprečuje pogoste napake pri validaciji, kjer `NaN`, `Infinity` ali `-Infinity` pomotoma prestanejo kot števila.
- Dobro deluje kot varovalo med izvajanjem (runtime guard) za neznan vnos (npr. JSON, uporabniški vnos, zunanji API-ji).
- Preprosto, hitro in brez stranskih učinkov.

## Uporaba

### Skladnja

Funkcija:

- `isNumber(value)`

Parametri:

- `value`: Vrednost za preverjanje.

### Lokalni uvoz funkcije

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input je veljavno končno število
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isNumber(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:10:59 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>