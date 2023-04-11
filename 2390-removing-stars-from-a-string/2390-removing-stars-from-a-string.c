char * removeStars(char * s){
    char * stack =(char *) malloc((strlen(s)+1)*sizeof(char));
    int c =0,len= strlen(s);
    
    for(int i =0; i<len; i++)
    {
        stack[c]=s[i];

        if(stack[c]=='*')
        { 
           if(c==0){ continue; }
           else{ c -= 2; }
        }
        c++;
    }
    stack[c]='\0';
    return stack;
}