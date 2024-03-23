-- 코드를 입력하세요
SELECT INGREDIENT_TYPE, SUM(TOTAL_ORDER) AS TOTAL_ORDER
FROM FIRST_HALF AS A
JOIN ICECREAM_INFO AS B
ON A.FLAVOR = B.FLAVOR
GROUP BY INGREDIENT_TYPE