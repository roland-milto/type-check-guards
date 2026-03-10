# areBooleans

## Cur síos

Seiceálann `areBooleans` an bhfuil booleáin amháin in eagar neamhfholamh ar leith, ag filleadh `true` má tá agus `false`
murach sin.

### Cás úsáide

Bailíochtaigh sonraí a sholáthraíonn úsáideoirí nó sonraí seachtracha (m.sh., ualaí JSON, paraiméadair iarratais, eagair
chumraíochta) chun a chinntiú nach bhfuil sa liosta neamhfholamh ach booleáin sula gcuirtear loighic bhooleáin i
bhfeidhm nó sula gcuirtear ar aghaidh chuig APIanna a bhfuil `boolean[]` ag teastáil uathu.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `areBooleans` chun `unknown[]` a bhailíochtú sula gcaitear leis mar `boolean[]`; filleann sé `false` d’eagair
> fholmha, mar sin láimhseáil an cás sin go sainráite má cheadaítear liosta folamh.

### Buntáistí

- Ní fhilleann sé `true` ach amháin nuair is booleáin gach eilimint agus gur eagar neamhfholamh é an t-ionchur.
- Cuireann sé cosc ar dhearbhuithe bréagacha trí eagair fholmha a dhiúltú (filleann sé `false`).
- Oibríonn sé go maith mar gharda ama rite roimh oibríochtaí booleáin amháin (m.sh., `every`, `some`, laghduithe
  loighciúla).

## Úsáid

### Comhréir

Feidhm:

- `areBooleans(array)`

Paraiméadair:

- `array`: An t-eagar atá le seiceáil le haghaidh eilimintí booleáin.

### Iompórtáil feidhme áitiúil

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areBooleans(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:40:14 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>