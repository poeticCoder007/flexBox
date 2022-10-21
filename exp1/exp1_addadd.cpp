//Program for Addition of two numbers using call by reference (save file with .cpp extension and run in C++ compiler)
#include <iostream>

void add(int &n1,int &n2)
{
    int result;
    result=n1+n2;
    printf("sum is = %d\n",result);
}
int main()
{
    int a,b;
    printf("enter a = ");
    scanf("%d",&a);
    printf("enter b = ");
    scanf("%d",&b);
    add(a,b);
    return 0;
}