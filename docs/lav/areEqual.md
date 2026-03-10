# areEqual

## Apraksts

`areEqual` pārbauda, vai visi masīva elementi ir vienādi ar norādīto sagaidāmo vērtību, atgriežot `true` tikai nepustiem
masīviem, kuros katrs vienums atbilst.

### Lietošanas gadījums

Pārbaudīt, ka saraksts satur tikai vienu atļauto vērtību (piem., visi statusa karodziņi ir `true`, visas lomas ir
`"admin"`, vai visi skaitliskie ieraksti ir vienādi ar prasīto konstanti), vienlaikus uzskatot tukšu ievadi par
nederīgu (`false`).

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areEqual`, kad nepieciešama stingra visu vienumu pārbaude; tā atgriež `false` tukšiem masīviem un
> jebkurai ievadei, kas nav masīvs vai nav aizpildīta.

### Priekšrocības

- Atgriež `true` tikai tad, ja katrs elements atbilst sagaidāmajai vērtībai; pretējā gadījumā atgriež `false`.
- Ātri pārtrauc: beidz pārbaudi, tiklīdz tiek atrasts neatbilstošs elements.
- Aizsargā pret nederīgu ievadi, atgriežot `false`, ja ievade nav aizpildīts masīvs.

## Lietošana

### Sintakse

Funkcija:

- `areEqual(value, expected)`

Parametri:

- `value`: Pārbaudāmais masīvs.
- `expected`: Elements, ar kuru salīdzināt katru masīva vienumu.

### Lokāls funkcijas imports

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areEqual(value, expected)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:51:13 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>