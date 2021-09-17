def findDuplicate(nums):
    tortoise = nums[0]
    hare = nums[0]
    while True:
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        if tortoise == hare:
            break

    ptr1 = nums[0]
    ptr2 = tortoise
    arr = []
    while ptr1 != ptr2:
        ptr1 = nums[ptr1]
        ptr2 = nums[ptr2]
    arr.append(ptr1)
    
    
    return arr

def main():
    print(findDuplicate([3,1,3,4,2,100,5,6,8,10,8]))

if __name__ == "__main__":
    main()

