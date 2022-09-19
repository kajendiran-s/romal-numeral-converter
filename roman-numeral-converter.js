function convertToRoman(num) {
  let mainArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]; let newArray = [];
  for (let i = 0; ; i++) {
    if (num >= mainArray[i]) {
      newArray.push(mainArray[i])
    } else { break; }

  }
  let sum = 0;let resArray=[]
  for (let j = newArray.length - 1; j>=0;) {

    if (sum + newArray[j] > num) {
      j--;
    }
    else {
      while (sum <= num) {
        if (sum + newArray[j] <= num) 
        { resArray.push(newArray[j])
          sum += newArray[j] }
        else if(sum===num)
        {
          break;
        }
        else
        {
          j--
        }
      }
    }

  }
  let res='';
  for(let k =0;k<resArray.length;k++)
  {
    switch(resArray[k])
  {
    case 1000:{res+="M";break;};
    case 900:{res+="CM";break;};
    case 500:{res+="D";break;};
    case 400:{res+="CD";break;};
    case 100:{res+="C";break;};
    case 90:{res+="XC";break;};
    case 50:{res+="L";break;};
    case 40:{res+="XL";break;};
    case 10:{res+="X";break;};
    case 9:{res+="IX";break;};
    case 5:{res+="V";break;};
    case 4:{res+="IV";break;};
    case 1:{res+="I";break;};
  }
  }
return res;
}

convertToRoman(400);
