//var parseDate = d3.time.format("%d-%b-%y").parse;

var width,
    height,
    widthSquares = 30,
    heightSquares = 40,
    squareSize = 6,
    gap = 1;
    var mobileX = 240;
    var deskX = 240;

    var k = 0;
    var l = 0;
    var m = 0;
    
    var n = 0;
    var o = 0;
    var p = 0;
    
    var q = 0;
    var r = 0;
    var s = 0;
    var t = 0;

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
        var numb = (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX;
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
                if(dis == "No discipline")
                {
                    $(this).css('opacity','1');
                }
                else    {
                    $(this).css('opacity','0.2');
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
    d3.select('#exp').append("svg").attr("width", 'inherit').attr("height", 'inherit').append("g").attr("id","graph5b").selectAll("div");        

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
});

$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
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

  }
  else if(e.keyCode == 39) { // right
             $('.clicker').css('opacity','1');
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

  }
});

function Step1(){
    var g = 0;
    var mods = document.getElementById('graph').childNodes;
    $(mods).each(function(g){
        $(this).attr("x", function(d){
        row = g%heightSquares;
        var numb = (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX;
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

    $('rect').addClass('grayFill');
    $('.pt').removeClass('active');
    $('#cir1').addClass('active');
    
        var mods = document.getElementById('graph').childNodes;
    
    
        $(mods).each(function(i){
                var dis = d3.select(this).datum().disipline_bucket; 
                console.log(dis);
                if(dis == "No discipline")
                {
                    $(this).css('opacity','1');
                }
                else    {
                    $(this).css('opacity','0.2');
                }
        });    

};

function Step2(){  
    $('rect').removeClass('grayFill');    
    $('rect').css('opacity','1.0');
    $('.counters').css('display','inherit');
    $("rect").not("#graph rect").remove();
    
    var mods = document.getElementById('graph').childNodes;   
    
    k = l = m = 0;
    
    $(mods).each(function(i){
    var stat = d3.select(this).datum().started_out;
    switch(stat){
                case "FELONY":
                    $(this).attr("x",  function(d){
                  row = (k%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(k/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).addClass('fel');
                    $(this).attr('fill','red');
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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr('fill','orange');
                    $(this).clone().appendTo('#graph3');                        
                    l++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (m%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr('fill','yellow');
                    $(this).clone().appendTo('#graph4');        
                    m++;
    }
    });
    
    $('.gro2Box').css( 'opacity', '0' );
    $('.fel2Box').css( 'opacity', '0' );
    $('.mis2Box').css( 'opacity', '0' );
    $('.DisBox').css( 'opacity', '0' );
    $('.ExpBox').css( 'opacity', '0' );
    $('.RevBox').css( 'opacity', '0' ); 
    $('.SusBox').css( 'opacity', '0' );    
    
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
    $('#text').text('Of 109 Cases Chagred as Felonies, 42 were reduced to lesser voncictions in court. Of the 64 Felony convictions upheld, all but three ended in cops having their licenses revoked.');
    countUp('.count');
    
    $("#felArrows").css('display','none');
    
}

function Step3(){
    
    $("rect.fel").not("#graph rect").not("#graph2 rect").remove();
    
    $("#felArrows").css('display','inherit');
    $("#groArrows").css('display','none');
    
    DrawEm("FELONY",0,0,0,0,0,0,0); 
    
//    var mods = document.getElementById('graph').childNodes;
//    $(mods).each(function(i){
//        var started = d3.select(this).datum().started_out;
//        var highest = d3.select(this).datum().highestDegree;
//        var displine = d3.select(this).datum().disipline_bucket;
//        if (started == "FELONY") {
//            switch(highest){
//                case "FELONY":
//                    $(this).attr("x",  function(d){
//                  row = (n%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }     
//          
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(n/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
//                    $(this).clone().appendTo('#graph2a');
//                    $(this).css('display','none');
//                    n++;
//                    break;
//                case "GROSS MISDEMEANOR":
//                    $(this).attr("x",  function(d){
//                  row = (o%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }     
//          
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(o/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
////                    $(this).removeClass('fel');
////                    $(this).addClass('gro');
//                    $(this).clone().appendTo('#graph3a');
//                    $(this).css('display','none');
//                    o++;
//                    break;
//                default:
//                    $(this).attr("x",  function(d){
//                  row = (p%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }     
//          
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(p/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
////                    $(this).removeClass('fel');
////                    $(this).removeClass('gro');
//                    $(this).addClass('mis');
//                    $(this).clone().appendTo('#graph4a');
//                    $(this).css('display','none');
//                    p++;
//    }
//            switch(displine){
//                case "No discipline":
//                    $(this).attr("x",  function(d){
//                  row = (q%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }     
//          
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(q/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
//                    $(this).clone().appendTo('#graph4b');
//                    q++;
//                    break;
//                case "Revocation/Surrender license":
//                    $(this).attr("x",  function(d){
//                  row = (r%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }     
//          
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(r/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
//                    $(this).clone().appendTo('#graph2b');
//                    r++;
//                    break;
//                case "Suspension/Probation/Other":
//                    $(this).attr("x",  function(d){
//                  row = (s%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }                      
//                        
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(s/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
//                    $(this).clone().appendTo('#graph3b');
//                    s++;
//                    break;
//                default:
//                    $(this).attr("x",  function(d){
//                  row = (t%heightSquares);
//        if ($(window).width() < 480 || $(window).height() < 480) {
//            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
//        }                      
//                        
//        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX
//
////          group n squares for column
////          col = Math.floor(k/heightSquares);
////          return (col*squareSize) + (col*gap);
//        });
//                    $(this).attr("y", function(d){
//          
//        col = Math.floor(t/heightSquares);
//          return (col*squareSize) + (col*gap);
//          
//      });
//                    $(this).clone().appendTo('#graph5b'); 
//                    t++;
//                    break;
//    }
//        }
//        
//    });
    $('.fel').fadeTo( 500, 1.0 );
    $('rect').not('.fel').fadeTo( 500, .2 );
    $('.fel').addClass('red');
    $('.fel').removeClass('mis');
    $('.fel').removeClass('gro');
    $('.gro2Box').css( 'opacity', '1.0' );
    $('.fel2Box').css( 'opacity', '1.0' );
    $('.mis2Box').css( 'opacity', '1.0' );
//    $('.ExpBox').css( 'opacity', '1.0' );
//    $('.RevBox').css( 'opacity', '1.0' );
//    $('.SusBox').css( 'opacity', '1.0' );   
    $('.DisBox').css( 'opacity', '1.0' );    
    $('.pt').removeClass('active');
//    $('.gro').removeClass('orange');    
//    $('.mis').removeClass('yellow'); 
    $('#cir3').addClass('active');
    $('#text').text('Of 109 Cases Chagred as Felonies, 42 were reduced to lesser voncictions in court. Of the 64 Felony convictions upheld, all but three ended in cops having their licenses revoked.');
    $('.fel').not('#graph2 > rect').css('opacity','0.0');
    $('#graph2a > rect').each(function(i){
        $(this).delay(i*3).fadeTo( 100, 1.0 );
    });    
}

function Step4(){

    $("rect.gro").not("#graph rect").not("#graph3 rect").remove();
    
    DrawEm("GROSS MISDEMEANOR",67,17,25,24,78,2,5);
    $('.gro').fadeTo( 500, 1.0 );
    $('rect').not('.gro').fadeTo( 500, .2 );
    $('.gro').removeClass('mis');
    $('.pt').removeClass('active');
    $('#cir4').addClass('active');    
    $('#text').text('Of 110 gross misdemeanor convictions, 68 resulted in no discipline while 42 others resulted in revoked or suspended licenses.');
    
    $("#felArrows").css('display','none');
    $("#misArrows").css('display','none');
    $("#groArrows").css('display','inherit');    
    
}

function Step5(){
    
    $("rect.mis").not("#graph rect").not("#graph4 rect").remove();    
    
    DrawEm("MISDEMEANOR",67,115,119,171,95,22,13);
    $('.fel').removeClass('mis');
    $('.gro').removeClass('mis');
    $('.mis').fadeTo( 500, 1.0 );
    $('.fel2Box').fadeTo( 500, 1.0 );
    $('.mis2Box').fadeTo( 500, 1.0 );  
    $('.gro2Box').fadeTo( 500, 1.0 );    
    $('rect').not('.mis').fadeTo( 500, .2 );
    $('rect').not('.mis').removeClass('yellow');
//    $('.mis').addClass('yellow');
//    $('.gro').removeClass('orange');
    $('.pt').removeClass('active');
    $('#cir5').addClass('active');
    $('.ExpBox').css( 'opacity', '0' );
    $('.RevBox').css( 'opacity', '0' ); 
    $('.SusBox').css( 'opacity', '0' );        
    $('#text').text('And of 434 misdemeanors convictions, 402 resulted in no discipline. Only 32 of those convictions resulted in revoked or suspended licenses');    
    $("#groArrows").css('display','none');    
    $("#misArrows").css('display','inherit');
    $("#disArrows").css('display','none');


}

function Step6(){
    $("#step2 rect").remove();
    $("#misArrows").css('display','none');
    var mods = document.getElementById('graph').childNodes;   
    
    k = l = m = 0;
    
    $(mods).each(function(i){
    var stat = d3.select(this).datum().started_out;
    var lastOne = d3.select(this).datum().disipline_bucket;
    switch(stat){
                case "FELONY":
                    $(this).attr("x",  function(d){
                  row = (k%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(k/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).addClass('fel');
                    $(this).attr('fill','red');
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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr('fill','orange');
                    $(this).clone().appendTo('#graph3');                        
                    l++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (m%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr('fill','yellow');
                    $(this).clone().appendTo('#graph4');        
                    m++;
    }
                    
    });
    $('rect').not('#noDis rect').not('#mis1 rect').fadeTo( 500, .2 );
    $('#noDis rect').fadeTo( 500, 1.0 );
    $('#noDis rect.fel').addClass('red');
    $('#noDis rect.gro').addClass('orange');
    $('#fel1 rect').fadeTo( 500, 1.0 );
    $('#fel1 > rect').removeClass('mis');
    $('#fel1 rect').removeClass('gro');
    $('#fel1 rect').addClass('red');
    $('#gro1 rect').addClass('orange');
    $('#mis1 rect').fadeTo( 500, 1.0 );
    $('#gro1 rect').fadeTo( 500, 1.0 );
    $('.fel2Box').fadeTo( 500, 0 );
    $('.mis2Box').fadeTo( 500, 0 );  
    $('.gro2Box').fadeTo( 500, 0 );
    $('.ExpBox').fadeTo( 500, 1.0 );
    $('.RevBox').fadeTo( 500, 1.0 );  
    $('.SusBox').fadeTo( 500, 1.0 );    
    $('.ExpBox rect').addClass('grayFill');
    $('.RevBox rect').addClass('grayFill'); 
    $('.SusBox rect').addClass('grayFill');  
    $('#gro1 rect').removeClass('mis');
    $('rect').not('#noDis rect').not('#mis1 rect').removeClass('yellow');
    $('.pt').removeClass('active');
    $('#cir6').addClass('active');
    $('#text').text('Over two decades, 75 percent of cases involving Minnesota cops committing crimes went undisciplined by the POST board.');    
    $("#disArrows").css('display','inherit');
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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(k/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).addClass('fel');
                    $(this).attr('fill','red');
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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr('fill','orange');
                    $(this).clone().appendTo('#graph3');                        
                    l++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (m%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr('fill','yellow');
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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(n/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph2a');
                    $(this).attr('fill','gray');
                    n++;
                    break;
                case "GROSS MISDEMEANOR":
                    $(this).attr("x",  function(d){
                  row = (o%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(o/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
//                    $(this).removeClass('fel');
//                    $(this).addClass('gro');
                    $(this).clone().appendTo('#graph3a');
                    $(this).attr('fill','gray');
                    o++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (p%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(p/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
//                    $(this).removeClass('fel');
//                    $(this).removeClass('gro');
                    $(this).addClass('mis');
                    $(this).clone().appendTo('#graph4a');
                    $(this).attr('fill','gray');
                    p++;
    }
            switch(displine){
                case "No discipline":
                    $(this).attr("x",  function(d){
                  row = (q%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                        
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr("x",  function(d){
                  row = (t%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }                      
                        
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(t/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph5b'); 
                    t++;
                    break;
    }            

        })
}

function DrawEm (crimeType,num1,num2,num3,num4,num5,num6,num7){
    n = num1;
    o = num2;
    p = num3;
    q = num4;
    r = num5;
    s = num6;
    t = num7;
    var mods = document.getElementById('graph').childNodes;
    $(mods).each(function(i){
        var started = d3.select(this).datum().started_out;
        var highest = d3.select(this).datum().highestDegree;
        var displine = d3.select(this).datum().disipline_bucket;
        if (started == crimeType) {
            switch(highest){
                case "FELONY":
                    $(this).attr("x",  function(d){
                  row = (n%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(n/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph2a');
                    $(this).css('display','none');
                    n++;
                    break;
                case "GROSS MISDEMEANOR":
                    $(this).attr("x",  function(d){
                  row = (o%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(o/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
//                    $(this).removeClass('fel');
//                    $(this).addClass('gro');
                    $(this).clone().appendTo('#graph3a');
                    $(this).css('display','none');
                    o++;
                    break;
                default:
                    $(this).attr("x",  function(d){
                  row = (p%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(p/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
//                    $(this).removeClass('fel');
//                    $(this).removeClass('gro');
                    $(this).addClass('mis');
                    $(this).clone().appendTo('#graph4a');
                    $(this).css('display','none');
                    p++;
    }
            switch(displine){
                case "No discipline":
                    $(this).attr("x",  function(d){
                  row = (q%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
          
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                        
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

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
                    $(this).attr("x",  function(d){
                  row = (t%heightSquares);
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }                      
                        
        return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

//          group n squares for column
//          col = Math.floor(k/heightSquares);
//          return (col*squareSize) + (col*gap);
        });
                    $(this).attr("y", function(d){
          
        col = Math.floor(t/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
                    $(this).clone().appendTo('#graph5b'); 
                    t++;
                    break;
    }
        }
        
});
    console.log(n);
    console.log(o);
    console.log(p);
    console.log(q);
    console.log(r);
    console.log(s);
    console.log(t);
}