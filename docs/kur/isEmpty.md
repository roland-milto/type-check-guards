# isEmpty

## Danasîn

Diyar dike ka nirxek diyarkirî vala ye an na, û ji bo `null`, `undefined`, rêzikên vala/an tenê valahî, arrayên vala,
`Map`/`Set` ên vala, an jî objeyên ku xwedî taybetmendiyên xwe yên enumerable nînin `true` vedigerîne.

### Bikaranîn

Ji bo rastandina têketinan û dîtina nirxên winda/an vala li ser gelek cureyên daneyan (mînak: qadên formê, payloadên
API, objeyên mîhengkirinê) `isEmpty` bikar bîne, li ku `null`, `undefined`, rêzikên tenê valahî, koleksiyonên vala, û
objeyên bê-taybetmendî divê wekî vala têne hesibandin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isEmpty` amûrek e ku boolean vedigerîne (ne pêşbîniya cureyê ya TypeScript), ji ber vê yekê bi xwe cureyan teng nake;
> ji bo rastandin/şaxkirinê bikar bîne, ne ji bo tengkirina di dema compile de.

### Avantaj

- Ji bo kontrolkirina vala-bûnê, `null` û `undefined` wekî `true` têne hesibandin.
- Rêzikên ku tenê ji valahiyê pêk tên, berî kontrolkirina dirêjahiyê bi qutkirinê (trim) vala têne hesibandin.
- Cureyên konteyner ên gelemperî (array, `Map`, `Set`) û objeyên sade yên ku xwedî taybetmendiyên xwe yên enumerable
  nînin, piştgirî dike.
- Bi bikaranîna kontrolên `hasOwnProperty`, ji hejmarkirina taybetmendiyên mîrasî dûr dike.
- Encamek boolean a sade (`true`/`false`) vedigerîne ku ji bo guard û rastandinê guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isEmpty(value)`

Parametreyên:

- `value`: Nirxa ku ji bo vala-bûnê tê kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isEmpty(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isEmpty](‎../_analysis/isEmpty.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 16:19:30 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>