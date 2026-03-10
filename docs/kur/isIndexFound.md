# isIndexFound

## Danasîn

`isIndexFound` diyar dike ka nirxek dayîn jimareyek tevahî ya ne-negatîf e an na, ku wateya ku indeks hate dîtin.

### Bikaranîn

Piştrast bike ku encama lêgerînê indeksekî bikêrhatî (jimareyek tevahî `>= 0`) nîşan dide berî ku li ser array an string
indeks bikî, û bi vî awayî ji bikaranîna bê-hevî ya `-1` an nirxên ne-jimare dûr bimîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Piştî operasyonên wekî `indexOf`, `findIndex`, an lêgerînên taybet ên ku `-1` (an nirxên din ên nederbasdar) dikarin
> “nehat dîtin” nîşan bidin, `isIndexFound` bikar bîne. Dema ku `true` vedigerîne, nirx jimare ye û ewle ye ku wekî
> indeksa array/string were bikaranîn.

### Avantaj

- Ji bo dîtina ku indeks hate dîtin an na, bi kontrolkirina jimareyek tevahî ya ne-negatîf parastineke cureyî ya hêsan
  peyda dike.
- Tenê ji bo nirxên derbasdar ên wekî indeks (`>= 0` jimareyên tevahî) `true` vedigerîne, negatîf, ne-jimareyên tevahî,
  û ne-jimareyan red dike.
- Dibe alîkar ku di dema kar bi API-yên ku ji bo “nehat dîtin” `-1` vedigerînin de, ji xeletiyên off-by-one û nirxên
  nîşan (sentinel) dûr bimîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isIndexFound(value)`

Parametreyên:

- `value`: Nirxa ku tê kontrolkirin ka jimareyek tevahî ya ne-negatîf e an na.

### Importa fonksiyona herêmî

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  //‎ idx li vir de hejmarê ye û >= 0 e
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

//‎ Bikaranîna asayî bi indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isIndexFound(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isIndexFound](‎../_analysis/isIndexFound.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 00:46:43 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>