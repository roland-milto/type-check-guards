# isString

## Danasîn

`isString` diyar dike ka nirxek dayîn rêzik e an na.

### Bikaranîn

Têketina bikarhêner, qadên payload yên API, an nirxên veavakirinê di runtime de rast bike da ku berî sepandina
operasyonên rêzikê (mînak: qutkirin, parvekirin, guherandina mezin/biçûk) nirxek rêzik be.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isString` ji bo rastandinê ya nirxên `unknown` an jî bi cureyên nerm (loosely typed) berî ku rêbazên rêzikê were
> gazîkirin bikar bîne; ew tenê dema ku `typeof value === "string"` be `true` vedigerîne.

### Avantaj

- Bi `typeof` re kontrola hêsan û bilez.
- Encamek boolean a pêşbînbar vedigerîne: ji bo rêzikan `true`, wekî din `false`.
- Ji bo rêzikên vala û ne-vala her duyan jî dixebite.
- Berî ku operasyonên taybet ên rêzikê were kirin, wekî parastina runtime ya sivik bêtir bikar tê.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isString(value)`

Parametreyên:

- `value`: Nirxa ku divê ji bo cureya rêzikê were ceribandin.

### Importa fonksiyona herêmî

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  //‎‎ input li vir string e
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isString(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isString](‎../_analysis/isString.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:14:40 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>