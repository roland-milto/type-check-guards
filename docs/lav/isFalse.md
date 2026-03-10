# isFalse

## Apraksts

`isFalse` pārbauda, vai dotā vērtība ir stingri vienāda ar booleāna literāli `false`.

### Lietošanas gadījums

Validēt nezināmus datus (piem., no JSON, vaicājuma parametriem vai lietotāja ievades), kur par derīgu karogu jāuzskata
tikai tieša booleāna vērtība `false`, bet viss pārējais ir jānoraida.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isFalse`, ja nepieciešams pieņemt tikai literāli `false` un noraidīt visas pārējās “falsy” vērtības; tā
> atgriež `true` tikai gadījumā, ja `value === false`.

### Priekšrocības

- Nodrošina stingru pārbaudi booleāna literālim `false` bez tipa piespiedu pārveidošanas.
- Palīdz atšķirt `false` no citām “falsy” vērtībām, piemēram, `0`, `""`, `null` un `undefined`.
- Uzlabo lasāmību, skaidri norādot nolūku, validējot nezināmu ievadi.

## Lietošana

### Sintakse

Funkcija:

- `isFalse(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // ievade šeit ir tieši false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isFalse(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 16:41:22 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>