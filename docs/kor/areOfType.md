# areOfType

## 설명

주어진 `array`의 모든 요소가 지정된 `type`인지 확인합니다.

### 사용 사례

`areOfType`를 사용해 알 수 없는 입력(예: 파싱된 JSON, API 페이로드, 사용자 입력)을 검증한 뒤, 배열의 모든 요소에 대해 타입별 연산을 수행하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `areOfType`는 타입 가드이므로, TypeScript는 `if (areOfType(...)) {}` 블록 내부에서 배열을 `Array<DataTypeOf<T>>`로 좁혀줍니다.

### 장점

- TypeScript 타입 가드를 제공합니다: `true`를 반환하면 입력이 `Array<DataTypeOf<T>>`로 좁혀집니다.
- 요청된 런타임 타입에 대해 모든 요소를 검증하여, 서로 다른 타입이 섞인 배열이 통과하는 것을 방지합니다.
- 빠르게 실패합니다: 일치하지 않는 요소가 발견되는 즉시 `false`를 반환합니다.
- 설계상 배열이 아니거나 빈 배열은 거부합니다(`isFilledArray`에 의존).

## 사용법

### 문법

함수:

- `areOfType(array, type)`

매개변수:

- `array`: 검사할 배열입니다.
- `type`: 배열의 각 요소에 대해 검사할 타입입니다.

### 로컬 함수 임포트

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values는 이제 number[]입니다
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areOfType(array, type)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 5:10:05 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>