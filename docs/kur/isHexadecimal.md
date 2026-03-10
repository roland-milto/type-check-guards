# isHexadecimal

## Danasîn

`isHexadecimal` kontrol dike ka nirxek dayîn literalek heksadesîmal a rêzokê ye bi pêşgira mecbûr `0x`/`0X` an na.

### Bikaranîn

`isHexadecimal` bi kar bîne da ku nirxên veavakirinê, qadên payloadê yên API, an argumanên CLI yên ku divê wekî
literalên rêzokê yên heksadesîmal (mînak: ID, mask, an navnîşan) werin dayîn piştrast bikî û divê valahiyên li derdorê
wan tune bin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye têketina bikarhêner an daneyên serialîzekirî wekî rêzokek literal a heksadesîmal a hişk (bi pêşgira
`0x`/`0X`) berî parsekirin an veguherandinê piştrast bikî, `isHexadecimal` bi kar bîne.

### Avantaj

- Piştrast dike ku nirxek rêzok (string) e û bi formata literalê heksadesîmal a hişk re têkçûyî ye (pêdivî ye pêşgira
  `0x`/`0X` hebe).
- Rêzokên ku li serê an dawiya wan valahiyên spî hene red dike, ku alîkarî dike ji pejirandina bêhevdî ya têketina bi
  pêl (padded) dûr bimîne.
- Nîşaneya vebijarkî (optional sign) piştgirî dike û ji bo pêşgir û hejmaran bêhest (case-insensitive) e, bi awayek
  pêşbînbar `true`/`false` vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isHexadecimal(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // rast
isHexadecimal("-0Xff"); // rast
isHexadecimal("1A2B"); // nerast (pêşgir tune)
isHexadecimal(" 0x1A2B"); // nerast (spasiya pêşîn)
isHexadecimal(0x1a2b); // nerast (ne rêzok e)

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isHexadecimal(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isHexadecimal](‎../_analysis/isHexadecimal.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 22:59:27 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>