//var parseDate = d3.time.format("%d-%b-%y").parse;

var width,
    height,
    widthSquares = 30,
    heightSquares = 40,
    squareSize = 6,
    gap = 1;
    var mobileX = 33;
    var deskX = 33;

    var k = 0;
    var l = 0;
    var m = 0;
    
    var n = 0;
    var o = 0;
    var p = 0;
    
    var q = 0;
    var r = 0;
    var s = 0;


if ($(window).width() < 480 || $(window).height() < 480) {
    widthSquares = 20;
    heightSquares = 40;
    
}

d3.csv("postdata2.csv", function(d) {
 return {
    id: d.Current_Case_Number,
    pNum: d.POSTnumber,
    lastName: d.lastname_clean,
    status: d.Status,
    date: d.Sentence_Date,
    started_out: d.STARTED_OUT,
    highestDegree: d.HighestDegreeCase,
    disciplined: d.disciplined,
    disciplineType: d.ORIGINAL_disciplineType,
    disCloDate: d.disciplineClosedDate,
    disipline_bucket: d.DisciplineBucket,
    notes: d.NOTES,
    chargeType: d.ChargeType,
    chargeCleanup: d.charge_cleanedup
  };
},
function(error, rows) {
     var data = rows;
      height = (squareSize*heightSquares) + widthSquares*gap + 25;
  width = (squareSize*widthSquares) + heightSquares*gap + 25;

    var waffle = d3.select('#intro')
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("id","graph")
      .selectAll("div")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", squareSize)
      .attr("height", squareSize)
      .attr("fill","gray")
      .attr("x", function(d, i){
        row = i%heightSquares;
        var numb = ((heightSquares*squareSize) - ((row*squareSize) + (row*gap))) + deskX;
        return numb;          
        })
      .attr("y", function(d, i){
          //group n squares for column
          col = Math.floor(i/heightSquares);
          var xnumb = (col*squareSize) + (col*gap);
//          console.log (xnumb);
          return xnumb;
      }).style('display','none')
    
        var mods = document.getElementById('graph').childNodes;
    
    
        $(mods).each(function(i){
                var dis = d3.select(this).datum().disipline_bucket; 
                console.log(dis);
                if(dis = "Revocation/Surrender license")
                {
                    $(this).attr('border','1px solid red');
                }
                else    {
                    $(this).attr('opacity','1');
                }
        });
    
            $("rect").each(function(i){
            $(this).delay(i*3).fadeIn(100);
        });


    d3.select('#fel1').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph2").selectAll("div");
    d3.select('#gro1').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph3").selectAll("div");    
    d3.select('#mis1').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph4").selectAll("div");    
    
    d3.select('#fel2').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph2a").selectAll("div");
    d3.select('#gro2').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph3a").selectAll("div");   
    d3.select('#mis2').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph4a").selectAll("div");    
    
    d3.select('#revSur').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph2b").selectAll("div");
    d3.select('#susPro').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph3b").selectAll("div");   
    d3.select('#noDis').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph4b").selectAll("div");        
    d3.select('#expired').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph5b").selectAll("div");        

});

function countUp(name){
    $(name).each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}

function countDown(counthere,id)  {
    $(id).each(function() {
  var $this = $(this),
      countTo = 0;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: counthere*5,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
}

var step = 2;

$('#introButton').click(function()  {
    $('#SearchButton').one("click", function () {
        
    });
    Step2();
    step++;
    $('.clicker').css('opacity','1');
});

$('#foreBtn').click(function(){
    switch(step){
        case 2:
            Step2();
            break;
        case 3:
            Step3();
            break;
        case 4:
            Step4();
            break;  
        case 5:
            Step5();
            break;                        
        case 6:
            Step6();
            break;
        default:
            step = 6;
            break;
    }
            step++;
    console.log(step);
});

$('#backBtn').click(function(){  
step--;
    switch(step){
        case 3:
            Step2();
            break;
        case 4:
            Step3();
            break;
        case 5:
            Step4();
            break;  
        case 6:
            Step5();
            break;    
        case 7:
            Step6();
            break;                        
        default:
            step = 2;
            Step1();
    }
    console.log(step);
});

function Step1(){
    var g = 0;
    var mods = document.getElementById('graph').childNodes;
    $(mods).each(function(g){
        $(this).attr("x", function(d){
        row = g%heightSquares;
        var numb = ((heightSquares*squareSize) - ((row*squareSize) + (row*gap))) + 33;
        return numb;  
        });
        $(this).attr("y", function(d){
          col = Math.floor(g/heightSquares);
          var xnumb = (col*squareSize) + (col*gap);
          return xnumb;
        });
        $(this).appendTo('#graph');     
        g++;
    });
    
    $("#slide2").fadeOut("fast", function() {
        $(this).addClass('noSee');   
    });
    
    $("#slide1").fadeIn("slow", function() {
        $(this).removeClass('noSee');   
    });  

    $('.pt').removeClass('active');
    $('#cir1').addClass('active');

};

function Step2(){  
    k = l = m = n = o = p = q = r = s = 0;
    $('.counters').css('display','inherit');
    $("rect").not("#graph rect").remove();
    drawGraphs();
    $("rect").fadeOut(100);
    $("rect").each(function(i){
        $(this).delay(i).fadeIn(100);
        $(this).removeClass('red');
        $(this).removeClass('orange');
        $(this).removeClass('yellow');
    });

    $("#slide1").fadeOut("fast", function() {
        $(this).addClass('noSee');   
    });
    
    $("#slide2").fadeIn("slow", function() {
        $("#slide2").removeClass('noSee');   
    });    
    
    $('.pt').removeClass('active');
    $('#cir2').addClass('active');

    countUp('.number');
    
//    countUp(k,'#felCnt');
//    countUp(l,'#groCnt');
//    countUp(m,'#misCnt');
//    countUp(n,'#fel2Cnt');
//    countUp(o,'#gro2Cnt');
//    countUp(p,'#mis2Cnt');
//    countUp(r,'#revCnt');
//    countUp(s,'#susCnt');
//    countUp(q,'#disCnt');
}

function Step3(){
    $('.counters').css('display','none');
    $('rect').not('.fel').fadeOut(1000);
    $('.fel').css('display','inherit');
    $('.fel').addClass('red');
    $('.pt').removeClass('active');
    $('#cir3').addClass('active');
}

function Step4(){
    $('.gro').fadeIn(1000);
    $('rect').not('.gro').fadeOut(1000);
    $('.fel').removeClass('orange');
    $('.gro').addClass('orange');
    $('.pt').removeClass('active');
    $('#cir4').addClass('active');
}

function Step5(){
    $('.mis').fadeIn(1000);
    $('rect').not('.mis').fadeOut(1000);
    $('rect').not('.mis').removeClass('yellow');
    $('.mis').addClass('yellow');
    $('.pt').removeClass('active');
    $('#cir5').addClass('active');
}

function Step6(){
    $('rect').not('#noDis rect').not('#mis1 rect').fadeOut(1000);
    $('#noDis rect').fadeIn(1000);
    $('#fel1 rect').fadeIn(1000);
    $('#fel1 > rect').removeClass('mis');
    $('#fel1 rect').removeClass('gro');
    $('#mis1 rect').fadeIn(1000);
    $('#gro1 rect').fadeIn(1000);
    $('#gro1 rect').removeClass('mis');
    $('.mis').addClass('yellow');
    $('.pt').removeClass('active');
    $('#cir6').addClass('active');
}

function drawGraphs(){
    var mods = document.getElementById('graph').childNodes;    
    
        $(mods).each(function(i){
            var stat = d3.select(this).datum().started_out;
            var highest = d3.select(this).datum().highestDegree;
            var displine = d3.select(this).datum().disipline_bucket;
            switch(stat){
                case "FELONY":
                    $(this).attr("x",  function(d){
                  row = (k%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(k/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).addClass('fel');
                    $(this).removeClass('gro');
                    $(this).removeClass('mis');
                    $(this).clone().appendTo('#graph2');                    
                    k++;
                    break;
                case "GROSS MISDEMEANOR":
                    $(this).attr("x",  function(d){
                  row = (l%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(l/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).removeClass('fel');
                    $(this).removeClass('mis');
                    $(this).addClass('gro');
                    $(this).clone().appendTo('#graph3');                        
                    l++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (m%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(m/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).removeClass('fel');
                    $(this).removeClass('gro');
                    $(this).addClass('mis');
                    $(this).clone().appendTo('#graph4');        
                    m++;
    }
            switch(highest){
                case "FELONY":
                    $(this).attr("x",  function(d){
                  row = (n%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(n/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph2a');
                    n++;
                    break;
                case "GROSS MISDEMEANOR":
                    $(this).attr("x",  function(d){
                  row = (o%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(o/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).removeClass('fel');
                    $(this).addClass('gro');
                    $(this).clone().appendTo('#graph3a');
                    o++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (p%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(p/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).removeClass('fel');
                    $(this).removeClass('gro');
                    $(this).addClass('mis');
                    $(this).clone().appendTo('#graph4a');
                    p++;
    }
            switch(displine){
                case "No discipline":
                    $(this).attr("x",  function(d){
                  row = (q%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(q/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph4b');
                    q++;
                    break;
                case "Revocation/Surrender license":
                    $(this).attr("x",  function(d){
                  row = (r%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(r/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph2b');
                    r++;
                    break;
                case "Suspension/Probation/Other":
                    $(this).attr("x",  function(d){
                  row = (s%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }                      
                        
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(s/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph3b');
                    s++;
                    break;
                default:
                    break;
    }            

        })
}