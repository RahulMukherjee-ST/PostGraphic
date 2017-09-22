//var parseDate = d3.time.format("%d-%b-%y").parse;

var width,
    height,
    widthSquares = 45,
    heightSquares = 33,
    altheight = 45,
    squareSize = 6,
    altsquaresize = 10,
    gap = 1;
    var altX = 450;
    var deskX = 198;

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

d3.csv("postdata3.csv", function(d) {
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
      height = (altsquaresize*altheight) + widthSquares*gap + 25;
  width = (altsquaresize*widthSquares) + altheight*gap + 25;

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
      .attr("width", altsquaresize)
      .attr("height", altsquaresize)
      .attr("fill","gray")
      .attr("x", function(d, i){
        row = i%altheight;
        var numb = (((row*altsquaresize) + (row*gap)) + (altheight*altsquaresize)) - altX;
        return numb;          
        })
      .attr("y", function(d, i){
          //group n squares for column
          col = Math.floor(i/altheight);
          var xnumb = (col*altsquaresize) + (col*gap);
//          console.log (xnumb);
          return xnumb;
      }).style('display','none');
    
        var mods = document.getElementById('graph').childNodes;
    
        var NoDisNum = 494; //473 for old
    
        var e = 0;
        $(mods).each(function(i){
                var dis = d3.select(this).datum().disipline_bucket; 
                if(dis == "No discipline" || dis == "No discipline/Expired before sentencing")
                {
                    $(this).css('opacity','1');
                    $(this).attr("x", function(d, i){
        row = e%altheight;
        var numb = (((row*altsquaresize) + (row*gap)) + (altheight*altsquaresize)) - altX;
        return numb;          
        });
                    $(this).attr("y", function(d, i){
          //group n squares for column
          col = Math.floor(e/altheight);
          var xnumb = (col*altsquaresize) + (col*gap);
//          console.log (xnumb);
          return xnumb;
      });
                    $(this).delay(e*3).fadeIn(100);
                    e++;
                }
                else    {
                    $(this).css('opacity','0.2');
                    $(this).attr("x", function(d, i){
        row = NoDisNum%altheight;
        var numb = (((row*altsquaresize) + (row*gap)) + (altheight*altsquaresize)) - altX;
        return numb;          
        });
                    $(this).attr("y", function(d, i){
          //group n squares for column
          col = Math.floor(NoDisNum/altheight);
          var xnumb = (col*altsquaresize) + (col*gap);
//          console.log (xnumb);
          return xnumb;
      }); 
                    $(this).addClass('other');
                    $(this).delay(NoDisNum*3).fadeIn(100);
                    NoDisNum++;
                }
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

function countUpAlt(id,number){
    $(id).each(function() {
  var $this = $(this),
      countTo = number
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
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

function countDown(counthere,id)  {
    $(id).each(function() {
  var $this = $(this),
      countTo = 0;
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
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
    
    $('rect').attr("width", altsquaresize);
    $('rect').attr("height", altsquaresize);
    
    var mods = document.getElementById('graph').childNodes;
        var NoDisNum = 494; //493 or 473 with old spreadsheet
    
        var e = 0;
        $(mods).each(function(i){
            $(this).removeClass('grayFill');
                var dis2 = d3.select(this).datum().disipline_bucket; 
                if(dis2 == "No discipline" || dis2 == "No discipline/Expired before sentencing")
                {
                    $(this).css('opacity','1');
                    $(this).attr("x", function(d, i){
        row = e%altheight;
        var numb = (((row*altsquaresize) + (row*gap)) + (altheight*altsquaresize)) - altX;
        return numb;          
        });
                    $(this).attr("y", function(d, i){
          //group n squares for column
          col = Math.floor(e/altheight);
          var xnumb = (col*altsquaresize) + (col*gap);
//          console.log (xnumb);
          return xnumb;
      });
                    $(this).delay(e*3).fadeIn(100);
                    e++;
                }
                else    {
                    $(this).css('opacity','0.2');
                    $(this).attr("x", function(d, i){
        row = NoDisNum%altheight;
        var numb = (((row*altsquaresize) + (row*gap)) + (altheight*altsquaresize)) - altX;
        return numb;          
        });
                    $(this).attr("y", function(d, i){
          //group n squares for column
          col = Math.floor(NoDisNum/altheight);
          var xnumb = (col*altsquaresize) + (col*gap);
//          console.log (xnumb);
          return xnumb;
      }); 
                    $(this).addClass('other');
                    $(this).delay(NoDisNum*3).fadeIn(100);
                    NoDisNum++;
                }
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
    
    $('.clicker').css('opacity','0.0');

};

function Step2(){  
    $('rect').removeClass('grayFill');    
    $('rect').css('opacity','1.0');
    $('rect').attr("width", squareSize);
    $('rect').attr("height", squareSize);
    $('.counters').css('display','inherit');
    $("rect").not("#graph rect").remove();
    
    $('#fel1Lbl').html('Felony: <span class="count" id="felCnt">0</span> <span class="count fltright">felonies</span>');
    $('#gro1Lbl').html('Gross misdemeanor: <span class="count" id="groCnt">0</span> gross misdemeanors');
    $('#mis1Lbl').html('Misdemeanor: <span class="count" id="misCnt">0</span> misdemeanors');
    
    $('#gro1Lbl').fadeTo( 500, 1.0 );
    $('#mis1Lbl').fadeTo( 500, 1.0 );
    
    countUpAlt('#felCnt',109);
    countUpAlt('#groCnt',192);
    countUpAlt('#misCnt',328);    
        
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
                    $(this).attr('fill','#c1262d');
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
                    $(this).attr('fill','#f7931e');
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
                    $(this).attr('fill','#ffd193');
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
    $('#text').html('<b>Nearly half the cases</b> started out as felonies or gross misdemeanors, criminal offenses that can end an officer’s career in Minnesota.');
    
    $("#felArrows").fadeTo( 500, 0.0 );
    
}

function Step3(){
    
    $('#fel1Lbl').html('<span class="count" id="felCnt">0</span> <span class="count">felonies</span>');    
    $('#fel2Lbl').html('Of those, <span class="count" id="fel2Cnt">0</span> remained felonies');
    $('#gro2Lbl').html('<span class="count" id="mis2Cnt">0</span> reduced to gross misdemeanors');
    $('#mis2Lbl').html('<span class="count" id="gro2Cnt">0</span> reduced to misdemeanors');    
    $('#disLbl').html('Of those, <span class="count" id="disCnt">0</span> received no discipline'); 
    
    $('#gro1Lbl').fadeTo( 500, 0.0 );
    $('#mis1Lbl').fadeTo( 500, 0.0 );
    $('#gro2Lbl').fadeTo( 500, 1.0 );
    $('#fel2Lbl').fadeTo( 500, 1.0 );
    $('#fel1Lbl').fadeTo( 500, 1.0 );
    
    countUpAlt('#fel2Cnt',67);
    countUpAlt('#felCnt',109);
    countUpAlt('#mis2Cnt',17);
    countUpAlt('#gro2Cnt',25);
    countUpAlt('#disCnt',28);
    
    $("rect.fel").not("#graph rect").not("#graph2 rect").remove();
    
    $("#felArrows").fadeTo( 500, 1.0 );
    $("#groArrows").fadeTo( 500, 0.0 );
    
    DrawEm("FELONY",0,0,0,0,0,0,0); 
    
    $("rect.fel").not("#graph2 rect").css('opacity','0.0');
    
    $("rect.fel").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });
    
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
    $('#text').html('<b>Felony convictions</b> trigger mandatory revocation of an officer’s license, but many of the charges were bargained down as they moved through the court system.');
    $('rect.gro').fadeTo( 500, 0.0 );
    $('rect.mis').fadeTo( 500, 0.0 );
    
}

function Step4(){
    
    $('#gro1Lbl').fadeTo( 500, 1.0 );
    $('#gro2Lbl').fadeTo( 500, 1.0 );
    
    $('#gro1Lbl').html('<span class="count" id="groCnt">0</span> gross misdemeanors');
    
    $('#gro2Lbl').html('Of those, <span class="count" id="mis2Cnt">0</span> remained gross misdemeanors');
    $('#mis2Lbl').html('<span class="count" id="gro2Cnt">0</span> reduced to misdemeanors');     
    
    $('#fel1Lbl').fadeTo( 500, 0.0 );
    $('#fel2Lbl').fadeTo( 500, 0.0 );
    $('#mis1Lbl').fadeTo( 500, 0.0 );

    countUpAlt('#groCnt',192);
    countUpAlt('#mis2Cnt',98);
    countUpAlt('#gro2Cnt',94);
    countUpAlt('#disCnt',155);

    $("rect.gro").not("#graph3 rect").css('opacity','0.0');
    
    $("rect.gro").not("#graph rect").not("#graph3 rect").remove();
    
    DrawEm("GROSS MISDEMEANOR",67,17,25,24,78,2,5);
    $("rect.gro").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });
    $('.gro').removeClass('mis');
    $('.pt').removeClass('active');
    $('#cir4').addClass('active');    
    $('#text').html('<b>Gross misdemeanors</b> trigger a POST Board review, but about half were reduced to misdemeanors and resulted in no state discipline.');
    
    $("#felArrows").fadeTo( 500, 0.0 );
    $("#misArrows").fadeTo( 500, 0.0 );
    $("#groArrows").fadeTo( 500, 1.0 );  
    $('rect.mis').fadeTo( 500, 0.0 );
    $('rect.fel').fadeTo( 500, 0.0 );
    
    
}

function Step5(){    
    
        $("#graph4a rect").remove();
    $("#graph4b rect").remove();
    
    $('#mis1Lbl').html('<span class="count" id="misCnt">0</span> misdemeanors');
    $('#fel1Lbl').fadeTo( 500, 0.0 );
    
    
    $('#gro1Lbl').fadeTo( 500, 0.0 );
    $('#mis1Lbl').fadeTo( 500, 1.0 );
    $('#gro2Lbl').fadeTo( 500, 0.0 );
    
    
    $('#mis2Lbl').html('All <span class="count" id="gro2Cnt">0</span> remained misdemeanors');
    $('#disLbl').html('Of those, <span class="count" id="disCnt">0</span> received no discipline');
    
    countUpAlt('#misCnt',328);
    countUpAlt('#gro2Cnt',328);
    countUpAlt('#disCnt',310);
    
    $("rect.mis").not("#graph rect").not("#graph4 rect").remove();    
    
    DrawEm("MISDEMEANOR",67,115,119,171,95,22,13);
    $('.fel').removeClass('mis');
    $('.gro').removeClass('mis');
        $("rect.mis").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });

    $('.fel2Box').fadeTo( 500, 1.0 );
    $('.mis2Box').fadeTo( 500, 1.0 );  
    $('.gro2Box').fadeTo( 500, 1.0 );    
    $('rect').not('.mis').removeClass('yellow');
//    $('.mis').addClass('yellow');
//    $('.gro').removeClass('orange');
    $('.pt').removeClass('active');
    $('#cir5').addClass('active');
    $('.ExpBox').css( 'opacity', '0' );
    $('.RevBox').css( 'opacity', '0' ); 
    $('.SusBox').css( 'opacity', '0' );        
    $('#text').html('Roughly half the cases started as <b>misdemeanors</b>, and the POST Board rarely issues discipline for such offenses.');    
    $("#groArrows").css('display','none');    
    $("#misArrows").fadeTo( 500, 1.0 );
    $("#disArrows").fadeTo( 500, 0.0 );
    $('rect.fel').addClass('red');
    $('rect.gro').addClass('orange');    
    $('rect.mis').addClass('yellow'); 
    $('rect').removeClass('grayFill');
    $('rect.gro').fadeTo( 500, 0.0 );
    $('rect.fel').fadeTo( 500, 0.0 );    


}

function Step6(){
    
    
    $('#gro1Lbl').fadeTo( 500, 1.0 );
    $('#fel1Lbl').fadeTo( 500, 1.0 );

    
    $('#fel1Lbl').html('Felony: <span class="count" id="felCnt">0</span> <span class="count fltright">received no discipline</span>');
    $('#gro1Lbl').html('Gross misdemeanor: <span class="count" id="groCnt">0</span> received no discipline');
    $('#mis1Lbl').html('Misdemeanor: <span class="count" id="misCnt">0</span> received no discipline');    
    
    $('#disLbl').html('<span class="count" id="disCnt">0</span> received no discipline');
    
    countUpAlt('#expCnt',21);
    countUpAlt('#revCnt',111);
    countUpAlt('#susCnt',24);
    countUpAlt('#disCnt',493);
    
    countUpAlt('#felCnt',28);
    countUpAlt('#groCnt',155);
    countUpAlt('#misCnt',310);
    
    

    $("#step2 rect").remove();
    $("#misArrows").css('display','none');

    $('rect').not('#noDis rect').not('#mis1 rect').fadeTo( 500, .2 );
    $('#noDis rect').fadeTo( 500, 1.0 );
    $('#fel1 rect').fadeTo( 500, 1.0 );
    $('#fel1 > rect').removeClass('mis');
    $('#fel1 rect').removeClass('gro');
    $('#fel1 rect').removeClass('red');
    $('#gro1 rect').removeClass('orange');    
    $('#mis1 rect').removeClass('yellow');        
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
    $('#step2 .grayFill').fadeTo( 500, .2 );
    $('#text').html('The net result is that about <b> 3 in 4 convictions </b> resulted in no state discipline, including felonies and gross misdemeanors that were reduced and licenses that lapsed without board action.');    
    $("#disArrows").fadeTo( 500, 1.0 );
    $('#noDis rect').remove();
    redrawNoDis();
        redrawInitials();
    
    
}

//$('#cir3').click(function() {
//    Step3();
//    step = 4;
//});

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
//    n = num1;
//    o = num2;
//    p = num3;
//    q = num4;
    r = num5;
    s = num6;
    t = num7;
    n = o = p = q = 0;
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
    }
        }
        
});
}

function redrawNoDis(){
    var mods = document.getElementById('graph').childNodes;
    
    q = 0;
    
    zz = 28; //28 actually
    
    xx = 183;//183 actually
    
    
    $(mods).each(function(i){
        var started = d3.select(this).datum().started_out;
        var displine = d3.select(this).datum().disipline_bucket;
            if(displine == "No discipline" || displine == "No discipline/Expired before sentencing"){
                switch(started){
                    case "FELONY":
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
                    case "GROSS MISDEMEANOR":
                        $(this).attr("x",  function(d){
                      row = (zz%heightSquares);
            if ($(window).width() < 480 || $(window).height() < 480) {
                return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
            }     

            return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

    //          group n squares for column
    //          col = Math.floor(k/heightSquares);
    //          return (col*squareSize) + (col*gap);
            });
                        $(this).attr("y", function(d){

            col = Math.floor(zz/heightSquares);
              return (col*squareSize) + (col*gap);

          });
                        $(this).clone().appendTo('#graph4b');
                        zz++;
                        break;
                    default:
                        $(this).attr("x",  function(d){
                      row = (xx%heightSquares);
            if ($(window).width() < 480 || $(window).height() < 480) {
                return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
            }     

            return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

    //          group n squares for column
    //          col = Math.floor(k/heightSquares);
    //          return (col*squareSize) + (col*gap);
            });
                        $(this).attr("y", function(d){

            col = Math.floor(xx/heightSquares);
              return (col*squareSize) + (col*gap);

          });
                        $(this).clone().appendTo('#graph4b');
                        xx++;
                        break;                        
                    }
            }
            else    {
                
            }

    });   
    
    $('#noDis rect').fadeTo( 500, 0.0 );
    
    $("#noDis rect.fel").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });
    
    $("#noDis rect.mis").each(function(i){
        $(this).delay(xx).fadeTo( 500, 1.0 );
        xx++;
    });
    
    $("#noDis rect.gro").each(function(i){
        $(this).delay(zz).fadeTo( 500, 1.0 );
        zz++;
    });
    
    
}

function redrawInitials() {
        var mods = document.getElementById('graph').childNodes;   
    
    felNum = 28;
    groNum = 155;
    misNum = 310;
    
    k = l = m = 0;
    
//    $(mods).fadeTo( 500, 0.0 );
    
    $(mods).each(function(i){
    var stat = d3.select(this).datum().started_out;
    var final = d3.select(this).datum().disipline_bucket;
    if (final == "No discipline" || final == "No discipline/Expired before sentencing"){
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
                        $(this).attr('fill','#c1262d');
                        $(this).removeClass('gro');
                        $(this).removeClass('mis');
                        $(this).clone().appendTo('#graph2');  
                       $(this).delay(k*3).fadeIn(100);
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
                        $(this).attr('fill','#f7931e');
                        $(this).clone().appendTo('#graph3');  
                       $(this).delay(l*3).fadeIn(100);
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
                        $(this).attr('fill','#ffd193');
                        $(this).clone().appendTo('#graph4');  
                       $(this).delay(m*3).fadeIn(100);
                        m++;
        } 
    }
        else{
                           switch(stat){
                    case "FELONY":
                        $(this).attr("x",  function(d){
                      row = (felNum%heightSquares);
            if ($(window).width() < 480 || $(window).height() < 480) {
                return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
            }     

            return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

    //          group n squares for column
    //          col = Math.floor(k/heightSquares);
    //          return (col*squareSize) + (col*gap);
            });
                        $(this).attr("y", function(d){

            col = Math.floor(felNum/heightSquares);
              return (col*squareSize) + (col*gap);

          });
                        $(this).addClass('fel');
                        $(this).addClass('grayFill');
                        $(this).removeClass('gro');
                        $(this).removeClass('mis');
                        $(this).clone().appendTo('#graph2');   
                        $(this).delay(felNum*3).fadeIn(100);
                        felNum++;
                        break;
                    case "GROSS MISDEMEANOR":
                        $(this).attr("x",  function(d){
                      row = (groNum%heightSquares);
            if ($(window).width() < 480 || $(window).height() < 480) {
                return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
            }     

            return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

    //          group n squares for column
    //          col = Math.floor(k/heightSquares);
    //          return (col*squareSize) + (col*gap);
            });
                        $(this).attr("y", function(d){

            col = Math.floor(groNum/heightSquares);
              return (col*squareSize) + (col*gap);

          });
                        $(this).removeClass('fel');
                        $(this).removeClass('mis');
                        $(this).addClass('gro');
                        $(this).addClass('grayFill');
                        $(this).clone().appendTo('#graph3');  
                        $(this).delay(groNum*3).fadeIn(100);
                        groNum++;
                        break;
                    default:
                        $(this).attr("x",  function(d){
                      row = (misNum%heightSquares);
            if ($(window).width() < 480 || $(window).height() < 480) {
                return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
            }     

            return (((row*squareSize) + (row*gap)) + (heightSquares*squareSize)) - deskX

    //          group n squares for column
    //          col = Math.floor(k/heightSquares);
    //          return (col*squareSize) + (col*gap);
            });
                        $(this).attr("y", function(d){

            col = Math.floor(misNum/heightSquares);
              return (col*squareSize) + (col*gap);

          });
                        $(this).removeClass('fel');
                        $(this).removeClass('gro');
                        $(this).addClass('mis');
                        $(this).addClass('grayFill');
                        $(this).clone().appendTo('#graph4');   
                        $(this).delay(misNum*3).fadeIn(100);
                        misNum++;
        } 

        }

    });
    
    
//    $('#step2 rect').fadeTo( 500, 0.0 );
//    
    $("#mis1 rect").css('opacity','0.0');
    
    $("#mis1 rect").not(".grayFill").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });
    
    $("#gro1 rect").not(".grayFill").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });
    
    $("#fel1 rect").not(".grayFill").each(function(i){
        $(this).delay(i).fadeTo( 500, 1.0 );
    });
    
    $("#fel1 rect.grayFill").each(function(i){
        $(this).delay(felNum).fadeTo( 500, 0.2 );
        felNum++;
    });    
    
    $("#gro1 rect.grayFill").each(function(i){
        $(this).delay(groNum).fadeTo( 500, 0.2 );
        groNum++;
    });    
    $("#mis1 rect.grayFill").each(function(i){
        $(this).delay(misNum).fadeTo( 500, 0.2 );
        misNum++;
    });        


    

}