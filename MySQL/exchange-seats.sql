# Time:  O(nlogn)
# Space: O(n)

# Mary is a teacher in a middle school and she has a table seat storing
# students' names and their corresponding seat ids.
#
# The column id is continuous increment.
# Mary wants to change seats for the adjacent students.
# Can you write a SQL query to output the result for Mary?
# +---------+---------+
# |    id   | student |
# +---------+---------+
# |    1    | Abbot   |
# |    2    | Doris   |
# |    3    | Emerson |
# |    4    | Green   |
# |    5    | Jeames  |
# +---------+---------+
#
# For the sample input, the output is:
# +---------+---------+
# |    id   | student |
# +---------+---------+
# |    1    | Doris   |
# |    2    | Abbot   |
# |    3    | Green   |
# |    4    | Emerson |
# |    5    | Jeames  |
# +---------+---------+
#
# Note:
# If the number of students is odd, there is no need to change the last one's seat.

SELECT
    s1.id, COALESCE(s2.student, s1.student) AS student
FROM
    seat s1
        LEFT JOIN
    seat s2 ON ((s1.id + 1) ^ 1) - 1 = s2.id
ORDER BY s1.id;
