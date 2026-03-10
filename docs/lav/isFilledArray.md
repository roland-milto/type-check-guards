# isFilledArray

## Apraksts

Pārbauda, vai `value` ir masīvs ar vismaz vienu elementu, atgriežot `true` vai `false`.

### Lietošanas gadījums

Izmantojiet `isFilledArray`, lai validētu ienākošos datus (piem., API noslodzes, formas vērtības, konfigurāciju) pirms
iterēšanas, pirmā elementa piekļuves vai loģikas piemērošanas, kurai nepieciešams vismaz viens vienums.

> **Piezīme TypeScript lietotājiem:**
>
> `isFilledArray` ir izpildlaika sargs, kas atgriež būla vērtību; tas nesašaurina elementu tipus, izņemot
> apstiprinājumu, ka masīvs nav tukšs.

### Priekšrocības

- Vienkārša, ātra pārbaude, vai masīvs nav tukšs, izmantojot `Array.isArray` un garuma pārbaudi.
- Palīdz izvairīties no izpildlaika kļūdām, kad kods pieņem, ka masīvā ir vismaz viens elements.
- Skaidrs būla rezultāts: atgriež `true` netukšiem masīviem un `false` citos gadījumos.

## Lietošana

### Sintakse

Funkcija:

- `isFilledArray(value)`

Parametri:

- `value`: Vērtība, ko pārbaudīt, vai tā ir netukšs masīvs.

### Lokāls funkcijas imports

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // ievade izpildlaikā ir netukšs masīvs
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isFilledArray(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 11:47:49 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>