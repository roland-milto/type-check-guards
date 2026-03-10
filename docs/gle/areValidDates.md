# areValidDates

## Cur síos

Cinneann sé an bhfuil eagar neamhfholamh ann agus go bhfuil sé comhdhéanta go hiomlán d’oibiachtaí bailí `Date`.

### Cás úsáide

Úsáid `areValidDates` chun eagair a sholáthraíonn úsáideoirí nó API a bhailíochtú sula ndéanann tú oibríochtaí bunaithe
ar dhátaí (sórtáil, seiceálacha raoin, formáidiú), ag cinntiú gur oibiachtaí fíora, bailí `Date` iad gach iontráil agus
nach bhfuil an liosta folamh.

> **Nóta d’úsáideoirí TypeScript:**
>
> Filleann `areValidDates` `false` d’eagar folamh; cinntigh go bhfuil sé i gceist go mbeadh an t-eagar neamhfholamh sula
> mbraitheann tú air mar chéim bhailíochtaithe.

### Buntáistí

- Filleann `true` amháin nuair is sampla bailí `Date` gach eilimint (gan dátaí neamhbhailí ar nós
  `new Date('invalid')`).
- Diúltaíonn sé d’ionchur folamh trí `false` a thabhairt ar ais, ag cinntiú nach nglacann tú ach le liostaí dátaí
  bríocha, neamhfholmha.
- Soláthraíonn sé seiceáil shimplí bhuileach i stíl garda atá éasca a chumasc le bailíochtaí eile.

## Úsáid

### Comhréir

Feidhm:

- `areValidDates(array)`

Paraiméadair:

- `array`: An t-eagar le seiceáil, a d’fhéadfadh oibiachtaí `Date` a bheith ann.

### Iompórtáil feidhme áitiúil

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // fíor
console.log(areValidDates(b)); // bréagach
console.log(areValidDates(c)); // bréagach
console.log(areValidDates(d)); // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.areValidDates(array)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 14:31:50 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>