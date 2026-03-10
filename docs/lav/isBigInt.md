# isBigInt

## Apraksts

`isBigInt` pārbauda, vai dotā vērtība ir tipa `bigint`, atgriežot `true` BigInt primitīvajām vērtībām un `false` citos
gadījumos.

### Lietošanas gadījums

Validējiet un sašauriniet vērtības, kas nāk no netipizētiem avotiem (piem., JSON parsēšana, lietotāja ievade, ārējie
API), pirms BigInt specifisku aprēķinu veikšanas vai to saglabāšanas laukos, kas pieņem tikai BigInt.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isBigInt`, lai sašaurinātu `unknown` uz `bigint` pirms BigInt aritmētikas (piem., `+`, `*`) veikšanas,
> kas prasa BigInt operandus.

### Priekšrocības

- Nodrošina vienkāršu, uzticamu izpildlaika pārbaudi `bigint` primitīvajam tipam.
- Palīdz sašaurināt `unknown` vērtības pirms BigInt-only darbību veikšanas.
- Izvairās no kļūdaini pozitīviem rezultātiem: parasti skaitļi, virknes un citi tipi atgriež `false`.

## Lietošana

### Sintakse

Funkcija:

- `isBigInt(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // patiess
console.log(isBigInt(10));  // aplams
console.log(isBigInt("10")); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isBigInt(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:32:25 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>