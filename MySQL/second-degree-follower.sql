# Time:  O(nlogn)
# Space: O(n)

SELECT f1.follower, COUNT(DISTINCT f2.follower) AS num
FROM follow f1
JOIN follow f2 ON f1.follower = f2.followee
GROUP BY f1.follower
