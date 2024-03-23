-- 코드를 입력하세요
SELECT B.USER_ID, B.NICKNAME, SUM(IF(A.STATUS="DONE", A.PRICE ,0)) AS TOTAL_SALES
FROM USED_GOODS_BOARD AS A
INNER JOIN USED_GOODS_USER AS B
ON A.WRITER_ID = B.USER_ID
GROUP BY B.USER_ID
HAVING TOTAL_SALES >= 700000
ORDER BY TOTAL_SALES