# isOneOfType

## Danasîn

`isOneOfType` diyar dike ka `value`-ek dayî bi kêmanî yek ji rêzên cureyê yên hatine peyda kirin re li hev tê an na;
heke hevgirtinek were dîtin `true` vedigerîne û wekî din `false`.

### Bikaranîn

Daneyên bi cureyên nezelal an derveyî (mînak: JSON-ya hatî parse kirin, parametreyên query) rastandin bi destûrkirina
çend cureyên demê-êşandinê yên qebûlkirî (wek `number` an `string`) berî ku tu bi logîka din re bidomînî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku tu dixwazî di demê-êşandinê de kontrol bikî ku nirxek bi yek ji çend cureyên destûrkirî re li hev tê,
`isOneOfType` bi kar bîne; heke bi kêmanî yek cure li hev hat `true` vedigerîne, wekî din `false`.

### Avantaj

- Di yek bangê de nirxek li hember çend cureyên destûrkirî kontrol dike û di yekem hevgirtinê de `true` vedigerîne.
- Bi têketinên `unknown` re dixebite, ku ew li sînorên demê-êşandinê (mînak: daneyên derveyî, têketina bikarhêner) bikar
  tîne.
- Encamek boolean a sade (`true`/`false`) peyda dike ku bi logîka şertî û vegerên zû re baş tê tevlihev kirin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isOneOfType(value, types)`

Parametreyên:

- `value`: Nirxa ku divê li hember cureyên diyarkirî were kontrol kirin.
- `types`: Rêzek ji rêzên cureyê ku cureyên gengaz ên nirxê nîşan dide.

### Importa fonksiyona herêmî

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎‎ input di dema demê de objeyek e
}

console.log(isOneOfType(3, ["number", "string"])); //‎ rast
console.log(isOneOfType("hello", ["number", "boolean"])); //‎ çewt

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isOneOfType(value, types)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 13:53:08 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>