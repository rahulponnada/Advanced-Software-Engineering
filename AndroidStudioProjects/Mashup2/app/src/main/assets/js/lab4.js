function clicking() {
    var usrname = document.getElementById("username").value
    localStorage.setItem("username", usrname);   
}

$(document).ready(function () {
    document.getElementById("result").innerHTML = localStorage.getItem("username");
    $("#tweet").click(function () {
        var stockid = document.getElementById("stockid").value
        var query = "select * from yahoo.finance.quotes where symbol = '"+stockid+"'";
        var yql = "http://query.yahooapis.com/v1/public/yql?q=" + escape(query) + "&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=?";

var results;
var stockd = " ";
$.ajax({
    url: yql,
    dataType: 'json',
    success: function(data) {
        results = "";
        var keys = _.keys(data.query.results.quote);
        for (i=0;i<keys.length;i++) {
            results += "<div>" + keys[i] + ": " + data.query.results.quote[keys[i]] + "</div>";
        }
        stockd = data.query.results.quote[keys[1]];   
        $("#info").html(results);    
        document.getElementById("link").href = "https://twitter.com/intent/tweet?text=StockValue "+stockd+"&source=webclient"
    }
});
   
        
   /*  $.get("http://finance.yahoo.com/webservice/v1/symbols/CNY/quote?format=json&view=basic&callback", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
        /*    YAHOO.Finance.SymbolSuggest.ssCallback = function (data) {
            alert(JSON.stringify(data));
        };
        var query;
        query = 'Google';
        if (query.length > 0) {

            $.ajax({
                type: "GET",
                url: "http://d.yimg.com/autoc.finance.yahoo.com/autoc",
                data: {
                    query: query
                },
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "YAHOO.Finance.SymbolSuggest.ssCallback",
            });
        }
        $.ajax({
        url: 'http://finance.yahoo.com/webservice/v1/symbols/CNY/quote?',
        data: {
            format: 'xml'
        },
        dataType: 'jsonp',
        success: function (data) {
            alert(data)
            alert("in success");
            xmlDoc = $.parseXML( data ),
            $xml = $( xmlDoc ),
            $title = $xml.find( "title" );
        },
        
    });*/
    });
});