# isPromise

## Apraksts

Nosaka, vai dotā vērtība ir `Promise`.

### Lietošanas gadījums

Izmantojiet `isPromise`, lai validētu nezināmus ievaddatus pirms to apstrādes kā `Promise`, piemēram, apstrādājot
vērtības, kas atgrieztas no spraudņiem, dinamiskajiem importiem vai vāji tipizētiem API.

> **Piezīme TypeScript lietotājiem:**
>
> `isPromise` pārbauda ar `instanceof Promise`, tāpēc tas atgriež `true` tikai īstām `Promise` instancēm (nevis
> vispārīgiem thenable).

### Priekšrocības

- Nodrošina vienkāršu izpildlaika pārbaudi, vai vērtība ir `Promise`.
- Palīdz aizsargāt koda ceļus, kuriem nepieciešama īsta `Promise` instance, paredzami atgriežot `true` vai `false`.
- Izvairās no kļūdaini pozitīviem rezultātiem no “thenable” objektiem (piem., `{ then() {} }`), pieprasot faktisku
  `Promise` instanci.

## Lietošana

### Sintakse

Funkcija:

- `isPromise(value)`

Parametri:

- `value`: Pārbaudāmā vērtība.

### Lokāls funkcijas imports

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // patiess
console.log(isPromise(b)); // aplami
console.log(isPromise(123)); // aplami
console.log(isPromise(null)); // aplami

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isPromise(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 23:53:23 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>