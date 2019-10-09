#include <stdio.h>

static int a;
int sumWithContext(int b) {
    return a + b;
}


int(*sum(int a1))(int) {
    a = a1;
    return sumWithContext;
}

int main()
{
    int (*addOne)(int) = sum(1);
    int (*addFive)(int) = sum(5);
    printf("%d, %d", addOne(5), addFive(5)); // 10, 10
    
    return 0;
}
