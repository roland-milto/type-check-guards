# isPlainObject

## Danasîn

Kontrol dike ka `value`-ek dayîn objeyek sade ye û heke wisa be `true` vedigerîne, ne wisa be `false`.

### Bikaranîn

Piştrast bike ku têketina `unknown` (mînak JSON-ya hatî parsekirin, daneyên derveyî, an argumanên fonksiyonê) objeyek
sade ye berî ku kilîdan were xwendin an jî were veguhastin bo objeyek mîhengê ya bi type.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `isPlainObject` ji bo tengkirina `unknown` berî ku wekî objeyek mîna record were bikaranîn bikêr e; ew tenê ji bo
> nirxên ku tag-a hundirîn a wan `[object Object]` e `true` vedigerîne.

### Avantaj

- Kontrolek hêsan û pêbawer peyda dike ku gelo nirxek objeyek sade ye (wate `Object` / `{}`), û `true` an `false`
  vedigerîne.
- Alîkar dike ku objeyên sade ji arrayan, fonksiyonan, `null`, û cureyên din ên ne-objeya-sade were cihêkirin.
- Di TypeScriptê de wekî type guard bikêr e da ku berî gihîştina taybetmendiyên objeyê, nirxên `unknown` were tengkirin.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `isPlainObject(value)`

Parametreyên:

- `value`: Nirxa ku ji bo rewşa objeya-sade tê ceribandin.

### Importa fonksiyona herêmî

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ li vir cihê objeyek sade ye
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ rast
console.log(isPlainObject([])); //‎ şaş
console.log(isPlainObject(null)); //‎ şaş
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.isPlainObject(value)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>Ev pel di 6 February 2026 at 12:18:30 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>