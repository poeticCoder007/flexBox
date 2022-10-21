//Program for Swapping of number using call by reference (save file with. cpp extension and run in C++ compiler)
#include <iostream>

void swap(int&n1,int&n2)
{
    int temp;
    temp=n1;
    n1=n2;
    n2=temp;
}

int main()
{
    int a;
    int b;
    void swap(int&,int&);
    printf("Enter a: ");
    scanf("%d",&a);
    printf("Enter b: ");
    scanf("%d",&b);
    swap(a,b);

    printf("Value after swapping\n");
    printf("a is %d\n",a);
    printf("b is %d\n",b);
    return 0;
}