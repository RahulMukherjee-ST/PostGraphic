//var parseDate = d3.time.format("%d-%b-%y").parse;

var width,
    height,
    widthSquares = 30,
    heightSquares = 40,
    squareSize = 6,
    squareValue = 0,
    gap = 1;
    var mobileX = 33;
    var deskX = 33;

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
      height = (squareSize*widthSquares) + widthSquares*gap + 25;
  width = (squareSize*heightSquares) + heightSquares*gap + 25;

    var waffle = d3.select('#step1')
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
        if ($(window).width() < 480 || $(window).height() < 480) {
            return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + mobileX )
        }     
          
//        row = i%heightSquares;
        return ((heightSquares*squareSize) - ((row*squareSize) + (row*gap)) + deskX )

          //group n squares for column
//          col = Math.floor(i/heightSquares);
//          return (col*squareSize) + (col*gap);
        })
      .attr("y", function(d, i){
          
        col = Math.floor(i/heightSquares);
          return (col*squareSize) + (col*gap);
          
      });
        var mods = document.getElementById('graph').childNodes;
    var k = 0;
    var l = 0;
    var m = 0;
    
    var n = 0;
    var o = 0;
    var p = 0;
    
    var q = 0;
    var r = 0;
    var s = 0;


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
                    $(this).clone().appendTo('#graph2');
                    $(this).prependTo('#graph');
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
                    $(this).clone().appendTo('#graph4');
                    $(this).appendTo('#graph');
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
                    $(this).prependTo('#graph');
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
                    $(this).clone().appendTo('#graph4a');
                    $(this).appendTo('#graph');
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
                    $(this).prependTo('#graph');
                    $('#graph4b > rect').css('fill','orange');
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
    countUp(k,'#felCnt');
    countUp(l,'#groCnt');
    countUp(m,'#misCnt');
    countUp(n,'#fel2Cnt');
    countUp(o,'#gro2Cnt');
    countUp(p,'#mis2Cnt');
    countUp(r,'#revCnt');
    countUp(s,'#susCnt');
    countUp(q,'#disCnt');
});

function countUp(counthere,id) {
$(id).each(function() {
  var $this = $(this),
      countTo = counthere;
  
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