//C Program for Swapping: call by value

#include <stdio.h>

void swap(int n1,int n2)
{
    int temp;
    temp=n1;
    n1=n2;
    n2=temp;
    printf("Value after swapping\n");
    printf("x is = %d\n",n1);
    printf("y is = %d\n",n2);
}

int main()
{
    int a,b;
    void swap(int,int);
    printf("Enter x: ");
    scanf("%d",&a);
    printf("Enter y: ");
    scanf("%d",&b);
    swap(a,b);
    return 0;
}