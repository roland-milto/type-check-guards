# isValidDate

## Cur síos

Seiceálann `isValidDate` an bhfuil luach tugtha ina oibiacht `Date` bhailí agus filleann sé `true` amháin do dhátaí
fíora, neamh-neamhbhailí.

### Cás úsáide

Bailíochtaigh ionchur úsáideora nó sonraí API a d’fhéadfadh dátaí a bheith iontu, ag cinntiú gur instans fíor de `Date`
atá sa luach agus nach dáta neamhbhailí é sula ndéantar ríomhanna dáta, formáidiú nó comparáidí.

> **Nóta d’úsáideoirí TypeScript:**
>
> Úsáid `isValidDate` sula nglaonn tú modhanna `Date` (m.sh., `toISOString`, `getTime`) ar luachanna atá clóscríofa mar
`unknown` chun a chinntiú gur oibiachtaí `Date` bailí iad.

### Buntáistí

- Cinntíonn sé gur instans de `Date` atá i luach agus nach bhfuil ann ach teaghrán nó uimhir cosúil le dáta.
- Diúltaíonn sé do dhátaí neamhbhailí (m.sh., `new Date("invalid")`) trí sheiceáil ar luachanna ama `NaN`.
- Garda Boole simplí atá éasca le húsáid i gcoinníollacha agus i bpíblínte bailíochtaithe.
- Cabhraíonn sé le hearráidí ama rite a chosc agus modhanna dáta á nglaoch trína fhíorú ar an ionchur ar dtús.

## Úsáid

### Comhréir

Feidhm:

- `isValidDate(value)`

Paraiméadair:

- `value`: An luach atá le seiceáil.

### Iompórtáil feidhme áitiúil

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // is ionchur é seo ina shampla bhailí de Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // bréagach
console.log(isValidDate("2025-12-22")); // bréagach

```

### Iompórtáil oibiachta go domhanda

Chun na feidhmeanna a iompórtáil mar mhodhanna oibiachta domhanda, bain úsáid as:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Beidh an modh seo a leanas ar fáil go domhanda:

- `Type.isValidDate(value)`

## Anailís feidhmeanna

Tá anailís tábla ar an aschur a tharlaíonn agus paraiméadair éagsúla á gcur isteach sna feidhmeanna doiciméadaithe
anseo: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Cruthaíodh an comhad ar 30 January 2026 at 16:40:04 (UTC) le húsáid an *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ag *
*[Roland Milto](https://roland-milto.de/)**.</small>