# isOctal

## Cur síos

Cinneann sé an bhfuil luach ina theaghrán litearail ochtúil bailí (m.sh. `0o755`).

### Cás úsáide

Bailíochtaigh ionchur úsáideora nó luachanna cumraíochta a chaithfear a chur in iúl mar theaghrán litearail ochtúil (mar
shampla, modhanna ceadanna comhaid cosúil le `0o644`) sula ndéantar iad a pharsáil nó a thiontú.

> **Nóta d’úsáideoirí TypeScript:**
>
> `isOctal` is garda cineáil (`value is string`). Tar éis toradh `true`, caolaíonn TypeScript an athróg seiceáilte go
`string`.

### Buntáistí

- Soláthraíonn sé garda cineáil dian: filleann sé `true` amháin nuair is teaghrán é an t-ionchur a mheaitseálann formáid
  litearail ochtúil.
- Diúltaíonn sé teaghráin fholmha agus teaghráin le spás bán tosaigh/deiridh (rialú/spás ASCII), rud a laghdaíonn
  meaitseálacha de thaisme.
- Tacaíonn sé le comhartha roghnach agus níl sé cás-íogair don réimír `0o`/`0O`.
- Tá sé fulangach le hionchuir nach teaghráin iad trí `false` a thabhairt ar ais in ionad earráid a chaitheamh.

## Úsáid

### Comhréir

Feidhm:

- `isOctal(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // fír
console.log(isOctal(b)); // fír
console.log(isOctal(c)); // bréag
console.log(isOctal(d)); // bréag

if (isOctal(a)) {
  // is téacs é a anseo
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isOctal(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 15:41:23 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>