# areJson

## Opis

Preveri, ali so vsi elementi tabele nizi JSON, in vrne `true` samo, če je tabela zapolnjena in je vsak element veljaven
JSON; sicer vrne `false`.

### Primer uporabe

Validirajte prihajajoče podatke (npr. iz parametrov poizvedbe, okoljskih spremenljivk ali zunanjih API-jev), kjer
pričakujete tabelo nizov, kodiranih v JSON, in želite zavrniti prazne tabele ali kakršne koli vnose, ki niso JSON.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areJson`, ko morate preveriti, da `unknown[]` vsebuje samo nize JSON, preden jih razčlenite (npr. z
`JSON.parse`).

### Prednosti

- Vrne `true` samo, ko je vsak element veljaven niz JSON; sicer vrne `false`.
- Hitro odpove: preneha preverjati takoj, ko najde element, ki ni JSON.
- Po zasnovi zavrne prazne tabele in za neizpolnjen vnos vrne `false`.

## Uporaba

### Skladnja

Funkcija:

- `areJson(array)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti glede elementov, ki so nizi JSON.

### Lokalni uvoz funkcije

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // res
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // napačno
const empty = areJson([]); // napačno

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areJson(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areJson](../_analysis/areJson.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 16:17:27 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>