# isObject

## Apraksts

Nosaka, vai dotā `value` ir `object` (izņemot `null`).

### Lietošanas gadījums

Izmanto `isObject`, lai validētu nezināmas ievades (piem., parsētu JSON, API atbildes, notikumu payloadus) pirms
piekļuves īpašībām, nodrošinot, ka vērtība ir objekts un nav `null`.

> **Piezīme TypeScript lietotājiem:**
>
> `isObject` ir izpildlaika sargs, kas atgriež boolean; tas nesašaurina tipu līdz konkrētai objekta formai. Apvieno to
> ar papildu pārbaudēm (piem., īpašību esamību), kad nepieciešama stingrāka tipēšana.

### Priekšrocības

- Atgriež `true` tikai vērtībām, kas nav `null` un kuru `typeof` ir `"object"`.
- Novērš izplatītu JavaScript klupšanas akmeni, kur `null` citādi tiktu uzskatīts par objektu.
- Darbojas gan ar vienkāršiem objektiem, gan ar iebūvētu objektu instancēm (piem., `Date`, `RegExp`).
- Vienkārša, ātra izpildlaika pārbaude, kas piemērota aizsargprogrammēšanai un ievades validācijai.

## Lietošana

### Sintakse

Funkcija:

- `isObject(value)`

Parametri:

- `value`: Vērtība, kas jāpārbauda, vai tā ir `object`.

### Lokāls funkcijas imports

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // ievade izpildlaikā ir nenulles objekts
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isObject(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isObject](../_analysis/isObject.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 00:19:12 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>