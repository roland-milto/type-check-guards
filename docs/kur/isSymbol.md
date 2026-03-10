# isSymbol

## Danasîn

`isSymbol` diyar dike ka nirxek hatî dayîn ji cureya `symbol` e an na, ji bo symbolan `true` vedigerîne û ji bo yên din
`false`.

### Bikaranîn

Piştrast bike ku nirxek `unknown` `symbol` e berî ku wê wekî nasnameyek yekta, kilîta registry, an jî kilîta computed
property di objeyan û mapan de bikar bînî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isSymbol` bikar bîne da ku `unknown` berî bangkirina fonksiyonên têkildarî symbol an jî bikaranîna wê wekî kilîta
> taybet a computed property, bibe `symbol`.

### Avantaj

- Ji bo cureya primitive ya JavaScript `symbol` kontrola demê ya hêsan û pêbawer peyda dike.
- Alîkarî dike ku berî bikaranîna API-yên taybet bi symbol an jî tomar kirina wan wekî kilît, nirxên `unknown` têne
  tengkirin.
- Bi bikaranîna `typeof` ku rêya kanonîk e ji bo nasîna nirxên `symbol`, ji erênîyên şaş dûr dike.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isSymbol(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ input li vir de sembol e
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isSymbol(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:27:33 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>