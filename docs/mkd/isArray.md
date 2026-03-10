# isArray

## Опис

`isArray` проверува дали дадена вредност е низа и враќа `true` ако е, во спротивно `false`.

### Случај на употреба

Валидирајте непознати податоци (на пр., парсиран JSON или API одговори) за да се осигурате дека вредноста е низа пред
итерирање, индексирање или пристапување до `.length`.

> **Белешка за корисници на TypeScript:**
>
> Користете `isArray` кога ви треба проверка во runtime за низи; враќа булова вредност и е безбедно да се повика со
`unknown` вредности.

### Предности

- Го користи вградениот `Array.isArray` за сигурно откривање на низи низ различни realm-ови (на пр., iframes).
- Враќа едноставен булов резултат (`true`/`false`) погоден за guard-и и логика на разгранување.
- Работи со кој било тип на влез бидејќи параметарот е `unknown`.

## Употреба

### Синтакса

Функција:

- `isArray(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input е низа во време на извршување
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isArray(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isArray](../_analysis/isArray.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 11:31:15 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>