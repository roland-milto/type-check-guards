# isFilledArray

## 설명

`value`가 최소 한 개의 요소를 가진 배열인지 확인하여 `true` 또는 `false`를 반환합니다.

### 사용 사례

반복 처리, 첫 번째 요소 접근, 또는 최소 한 개의 항목이 필요로 하는 로직을 적용하기 전에 들어오는 데이터(예: API 페이로드, 폼 값, 구성)를 검증하기 위해 `isFilledArray`를 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isFilledArray`는 불리언을 반환하는 런타임 가드이며, 배열이 비어 있지 않다는 확인을 넘어 요소 타입을 더 좁히지는 않습니다.

### 장점

- `Array.isArray`와 길이 확인을 사용하여 비어 있지 않은 배열을 간단하고 빠르게 검사할 수 있습니다.
- 코드가 배열에 최소 한 개의 요소가 있다고 가정할 때 발생할 수 있는 런타임 오류를 피하는 데 도움이 됩니다.
- 명확한 불리언 결과: 비어 있지 않은 배열이면 `true`를, 그렇지 않으면 `false`를 반환합니다.

## 사용법

### 문법

함수:

- `isFilledArray(value)`

매개변수:

- `value`: 비어 있지 않은 배열인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input은 런타임에서 비어 있지 않은 배열입니다
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isFilledArray(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오전 11:47:42 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>