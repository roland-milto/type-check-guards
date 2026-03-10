# isPrimitive

## Apraksts

`isPrimitive` nosaka, vai dotā vērtība ir primitīvs (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Lietošanas gadījums

Validēt ievades izpildlaikā (piem., API payload laukus, konfigurācijas vērtības vai lietotāja sniegtus datus), lai
pārliecinātos, ka vērtība ir primitīvs pirms serializēšanas, žurnalēšanas vai primitīviem paredzētu darbību
piemērošanas.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isPrimitive`, lai aizsargātu `unknown` ievades pirms to apstrādes kā objektus vai funkcijas; tas atgriež
`true` primitīviem un `false` objektiem un funkcijām.

### Priekšrocības

- Ātra pārbaude bez atmiņas piešķiršanas, vai vērtība ir JavaScript primitīvs.
- Pareizi uzskata `null` par primitīvu (pat ja `typeof null` ir `"object"`).
- Palīdz sašaurināt `unknown` vērtības pirms objektu-only darbību veikšanas.

## Lietošana

### Sintakse

Funkcija:

- `isPrimitive(value)`

Parametri:

- `value`: Vērtība, kuru pārbaudīt, vai tai ir primitīvs tips.

### Lokāls funkcijas imports

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isPrimitive(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:56:49 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>