# isRegEx

## Danasîn

Diyar dike ka nirxek ku hatî peyda kirin instance-eke `RegExp` e an na.

### Bikaranîn

Berî ku wan wekî rêzekirina rêkûpêk (regular expression) bihesibînî, nirxên ku ji hêla bikarhêner ve hatine peyda kirin
an jî nirxên dînamîk (mînak, veavakirin, payload-ên API, têketinên plugin) rastîbikin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Ji bo tengkirina nirxên `unknown` (an union) berî ku taybetmendî an metodên taybet ên RegExp bikar bînî, `isRegEx`
> bikar bîne; ew tenê ji bo nirxên ku instance-yên `RegExp` in `true` vedigere.

### Avantaj

- Ji bo kontrolkirina ku nirxek `RegExp` e an na, parastinek cureyê ya demê xebatê (runtime) ya hêsan peyda dike.
- Alîkarî dike ku çewtiyan pêşî bigire dema ku kod hêvî dike ku têketin rêzekirina rêkûpêk (regular expression) be (
  mînak, berî ku `test`, `exec` were bangkirin an `source` were xwendin).
- Bi herdu regex literal û instance-yên ku bi `new RegExp(...)` hatine çêkirin re dixebite.
- Encamek boolean a zelal (`true`/`false`) vedigere bêyî ku ji bo têketinên ne-regex derxe.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isRegEx(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎ input li vir RegExp ye
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isRegEx(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:30:04 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>