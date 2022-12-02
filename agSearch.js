console.log("Running");
//Gamestop button listener
document.getElementById("gamestop").addEventListener('click',function(){
    sessionStorage.setItem("Website Search","gamestop")
    sessionStorage.setItem("RunTest",-1);
    
})
//Crunchyroll button listener
document.getElementById("crunchyroll").addEventListener('click',function(){
    sessionStorage.setItem("Website Search","crunchyroll")
    sessionStorage.setItem("RunTest",-1);
})
//Walmart button listener
document.getElementById("walmart").addEventListener('click',function(){
    sessionStorage.setItem("Website Search","walmart")
})

function calc(){
    var x = document.getElementById("sites").selectedIndex;
    var y = document.getElementsByTagName("option")[x].value;
    document.getElementById("p").innerHTML = "The selected" + " soption has value equals " + y + ".";
}
let x=sessionStorage.getItem("Website Search");
console.log(x)
if(x == "gamestop")
    {
        document.getElementById("gamestop").style.backgroundColor="lightblue"
        
       
    }
    if(x == "crunchyroll")
    {
        document.getElementById("crunchyroll").style.backgroundColor="lightblue" 
    }
    if(x == "walmart")
    {
        document.getElementById("walmart").style.backgroundColor="lightblue"
    }

//Submit button Listener
document.getElementById("sub").addEventListener('click',function(){
        goToSite();
        console.log("it works")
})

function goToSite(){
    console.log("GOING");
    // var x = document.getElementById("sites").selectedIndex;
    // var y = document.getElementsByTagName("option")[x].value;
    let y=sessionStorage.getItem("Website Search");
    if(y == "gamestop")
    {
        saveGameName();
    }
    if(y == "crunchyroll")
    {
        goToCrunchyroll();
    }
    if(y == "walmart")
    {
        WalmartSearch();
    }
}
function saveGameName()
{
    console.log("Gamestop");
    var itemName = document.getElementById('gname').value;
    let itemToSearch = itemName;
    let beginTag = "https://www.gamestop.com/search/?q=";
    let endTag = "&type=Primary&sort=BestMatch_Desc&p=1";
    let wholeTag =beginTag+itemToSearch+endTag;
    let finish = wholeTag.split(" ").join('%20');
    window.open(finish);
}
function goToCrunchyroll()
{
    console.log("Crunchyroll");
    var itemName = document.getElementById('gname').value;
    let itemToSearch = itemName;
    let beginTag = "https://www.crunchyroll.com/search?q=";
    let endTag = "&type=Primary&sort=BestMatch_Desc&p=1";
    let wholeTag =beginTag+itemToSearch;
    let finish = wholeTag.split(" ").join('%20');
    window.open(finish);
}
function WalmartSearch()
{
    console.log("Walmart");
    console.log("Searching")


    let c=Math.random()*10
    let pr;
    
    let inform=function(nm,p,im,lnk){
        let found;
        this.namer=nm.toLocaleLowerCase(),
        this.price=p,
        this.image=im,
        this.link=lnk,
        // console.log(namer)
        sessionStorage.setItem("TESTING",namer)
        let find=document.getElementById("gname").value
        
        find=find.toLocaleLowerCase();
        find=find.split(" ")
        sessionStorage.setItem("Find List",JSON.stringify(find))
        for(let k=0;k<find.length;k++){
            if(this.namer.includes(find[k])){

                found=1               
            }

            else{
                found=0
                break;
            }
        }
        return found; 
    }

    let wDataList=JSON.parse(sessionStorage.getItem("Walmart Data"))
    console.log("Fin")
    console.log(wDataList)
        let N=[]
        let P=[]
        let I=[]
        let L=[]
        let fCount=0;
        wDataList.forEach(element =>{

            
            console.log(element);
            let check=inform(element.title,
                element.price,
                element.image,
                element.link)
            if(check==1){

                N.push(element.title)
                P.push("$"+element.price)
                I.push(element.image)
                L.push(element.link)
                fCount=fCount+1

            }
            sessionStorage.setItem("NameList",JSON.stringify(N))
            sessionStorage.setItem("PriceList",JSON.stringify(P))
            sessionStorage.setItem("ImageList",JSON.stringify(I))
            sessionStorage.setItem("LinkList",JSON.stringify(L))
            sessionStorage.setItem("RunTest",fCount);
        })
    
   




    
}
//Fetch Walmart data from file
const url="./WalmartData.json"
    
    fetch(url).then(function(response){

        return response.json()
    }).then(function(obj){
        
        
        let wData=obj.data;
        // console.log((wData))
        sessionStorage.setItem("Walmart Data",JSON.stringify(wData))
        
    })
    .catch(function(err){
        console.log("error")
        console.log(err.message)
    })


console.log("Running Anigame+");
let n=sessionStorage.getItem("RunTest");
console.log("end = ",n)
// If no searches were done yet
if(n==null || n==-1){
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
        let title=document.createTextNode(nList[i]);
        let price=document.createTextNode("Price: "+pList[i]);
        let buy=document.createTextNode("Walmart Link: ");
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

