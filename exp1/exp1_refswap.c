//C Program for Swapping: call by address
#include <stdio.h>
void swap(int*n1,int*n2)
{
    int temp;
    temp=*n1;
    *n1=*n2;
    *n2=temp;
}

int main()
{
    int a,b;
    printf("Enter x: ");
    scanf("%d",&a);
    printf("Enter y: ");
    scanf("%d",&b);
    swap(&a,&b);
    printf("Value after swapping\n");
    printf("x is %d\n",a);
    printf("y is %d\n",b);
    return 0;
}