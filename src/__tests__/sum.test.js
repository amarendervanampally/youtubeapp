import { sum } from "../components/sum";

test("sum of a,b",()=>{
  const result = sum(3,4);
  //Assertion
   expect(result).toBe(7);
   
})