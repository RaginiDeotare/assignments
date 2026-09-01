function  customerDetails(

customerName:string,
creditScore : number,
income : number,
isEmployed : boolean,
debtToIncomeRatio : number ) : void{

 //If the credit score is above 750, the loan is automatically approved.

 if (creditScore > 750){
  console.log("The loan is approved");
 }

 //If the credit score is between 650 and 750, additional checks are performed.

 else if (creditScore >= 650 && creditScore <= 750 ){
  console.log("Additional checks are performed");
  {
    if (income >= 50000){
      console.log("The loan is considered");
    
//If the customer is unemployed, the loan is denied.
    if (isEmployed == false){
      console.log("The loan is denied");
    }
  }
}
  
  //If the customer is employed, the system checks the debt-to-income (DTI) ratio.
  if (isEmployed == true  && debtToIncomeRatio > 40.0){
    //If the DTI ratio is less than 40%, the loan is approved.
    console.log("The loan is approved");
  }
    else if(debtToIncomeRatio < 40.0){
      console.log("The loan is denied");
    }
  }
  
}
 

 //for calling the function
      customerDetails("Rahul", 700, 60000, true, 45);





  

