#include <iostream>
using namespace std;

// gets the bit present at given position
int getBit(int n, int pos){
    return (1 & (n >> pos));
}

// sets the bit to 1 at given position
int setBit(int n, int pos){
    return ((1 << pos) | n);
}

// sets the bit to 0 at given position
int clearBit(int n, int pos){
    return ((~(1 << pos)) & n);
}

// sets the bit to 0 or 1 according to the given input
int updateBit(int n, int pos, int bit){
    return ((clearBit(n, pos))|(bit << pos));
}

int main()
{
    //cout << getBit(5, 2) << endl;
    //cout << setBit(5, 1) << endl;
    //cout << clearBit(7, 1) << endl;
    //cout << updateBit(7, 1, 0) << endl;
    return 0;
}