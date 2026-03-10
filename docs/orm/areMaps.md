# areMaps

## Ibsa

`areMaps` tarreen kenname duwwaa akka hin taane fi elementiin isaa hundi `Map` ta'uu isaanii murteessa.

### Haala itti fayyadama

Galtee hin beekamne (fkn, JSON parsing irraa, API alaa irraa, yookaan maddoota dynamic irraa) mirkaneessuu; booda akka
tarree `Map`-oota hin duwwaa ta'etti itti fayyadamu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Tarree duwwaaf `false` deebisa; tarreen guutamee elementiin hundi `Map` ta'ee yoo argame qofa `true` deebisa.

### Faayidaa

- Elementiin hundi `Map` ta'uu isaa mirkaneessa; yeroo tarreen guutuun sakatta'insa darbe qofa `true` deebisa.
- Akkaataa isaatiin tarreewwan duwwaa ni dida; “odeeffannoo hin jiru” akka galtee sirrii ta'ee akka hin fudhatamne ni
  ittisa.
- Walitti qabama irratti hojiiwwan `Map`-dhaaf addaa (fkn, `.get()`, `.set()`, irra deddeebi'uu) raawwachuu dura akka
  eeggannoo (guard) tajaajila.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areMaps(array)`

Paaraameetaroota:

- `array`: Tarree sakatta'amu.

### Galchii faankishinii naannoo

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items yeroo runtime keessatti Map keessaa tarree hin duwwaa ta'uu isaa mirkanaa'a
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // soba: tarreewwan duwwaa, yookaan tarreewwan gatii Map hin taane kamiyyuu of keessaa qaban
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areMaps(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 16:14:01 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>