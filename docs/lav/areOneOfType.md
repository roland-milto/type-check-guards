# areOneOfType

## Apraksts

`areOneOfType` pārbauda, vai visi netukša masīva elementi ir kāds no norādītajiem izpildlaika tipiem.

### Lietošanas gadījums

Validēt ienākošos datus (piem., parsētu JSON), kur laukam jābūt netukšam masīvam, kura vienumi ir ierobežoti ar zināmu
primitīvo tipu kopu; atgriezt `false`, ja masīvs ir tukšs vai satur jebkuru neatļautu tipu.

> **Piezīme TypeScript lietotājiem:**
>
> Šī funkcija atgriež boolean un kompilēšanas laikā nesašaurina masīva elementu tipus; izmantojiet to kā izpildlaika
> validācijas soli pirms turpmākas apstrādes.

### Priekšrocības

- Nodrošina, ka katrs masīva elements atbilst vismaz vienam atļautam izpildlaika tipam, atgriežot `true` tikai tad, ja
  pārbaudi iztur viss masīvs.
- Agrīni noraida nederīgas ievades: atgriež `false`, ja `array` vai `types` ir tukšs vai nav aizpildīts masīvs.
- Noder jauktu tipu kolekciju (piem., skaitļu un virkņu) validēšanai ar vienu `areOneOfType` izsaukumu.

## Lietošana

### Sintakse

Funkcija:

- `areOneOfType(array, types)`

Parametri:

- `array`: Elementu masīvs, ko pārbaudīt pret norādītajiem tipiem.
- `types`: Virkņu masīvs, kas apzīmē datu tipus, pret kuriem veikt pārbaudi.

### Lokāls funkcijas imports

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areOneOfType(array, types)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 23:37:35 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>