# isFilledArray

## Опис

Проверува дали `value` е низа со барем еден елемент, враќајќи `true` или `false`.

### Случај на употреба

Користете `isFilledArray` за да валидирате влезни податоци (на пр., API payloads, вредности од формулар, конфигурација)
пред итерирање, пристап до првиот елемент или примена на логика што бара барем една ставка.

> **Белешка за корисници на TypeScript:**
>
> `isFilledArray` е runtime guard што враќа булова вредност; не ги стеснува типовите на елементите освен што потврдува
> дека низата е непразна.

### Предности

- Едноставна, брза проверка за непразна низа со `Array.isArray` и проверка на должина.
- Помага да се избегнат грешки при извршување кога кодот претпоставува дека низата има барем еден елемент.
- Јасен булов резултат: враќа `true` за непразни низи и `false` во спротивно.

## Употреба

### Синтакса

Функција:

- `isFilledArray(value)`

Параметри:

- `value`: Вредноста што треба да се провери дали е непразна низа.

### Локален импорт на функција

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input е непразна низа во време на извршување
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isFilledArray(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 11:47:57 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>