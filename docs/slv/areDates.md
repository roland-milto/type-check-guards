# areDates

## Opis

`areDates` določi, ali je dano polje zapolnjeno in vsebuje samo objekte `Date`, ter vrne `true` le, ko so vsi elementi
veljavni datumi.

### Primer uporabe

Uporabite `areDates` za preverjanje neznanega vnosa (npr. razčlenjen JSON, podatki obrazca, API payloadi), preden
zaženete logiko, specifično za datume, kot je razvrščanje po času, oblikovanje ali izračun razponov.

> **Opomba za uporabnike TypeScripta:**
>
> `true` vrne samo za neprazna polja, kjer je vsak element `Date`; prazna polja vrnejo `false`.

### Prednosti

- Zagotovi, da polje ni prazno, preden preveri njegovo vsebino, s čimer prepreči rezultat `true` pri praznih vhodih.
- Preveri, da je vsak element instanca `Date`, in ob prvem neskladju takoj vrne `false`.
- Uporabno kot preverjanje v slogu varovala pred izvajanjem operacij, specifičnih za datume, nad elementi polja.

## Uporaba

### Skladnja

Funkcija:

- `areDates(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede objektov `Date`.

### Lokalni uvoz funkcije

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // res
console.log(areDates(b)); // napačno
console.log(areDates(c)); // napačno

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areDates(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areDates](../_analysis/areDates.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 15:32:15 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>