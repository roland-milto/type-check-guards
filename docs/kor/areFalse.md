# areFalse

## 설명

`areFalse`는 제공된 배열의 모든 요소가 불리언 `false`와 엄격하게 일치하는지 확인합니다.

### 사용 사례

진행하기 전에 기능 플래그, 검사, 또는 가드 결과 목록이 모두 `false`인지 검증합니다(예: 차단 조건이 존재하지 않음을 확인).

> **TypeScript 사용자를 위한 참고:**
>
> 배열이 비어 있지 않고 불리언 값 `false`만 포함하는지 엄격하게 검증해야 할 때 `areFalse`를 사용하세요.

### 장점

- 모든 요소가 엄격하게 `false`인지 보장합니다(참/거짓 값으로의 강제 변환 없음).
- `isFilledArray`를 통해 채워진 배열을 요구하므로, 배열이 아니거나 빈 배열인 경우 `false`를 반환합니다.
- 효율성을 위해 첫 번째 `false`가 아닌 요소에서 조기 종료합니다.

## 사용법

### 문법

함수:

- `areFalse(array)`

매개변수:

- `array`: 어떤 타입의 요소든 포함할 수 있는, 검사할 배열입니다.

### 로컬 함수 임포트

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // 참
const b = areFalse([false, true, false]);  // 거짓
const c = areFalse([false, "false", false]); // 거짓
const d = areFalse([]); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areFalse(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 4:17:37 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>