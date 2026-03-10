# isOctal

## Ibsa

Gatiin tokko diraa octal literal sirrii ta'uu isaa murteessa (fakkeenyaaf `0o755`).

### Haala itti fayyadama

Galtee fayyadamaa ykn gatiiwwan qindaa'inaa kan diraa octal literal ta'uu qaban (fakkeenyaaf, haalawwan hayyama faayilii
akka `0o644`) qorachuun dura parse ykn jijjiiruu isaanii mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isOctal` eeguardii gosa dha (`value is string`). Bu'aa `true` booda, TypeScript jijjiiramaa qorame gara `string`tti
> ni xiqqeessa.

### Faayidaa

- Eeguardii gosa cimaa ni kenna: galteen yoo diraa ta’ee fi bifa octal literal waliin yoo walsimu qofa `true` deebisa.
- Diraa duwwaa fi diraa fuuldura/duuba whitespace (ASCII control/space) qabu ni dida, walsimsiisaa dogoggoraa akka hin
  uumamne gargaara.
- Mallattoo filannoo (+/-) ni deeggera, akkasumas prefix `0o`/`0O` irratti qubee guddaa/xinnaa hin ilaalu.
- Galtee diraa hin taane irratti laafaa dha: dogoggora darbuu irra `false` deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isOctal(value)`

Paaraameetaroota:

- `value`: Gatii qoramu.

### Galchii faankishinii naannoo

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // dhugaa
console.log(isOctal(b)); // dhugaa
console.log(isOctal(c)); // soba
console.log(isOctal(d)); // soba

if (isOctal(a)) {
  // a asitti diraa dha
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isOctal(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 15:42:44 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>