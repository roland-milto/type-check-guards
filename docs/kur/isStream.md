# isStream

## Danasîn

`isStream` kontrol dike ka nirxek dayîn stream e (stream-şêwaz ên Node.js, `ReadableStream`, an `WritableStream`).

### Bikaranîn

Têketinên ku dikarin an objeyên asayî bin an jî stream (mînak: barkirinên pelan, body-yên HTTP, an pipeline-yên
pêvajoyê) rastî bike û li gorî ku nirx stream e an na logîkê şax bike.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isStream` bikar bîne da ku berî bangkirina metodên stream `unknown` teng bike; ew objeyên stream-şêwaz ên Node.js (bi
> rêya `pipe`/`on`) û Web Streams (`ReadableStream`/`WritableStream`) nas dike dema ku ew globalan hebin.

### Avantaj

- Bi ewlehî objeyên stream-şêwaz ên Node.js yên gelemperî bi kontrolkirina fonksiyonên `pipe` û `on` nas dike.
- Her weha Web Streams jî piştgirî dike bi nasîna `ReadableStream` û `WritableStream` dema ku berdest bin.
- Encamek boolean a sade (`true`/`false`) vedigerîne ku ji bo guard û logîka şaxkirinê guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isStream(value)`

Parametreyên:

- `value`: Nirxa ku divê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  //‎ nodeStream stream-şêwaz e; tu dikarî bi ewlehî API-yên hevpar ên streamê bi kar bînî
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isStream(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isStream](‎../_analysis/isStream.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 23:41:55 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>