# isTrue

## Danasîn

`isTrue` diyar dike ka nirxek dayîn bi awayek hişk bi `true` re wekhev e an na.

### Bikaranîn

Ji bo erêkirina flagan, feature toggle-an, an nirxên veavakirinê `isTrue` bi kar bîne, li ku tenê literalê `true` divê
were qebûl kirin û her tiştê din divê wek `false` were hesibandin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku divê tenê literalê boolean `true` qebûl bikî, ne tenê nirxên rastî (truthy), `isTrue` bi kar bîne.

### Avantaj

- Ji bo literalê boolean `true` kontrola hişk pêşkêş dike (bê koerciyon).
- Alîkarî dike ku `true` ji nirxên rastî (truthy) wek `1`, `"true"`, an jî `{}` were cûda kirin.
- Reftara hêsan û pêşbînbar; ji bo guard û pîpelînên erêkirinê guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isTrue(value)`

Parametreyên:

- `value`: Nirxa ku were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // rast
const b = isTrue(1);         // şaş
const c = isTrue("true");   // şaş

if (isTrue(a)) {
  //‎ a li vir rast e
}
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isTrue(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 13:45:15 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>