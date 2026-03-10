# isDate

## Apraksts

`isDate` nosaka, vai nodrošinātā vērtība ir `Date`, atgriežot `true` `Date` instancēm un `false` pretējā gadījumā.

### Lietošanas gadījums

Validēt un sašaurināt nezināmas vērtības (piem., pieprasījuma datus, konfigurācijas vērtības vai parsētu JSON) pirms
`Date` darbību veikšanas, piemēram, formatēšanas, salīdzināšanas vai `toISOString()` izsaukšanas.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isDate`, lai izpildlaikā sašaurinātu `unknown` uz `Date`; tas atgriež `true` tikai īstām `Date`
> instancēm (nevis datuma virkņu vērtībām).

### Priekšrocības

- Tas nodrošina vienkāršu izpildlaika aizsargu, lai pārbaudītu, vai vērtība ir `Date`.
- Tas palīdz novērst tipu kļūdas, nodrošinot, ka validāciju iztur tikai `Date` instances.
- Tas ir noderīgi, lai validētu nezināmus ievaddatus (piem., API slodzes) pirms datumiem specifisku metožu izmantošanas.

## Lietošana

### Sintakse

Funkcija:

- `isDate(value)`

Parametri:

- `value`: Vērtība, kurai jāpārbauda `Date` tips.

### Lokāls funkcijas imports

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // ievade šeit ir Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isDate(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isDate](../_analysis/isDate.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 15:46:40 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>