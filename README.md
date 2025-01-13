# 3차 월별 평가

`DB를 이용한 댓글 기능 구현`

## comments 테이블을 생성하세요

다음 조건에 맞는 댓글 테이블 생성

`CREATE TABLE comments`

1. **id**

   - 댓글을 구분할 수 있는 고유 식별 키
   - 숫자 형식(`INT`)으로 설정, **자동 증가**

2. **user_id**

   - 댓글 작성자의 사용자 ID 저장
   - 최대 30자까지 저장할 수 있는 문자열(`VARCHAR(30)`) 형식으로 설정
   - **빈 값이 허용되지 않음**.

3. **content**

   - 댓글 내용 저장
   - 긴 텍스트를 저장할 수 있는 문자형 형식을 설정
   - **빈 값이 허용되지 않음**.

4. **created_at**

   - 댓글이 작성된 날짜와 시간 저장
   - 기본값으로 현재 시간 저장

## MySQL

### TABLE 생성

```sql
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(30) NOT NULL DEFAULT "whtkddk323",
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 데이터 입력

```sql
INSERT INTO comments(content) values("오늘 평가래~");
INSERT INTO comments(content) values("오늘 할 일 : 집에 뛰어가기");
```

### 모든 컬럼 조회

```sql
SELECT * FROM comments;
```

### 특정 컬럼 조회

```sql
SELECT * FROM comments WHERE id=${id};
```

### 데이터 삭제

```sql
DELETE FROM comments WHERE id=${id};
```

### 데이터 수정

```sql
UPDATE comments SET content="${content}" WHERE id=${id};
```

## 화면이 필요한 HTML

- list.html
- write.html

## 요구 사항

1. 필요한 컬럼(속성)들이 댓글의 의미에 맞게 제대로 정의되었는가? (10점)
2. 각 컬럼(속성)의 데이터 타입이 적절하게 설정되었는가? (10점)
3. Express를 사용하여 서버를 구축했는가? (10점)
4. 디렉토리를 잘 구분했는가? (10점)
5. 모듈마다 요청을 처리하는 라우팅이 잘 구성되었는가? (10점)
6. 미들웨어를 사용하여 요청/응답 처리 및 예외 처리를 잘 수행했는가? (10점)

- content가 빈 값인 경우.

7. 댓글 생성이 잘 구현했는가? (10점)

- 댓글을 작성할 때, user_id는 값을 동적인 값이 아닌, 정적값 입니다.

8. 댓글 조회를 잘 구현했는가? (10점)
9. 댓글 수정을 잘 구현했는가? (10점)
10. 댓글 삭제를 잘 구현했는가? (10점)

## 완료되었다면

1. 기능까지 정상적으로 완료되어야 `완성` 입니다.
2. `완성` 되었다면, github에 새롭게 디렉토리를 생성해주세요.
3. 디렉토리 이름은 => `250113_monthTest3`
4. 본인의 원격 저장소에 push까지 진행한 후 앞으로 나와서 피드백 받으세요.
5. 못하면 다음 날 수업시간이 끝난 뒤 실습시간에 재시험 입니다.
