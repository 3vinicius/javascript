#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void){
    int a =10;
    printf("Contagem regressiva: ");
    for(a = 10 ; a<=20 ; a+=1){
        if (a%2 == 0){
            printf("\n%d é par",a);
        }
        else
            printf("\n%d é impar",a);

    }
}
