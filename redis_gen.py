import redis
import datetime
import time

rd = redis.StrictRedis(host='localhost', port=6379, db=0)

while True:
    rd.set('now', datetime.datetime.now().strftime("%H:%M:%S"))
    time.sleep(0.1)
