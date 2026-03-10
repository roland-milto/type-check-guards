# isDecimal

## Ibsa

`isDecimal` gatiin tokko bakka bu'iinsa satirii deesimaalii ta'uu isaa, whitespace fuulduraa/dhuubaa hin qabne fi bifa
deesimaalii sirrii qabu ta'uu isaa ni mirkaneessa.

### Haala itti fayyadama

Dirreewwan foormii, payloads API, yookaan gatiiwwan qindaa'inaa kanneen akka satirii deesimaalii (mallattoo dabaluu
danda'u) ta'anii whitespace naannoo isaanii hin qabne ta'uun kennamuu qaban, osoo hin hiikamin yookaan hin kuufamin dura
mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isDecimal` fayyadamiitii galtee fayyadamaa jijjiiruu dura (fakkeenyaaf, `Number(value)` waliin), addatti yeroo
> whitespace didamuu qabu mirkaneessi.

### Faayidaa

- Galtee akka galtee seenuun satirii ta'uu isaa fi fakkii lakkoofsa deesimaalii (decimal-literal) waliin walsimuun isaa
  sirnaan mirkaneessa.
- Hiika walxaxaa ittisuuf, whitespace fuulduraa fi duubaa (qubee to'annoo dabalatee) ni dida.
- Regex hojjetamu dura sakatta'iinsa saffisaa (gosa mirkaneessuu fi qubee jalqabaa/dhuma) ni raawwata.
- Bu'aa boolean salphaa (`true`/`false`) kan eegumsa (guards) fi mirkaneessa galtee irratti mijatu ni deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isDecimal(value)`

Paaraameetaroota:

- `value`: Gatii akka bifa satirii deesimaalii ta'uu isaa mirkaneessuuf.

### Galchii faankishinii naannoo

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v asitti satirii dha (yeroo hojii irratti mirkanaa'e)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isDecimal(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 15:53:58 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>