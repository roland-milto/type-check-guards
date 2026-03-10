# isWeakSet

## Aprašymas

Nustato, ar pateikta `value` yra objektų `WeakSet`.

### Naudojimo atvejis

Naudokite `isWeakSet`, kai priimate netipuotą įvestį (pvz., iš išorinių API, dinaminės konfigūracijos ar `unknown`
reikšmių) ir prieš naudodami `WeakSet` specifines operacijas turite patikrinti, ar tai yra `WeakSet`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isWeakSet`, kad vykdymo laiku susiaurintumėte `unknown` reikšmę iki `WeakSet<object>`; atkreipkite dėmesį,
> kad `WeakSet` gali turėti tik objektų nuorodas.

### Privalumai

- Pateikia paprastą vykdymo laiko patikrą, ar reikšmė yra `WeakSet`.
- Padeda išvengti tipų klaidų užtikrinant, kad tik `WeakSet` egzemplioriai būtų laikomi tokiais.
- Veikia su bet kokia `unknown` įvestimi ir grąžina aiškų loginį rezultatą (`true`/`false`).

## Naudojimas

### Sintaksė

Funkcija:

- `isWeakSet(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a yra WeakSet vykdymo metu
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isWeakSet(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:18:04 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>