# areNullOrUndefined

## 설명

주어진 배열의 모든 요소가 `null` 또는 `undefined`인지 확인합니다.

### 사용 사례

처리를 건너뛰거나 “값이 제공되지 않음” 상태를 표시할지 결정하기 전에, 선택적 필드 목록에 실제 값이 전혀 없고(`null`/`undefined`만) 포함되어 있는지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 배열에 누락된 값(`null`/`undefined`)만 포함되어 있는지 확인해야 할 때 `areNullOrUndefined`를 사용하세요. 빈 배열에 대해서는 `false`를 반환한다는 점에 유의하세요.

### 장점

- 모든 요소가 `null` 또는 `undefined`일 때에만 `true`를 반환합니다.
- 빈 배열에 대해 `false`를 반환하여 “데이터 없음”과 “모든 값이 누락됨”을 구분하는 데 도움이 됩니다.
- `unknown[]`에서도 동작하므로 타입을 좁히기 전에 안전하게 사용할 수 있습니다.

## 사용법

### 문법

함수:

- `areNullOrUndefined(array)`

매개변수:

- `array`: 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areNullOrUndefined(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:30:11 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>