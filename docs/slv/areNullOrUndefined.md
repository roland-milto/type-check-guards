# areNullOrUndefined

## Opis

Preveri, ali so vsi elementi v podani tabeli `null` ali `undefined`.

### Primer uporabe

Preverite, da seznam izbirnih polj ne vsebuje nobenih dejanskih vrednosti (samo `null`/`undefined`), preden se odločite
preskočiti obdelavo ali prikazati stanje »ni podanih vrednosti«.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areNullOrUndefined`, ko morate preveriti, da tabela vsebuje samo manjkajoče vrednosti (`null`/`undefined`).
> Upoštevajte, da za prazno tabelo vrne `false`.

### Prednosti

- Vrne `true` samo, ko je vsak element `null` ali `undefined`.
- Za prazne tabele vrne `false`, kar pomaga razlikovati med »ni podatkov« in »vse manjkajoče vrednosti«.
- Deluje z `unknown[]`, zato je varno za uporabo pred zoževanjem tipov.

## Uporaba

### Skladnja

Funkcija:

- `areNullOrUndefined(array)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areNullOrUndefined(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:31:25 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>