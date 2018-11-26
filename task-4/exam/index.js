function getCountNumber(start, end) {

	var GeneralCount = 0;
  for (var i=start; i <=end; i++){
    var count = 0;
    var number = (i).toString(2);
    
    for (var j=0; j<+number.length; j++)
    {
      if (+number[j]==1)
      count = count + 1;
    }

    if(count == 2)
    GeneralCount = GeneralCount + 1;
  }      

    if (GeneralCount !=0)
    return GeneralCount;
    else return false;
}


module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
	task: getCountNumber
}