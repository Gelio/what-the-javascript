#include <iostream>
using namespace std;

auto sum(int x) {
    return [x](int y) {
        return x + y;
    };
}

int main()
{
    cout<< sum(1)(2); // 3

    return 0;
}