function skillsmember() 
{
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var url = "skillsmembers.php?member=" + member + "&skill=" + skill;
    window.location.href = url;
}