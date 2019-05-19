/*jQuery Code Player JS*/
/*$(".toggleButton").hover(function()
{
    $(this).("background-color", "gray");
    
}, function()
    {
        $(this).css("background-color", "#EEEEEE");
    }

);*/

function updateOutput()
{
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
    
    document.getElementById("#outputPanel").contentWindow.eval($("#javascriptPanel").val()); /*Evaulate the JS code within the iframe instead of the html page*/
}

//function updateOutput()
//{
//    var $html = $("iframe").contents().find("body"); 
//    var url = "jquicodeplay.css";
//    $html.append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" } ));
//    
//     document.getElementById("#outputPanel").contentWindow.eval($("#javascriptPanel").val());
//   
//}

/*Easier way to remove hovering background-color of buttons. the other Code above is the best way to do it. Above code is hardcoded*/
$(".toggleButton").hover(function()
{
    $(this).addClass("highlightedButton");
    
}, function()
    {
        $(this).removeClass("highlightedButton");
    }

);

$(".toggleButton").click(function()
{
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton"); /*removes the gray background-color and imeediately lets you see the what has been clicked with the color scheme*/
    var panelId = $(this).attr("id") + "Panel"; /*Panel id selector*/
    $("#" + panelId).toggleClass("hidden"); /*Toggles between the buttons selected and whether the appear/disappear*/
    
    
    var numberOfActivePanels = 4 - $('.hidden').length /*Gets the length of the panels*/
    
    /*Divides the numberOfActivePanels when buttons have to toggled on/off*/
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
    
    /*$("#" + panelId).toggle();*/ /*Same as the code above, but problem is it doesn't change the textarea width*/
    
    
});

$(".panel").height($(window).height() - $("#header").height()- 15);

$(".panel").width(($(window).width() / 2) - 10);

updateOutput(); /*Displays html of the iframe*/

$("textarea").on('change keyup paste', function() 
{
    updateOutput(); /*Displays html of the iframe*/
  
});