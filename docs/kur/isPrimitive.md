# isPrimitive

## Danasîn

`isPrimitive` diyar dike ka nirxek dayîn primitive ye (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Bikaranîn

Têketinan di dema xebitandinê de rast bike (mînak: qadên payload-ê yên API, nirxên mîhengê, an daneyên ku bikarhêner
pêşkêş dike) da ku berî serialîzekirin, logkirin, an sepandina operasyonên tenê-primitive, piştrast bibe ku nirx
primitive ye.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isPrimitive` bikar bîne da ku têketinên `unknown` berî ku wek objekte an fonksiyon were hesibandin parastin; ew ji bo
> primitive `true` û ji bo objekte û fonksiyonan `false` vedigerîne.

### Avantaj

- Kontrolê bilez û bê-allocasyon ji bo ku nirxek primitive ya JavaScript e an na.
- `null` bi rastî wek primitive tê hesibandin (her çend `typeof null` `"object"` e).
- Alîkarî dike ku berî kirinê operasyonên tenê-objekt, nirxên `unknown` were têkildar kirin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isPrimitive(value)`

Parametreyên:

- `value`: Nirxa ku ji bo celebê primitive tê kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isPrimitive(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:56:49 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>