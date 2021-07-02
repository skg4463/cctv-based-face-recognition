import redis
import time

rd = redis.StrictRedis(host='localhost', port=6379, db=0)

while True:
    print(rd.get('now').decode())
    time.sleep(0.1)
