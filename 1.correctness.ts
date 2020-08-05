/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
- define string type as parameter 
2) What did you learn from this exercise?
- เรื่่อง type สำคัญเพราะว่าเราไม่รู้ว่า user จะกรอกข้อมูลมาแบบไหน เราควรกำหนดไปเลยว่าเป็น type ไหน
*/

function scriptAt(str: string) {
    return str.search('Script');
}
scriptAt('testScriptsad');
