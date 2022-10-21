//C Program for Addition: call by value
#include <stdio.h>
int add(int n1, int n2)
{
    int result;
    result=n1+n2;
    return result;

}
int main()
{
    int a,b;
    printf("enter x: ");
    scanf("%d",&a);
    printf("enter y: ");
    scanf("%d",&b);
    int sum = add(a,b);
    printf("sum is = %d\n",sum);
    return 0;
}