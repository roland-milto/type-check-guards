# isDate

## Cur síos

Cinneann `isDate` an `Date` é luach a chuirtear ar fáil, ag filleadh `true` d’instaintí `Date` agus `false` murach sin.

### Cás úsáide

Bailíochtaigh agus cúngú luachanna anaithnide (m.sh., sonraí iarratais, luachanna cumraíochta, nó JSON parsáilte) sula
ndéantar oibríochtaí `Date` ar nós formáidiú, comparáidí, nó glaoch ar `toISOString()`.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isDate` chun `unknown` a chúngú go `Date` ag am rite; ní fhilleann sé `true` ach d’instaintí fíor `Date` (ní do
> shreanga dáta).

### Buntáistí

- Soláthraíonn sé cosaint shimplí ag am rite chun a fhíorú an `Date` é luach.
- Cabhraíonn sé le hearráidí cineáil a chosc trína chinntiú nach n-éiríonn ach le hinstaintí `Date` an bailíochtú.
- Úsáideach chun ionchuir anaithnide a bhailíochtú (m.sh., ualaí API) sula n-úsáidtear modhanna atá sainiúil do dhátaí.

## Úsáid

### Comhréir

Feidhm:

- `isDate(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil don chineál `Date`.

### Iompórtáil feidhme áitiúil

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input is a Date here
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isDate(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isDate](../_analysis/isDate.md)

<br>

---

<small>Cruthaíodh an comhad ar 31 January 2026 at 15:37:21 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>