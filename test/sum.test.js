import sum from "../sum.js"
import { describe, test, assert } from "vitest"


// tests 

describe("Test de la fonction sum", () => {

    
    describe("Test de la foncion sum avec arguments positifs:", () => {
        test("0 comme argument, le resultat devait être l'autre nombre", () =>{            
            assert.equal(sum(0, 0), 0);
            assert.equal(sum(0, 1), 1);
        });

        test("deux arguments entiers positifs, le resultat devait être la ,somme des deux", () =>{            
            assert.equal(sum(5, 5), 10);
            assert.equal(sum(2, 3), 5);
        });

    });

    describe("Test de la foncion sum avec arguments negatifs:", () => {
        test("un argumenet positif et l'autre negatif", () =>{            
            assert.equal(sum(-5, 5), 0);
            assert.equal(sum(5, -5), 0);
        });
    });
});
