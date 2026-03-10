# areWeakSets

## Описание

Проверява дали входът е непразен масив, в който всеки елемент е `WeakSet`, като връща `true` само в този случай.

### Случай на употреба

Валидирайте входни данни по време на изпълнение (напр. от API, конфигурация или предоставени от потребителя данни), за
да се уверите, че имате непразен списък от инстанции на `WeakSet`, преди да продължите с логика, която зависи от
поведението на `WeakSet`.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areWeakSets`, за да валидирате неизвестен вход, преди да го третирате като `WeakSet[]`. Връща `false` за
> празни масиви и за стойности, които не са масиви.

### Предимства

- Гарантира, че всеки елемент във входния масив е `WeakSet`.
- Връща `false` за празни масиви, предотвратявайки случайни резултати „всички са валидни“ при липсващи данни.
- Проваля се безопасно, като връща `false`, когато входът не е запълнен масив (включително `null`).
- Полезно като защитна проверка преди извършване на операции, които изискват инстанции на `WeakSet`.

## Използване

### Синтаксис

Функция:

- `areWeakSets(array)`

Параметри:

- `array`: Масивът, който да бъде проверен за обекти `WeakSet`.

### Локален импорт на функция

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a е непразен масив от инстанции на WeakSet
}

console.log(areWeakSets(a)); // вярно
console.log(areWeakSets(b)); // невярно
console.log(areWeakSets(c)); // невярно
console.log(areWeakSets(null as unknown)); // невярно
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areWeakSets(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 14:07:50 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>