# isBuffer

## Apraksts

Pārbauda, vai vērtība ir Node.js `Buffer`, un atgriež `true` vai `false`.

### Lietošanas gadījums

Validējiet ievades datus izpildlaikā (piem., API slodzes, failu datus vai ziņojumu buferus), lai pirms apstrādes
pārliecinātos, ka vērtība ir `Buffer`, un uzticami saņemtu `false`, darbinot ārpus Node.js, kur `Buffer` var neeksistēt.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isBuffer`, lai sašaurinātu `unknown` vērtības līdz `Buffer` pirms `Buffer` specifisku metožu izsaukšanas.

### Priekšrocības

- Droši nosaka Node.js `Buffer` instances, izmantojot `Buffer.isBuffer`.
- Atgriež `false` vidēs, kur `Buffer` nav pieejams, tādējādi izvairoties no izpildlaika kļūdām.
- Darbojas ar `unknown` ievadi, padarot to piemērotu izpildlaika validācijai un tipu sašaurināšanai.

## Lietošana

### Sintakse

Funkcija:

- `isBuffer(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // patiess
console.log(isBuffer(b)); // aplams

if (isBuffer(a)) {
  // a šeit ir Buffer
  console.log(a.toString("utf8"));
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isBuffer(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Fails tika izveidots 31 January 2026 at 16:32:16 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>