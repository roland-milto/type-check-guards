# areHexadecimals

## 설명

배열의 모든 요소가 16진수 문자열인지 확인하며, 비어 있지 않은 배열에서 모든 항목이 유효할 때만 `true`를 반환합니다.

### 사용 사례

`areHexadecimals`를 사용해 사용자 입력 또는 외부 데이터(예: ID, 체크섬, 선행 '#'이 없는 색상 코드)를 16진수로 파싱하거나 추가 처리하기 전에 검증하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `areHexadecimals`를 사용해 파싱하거나 값을 변환하기 전에 알 수 없는 입력을 검증하세요(예: `parseInt(value, 16)` 또는 BigInt 변환 전에).

### 장점

- 모든 요소가 16진수 문자열인지 검증하며, 모든 항목이 일치할 때만 `true`를 반환합니다.
- 설계상 빈 배열은 거부하며, 입력 데이터가 없을 때 `false`를 반환합니다.
- 가드 및 조기 반환(early-return) 검증에 적합한 간단한 불리언 결과(`true`/`false`)를 제공합니다.

## 사용법

### 문법

함수:

- `areHexadecimals(array)`

매개변수:

- `array`: 16진수 문자열 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areHexadecimals(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:06:44 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>