function x(A, v, low, high)
while low ≤ high
mid = ⌊(low + high)/2⌋
if v == A[mid]
return mid
elseif v > A[mid]
low = mid + 1
else high = mid - 1
return NIL
