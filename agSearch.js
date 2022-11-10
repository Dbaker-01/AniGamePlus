

console.log("Running Anigame+");
let n=sessionStorage.getItem("RunTest");
console.log("end = ",n)
// If no searches were done yet
if(n==null){
console.log("Starting Page")
}
//If nothing was found
else if(n==0){
    let emp=document.createElement("h4");
    let empMess=document.createTextNode("No Results");
    emp.appendChild(empMess)
    document.getElementById("re").appendChild(emp);
    

}
else{
    console.log("Results Found")
    //Get data from session storage
    let nList=JSON.parse(sessionStorage.getItem("NameList"))
    let pList=JSON.parse(sessionStorage.getItem("PriceList"))
    let iList=JSON.parse(sessionStorage.getItem("ImageList"))
    let liList=JSON.parse(sessionStorage.getItem("LinkList"))


    console.log("Search Results")
    // For loop to display Search Results
    for(i=0;i<n;i++){
        //Get elements and data for search result
        let divCard= document.createElement("div");
        let divHead= document.createElement("div");
        let divAt= document.createElement("div");
        let div2_Pic= document.createElement("div");
        let div2_Buy= document.createElement("div");
    
        divCard.className="resCard";
        divHead.className="resHead";
        divAt.className="resAt";
        div2_Pic.className="resPic";
        div2_Buy.className="resBuy";
    
        let srchTitle=document.createElement("h2");
        let srchImg=document.createElement("img");
        srchImg.src=iList[i];
        srchImg.className="pic";
        let srchPrice=document.createElement("h4");
        let srchBuy=document.createElement("h4");
        let srchLink=document.createElement("a");
        srchLink.href=liList[i];
        let title=document.createTextNode("Name: "+nList[i]);
        let price=document.createTextNode("Price: "+pList[i]);
        let buy=document.createTextNode("Link to buy: ");
        let linkText=document.createTextNode(liList[i]);
        
        //Build the search result
        srchLink.appendChild(linkText);
        srchTitle.appendChild(title);
        srchPrice.appendChild(price);
        srchBuy.appendChild(buy);
        srchBuy.appendChild(srchLink);
        
        div2_Pic.appendChild(srchImg);
        div2_Buy.appendChild(srchPrice);
        div2_Buy.appendChild(srchBuy);
        
        divHead.appendChild(srchTitle);
        divAt.appendChild(div2_Pic);
        divAt.appendChild(div2_Buy);
        
        divCard.appendChild(divHead);
        divCard.appendChild(divAt);
        document.getElementById("re").appendChild(divCard);
    }
}
//Function call for search button 
document.getElementById("searchButton").onclick = function() {searching()};



//This function finds and records the data for the search results
function searching(){
    console.log("Searching")
    srchValue=document.getElementById("searchBar").value
    itemName=[]
    itemPrice=[]
    itemImage=[]
    itemLink=[]

    let c=Math.random()*10
    let pr;
   
    
    // let fiRead= new FileReader()
    // fiRead.readAsArrayBuffer("./WalmartSearchData.xlsx")
    //readXlsxFile(input.files[0])
    // let start=document.getElementById("searchButton")
//     start.addEventListener('click',function(){
//     let fiRead= new FileReader()
//     let file="./WalmartSearchData.xsls"
//     fiRead.readAsArrayBuffer(file)
//     })
//     let fiRead= new FileReader()
//     let file="./WalmartSearchData.xsls"
//     fiRead.readAsText(file)

// let Exfi= new Excel.Workbook();
// let data=workbook.c
// let file="./WalmartSearchData.xsls"
// let fiRead= new FileReader()
// fiRead.readAsDataURL("./SearchData.csv")
    for(i=0;i<c;i++){
        console.log(srchValue)
        pr=Math.round((Math.random()*500)*100)/100
        itemName.push(srchValue)
        itemPrice.push("$"+pr.toString())
        itemImage.push("./icon.png")
        itemLink.push("https://www.walmart.com/")
        
        //console.log(itemName);
   
    }
    //Store data in session storage
    sessionStorage.setItem("NameList",JSON.stringify(itemName))
    sessionStorage.setItem("PriceList",JSON.stringify(itemPrice))
    sessionStorage.setItem("ImageList",JSON.stringify(itemImage))
    sessionStorage.setItem("LinkList",JSON.stringify(itemLink))
    sessionStorage.setItem("RunTest",itemLink.length);


}




