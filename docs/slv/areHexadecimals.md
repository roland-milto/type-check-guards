# areHexadecimals

## Opis

Preveri, ali so vsi elementi v tabeli šestnajstiški nizi, in vrne `true` samo za neprazne tabele, kjer je vsak element
veljaven.

### Primer uporabe

Uporabite `areHexadecimals` za validacijo uporabniškega vnosa ali zunanjih podatkov (npr. ID-jev, kontrolnih vsot,
barvnih kod brez vodilnega '#') pred šestnajstiškim razčlenjevanjem ali nadaljnjo obdelavo.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areHexadecimals` za validacijo neznanega vhoda pred razčlenjevanjem ali pretvarjanjem vrednosti (na primer
> pred `parseInt(value, 16)` ali pretvorbami v BigInt).

### Prednosti

- Preveri, da je vsak element šestnajstiški niz, in vrne `true` samo, ko se ujemajo vsi elementi.
- Po zasnovi zavrne prazne tabele in vrne `false` pri manjkajočih vhodnih podatkih.
- Zagotavlja preprost logični rezultat (`true`/`false`), primeren za varovala in validacijo z zgodnjim vračanjem.

## Uporaba

### Skladnja

Funkcija:

- `areHexadecimals(array)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti glede elementov, ki so šestnajstiški nizi.

### Lokalni uvoz funkcije

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areHexadecimals(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:07:48 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>