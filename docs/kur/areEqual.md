# areEqual

## Danasîn

`areEqual` kontrol dike ka hemû hêmanên di arreyekê de bi nirxa hêvîkirî ya diyarkirî re wekhev in an na, û tenê ji bo
arreyên ne-valayî yên ku her hêman li hev tê `true` vedigerîne.

### Bikaranîn

Piştrastkirin ku lîstek tenê yek nirxa destûrdayî dihewîne (mînak: hemû alaşên rewşê `true` ne, hemû rol `"admin"` in,
an hemû têketinên hejmarî bi sabitek pêwîst re wekhev in) û têketina vala wekî nederbasdar (`false`) bihesibîne.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdiviya te bi kontrolkirina hişk a hemû hêmanan hebe `areEqual` bi kar bîne; ji bo arreyên vala û ji bo her
> têketina ku ne arreyek an ne tije be `false` vedigerîne.

### Avantaj

- Tenê dema ku hemû hêman bi nirxa hêvîkirî re li hev werin, `true` vedigerîne; wekî din `false` vedigerîne.
- Zû têk diçe: gava ku yek hêmanek ku li hev nayê dît, kontrolkirin rawestîne.
- Li dijî têketina nederbasdar parastin dike bi vê ku dema têketin ne arreyek tije be `false` vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areEqual(value, expected)`

Parametreyên:

- `value`: Arreya ku divê were kontrolkirin.
- `expected`: Hêmanê ku divê her tiştê di arreyê de bi wî re were berhevkirin.

### Importa fonksiyona herêmî

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areEqual(value, expected)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:51:14 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>