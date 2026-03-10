# isArray

## 설명

`isArray`는 주어진 값이 배열인지 확인하고, 배열이면 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

알 수 없는 데이터(예: 파싱된 JSON 또는 API 응답)를 검증하여, 반복(iterating)하거나 인덱싱(indexing)하거나 `.length`에 접근하기 전에 값이 배열인지 확인합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 배열에 대한 런타임 검사가 필요할 때 `isArray`를 사용하세요. 불리언을 반환하며 `unknown` 값에도 안전하게 호출할 수 있습니다.

### 장점

- 내장된 `Array.isArray`를 사용하여 서로 다른 렐름(예: iframe)에서도 신뢰할 수 있게 배열을 감지합니다.
- 가드 및 분기 로직에 적합한 간단한 불리언 결과(`true`/`false`)를 반환합니다.
- 매개변수가 `unknown`이므로 어떤 입력 타입에도 동작합니다.

## 사용법

### 문법

함수:

- `isArray(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input은 런타임에서 배열입니다
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isArray(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isArray](../_analysis/isArray.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오전 11:31:03 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>