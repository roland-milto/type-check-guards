# isFalse

## 설명

`isFalse`는 주어진 값이 불리언 리터럴 `false`와 엄격하게 동일한지 확인합니다.

### 사용 사례

알 수 없는 데이터(예: JSON, 쿼리 파라미터, 사용자 입력)를 검증할 때, 명시적인 불리언 값 `false`만 유효한 플래그로 취급하고 그 외의 모든 값은 거부해야 하는 경우에 사용합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `isFalse`는 리터럴 `false`만 허용하고 다른 모든 falsy 값은 거부해야 할 때 사용하세요. `value === false`인 경우에만 `true`를 반환합니다.

### 장점

- 강제 변환 없이 불리언 리터럴 `false`에 대해 엄격한 검사를 제공합니다.
- `0`, `""`, `null`, `undefined` 같은 다른 falsy 값과 `false`를 구분하는 데 도움이 됩니다.
- 알 수 없는 입력을 검증할 때 의도를 명시적으로 드러내 가독성을 향상시킵니다.

## 사용법

### 문법

함수:

- `isFalse(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // 여기서 input은 정확히 false입니다
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isFalse(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 4:41:16 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>