# isPromise

## Cur síos

Cinneann sé an `Promise` é luach ar leith.

### Cás úsáide

Úsáid `isPromise` chun ionchuir anaithnide a bhailíochtú sula gcaitear leo mar `Promise`, mar shampla agus luachanna á
láimhseáil a thagann ó bhreiseáin, ó iompórtálacha dinimiciúla, nó ó APIanna le cineálú scaoilte.

> **Nóta d’úsáideoirí TypeScript:**
>
> Déanann `isPromise` seiceáil trí `instanceof Promise`, mar sin ní fhilleann sé `true` ach do shamplaí fíora de
`Promise` (ní do thenables ginearálta).

### Buntáistí

- Soláthraíonn sé seiceáil shimplí ag am rite chun a fháil amach an `Promise` é luach.
- Cabhraíonn sé le cosaint a dhéanamh ar chonairí cóid a éilíonn sampla fíor de `Promise`, ag filleadh `true` nó `false`
  go hiontaofa.
- Seachnaíonn sé dearbhuithe bréagacha ó oibiachtaí “thenable” (m.sh., `{ then() {} }`) trí shampla iarbhír de `Promise`
  a éileamh.

## Úsáid

### Comhréir

Feidhm:

- `isPromise(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // fíor
console.log(isPromise(b)); // bréagach
console.log(isPromise(123)); // bréagach
console.log(isPromise(null)); // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isPromise(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 23:52:50 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>