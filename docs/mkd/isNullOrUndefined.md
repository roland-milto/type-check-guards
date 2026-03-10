# isNullOrUndefined

## Опис

Проверува дали дадена вредност е `null` или `undefined`.

### Случај на употреба

Користете `isNullOrUndefined` кога треба и `null` и `undefined` да ги третирате како „нема вредност“, на пример при
валидација на опционални влезови, нормализирање на API payload-ови или заштита на код-патеки пред дереференцирање на
потенцијално недостасувачка вредност.

> **Белешка за корисници на TypeScript:**
>
> Користете `isNullOrUndefined` за да се заштитите од недостасувачки вредности пред пристап до својства или повикување
> методи; враќа `true` само за `null` и `undefined`.

### Предности

- Обезбедува јасен, повторно употреблив гард за откривање на `null` и `undefined` на едно место.
- Враќа едноставен булов резултат (`true`/`false`) што лесно се комбинира во услови и валидации.
- Помага да се избегнат вообичаени runtime грешки со проверка на недостасувачки вредности пред пристап до својства или
  повикување методи.

## Употреба

### Синтакса

Функција:

- `isNullOrUndefined(value)`

Параметри:

- `value`: Вредноста што треба да се провери за `null` или `undefined`.

### Локален импорт на функција

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // ракувај со недостасувачка вредност
}

console.log(isNullOrUndefined(b)); // точно
console.log(isNullOrUndefined(c)); // неточно

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isNullOrUndefined(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 00:34:30 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>