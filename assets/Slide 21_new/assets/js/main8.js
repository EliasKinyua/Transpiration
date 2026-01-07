var height_value=0;
var answers = [];
var answers1 = [,0,2,0,0,0,3,0,0,0,0]
var wrong_ans = ([1,2,3],[1,2,3])
var wrong_ans1 = [,2,1,2,2,2,1,2,2,2,2]
var wrong_ans2 = [,3,2,3,3,3,2,3,3,3,3]
var a;
var txt_top=[66,130,193,262];
var numCorrect=0;
var zindexinc=0;
var changeHeight=0;
var i=0;
var booleanval=false;
var changeHeight1;
var counter = 21;
var score;
var questionCounter = 0; //Tracks question number
var selections = []; //Array containing user choices
var quiz = $('#quiz'); //Quiz div object
var start = $("#start");
var index=0;
var startbool = true;
var optionArr = ['a','b','c','d'];
var ctLength = 0;
var defLength = 0;
var tLength = [];
var scoreElem;
var optop = 10;
	
	$(document).ready(function()
		{		
			init();
			$("#reset1").hide();
			$('#startbtn').bind('click',hideinfo);
			$("#reset1").bind("click",reset_btn);
			$("#total_ques").show();
			$("#total_ques").html(questions.length);
			$("#ques").show();	
	
		});	

	function hideinfo()
		{
			$('#startbtn').hide();
			$("#reset1").show();
		}
	
	
	function init()
		{
			
			height_value=0;
			counter = 21;
			selections = [];	
			questionCounter = 0;
			i=0;	
			$(".heading").html(title[0].title);
			$("title").html(title[0].title);
			startbool = true;
			$('.container').remove();
			$("#quiz").css("display","block"); 
			createDiv(questionCounter)
			displayNext();		
			$("#wrong").css("display","none");
			$('#quiz').hide();
			$("#start").hide();
			changeHeight=0;
			$(".animscore").css("height","0px");
			$("#score_id").hide();
			$('#reset1').hide();
			changeHeight=0;	
			$(".score").show();
			$(".timerblock").css("display","block");
			$(".animcontainer").css("display","block");
			$(".units").css("display","block");	
								
		}

/*******************************************************************************************/
									//start button
/*******************************************************************************************/
	function hideInfo()
		{
	counter = 20;
	  $(".blackscreen").hide();
	  $("#startbutton").hide();
	  $('.choice').off().on('mousedown', checkAns).css('cursor','pointer');
	  timer();
	  $(".info").show();
		}
/*******************************************************************************************/
									//reset button
/*******************************************************************************************/
	function reset_btn()
		{	
			$("#total_ques").show();
			$("#ques").show();	
			scoreElem.hide();
			displayScore().hide();
			$(".timerblock").css("display","none");
			init();			
			timer();
		}
var createStart = true;
/****************************************************************************************/
									//Radio button
/****************************************************************************************/
	function createDiv(index) {		
		$('.container').remove();
		$('<div class=container></div>').appendTo('#quiz');	 	
		for (var i = 0; i < questions[index].choices.length; i++)
			{		
				$('<div class="choice" id=choice'+i+'><div class="para">'+questions[index].choices[i]+'</div></div>').appendTo('.container');
				
				$('<div class="choiceOption" id=choiceRound'+i+'>'+optionArr[i]+ '</div>').prependTo('#choice'+i);
				$('<div id=choiceDummy'+i+'>'+questions[index].choices[i]+ '</div>').appendTo('.container').css('display','none');


//console.log(fsdxf);
			}
/****************************************************************************************/
									//Length of textbox
/****************************************************************************************/	
		for(var i=0;i<questions.length;i++)
				{
					for(var j=0;j<questions[i].choices.length;j++)
						{
							$('#dummydiv').html(questions[i].choices[j]);
							ctLength = parseInt($('#dummydiv').css('width'));
							if(ctLength >= defLength)
								{								
									tLength[i] = ctLength;								
									defLength  = ctLength;
								}							
						}	
						defLength = 0;		
				}
				
		indexLen = tLength[index]*1.7;
		
		if(indexLen<600)
			{
				indexLen = (tLength[index]*1.7)+10;
			}
		else
			{
				indexLen = 600;
			}
		$('.choice').css('width', indexLen);
		
		$('.feedback,.feedbackwrong').remove();
		if(startbool)
			{
				$('.choice').off().on('mousedown', checkAns).off('mousedown').css('cursor','default')
			}
		else
			{
				$('.choice').off().on('mousedown', checkAns).css('cursor','pointer')
			}	
		startbool = false;
		$('#dummydiv').remove();		
  }
 /***************************************************************************************/
							//Get the value from json
 /***************************************************************************************/
	window.onload = function()
		{
			for(var i=0;i<questions.length;i++)
				{
					for(var j=0;j<questions[i].choices.length;j++)
					{
						if(questions[i].choices[j] == questions[i].correctAnswer)
							{
								answers[i] = j;
							}
					}				
				}				
		}

/***************************************************************************************/
							//setTimer for 20 seconds
 /***************************************************************************************/		
	function timer(){  
		a=setInterval(function() {
		counter--;	
		var chkLen = String(counter).length;
		if(chkLen<=1)
			{
				counter = '0'+counter;
			}	
		if (counter >= 0) 
			{
				  span = document.getElementById("count");
				  span.innerHTML = counter;
			}

		// Display 'counter' wherever you want to display it.
		if (counter == 0) 
			{	
				$('.choice').off('mousedown').css('cursor','default');
				$('.feedback').remove();
				$('#choice'+answers[questionCounter]).append(' &#160;<img class="feedback"  style="left:'+(indexLen+80)+'px;" src="assets/images/right.png" />');	
				clearInterval(a);
				var temp = window.setTimeout(function(){
					$("#right").hide();		
					counter=21;
					i++;
					displayNext();
					questionCounter++; 
					timer();
					window.clearTimeout(temp);
				}, 3000)
		if(questionCounter == questions.length)
			 { 	
					displayScore();
					$("#ques").hide();
					$("#start").show();
					scoreElem = displayScore();
					start.append(scoreElem).fadeIn();
					changeHeight=0;
					$(".animscore").css("height","0px");
					$(".score").hide();
					counter=21;
					$(".timerblock").css("display","none");
					$(".animcontainer").css("display","none");
					$(".units").css("display","none");
					$("#reset1").show();
					clearInterval(a);
			 }					
			}	
		}, 1000
		);
	}

/****************************************************************************************/
								//next question
/****************************************************************************************/
function displayNext()
	{
		 quiz.clearQueue().fadeOut(function()
		 {
			 $('#question').remove();
				 
			 if(questionCounter<questions.length)
				 {
					 var nextQuestion=createQuestionElement(questionCounter);
					 quiz.append(nextQuestion).fadeIn();
					 if (!(isNaN(selections[questionCounter]))) 
						 {
							$('input[value='+selections[questionCounter]+']').prop('checked', true);
						 }						 
				 }
			 if(questionCounter == questions.length)
				 {		
					$("#ques").hide();
					scoreElem = displayScore();
					start.append(scoreElem).fadeIn();
					changeHeight=0;
					$(".animscore").css("height","0px");
					$(".score").hide();
					counter=21;
					$(".timerblock").css("display","none");
					$(".animcontainer").css("display","none");
					$(".units").css("display","none");
					$("#reset1").show();
					clearInterval(a);					
				 }
				 var tempset = setTimeout(function()
					{
						var maxH = $('#question').find('p').height();
						
						$('#quiz').css('height', maxH+36);
						$('.container').css('top', maxH+60);					
						for(var i=0;i<3;i++)
							{
								
								if(ms_ie)
								{
									var disH = $('#choice'+i).height()-40;
									var disT = $('#choice'+i).position().top+60;								
									$('#choice'+(i+1)).css('top',disH+disT+'px');								
								}
								if(navigator.userAgent.indexOf("Safari") != -1)
								{
									var disH = $('#choice'+i).height()-40;
									var disT = $('#choice'+i).position().top+60;								
									$('#choice'+(i+1)).css('top',disH+disT+'px');
								}
								else
								{								
									var disH = $('#choice'+i).height()+20;
									var disT = parseInt($('#choice'+i).css('top'));								
									$('#choice'+(i+1)).css('top',disH+disT);
								}
							}
						
						for(var i=0;i<4;i++)
							{
								if($('#choice'+i).height() > 50)
									{
										var fixtop = ($('#choice'+i).height()-50)-5;
										$('#choiceRound'+i).css('top',fixtop/2.2);
										
									}												
							}
						window.clearTimeout(tempset);
					},200)			 
		});
		
	}
	
/****************************************************************************************/
								//Check Answers
/****************************************************************************************/
var regex = /"/g;
	function checkAns()
		{		
			var selid = parseInt($(this).attr('id').match(/\d/g));				
			selections[questionCounter] = $('#choiceDummy'+selid).html();			
			clearInterval(a);
			counter=21;		
			var score = $('<p>',{id: 'question'});
			var splitstrG = String(selections[i]);
			var newstrG = splitstrG.replace(regex, "'");
			selections[i] = newstrG;	
			if (selections[i]==questions[i].correctAnswer) 
				{	
					$(".animscore").stop();
					booleanval=false;
					if(!booleanval)
					{	
					height_value=392/questions.length;
					changeHeight=changeHeight+height_value;
					$(".animscore").animate({height:changeHeight+"px"},1500);
					}
					//var wrongIDs = parseInt($(this).attr('src').match(/\d+/g));
					$('.questionArea').find('.feedback').remove();
					$('#choice'+answers[questionCounter]).append('<img class="feedback" style="left:'+(indexLen+80)+'px;top:10px;" src="assets/images/right.png" />');
					$('#choiceRound'+answers[questionCounter]).css('border','4px solid #36bf2b');				
					numCorrect++;
					questionCounter++; 
					
					var temp = window.setTimeout(function(){
					clearInterval(a);
					
					counter=21;				
					timer();
					displayNext();
					window.clearTimeout(temp)
					},2000)				
				}
			else
				{
					booleanval=true;
					changeHeight=changeHeight;
					$(".animscore").stop();
					var wrongID = parseInt($(this).attr('id').match(/\d+/g));
					$('.questionArea').find('.feedback').remove();	
					$('#choice'+wrongID).append('<img class="feedbackwrong" style="left:'+(indexLen+80)+'px;" src="assets/images/wrong.png" />');
					$('#choiceRound'+wrongID).css('border','4px solid #ff0000');				
					var tempNew = window.setTimeout(function(){
						clearInterval(a);
						counter=21;				
						$('#choice'+answers[questionCounter]).append('<img class="feedback" style="left:'+(indexLen+80)+'px;" src="assets/images/right.png" />');
						
						questionCounter++;
						window.clearTimeout(tempNew)
					},2000)
					
					var temp = window.setTimeout(function(){
					clearInterval(a);
					counter=21;
					timer();
					displayNext();
					window.clearTimeout(temp)
					},4000)
				}
			
				i++;  
				  
			if(i==questions.length)
				{
					displayScore();
				}
			$('.radio_button').attr('disabled', true);	
			$('.choice').off('mousedown').css('cursor','default');			
		}	
	
	var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if((old_ie > -1) || (new_ie > -1)) 
		{
			ms_ie = true;
		}
	
/****************************************************************************************/
								//create question & options div in quiz 
/****************************************************************************************/
	function createQuestionElement(index)
		{			
			var qElement = $('<div>', {id: 'question'});
			$("#quiz").append(qElement);
			var question = $('<p style="position:absolute;left:73px;width:650px;">').append(questions[index].question);
			qElement.append(question);
			var div_button=createDiv(index);
			qElement.append(div_button);			
			return qElement;
		}
/****************************************************************************************/
								//Display Score 
/***************************************************************************************/
	function displayScore()
		{			
			var numCorrect=0;
			score = $('<p  style="width:338px;left:64px;position: absolute;top:44px;color:block;">',{id: 'question'});
			for (var i = 0; i < selections.length; i++) {		
			  if (selections[i] == questions[i].correctAnswer) {
				numCorrect++;
			  }
			}		
			score.append('You got ' + numCorrect +' &#160;&#160;correct answers out of &#160;&#160;'+questions.length );
			return score; 
		}
