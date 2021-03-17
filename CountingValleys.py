#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path):
    # Write your code here
    path_list = list(path)
    # print(path_list)
    counter = 0
    arr = []
    
    for i in range(0, steps):
        if path[i] == "D":
            arr.append(i)
            
    print(arr)
    for i in range(0, len(arr)):
        x = arr[i]
        y = arr[i] + 1
        for j in range(i+1, len(arr)):
            # print(arr[i], arr[j])
            # if x+1 == arr[j] and x+2 == arr[j]:
            #     counter +=1 
            #     break
            print(x+1)
            if x+1 == arr[j]:
                counter +=1 
                arr[j] = -1
                print(arr[j])
                break
        
    
    # print(counter)
    return counter
            
                
            

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    steps = int(input().strip())

    path = input()

    result = countingValleys(steps, path)

    fptr.write(str(result) + '\n')

    fptr.close()
