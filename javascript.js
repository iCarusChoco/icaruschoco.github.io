function showCode(codeId){
    if (codeId == 'indexHTML') {
        var codeElementShow = document.getElementById(codeId);
        var codeElementHide = document.getElementById('indexCSS');
        codeElementShow.style.visibility = 'visible';
        codeElementHide.style.visibility = 'hidden';
    }
    if (codeId == 'indexCSS') {
        var codeElementShow = document.getElementById(codeId);
        var codeElementHide = document.getElementById('indexHTML');
        codeElementShow.style.visibility = 'visible';
        codeElementHide.style.visibility = 'hidden';
    }
    if (codeId == 'indexHide') {
        var codeElementHide1 = document.getElementById('indexHTML');
        var codeElementHide2 = document.getElementById('indexCSS');
        codeElementHide1.style.visibility = 'hidden';
        codeElementHide2.style.visibility = 'hidden';
    }
    if (codeId == 'ObjectFacingHTML') {
        var codeElementShow = document.getElementById(codeId);
        var codeElementHide = document.getElementById('ObjectFacingCSS');
        codeElementShow.style.visibility = 'visible';
        codeElementHide.style.visibility = 'hidden';
    }
    if (codeId == 'ObjectFacingCSS') {
        var codeElementShow = document.getElementById(codeId);
        var codeElementHide = document.getElementById('ObjectFacingHTML');
        codeElementShow.style.visibility = 'visible';
        codeElementHide.style.visibility = 'hidden';
    }
    if (codeId == 'ObjectFacingHide') {
        var codeElementHide1 = document.getElementById('ObjectFacingHTML');
        var codeElementHide2 = document.getElementById('ObjectFacingCSS');
        codeElementHide1.style.visibility = 'hidden';
        codeElementHide2.style.visibility = 'hidden';
    }
}
