# isNullOrUndefined

## Cur síos

Seiceálann sé an bhfuil luach tugtha `null` nó `undefined`.

### Cás úsáide

Úsáid `isNullOrUndefined` nuair is gá duit `null` agus `undefined` araon a chóireáil mar “gan luach”, mar shampla chun
ionchuir roghnacha a bhailíochtú, ualaí API a normalú, nó cosaint a dhéanamh ar chosáin chóid sula ndéantar díthagairt
ar luach a d’fhéadfadh a bheith ar iarraidh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isNullOrUndefined` chun cosaint a dhéanamh ar luachanna ar iarraidh sula ndéantar rochtain ar airíonna nó sula
> nglaoitear modhanna; filleann sé `true` amháin do `null` agus `undefined`.

### Buntáistí

- Soláthraíonn sé garda soiléir, in-athúsáidte chun `null` agus `undefined` a bhrath in aon áit amháin.
- Filleann sé boolean simplí (`true`/`false`) atá éasca a chumasc i gcoinníollacha agus i mbailíochtuithe.
- Cabhraíonn sé le hearráidí coitianta ag am rite a sheachaint trí sheiceáil ar luachanna ar iarraidh sula ndéantar
  rochtain ar airíonna nó sula nglaoitear modhanna.

## Úsáid

### Comhréir

Feidhm:

- `isNullOrUndefined(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil le haghaidh `null` nó `undefined`.

### Iompórtáil feidhme áitiúil

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // handlen fehlende weort
}

console.log(isNullOrUndefined(b)); // soþ
console.log(isNullOrUndefined(c)); // fals

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isNullOrUndefined(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 00:33:46 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>