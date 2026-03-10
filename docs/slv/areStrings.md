# areStrings

## Opis

`areStrings` preveri, ali je polje neprazno in ali so vsi njegovi elementi nizi, ter vrne `true` samo v tem primeru.

### Primer uporabe

Validirajte zunanje ali uporabniško posredovane podatke (npr. parametre poizvedbe, JSON vsebine, polja CSV), da
zagotovite, da imate pred obdelavo neprazen seznam nizov.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areStrings` za validacijo neznanih polj, preden uporabite logiko, ki velja samo za nize; za prazna polja
> vrne `false`.

### Prednosti

- Zagotovi, da je vsak element niz, in zavrne polja z mešanimi tipi tako, da vrne `false`.
- Zavrne prazna polja, zato `true` pomeni le neprazen seznam nizov.
- Uporabno kot hitro izvajalno varovalo pred izvajanjem operacij, ki veljajo samo za nize (npr. `trim`, `toLowerCase`).

## Uporaba

### Skladnja

Funkcija:

- `areStrings(value)`

Parametri:

- `value`: Expected type `string[]`.

### Lokalni uvoz funkcije

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input je med izvajanjem neprazen niz string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areStrings(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:20:20 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>