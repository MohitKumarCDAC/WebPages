var arr=["Mohit","Deepak","Vishal","Akash"];
function displaylist()
{
    var str="<ul>"
    for(var p of arr)
        {
            str+=`<li>${p}</li>`;
        }
        str+="</ul>";
        console.log(str);
        document.getElementById("mydiv").innerHTML=str;
}
//add name in the array
function addname()
{
    var nm=document.getElementById("name").value;
    //add in the arr
    arr.push(nm);
    //clear textbox
    document.getElementById("name").value="";
    //display data
    displaylist();
}
//delete data from the array
function deletename()
{
    var nm=document.getElementById("name").value;
    var pos=arr.indexOf(nm);
    if(pos!=-1)
        {
            var ans=confirm(`do you want to delete ${nm} ? (y/n)`)
            if(ans)
                {
            arr.splice(pos,1);
            document.getElementById("name").value="";
            displaylist();
        }
    }
        else{
            document.getElementById("mydiv").innerHTML="data not found";   
        }
        document.getElementById("name").value="";
}
//search data
function searchname()
{
    var nm=document.getElementById("name").value;
    var pos=arr.indexOf(nm);
    if(pos!=-1)
        {
            alert(`name ${nm} found at position ${pos}`)
        }
        else{
            alert(" data not found")
        }

}