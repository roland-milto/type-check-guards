# areNumbers

## Opis

`areNumbers` preveri, ali je vrednost neprazno polje, v katerem so vsi elementi števila.

### Primer uporabe

Validirajte podatke, ki jih posreduje uporabnik ali API, da zagotovite, da gre za neprazno polje števil, preden
izračunate vsote, povprečja ali druge numerične agregacije.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areNumbers` za validacijo neznanih polj pred izvajanjem numeričnih izračunov; vrne `false` za prazna polja
> in za polja, ki vsebujejo katerokoli ne-številsko vrednost.

### Prednosti

- Vrne `true` samo, ko je vhod neprazno polje in je vsak element število.
- Prepreči lažno pozitivne rezultate tako, da zavrne prazna polja in vnose, ki niso polja.
- Uporabno kot varovalo pred numeričnimi operacijami (npr. seštevanje, izračun povprečja) za preprečevanje napak med
  izvajanjem.

## Uporaba

### Skladnja

Funkcija:

- `areNumbers(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov tipa število.

### Lokalni uvoz funkcije

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areNumbers(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:05:52 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>