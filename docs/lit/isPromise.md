# isPromise

## Aprašymas

Nustato, ar pateikta reikšmė yra `Promise`.

### Naudojimo atvejis

Naudokite `isPromise`, kad patikrintumėte nežinomus įvesties duomenis prieš traktuodami juos kaip `Promise`, pavyzdžiui,
apdorojant reikšmes, grąžinamas iš įskiepių, dinaminių importų ar silpnai tipizuotų API.

> **Pastaba TypeScript naudotojams:**
>
> `isPromise` tikrina naudodama `instanceof Promise`, todėl `true` grąžina tik tikriems `Promise` egzemplioriams (ne
> bendriems thenable).

### Privalumai

- Pateikia paprastą vykdymo laiko patikrą, ar reikšmė yra `Promise`.
- Padeda apsaugoti kodo šakas, kurioms reikalingas tikras `Promise` egzempliorius, nuspėjamai grąžindama `true` arba
  `false`.
- Išvengia klaidingų teigiamų rezultatų iš „thenable“ objektų (pvz., `{ then() {} }`), nes reikalauja tikro `Promise`
  egzemplioriaus.

## Naudojimas

### Sintaksė

Funkcija:

- `isPromise(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // tiesa
console.log(isPromise(b)); // netiesa
console.log(isPromise(123)); // netiesa
console.log(isPromise(null)); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isPromise(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:53:26 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>