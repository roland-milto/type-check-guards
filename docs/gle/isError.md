# isError

## Cur síos

Seiceálann sé an sampla de `Error` é `value` ar leith.

### Cás úsáide

Úsáid `isError` nuair a fhaigheann tú luach `unknown` (mar shampla ó bhloc `catch`, ó aisghlao, nó ó leabharlann
sheachtrach) agus nuair is gá duit a chinneadh go sábháilte an `Error` é sula léitear `message`, `name`, nó `stack`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isError` chun luachanna `unknown` (m.sh., ó `catch`) a chosaint sula gcaitear leo mar `Error`.

### Buntáistí

- Soláthraíonn sé seiceáil shimplí ag am rite chun a fháil amach an sampla de `Error` é luach.
- Cabhraíonn sé le hionchuir anaithnide a chúngú sula rochtainítear airíonna `Error` ar nós `message` nó `stack`.
- Laghdaíonn sé an baol eisceachtaí ag am rite agus luachanna á láimhseáil ó `catch`, ó APIanna seachtracha, nó ó
  fhoinsí gan chineál.

## Úsáid

### Comhréir

Feidhm:

- `isError(value)`

Paraiméadair:

- `value`: An luach le seiceáil i gcoinne an chineáil `Error`.

### Iompórtáil feidhme áitiúil

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isError(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isError](../_analysis/isError.md)

<br>

---

<small>Cruthaíodh an comhad ar 6 February 2026 at 12:45:27 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>