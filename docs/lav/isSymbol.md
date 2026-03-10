# isSymbol

## Apraksts

`isSymbol` nosaka, vai dotā vērtība ir tipa `symbol`, atgriežot `true` simboliem un `false` citos gadījumos.

### Lietošanas gadījums

Pārbaudiet, vai `unknown` vērtība ir `symbol`, pirms to izmantot kā unikālu identifikatoru, reģistra atslēgu vai
aprēķinātas īpašības atslēgu objektos un kartēs.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isSymbol`, lai sašaurinātu `unknown` uz `symbol` pirms ar simboliem saistītu funkciju izsaukšanas vai
> izmantošanas kā aprēķinātas īpašības atslēgu.

### Priekšrocības

- Nodrošina vienkāršu un uzticamu izpildlaika pārbaudi JavaScript primitīvajam tipam `symbol`.
- Palīdz sašaurināt `unknown` vērtības pirms simboliem specifisku API izmantošanas vai to saglabāšanas kā atslēgas.
- Izvairās no kļūdaini pozitīviem rezultātiem, izmantojot `typeof`, kas ir kanoniskais veids, kā noteikt `symbol`
  vērtības.

## Lietošana

### Sintakse

Funkcija:

- `isSymbol(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input šeit ir simbols
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isSymbol(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:27:36 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>