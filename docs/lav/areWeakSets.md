# areWeakSets

## Apraksts

Pārbauda, vai ievade ir netukšs masīvs, kurā katrs elements ir `WeakSet`, un atgriež `true` tikai šajā gadījumā.

### Lietošanas gadījums

Validēt izpildlaika ievadi (piem., no API, konfigurācijas vai lietotāja sniegtajiem datiem), lai pārliecinātos, ka jums
ir netukšs `WeakSet` instanču saraksts pirms turpināt loģiku, kas ir atkarīga no `WeakSet` uzvedības.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `areWeakSets`, lai validētu nezināmu ievadi pirms tās apstrādes kā `WeakSet[]`. Tukšiem masīviem un
> ne-masīviem tā atgriež `false`.

### Priekšrocības

- Nodrošina, ka katrs ievades masīva elements ir `WeakSet`.
- Tukšiem masīviem atgriež `false`, novēršot nejaušus “viss derīgs” rezultātus, ja trūkst datu.
- Droši neizdodas, atgriežot `false`, ja ievade nav aizpildīts masīvs (tostarp `null`).
- Noder kā sargs pirms darbību veikšanas, kurām nepieciešamas `WeakSet` instances.

## Lietošana

### Sintakse

Funkcija:

- `areWeakSets(array)`

Parametri:

- `array`: Masīvs, kurā jāpārbauda `WeakSet` objekti.

### Lokāls funkcijas imports

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a ir netukšs WeakSet instanču masīvs
}

console.log(areWeakSets(a)); // patiess
console.log(areWeakSets(b)); // aplams
console.log(areWeakSets(c)); // aplams
console.log(areWeakSets(null as unknown)); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.areWeakSets(array)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 14:09:31 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>