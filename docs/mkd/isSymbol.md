# isSymbol

## Опис

`isSymbol` утврдува дали дадена вредност е од тип `symbol`, враќајќи `true` за симболи и `false` во спротивно.

### Случај на употреба

Потврдете дека `unknown` вредност е `symbol` пред да ја користите како единствен идентификатор, клуч во регистар или
клуч за пресметано својство во објекти и мапи.

> **Белешка за корисници на TypeScript:**
>
> Користете `isSymbol` за да го стесните `unknown` на `symbol` пред да повикувате функции поврзани со симболи или да го
> користите како клуч за пресметано својство.

### Предности

- Обезбедува едноставна, сигурна проверка во време на извршување за JavaScript примитивниот тип `symbol`.
- Помага да се стеснат `unknown` вредностите пред користење на API-ја специфични за симболи или пред нивно складирање
  како клучеви.
- Избегнува лажни позитиви со користење на `typeof`, што е канонскиот начин за детектирање `symbol` вредности.

## Употреба

### Синтакса

Функција:

- `isSymbol(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input е симбол тука
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isSymbol(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:27:43 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>