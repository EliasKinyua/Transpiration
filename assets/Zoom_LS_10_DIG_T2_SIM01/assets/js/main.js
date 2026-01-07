var fullslots=0;	
var result_text=['','As air temperatures increase, the rate of transpiration increases to a maximum, after which the rate remains constant.','As the light intensity increases, the rate of transpiration increases.','As the humidity increases, the rate of transpiration decreases.','As the wind speed increases, the rate of transpiration increases. Water evaporates, increasing the rate of transpiration.'];
var drag_top_pos = ['','185','185','190','180'];
var drag_left_pos = ['','48','410','165','288'];
var temp_value=10;
var step11;
var process1,process2,process3,process4,process5,process6,process66,process666;
var process11,process22,process111,process222;
var clips_interval='';
var steps1,steps2,steps3,steps4,steps5,steps6;
var light_step,light_step1,light_step2;
var drag_ids;
var fan_set1,fan_set2,fan_set3;

var dum_sec,dum_min,dum_hour;

$(document).ready(function(){
	$('#start_img').mouseenter(function(){$('#start_img').attr('src','assets/images/start_over.png');});
	$('#start_img').mouseleave(function(){$('#start_img').attr('src','assets/images/start.png');});
	$('#reset_img').mouseenter(function(){$('#reset_img').attr('src','assets/images/reset_over.png');});
	$('#reset_img').mouseleave(function(){$('#reset_img').attr('src','assets/images/reset.png');});
	$('#help_img').mouseenter(function(){$('#help_img').attr('src','assets/images/help_over.png');});
	$('#help_img').mouseleave(function(){$('#help_img').attr('src','assets/images/help.png');});
	$('#ins_img').mouseenter(function(){$('#ins_img').attr('src','assets/images/ins_over.png');});
	$('#ins_img').mouseleave(function(){$('#ins_img').attr('src','assets/images/ins.png');});

$('#help').click(function(){$("#dummy_help").fadeIn({display:'block'},500);});
$(".help_close").hover(function(){$(this).attr("src","assets/images/close_2.png")},function(){$(this).attr("src","assets/images/close_1.png")});

$('#instructions').click(function(){$("#dummy_ins").fadeIn({display:'block'},500);});
$(".ins_close").hover(function(){$(this).attr("src","assets/images/close_2.png")},function(){$(this).attr("src","assets/images/close_1.png")});

$(".result_close").hover(function(){$(this).attr("src","assets/images/close_2.png")},function(){$(this).attr("src","assets/images/close_1.png")});

$('.drag').click(function(){
	$('#map_hide').css('display','block');
	$('#graph_base').css('display','block');
	$('#bubble').css('left','99px');
	$('.dropactive').css('display','none');
	$('#humidity1').css('display','none');
	$('#humidity').css('opacity','0');
	$('#humidity1').css('opacity','0');
	$('#inputs').css('display','none');
	$('#thermo_meter').css('display','none');
	$('#frame_box').css('display','none');
	$('#clock_hand_sec').css('transform','rotate(0deg)');
	$('#clock_hand_min').css('transform','rotate(0deg)');
	$('#clock_hand_hour').css('transform','rotate(0deg)');
		$('#graphs').css('display','none');
		$('#clips12').css('width','212px');
		$('#clips12').css('display','none');
		$('#clips3').css('width','176px');
		$('#clips3').css('display','none');
		$('#clips4').css('width','208px');
		$('#clips4').css('display','none');
		$('#humidity').attr('src','assets/images/humiditybig_active.png');
	
	$('#main_clock_bg').attr('src','assets/images/clock2.png');
	$('#graph_tbottom').html('');
	$('#graphs').css('display','none');
	$('#thermometer_scale').css('height','0px');
	$('#temperature').html('10');
	$('#clock_hand_hour').removeClass('clock_hand_hour');
	$('#clock_hand_min').removeClass('clock_hand_min');
	$('#clock_hand_sec').removeClass('clock_hand_sec');
	$('#reset').css('display','none');
	$('#water').css('height','65px');
	$('#dropoption_3').css('left','55px');
						  
	 drag_ids=$(this).attr('id').split('drag_option')[1];
	 $('#start').css('display','block');
	 $('#start_img').attr('ides','ok'+drag_ids);
	 fullslots++;
	
		if(fullslots<1)
			{
				$('#dropoption_'+drag_ids).css('display','block');
			}
		else
			{
				for(var i=1;i<5;i++)
				{
					$('#dropoption_'+i).css('display','none');
					$('#drag_option'+i).css('display','block');
					$('#drag_option'+i).css('top',+drag_top_pos[i]);
					$('#drag_option'+i).css('left',+drag_left_pos[i]);
					$('#drag'+i+'_over').css('display','none');
					
				}
				$('#dropoption_'+drag_ids).css('display','block');
			}
	 $('#drag_option'+drag_ids).css('display','none');
	 $('#graph_tbottom').html('');
	 $('#graphs').css('display','block');
		if(drag_ids==1)
			{
				$('#graph_tbottom').html('Temperature');
				$('#graphs').attr('src','assets/images/graph1.png');
				$('#clips12').css('display','block');
				$('#drag_option1').css('opacity','1');
				$('#inputs').css('display','block');
				$('#thermo_meter').css('display','block');
				$('#frame_box').css('display','block');
			}
		else if(drag_ids==2)
			{
				$('#graph_tbottom').html('Wind speed');
				$('#graphs').attr('src','assets/images/graph4.png');
				$('#clips4').css('display','block');
				$('#drag_option2').css('opacity','1');
			}
		else if(drag_ids==3)
			{
				$('#graph_tbottom').html('Light intensity');
				$('#graphs').attr('src','assets/images/graph2.png');
				$('#clips12').css('display','block');
				$('#drag_option3').css('opacity','1');
			}
		else if(drag_ids==4)
			{
				$('#graph_tbottom').html('Humidity');
				$('#graphs').attr('src','assets/images/graph3.png');
				$('#clips3').css('display','block');
				$('#drag_option4').css('opacity','1');
			}
});

});

function help_close(){$("#dummy_help").fadeOut({display:'none'},500);}
function ins_close(){$("#dummy_ins").fadeOut({display:'none'},500);}
function result_close(){$("#dummy_result").fadeOut({display:'none'},500);}

function start_process()
{	
	$('#map_hide').css('display','none');
	for(var i=1;i<5;i++)
		{
			$('#drag_option'+i).css('opacity','0.5');		
		}
	$('#start').css('display','none');
	$('#main_clock_bg').attr('src','assets/images/clock1.png');
	var secs=0;
	var mins=0;
	var hours=0;
	$('#clock_hand_sec').css('transform-origin','52% 83%');
	$('#clock_hand_min').css('transform-origin','52% 90%');
	$('#clock_hand_hour').css('transform-origin','52% 83%');
	dum_sec=setInterval(function(){secs++;$('#clock_hand_sec').css('transform','rotate('+secs*5+'deg)');},6);
	dum_min=setInterval(function(){mins++;$('#clock_hand_min').css('transform','rotate('+mins+'deg)');},100);
	dum_hour=setInterval(function(){hours+=3;$('#clock_hand_hour').css('transform','rotate('+hours+'deg)');},3600);
	
	$('#dummy_hide').css('display','block');
	temp_value=10;
	if(fullslots<1)
			{
				$('#dropoption_'+drag_ids).css('display','block');
				$('#drag_option'+drag_ids).css('display','none');
			}
		else
			{
				for(var i=1;i<5;i++)
				{
					$('#dropoption_'+i).css('display','none');
					$('#drag_option'+i).css('display','block');
					$('#drag_option'+i).css('top',+drag_top_pos[i]);
					$('#drag_option'+i).css('left',+drag_left_pos[i]);
				}
				$('#dropoption_'+drag_ids).css('display','block');
				$('#drag_option'+drag_ids).css('display','none');
			}
	if($('#start_img').attr('ides').split('k')[1]=='1')
	{
		$('.dropactive').css('display','block');
		$('#thermometer_scale').animate({height:'35px'},18000);
		process3=setInterval(function(){
		$('#temperature').html(temp_value++);
		if($('#temperature').html()=='10')
			{
				steps2=setTimeout(function(){
					$('#bubble').animate({left:'99px'},2571);
				},1);
			}
			
		if($('#temperature').html()=='15')
			{
				steps1=setTimeout(function(){
					$('#clips12').animate({width:'0px'},12000);
					$('#water').animate({height:'54px'},12000);
					$('#bubble').animate({left:'105px'},2571);
				},1);
			}
			
		if($('#temperature').html()=='20')
			{
				steps3=setTimeout(function(){
					$('#bubble').animate({left:'125px'},2571);
				},1);
			}
				
		if($('#temperature').html()=='25')
			{
				steps5=setTimeout(function(){
					$('#bubble').animate({left:'150px'},2571);
				},1);
			}
				
		if($('#temperature').html()=='30')
			{
				steps4=setTimeout(function(){
					$('#bubble').animate({left:'160px'},2571);
				},1);
			}
			
		if($('#temperature').html()=='35')
			{
				steps2=setTimeout(function(){
					$('#bubble').animate({left:'168px'},2571);
				},1);
			}
				
		if($('#temperature').html()=='40')
			{
				steps6=setTimeout(function(){
					$('#bubble').animate({left:'168px'},2571);
				},1);
			}								
		},495);
	}
	
	if($('#start_img').attr('ides').split('k')[1]=='2')
	{
		$('#dropactive_22').css('display','none');
		$('.dropactive').css('display','none');
		$('#drop2').css('display','none');
		$('#clips4').animate({width:'0px'},18000);
		$('#fan_slow').css('display','block');
		$('.callout1').fadeIn({display:'block'},1000);
		$('.callout11').fadeIn({display:'block'},1000);
		process1=setInterval(function(){$('#dropactive_22').css('display','none');$('.dropactive').css('display','none');$('#drop2').css('display','block');},48);
		process2=setInterval(function(){$('#dropactive_22').css('display','none');$('.dropactive').css('display','block');$('#drop2').css('display','none');},57);
		process6=setInterval(function(){$('#dropactive_22').css('display','block');$('.dropactive').css('display','none');$('#drop2').css('display','none');},66);
		
		fan_set1=setTimeout(function(){
			$('#fan_slow').css('display','none');
			$('.callout1').fadeOut({display:'none'},1000);
			$('.callout11').fadeOut({display:'none'},1000);
			$('#fan_medium').css('display','block');
			$('.callout2').fadeIn({display:'block'},1000);
			$('.callout22').fadeIn({display:'block'},1000);
			window.clearInterval(process1);
			window.clearInterval(process2);
			window.clearInterval(process6);
			process11=setInterval(function(){$('#dropactive_22').css('display','none');$('.dropactive').css('display','none');$('#drop2').css('display','block');},33);
			process22=setInterval(function(){$('#dropactive_22').css('display','none');$('.dropactive').css('display','block');$('#drop2').css('display','none');},42);
			process66=setInterval(function(){$('#dropactive_22').css('display','block');$('.dropactive').css('display','none');$('#drop2').css('display','none');},51);
			
			//console.log('');
		},6000);
		
		fan_set2=setTimeout(function(){
			$('#fan_medium').css('display','none');
			$('.callout2').fadeOut({display:'none'},1000);
			$('.callout22').fadeOut({display:'none'},1000);
			$('#fan_fast').css('display','block');
			$('.callout3').fadeIn({display:'block'},1000);
			$('.callout33').fadeIn({display:'block'},1000);
			window.clearInterval(process11);
			window.clearInterval(process22);
			window.clearInterval(process66);
			window.clearTimeout(fan_set1);
			process111=setInterval(function(){$('#dropactive_22').css('display','none');$('.dropactive').css('display','none');$('#drop2').css('display','block');},28);
			process222=setInterval(function(){$('#dropactive_22').css('display','none');$('.dropactive').css('display','block');$('#drop2').css('display','none');},37);
			process666=setInterval(function(){$('#dropactive_22').css('display','block');$('.dropactive').css('display','none');$('#drop2').css('display','none');},45);
		},12000);
			
			light_step=setTimeout(function(){
				$('#bubble').animate({left:'112px'},8000);
				$('#water').animate({height:'62px'},8000);
				light_step1=setTimeout(function(){
					$('#bubble').animate({left:'136px'},6000);
					$('#water').animate({height:'58px'},6000);
					light_step2=setTimeout(function(){
						$('#bubble').animate({left:'168px'},4000);
						$('#water').animate({height:'54px'},4000);
					},5500);	
				},1500);
			},500);	
	}
	
	if($('#start_img').attr('ides').split('k')[1]=='3')
		{
			$('.dropactive').css('display','block');
			$('#clips12').animate({width:'0px'},18000);
			$('#dropoption_3').animate({left:'-25px'},18000);
			light_step=setTimeout(function(){
				$('#bubble').animate({left:'112px'},8000);
				$('#water').animate({height:'62px'},8000);
				light_step1=setTimeout(function(){
					$('#bubble').animate({left:'136px'},6000);
					$('#water').animate({height:'58px'},6000);
					light_step2=setTimeout(function(){
						$('#bubble').animate({left:'168px'},4000);
						$('#water').animate({height:'54px'},4000);
					},5500);	
				},1500);
			},500);	
		}
		
	if($('#start_img').attr('ides').split('k')[1]=='4')
		{
			$('#clips3').animate({width:'0px'},18000);
			$('.dropactive').css('display','block');
			$('#humidity').animate({opacity:'1'},12000);
			process4=setInterval(function(){$('#humidity1').css('display','block');$('#humidity1').animate({opacity:'1'},9000);},9000);
			process5=setInterval(function(){},15000);
			light_step=setTimeout(function(){
				$('#bubble').animate({left:'131px'},4000);
				$('#water').animate({height:'61px'},4000);
				light_step1=setTimeout(function(){
					$('#bubble').animate({left:'155px'},6000);
					$('#water').animate({height:'57px'},6000);
					light_step2=setTimeout(function(){
						$('#bubble').animate({left:'168px'},8000);
						$('#water').animate({height:'54px'},8000);
					},5500);	
				},1500);
			},500);
		}
	step11=setTimeout(function(){
			$('#main_clock_bg').attr('src','assets/images/clock.png');
			$('.dropactive').css('display','none');
			$('#dummy_hide').css('display','none');
			for(var k=1;k<5;k++)
			{
				$('#drag_option'+k).css('opacity','1');	
			}
			$('#drop2').css('display','block');
			$('#dropactive_22').css('display','none');
			$("#dummy_result").fadeIn({display:'block'},3000);
			$('#bubble').removeClass('slow');
			$('#bubble').removeClass('quick');
			$('#bubble').removeClass('more_quick');
			$('#reset').css('display','block');
			$('#fan_fast').css('display','none');
			if($('#start_img').attr('ides').split('k')[1]=='1')
			{
				$('#result_txt').html(result_text[1]);
			}
			else if($('#start_img').attr('ides').split('k')[1]=='2')
			{
				$('#result_txt').html(result_text[4]);
			}
			else if($('#start_img').attr('ides').split('k')[1]=='3')
			{
				$('#result_txt').html(result_text[2]);
			}
			else if($('#start_img').attr('ides').split('k')[1]=='4')
			{
				$('#result_txt').html(result_text[3]);
				$('.dropactive').css('display','block');
			}
			$('#clock_hand_sec').css('transform','rotate(0deg)');
			window.clearInterval(process1);
			window.clearInterval(process2);	
			window.clearInterval(process3);
			window.clearInterval(process4);
			window.clearInterval(process5);
			window.clearInterval(process11);
			window.clearInterval(process22);
			window.clearInterval(process111);
			window.clearInterval(process222);
			window.clearInterval(process6);
			window.clearInterval(process66);
			window.clearInterval(process666);
			window.clearTimeout(steps1);
			window.clearTimeout(steps2);
			window.clearTimeout(steps3);
			window.clearTimeout(steps4);
			window.clearTimeout(steps5);
			window.clearTimeout(steps6);
			window.clearTimeout(light_step);
			window.clearTimeout(light_step1);
			window.clearTimeout(light_step2);
			window.clearTimeout(fan_set1);
			window.clearTimeout(fan_set2);
			window.clearInterval(dum_sec);
			window.clearInterval(dum_min);
			window.clearInterval(dum_hour);
			fullslots=0;
			temp_value=10;
	},18000);
}

function reset_process()
{
	for(var i=1;i<5;i++)
	{
		$('#dropoption_'+i).css('display','none');
		$('#drag_option'+i).css('display','block');
		$('#drag_option'+i).css('top',+drag_top_pos[i]);
		$('#drag_option'+i).css('left',+drag_left_pos[i]);
		$('#drag'+i+'_over').css('display','none');	
	}
	$('#main_clock_bg').attr('src','assets/images/clock2.png');
	$('#graph_tbottom').html('');
	$('#graphs').css('display','none');
	$('#thermometer_scale').css('height','0px');
	$('#temperature').html('10');
	$('#clock_hand_hour').removeClass('clock_hand_hour');
	$('#clock_hand_min').removeClass('clock_hand_min');
	$('#clock_hand_sec').removeClass('clock_hand_sec');
	$('.dropactive').css('display','none');
	$('#reset').css('display','none');
	$('#water').css('height','65px');
	$('#dropoption_3').css('left','55px');
	$('#fan_slow').css('display','none');
	$('#fan_medium').css('display','none');
	$('#fan_fast').css('display','none');
	$('#map_hide').css('display','none');
	$('#graph_base').css('display','none');
	$('#bubble').css('left','99px');
	$('#humidity1').css('display','none');
	$('#humidity').css('opacity','0');
	$('#humidity1').css('opacity','0');
	$('#inputs').css('display','none');
	$('#thermo_meter').css('display','none');
	$('#frame_box').css('display','none');
	$('#clock_hand_sec').css('transform','rotate(0deg)');
	$('#clock_hand_min').css('transform','rotate(0deg)');
	$('#clock_hand_hour').css('transform','rotate(0deg)');
}