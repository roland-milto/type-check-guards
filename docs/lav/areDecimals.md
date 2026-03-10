# areDecimals

## Apraksts

Pārbauda, vai visi masīva elementi ir decimālskaitļi un masīvs ir aizpildīts, atgriežot `true` vai `false`.

### Lietošanas gadījums

Validēt lietotāja iesniegtus sarakstus (piem., CSV kolonnas vai formas ievades), lai nodrošinātu, ka masīvs nav tukšs un
katrs ieraksts ir decimāla vērtība pirms parsēšanas vai aprēķiniem.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areDecimals`, kad nepieciešama ātra būla pārbaude, ka `unknown[]` nav tukšs un katrs elements ir decimāla
> attēlojums.

### Priekšrocības

- Nodrošina, ka ievade ir aizpildīts masīvs pirms elementu validēšanas, novēršot nejaušu tukšu sarakstu pieņemšanu.
- Validē katru elementu ar `isDecimal`, tāpēc jaukti vai nederīgi lielumi nekavējoties dod `false` rezultātu.
- Nodrošina vienkāršu būla iznākumu (`true`/`false`), kas piemērots sargiem un agrīnas atgriešanas validēšanas plūsmām.

## Lietošana

### Sintakse

Funkcija:

- `areDecimals(array)`

Parametri:

- `array`: Masīvs, kas jāpārbauda.

### Lokāls funkcijas imports

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // patiess
console.log(areDecimals(b)); // aplams
console.log(areDecimals(c)); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areDecimals(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 15:57:58 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>