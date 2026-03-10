# isPlainObject

## Apraksts

Pārbauda, vai dotā `value` ir vienkāršs objekts, un atgriež `true`, ja tā ir; pretējā gadījumā `false`.

### Lietošanas gadījums

Validēt, ka `unknown` ievade (piem., parsēts JSON, ārējie dati vai funkciju argumenti) ir vienkāršs objekts pirms
atslēgu nolasīšanas vai tās pārveidošanas par tipizētu konfigurācijas objektu.

> **Piezīme TypeScript lietotājiem:**
>
> `isPlainObject` ir noderīgs, lai sašaurinātu `unknown` pirms to apstrādāt kā ierakstam līdzīgu objektu; tas atgriež
`true` tikai vērtībām, kuru iekšējā atzīme ir `[object Object]`.

### Priekšrocības

- Nodrošina vienkāršu, uzticamu pārbaudi, vai vērtība ir vienkāršs objekts (t. i., `Object` / `{}`), atgriežot `true`
  vai `false`.
- Palīdz atšķirt vienkāršus objektus no masīviem, funkcijām, `null` un citiem ne-vienkāršu objektu tipiem.
- Noder kā tipa sargs TypeScript, lai sašaurinātu `unknown` vērtības pirms piekļuves objekta īpašībām.

## Lietošana

### Sintakse

Funkcija:

- `isPlainObject(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt, vai tā ir vienkāršs objekts.

### Lokāls funkcijas imports

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // ievade šeit ir vienkāršs objekts
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // patiess
console.log(isPlainObject([])); // aplams
console.log(isPlainObject(null)); // aplams
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isPlainObject(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 12:18:28 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>