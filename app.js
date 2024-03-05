function sumNum () {
    var totalNumber = 400;
    console.log(`Here is Your Total ${totalNumber}`);
    var obtainNum = Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value);
    console.log(`Here Is Your ObtainMarks ${obtainNum}`)
    var percentage = obtainNum/totalNumber*100
    console.log(`Here Is Your Percentage ${percentage}`)
    input1.value=' '
    input2.value=' '
    input3.value=' '
    input4.value=' '
}