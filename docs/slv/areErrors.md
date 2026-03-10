# areErrors

## Opis

Preveri, ali tabela ni prazna in vsebuje samo objekte `Error`, ter vrne `true` ali `false`.

### Primer uporabe

Preverite, da je v času izvajanja podan `unknown[]` (npr. združeni neuspehi, rezultati validacije ali deserializirani
podatki) neprazen seznam objektov `Error`, preden po njem iterirate, beležite ali ponovno vržete napako.

> **Opomba za uporabnike TypeScripta:**
>
> `areErrors` vrne `true` samo za zapolnjeno tabelo, kjer je vsak element `Error`; vrne `false` za prazno tabelo ali če
> kateri koli element ni `Error`.

### Prednosti

- Zagotavlja, da je vsak element primerek `Error`, kar omogoča varno obravnavo napak in beleženje.
- Zavrne prazne tabele, s čimer prepreči, da bi bila nenamerna stanja »brez napak« obravnavana kot veljavni seznami
  napak.
- Dobro deluje kot varovalo v času izvajanja pri delu z vnosi `unknown[]` (npr. iz API-jev ali blokov `catch`).

## Uporaba

### Skladnja

Funkcija:

- `areErrors(array)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti glede objektov `Error`.

### Lokalni uvoz funkcije

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value je neprazno polje objektov Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areErrors(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 12:35:29 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>