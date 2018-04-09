# Time:  O(n) if hash join, O(nlogn) if merge join
# Space: O(n)

# https://www.quora.com/What-is-time-complexity-of-Join-algorithm-in-Database

SELECT
    Employee.name, Bonus.bonus
FROM
    Employee
        LEFT JOIN
    Bonus ON Employee.empid = Bonus.empid
WHERE
    Bonus.bonus < 1000 OR Bonus.bonus IS NULL
;
