function fontsize()
{
    var fs = document.getElementById("headingrange").value
    document.getElementById("heading2").style.fontSize=fs+"px"
    localStorage.setItem("hfosi",fs)
}
function headingcolor()
{
    var hcol=document.getElementById("headingcolor").value
    document.getElementById("heading2").style.color=hcol
    localStorage.setItem("hcolo",hcol)
}
function backgroundcolor()
{
    var bgcolor=document.getElementById("bgcolor").value
    document.getElementById("bgcolorContainer").style.backgroundColor=bgcolor
    localStorage.setItem("bgcolo",bgcolor)
}
function right()
{
    document.getElementById("bgheading").style.textAlign="right"
    localStorage.setItem("textalien","right")
}
function left()
{
    document.getElementById("bgheading").style.textAlign="left"
    localStorage.setItem("textalien","left")
}
function center()
{
    document.getElementById("bgheading").style.textAlign="center"
    localStorage.setItem("textalien","center")
}
function justify()
{
    document.getElementById("bgheading").style.textAlign="justify"
    localStorage.setItem("textalien","justify")
}
function fontcolor()
{
    var fcol=document.getElementById("fontcolor").value
    document.getElementById("font").style.color=fcol
    localStorage.setItem("fontcol",fcol)
}
function storedata()
{
    var fn=document.getElementById("fname").value
    localStorage.setItem("fromname",fn)
    var fad=document.getElementById("faddress").value
    localStorage.setItem("fromaddress",fad)
    var todate=document.getElementById("date").value
    localStorage.setItem("todaydate",todate)
    var tonam=document.getElementById("tname").value
    localStorage.setItem("toname",tonam)
    var toadd=document.getElementById("tadd").value
    localStorage.setItem("toaddr",toadd)
    var gen=document.getElementById("gender").value
    localStorage.setItem("gender",gen)
    var sub=document.getElementById("subject").value
    localStorage.setItem("subject",sub)
    var frdate=document.getElementById("fromdate1").value
    localStorage.setItem("fromdate",frdate)
    var tdate=document.getElementById("todate1").value
    localStorage.setItem("todate",tdate)
    var res=document.getElementById("reason1").value
    localStorage.setItem("reason",res)
    var nofdays=document.getElementById("nooofdays").value
    localStorage.setItem("noofdays",nofdays)
}
function outputdata()
{
    document.getElementById("heading").style.fontSize=localStorage.getItem("hfosi")+"px"
    document.getElementById("heading").style.color=localStorage.getItem("hcolo")
    document.getElementById("outputcol").style.backgroundColor=localStorage.getItem("bgcolo")
    document.getElementById("heading").style.textAlign=localStorage.getItem("textalien")
    document.getElementById("reason").style.color=localStorage.getItem("fontcol")
    document.getElementById("frname").innerHTML=localStorage.getItem("fromname")
    document.getElementById("gend").innerHTML=localStorage.getItem("gender")
    document.getElementById("todaydate").innerHTML=localStorage.getItem("todaydate")
    document.getElementById("frmadd").innerHTML=localStorage.getItem("fromaddress")
    document.getElementById("toname").innerHTML=localStorage.getItem("toname")
    document.getElementById("toadd").innerHTML=localStorage.getItem("toaddr")
    document.getElementById("fradd").innerHTML=localStorage.getItem("fromaddress")
    document.getElementById("subjereason").innerHTML=localStorage.getItem("subject")
    document.getElementById("fromdate").innerHTML=localStorage.getItem("fromdate")
    document.getElementById("todate").innerHTML=localStorage.getItem("todate")
    document.getElementById("reasonoutput").innerHTML=localStorage.getItem("reason")
    document.getElementById("noofdays").innerHTML=localStorage.getItem("noofdays")
    document.getElementById("frnamels").innerHTML=localStorage.getItem("fromname")

}   
