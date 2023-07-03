int reverse(int n){
    long int x=0;
    while(n!=0)
    {
        x=x*10+n%10; //since x*10 won't fit in int that is why x is long int
        n=n/10;
    }
    return (x<INT_MIN || x>INT_MAX) ? 0 : x; //overflow detector
}