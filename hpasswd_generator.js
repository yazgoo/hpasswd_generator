function hpasswd_generate()
{
    function $(what, set, failed)
    {
        what = document.getElementById(what);
        if(set == undefined) return what.value;
        else what.innerHTML = (failed?"<b>error:</b> password ":"") + set;
    }
    if($("to_crypt") != $("to_validate")) $("result", "do not match", 1);
    else if($("to_crypt") == "") $("result", "is empty", 1);
    else $("result", $("nick") + ":"
            + Javacrypt.crypt("sa", $("to_crypt"))[0])
}
