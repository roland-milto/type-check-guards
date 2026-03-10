# areSymbols

## Opis

Preveri, ali je vhod zapolnjeno polje, katerega elementi so vsi simboli, ter vrne `true` ali `false`.

### Primer uporabe

Preverite, da je konfiguracijsko polje (npr. seznam enoličnih ključev, predstavljenih kot simboli) neprazno polje, ki
vsebuje samo simbole, preden ga uporabite v API-jih, ki zahtevajo `symbol[]`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areSymbols` za preverjanje neznanega vhoda, preden ga obravnavate kot `symbol[]`; vrne `false` za ne-polja
> in prazna polja.

### Prednosti

- Vrne `true` samo, ko je vhod neprazno polje in je vsak element simbol.
- Prepreči lažno pozitivne rezultate, saj zavrne ne-polja in prazna polja prek notranjega preverjanja zapolnjenega
  polja.
- Uporabno kot varovalo tipa med izvajanjem (runtime type guard) za preverjanje seznamov, ki vsebujejo samo simbole,
  pred nadaljnjo obdelavo.

## Uporaba

### Skladnja

Funkcija:

- `areSymbols(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede elementov tipa simbol.

### Lokalni uvoz funkcije

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a je med izvajanjem polje, ki vsebuje samo simbole
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areSymbols(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:23:43 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>