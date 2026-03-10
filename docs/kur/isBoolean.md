# isBoolean

## Danasîn

Diyar dike ka nirxek dayîn `boolean` e an na.

### Bikaranîn

Daneyên derveyî an bêcure (mînak: guhêrbarên jîngehê, payloadên JSON, parametreyên query) rast bike da ku berî
bikaranîna wê di logîka şertî de, nirxek `boolean` be.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Berî ku operasyonên boolean bisepîne, `isBoolean` bikar bîne da ku `unknown` bi `boolean` teng bike.

### Avantaj

- Kontrolkirina demjimê ya hêsan û bilez bi bikaranîna `typeof`.
- Alîkar dike ku têketina nenas berî logîka taybet a boolean were rastandin.
- Encamek `boolean` ya pêşbînbar vedigerîne (`true`/`false`).

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isBoolean(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ input li vir boolean e
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isBoolean(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:36:58 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>