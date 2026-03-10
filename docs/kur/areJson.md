# areJson

## Danasîn

Kontrol dike ka hemû hêmanên rêzikekê rêzikên JSON-ê ne, tenê heke rêzik tijî be û her tiştêk JSON-eke derbasdar be
`true` vedigerîne; wekî din `false` vedigerîne.

### Bikaranîn

Daneyên têketinê (mînak, ji query params, environment variables, an jî API-yên derveyî) piştrast bike ku li wir li benda
rêzikek ji rêzikên ku bi JSON-ê kodkirî ne yî û dixwazî rêzikên vala an jî her têketina ne-JSON red bikî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> Dema ku pêdivî ye piştrast bikî ku `unknown[]` tenê rêzikên JSON-ê dihewîne berî ku wan parse bikî (mînak, bi
`JSON.parse`), `areJson` bi kar bîne.

### Avantaj

- Tenê dema ku hemû hêman rêzikên JSON-ê yên derbasdar bin `true` vedigerîne; wekî din `false` vedigerîne.
- Bi lez têk diçe: gava ku yek hêmanek ne-JSON tê dîtin, kontrolkirin rawestîne.
- Bi dizaynê rêzên vala red dike, ji bo têketina ne-tijî `false` vedigerîne.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areJson(array)`

Parametreyên:

- `array`: Rêzika ku divê ji bo hêmanên rêzika JSON-ê were kontrolkirin.

### Importa fonksiyona herêmî

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // rast
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // nerast
const empty = areJson([]); // nerast

```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areJson(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areJson](‎../_analysis/areJson.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 16:16:33 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>